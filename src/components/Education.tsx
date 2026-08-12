import { Code2, Database, GraduationCap, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

const focusIcons = {
  code: Code2,
  database: Database,
  rocket: Rocket,
} as const;

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-start gap-8 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="05 — Education" title="Academic" />
          </div>

          <div className="md:col-span-8">
            <div className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-5 transition-all duration-500 hover:border-neutral-700 sm:p-8 md:p-10">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <GraduationCap size={22} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-medium text-balance text-white sm:text-lg">
                    {education.degree}
                  </h3>
                  <div className="font-display mt-1 text-sm text-accent">
                    {education.institution}
                  </div>
                  <div className="font-display mt-1 text-xs text-neutral-500">
                    {education.period}
                  </div>
                </div>
              </div>

              <p className="max-w-prose border-t border-neutral-800 pt-5 text-sm leading-relaxed text-pretty text-neutral-400">
                MSc Computer Science with a focus on{" "}
                <span className="text-neutral-300">
                  practical software engineering
                </span>{" "}
                and{" "}
                <span className="text-neutral-300">database development</span> —
                geared toward building production-ready applications.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-neutral-800 pt-5">
                {education.focusTags.map((tag) => {
                  const Icon = focusIcons[tag.icon];
                  return (
                    <div key={tag.label} className="flex items-center gap-2">
                      <Icon size={14} className="text-neutral-600" />
                      <span className="font-display text-xs text-neutral-500">
                        {tag.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
