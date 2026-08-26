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
              currently sole developer for three Southport businesses — shipping
              production systems end-to-end, from database schema to deployed UI.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
              That work includes an{" "}
              <span className="font-medium text-white">
                Electron point-of-sale system in daily use on a shop counter
              </span>
              , an online ordering platform integrating three separate payment
              providers, and a delivery application serving a storefront, an
              operations dashboard and a rider console from one codebase.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
              Comfortable across modern stacks — Next.js, React, Electron, Node,
              Laravel and Supabase — and used to turning informal requirements
              from non-technical owners into something that runs in production.
            </p>
            <p className="max-w-prose text-base leading-relaxed text-pretty text-neutral-400">
              Eligible to work in the UK on the Graduate Route until May 2028,
              with no sponsorship required to start.
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
