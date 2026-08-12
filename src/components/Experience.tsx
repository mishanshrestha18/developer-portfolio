import { ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-8 sm:mb-16 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeading
              eyebrow="04 — Experience"
              title="Where I've Worked"
            />
          </div>
          <div className="md:col-span-8">
            <p className="leading-relaxed text-neutral-400">
              Sole developer, contractor, and contributor — comfortable taking
              ownership and shipping independently.
            </p>
          </div>
        </Reveal>

        <Reveal>
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`timeline-item group relative border-l border-neutral-800 pl-5 sm:pl-8 ${
                index === experience.length - 1 ? "pb-0" : "pb-8 sm:pb-12"
              }`}
            >
              <div className="timeline-dot absolute top-1 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#0a0a0a] bg-neutral-700" />
              <div className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-5 transition-all duration-500 hover:border-neutral-700 sm:p-6 md:p-8">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-medium text-balance text-white sm:text-lg">
                      {job.role}
                    </h3>
                    <div className="font-display text-sm text-accent">
                      {job.company}
                    </div>
                  </div>
                  <span className="font-display w-fit shrink-0 rounded-full border border-neutral-800 bg-neutral-800/30 px-3 py-1 text-xs font-medium whitespace-nowrap text-neutral-500">
                    {job.period}
                  </span>
                </div>

                <div className="space-y-3">
                  {job.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3">
                      <ChevronRight
                        size={14}
                        className="mt-1 shrink-0 text-neutral-600"
                      />
                      <span className="max-w-prose text-sm text-pretty text-neutral-400">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
