import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_70%)]" />
      <div className="absolute top-1/4 left-1/4 h-64 w-64 animate-[float_3s_ease-in-out_infinite] rounded-full bg-violet-500/5 blur-3xl" />
      <div
        className="absolute right-1/4 bottom-1/3 h-48 w-48 animate-[float_3s_ease-in-out_infinite] rounded-full bg-violet-500/[0.03] blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 h-36 w-36 animate-[float_3s_ease-in-out_infinite] rounded-full bg-fuchsia-500/[0.03] blur-3xl"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1.5">
          <div className="status-indicator" />
          <span className="font-display text-xs font-medium text-neutral-400">
            {profile.availability}
          </span>
        </div>

        <h1 className="font-display animate-fade-in-up stagger-1 mb-6 text-4xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          <span className="text-white">{profile.firstName}</span>
          <br />
          <span className="gradient-text">{profile.lastName}</span>
        </h1>

        <p className="font-display animate-fade-in-up stagger-2 mb-4 text-lg font-light text-neutral-400 md:text-xl">
          {profile.role}
        </p>

        <p className="animate-fade-in-up stagger-3 mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-neutral-500 md:text-base">
          MSc Computer Science · Building production-ready applications
          end-to-end ·{" "}
          <span className="text-violet-400/80">Next.js</span> ·{" "}
          <span className="text-violet-400/80">Laravel</span> ·{" "}
          <span className="text-violet-400/80">React</span> ·{" "}
          <span className="text-violet-400/80">Supabase</span>
        </p>

        <div className="animate-fade-in-up stagger-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="font-display animate-pulse-glow inline-flex items-center gap-2 rounded-lg bg-violet-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="font-display inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-all hover:border-neutral-600 hover:text-white"
          >
            Get In Touch
            <Mail size={16} />
          </a>
        </div>

        <div className="animate-fade-in-up stagger-5 mt-12 flex items-center justify-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-violet-400"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-violet-400"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-neutral-600 transition-all duration-300 hover:scale-110 hover:text-violet-400"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="animate-fade-in-up stagger-6 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-neutral-600">
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
