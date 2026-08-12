"use client";

import { useState } from "react";
import { CircleCheckBig, LoaderCircle, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    // No backend wired up yet — swap this for a POST to your API route / form service.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    form.reset();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 5000);
  }

  const inputClass =
    "w-full rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-sm text-white transition-all placeholder:text-neutral-600 focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 focus:outline-none";
  const labelClass =
    "font-display mb-2 block text-xs font-medium tracking-wider text-neutral-400 uppercase";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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

      <div className="flex items-center justify-between gap-4">
        <div
          aria-live="polite"
          className="font-display flex items-center gap-1 text-sm text-violet-400"
        >
          {status === "sent" && (
            <>
              <CircleCheckBig size={14} />
              Message sent! I&apos;ll get back to you soon.
            </>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="font-display ml-auto inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400 disabled:opacity-70"
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
