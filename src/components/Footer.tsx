import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="font-display flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-sm font-semibold text-violet-400">
              M
            </div>
            <span className="font-display text-sm text-neutral-500">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-600 transition-colors hover:text-violet-400"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-600 transition-colors hover:text-violet-400"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-neutral-600 transition-colors hover:text-violet-400"
            >
              <Mail size={16} />
            </a>
            <a
              href="#hero"
              aria-label="Back to top"
              className="text-neutral-600 transition-colors hover:text-violet-400"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
