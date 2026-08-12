import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { stats } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid items-start gap-8 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="01 — About" title="Who I Am" />
          </div>

          <div className="space-y-6 md:col-span-8">
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-300">
              Full stack developer with an{" "}
              <span className="font-medium text-white">
                MSc in Computer Science
              </span>{" "}
              and hands-on experience shipping production web applications
              end-to-end, from database schema to deployed UI.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
              Comfortable working across modern stacks (Next.js, Laravel, React,
              Supabase) and already embedding AI tools into daily development
              workflow to move faster and write cleaner code.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
              Motivated by fast-paced, learning-driven environments where
              ownership is earned early and feedback is direct.
            </p>

            <div className="grid grid-cols-2 gap-2 border-t border-neutral-800 pt-6 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-2 text-center sm:p-3">
                  <div
                    className={`font-display mb-1 text-2xl ${
                      stat.accent ? "text-accent" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="font-display text-xs tracking-wider text-neutral-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
