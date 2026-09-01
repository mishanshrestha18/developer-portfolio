"use client";

import { useState } from "react";
import { CircleAlert, CircleCheckBig, LoaderCircle, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    // Netlify Forms: the App Router page is not static HTML that Netlify can
    // parse at deploy time, so the schema lives in public/__forms.html and
    // submissions POST there as urlencoded data.
    // https://opennext.js.org/netlify/forms
    try {
      const body = new URLSearchParams(
        new FormData(form) as unknown as Record<string, string>,
      ).toString();

      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      // Never report success we cannot confirm — the fallback is a real address.
      setStatus("error");
    }
  }

  // text-base on mobile: anything under 16px makes iOS Safari zoom on focus.
  const inputClass =
    "w-full min-h-12 rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-white transition-all placeholder:text-neutral-600 focus:border-accent/50 focus:ring-1 focus:ring-accent/20 focus:outline-none sm:text-sm";
  const labelClass =
    "font-display mb-2 block text-xs font-medium tracking-wider text-neutral-400 uppercase";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Honeypot: hidden from people, tempting to bots. Netlify drops any
          submission that fills it in. */}
      <p className="hidden">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="What's this about?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          aria-live="polite"
          className="font-display flex items-center justify-center gap-2 text-sm sm:justify-start"
        >
          {status === "sent" && (
            <span className="flex items-center gap-2 text-accent">
              <CircleCheckBig size={14} className="shrink-0" />
              Message sent! I&apos;ll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="flex items-center gap-2 text-rose-400">
              <CircleAlert size={14} className="shrink-0" />
              Could not send. Please email{" "}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="font-display inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-hi disabled:opacity-70 sm:ml-auto sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <LoaderCircle size={14} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
