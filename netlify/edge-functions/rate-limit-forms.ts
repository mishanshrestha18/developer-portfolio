import { getStore } from "@netlify/blobs";
import type { Config, Context } from "@netlify/edge-functions";

/**
 * Rate limits contact-form submissions.
 *
 * Netlify has no built-in rate limiting for edge functions, so this keeps a
 * per-IP counter in Netlify Blobs. Two windows run at once: a short one that
 * stops rapid-fire bursts, and a daily one that caps what a single source can
 * cost over a day. Free-tier Netlify Forms allows 100 submissions a month, so
 * an unthrottled endpoint can be exhausted by one script in minutes.
 */

const LIMITS = [
  { name: "burst", windowSeconds: 10 * 60, max: 3 },
  { name: "daily", windowSeconds: 24 * 60 * 60, max: 10 },
] as const;

type Counter = { count: number; windowStart: number };

function tooMany(retryAfterSeconds: number) {
  return new Response(
    "Too many messages sent from this address. Please try again later, or email mishanshrestha18@gmail.com directly.",
    {
      status: 429,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Retry-After": String(Math.max(1, Math.ceil(retryAfterSeconds))),
        "Cache-Control": "no-store",
      },
    },
  );
}

const rateLimitForms = async (req: Request, context: Context) => {
  // Only submissions are limited. GETs of the static file are harmless.
  if (req.method !== "POST") return context.next();

  const ip = context.ip || "unknown";
  const now = Date.now();

  try {
    const store = getStore("form-rate-limit");

    for (const limit of LIMITS) {
      const key = `${limit.name}:${ip}`;
      const existing = (await store.get(key, { type: "json" })) as
        | Counter
        | null;

      const windowMs = limit.windowSeconds * 1000;
      const expired = !existing || now - existing.windowStart >= windowMs;
      const counter: Counter = expired
        ? { count: 0, windowStart: now }
        : existing;

      if (counter.count >= limit.max) {
        const retryAfter = (counter.windowStart + windowMs - now) / 1000;
        return tooMany(retryAfter);
      }

      await store.setJSON(key, {
        count: counter.count + 1,
        windowStart: counter.windowStart,
      });
    }
  } catch (error) {
    // A limiter outage must not take the contact form down with it: log and
    // let the submission through rather than losing a real message.
    console.error("rate-limit-forms: falling open", error);
  }

  return context.next();
};

export default rateLimitForms;

export const config: Config = {
  path: "/__forms.html",
  onError: "bypass",
};
