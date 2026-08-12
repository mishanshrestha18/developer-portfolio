import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:py-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-sm font-semibold text-accent">
              M
            </div>
            <span className="font-display text-center text-sm text-neutral-500 sm:text-left">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="-mx-2 flex items-center gap-1">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-colors hover:text-accent"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-colors hover:text-accent"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-colors hover:text-accent"
            >
              <Mail size={16} />
            </a>
            <a
              href="#hero"
              aria-label="Back to top"
              className="inline-flex h-11 w-11 items-center justify-center text-neutral-600 transition-colors hover:text-accent"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
