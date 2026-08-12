import { Code2, Database, Gauge, House, Layers, PenTool, Wrench, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, strengths } from "@/data/portfolio";

const groupIcons = {
  code: Code2,
  layers: Layers,
  database: Database,
  wrench: Wrench,
} as const;

const strengthIcons = {
  gauge: Gauge,
  pen: PenTool,
  home: House,
} as const;

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="02 — Skills"
            title="Technical Arsenal"
            align="center"
          />
        </Reveal>

        <Reveal className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.icon];
            return (
              <div
                key={group.title}
                className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-5 transition-all duration-500 hover:border-neutral-700 sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-medium text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`skill-tag rounded-md border px-3 py-1.5 text-xs font-medium ${
                        skill.highlight
                          ? "border-accent/20 bg-accent/5 text-accent"
                          : "border-neutral-800 bg-neutral-800/50 text-neutral-300"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-5 transition-all duration-500 hover:border-neutral-700 sm:col-span-2 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <Zap size={18} />
              </div>
              <h3 className="font-display text-base font-medium text-white">
                Core Strengths
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {strengths.map((strength) => {
                const Icon = strengthIcons[strength.icon];
                return (
                  <div
                    key={strength.title}
                    className="flex items-start gap-3 rounded-lg border border-neutral-800/50 bg-neutral-800/30 p-3"
                  >
                    <Icon size={16} className="mt-0.5 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <div className="font-display text-sm font-medium text-white">
                        {strength.title}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {strength.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
