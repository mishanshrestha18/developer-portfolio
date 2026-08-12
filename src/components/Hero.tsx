import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden py-24"
    >
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_70%)]" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-[float_3s_ease-in-out_infinite] rounded-full bg-accent/5 blur-3xl" />
      <div
        className="absolute right-1/4 bottom-1/3 h-48 w-48 animate-[float_3s_ease-in-out_infinite] rounded-full bg-accent/[0.03] blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 h-36 w-36 animate-[float_3s_ease-in-out_infinite] rounded-full bg-stone/[0.03] blur-3xl"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1.5">
          <div className="status-indicator" />
          <span className="font-display text-xs font-medium text-neutral-400">
            {profile.availability}
          </span>
        </div>

        <h1 className="font-display animate-fade-in-up stagger-1 mb-6 text-[2rem] leading-[1.1] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-white">{profile.firstName}</span>
          <br />
          <span className="gradient-text">{profile.lastName}</span>
        </h1>

        <p className="font-display animate-fade-in-up stagger-2 mb-4 text-base font-light text-neutral-400 sm:text-lg md:text-xl">
          {profile.role}
        </p>

        {/* Sentence and stack list are separate blocks: inline separators used to
            strand a dangling "·" at the end of a wrapped line. */}
        <p className="animate-fade-in-up stagger-3 mx-auto mb-4 max-w-xl text-sm leading-relaxed text-pretty text-neutral-500 md:max-w-2xl md:text-base">
          {profile.tagline}
        </p>

        <ul className="animate-fade-in-up stagger-3 mx-auto mb-10 flex max-w-xl flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:text-base">
          {profile.stack.map((tech, i) => (
            <li key={tech} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-neutral-700">
                  ·
                </span>
              )}
              <span className="text-accent/80">{tech}</span>
            </li>
          ))}
        </ul>

        <div className="animate-fade-in-up stagger-4 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#projects"
            className="font-display animate-pulse-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-hi"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="font-display inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-600 hover:text-white"
          >
            Get In Touch
            <Mail size={16} />
          </a>
        </div>

        <div className="animate-fade-in-up stagger-5 mt-10 flex items-center justify-center gap-2 sm:mt-12">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-accent"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-accent"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-accent"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Only on tall viewports — in landscape it collides with the CTA row. */}
      <div className="animate-fade-in-up stagger-6 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-neutral-600 [@media(min-height:720px)]:flex">
        <span className="font-display text-xs tracking-wider uppercase">
          Scroll
        </span>
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-neutral-700 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-neutral-500" />
        </div>
      </div>
    </section>
  );
}
