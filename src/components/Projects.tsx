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
      {/* Two columns only from lg up — at md the text column drops to ~39
          characters per line, which is below the readable minimum. */}
      <div className="grid lg:grid-cols-2">
        <div
          className={`group relative aspect-[16/10] overflow-hidden bg-neutral-800/50 sm:aspect-[2/1] lg:aspect-auto ${
            reversed ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent ${
              reversed
                ? "lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]/80"
                : "lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0a0a0a]/80"
            }`}
          />
          <div
            className={`absolute top-4 inline-flex items-center gap-2 rounded-md border px-2.5 py-1 ${
              reversed ? "right-4 lg:right-auto lg:left-4" : "left-4"
            } ${
              project.badge.tone === "accent"
                ? "border-accent/30 bg-accent/10"
                : "border-stone/30 bg-stone/10"
            }`}
          >
            {project.badge.tone === "accent" && (
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            )}
            <span
              className={`font-display text-[10px] font-medium tracking-wider uppercase ${
                project.badge.tone === "accent"
                  ? "text-accent"
                  : "text-stone"
              }`}
            >
              {project.badge.label}
            </span>
          </div>
        </div>

        <div
          className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${
            reversed ? "lg:order-1" : ""
          }`}
        >
          <div className="font-display mb-2 text-xs tracking-wider text-neutral-500 uppercase">
            {project.category}
          </div>
          <h3 className="font-display mb-4 text-xl text-balance text-white md:text-2xl">
            {project.title}
          </h3>
          <p className="mb-6 max-w-prose text-sm leading-relaxed text-pretty text-neutral-400">
            {project.summary}
          </p>

          <div className="mb-8 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <CircleCheckBig
                  size={16}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="max-w-prose text-sm text-pretty text-neutral-300">
                  {highlight}
                </span>
              </div>
            ))}
          </div>

          <div
            className={`flex flex-wrap gap-2 ${project.links.length ? "mb-8" : ""}`}
          >
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`font-display rounded border px-2.5 py-1 text-[10px] font-medium ${
                  tag.highlight
                    ? "border-accent/20 bg-accent/5 text-accent"
                    : "border-neutral-800 bg-neutral-800/50 text-neutral-400"
                }`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <div
            className={`flex-wrap items-center gap-x-6 gap-y-2 ${
              project.links.length ? "flex" : "hidden"
            }`}
          >
            {project.links.map((link) =>
              link.kind === "primary" ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hi"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-300"
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
    <section id="projects" className="scroll-mt-16 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-8 sm:mb-16 md:grid-cols-12 md:gap-16">
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
