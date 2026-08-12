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
    <section id="skills" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16">
          <SectionHeading
            eyebrow="02 — Skills"
            title="Technical Arsenal"
            align="center"
          />
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.icon];
            return (
              <div
                key={group.title}
                className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-6 transition-all duration-500 hover:border-neutral-700"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
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
                          ? "border-violet-500/20 bg-violet-500/5 text-violet-300"
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

          <div className="card-shine rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-6 transition-all duration-500 hover:border-neutral-700 md:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400">
                <Zap size={18} />
              </div>
              <h3 className="font-display text-base font-medium text-white">
                Core Strengths
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {strengths.map((strength) => {
                const Icon = strengthIcons[strength.icon];
                return (
                  <div
                    key={strength.title}
                    className="flex items-start gap-3 rounded-lg border border-neutral-800/50 bg-neutral-800/30 p-3"
                  >
                    <Icon
                      size={16}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />
                    <div>
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
