import Image from "next/image";
import { ArrowUpRight, CircleCheckBig } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({ project }: { project: Project }) {
  const { reversed } = project;

  return (
    <div className="project-card overflow-hidden rounded-xl border border-neutral-800/50 bg-neutral-900/30">
      <div className="grid md:grid-cols-2">
        <div
          className={`group relative aspect-[4/3] overflow-hidden bg-neutral-800/50 md:aspect-auto ${
            reversed ? "md:order-2" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent ${
              reversed
                ? "md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[#0a0a0a]/80"
                : "md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a0a0a]/80"
            }`}
          />
          <div
            className={`absolute top-4 inline-flex items-center gap-2 rounded-md border px-2.5 py-1 ${
              reversed ? "right-4 md:right-auto md:left-4" : "left-4"
            } ${
              project.badge.tone === "violet"
                ? "border-violet-500/30 bg-violet-500/10"
                : "border-fuchsia-500/30 bg-fuchsia-500/10"
            }`}
          >
            {project.badge.tone === "violet" && (
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            )}
            <span
              className={`font-display text-[10px] font-medium tracking-wider uppercase ${
                project.badge.tone === "violet"
                  ? "text-violet-400"
                  : "text-fuchsia-400"
              }`}
            >
              {project.badge.label}
            </span>
          </div>
        </div>

        <div
          className={`flex flex-col justify-center p-8 md:p-10 ${
            reversed ? "md:order-1" : ""
          }`}
        >
          <div className="font-display mb-2 text-xs tracking-wider text-neutral-500 uppercase">
            {project.category}
          </div>
          <h3 className="font-display mb-4 text-xl text-white md:text-2xl">
            {project.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-neutral-400">
            {project.summary}
          </p>

          <div className="mb-8 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <CircleCheckBig
                  size={16}
                  className="mt-0.5 shrink-0 text-violet-400"
                />
                <span className="text-sm text-neutral-300">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`font-display rounded border px-2.5 py-1 text-[10px] font-medium ${
                  tag.highlight
                    ? "border-violet-500/20 bg-violet-500/5 text-violet-300"
                    : "border-neutral-800 bg-neutral-800/50 text-neutral-400"
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.links.map((link) =>
              link.kind === "primary" ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
                >
                  <GithubIcon size={14} />
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="03 — Projects" title="What I've Built" />
          </div>
          <div className="md:col-span-8">
            <p className="leading-relaxed text-neutral-400">
              Personal and professional projects that demonstrate full stack
              thinking — from database design to deployed UI.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
