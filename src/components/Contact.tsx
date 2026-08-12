import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/data/portfolio";

const directLinks = [
  {
    label: "Email",
    value: profile.handle,
    href: `mailto:${profile.email}`,
    icon: "mail" as const,
    external: false,
  },
  {
    label: "LinkedIn",
    value: profile.handle,
    href: profile.linkedin,
    icon: "linkedin" as const,
    external: true,
  },
  {
    label: "GitHub",
    value: profile.handle,
    href: profile.github,
    icon: "github" as const,
    external: true,
  },
];

function DirectIcon({ icon }: { icon: "mail" | "linkedin" | "github" }) {
  if (icon === "mail") return <Mail size={16} />;
  if (icon === "linkedin") return <LinkedinIcon size={16} />;
  return <GithubIcon size={16} />;
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <SectionHeading
            eyebrow="06 — Contact"
            title="Let's Build Something"
            align="center"
          />
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-neutral-400">
            I&apos;m currently open to full stack developer roles and freelance
            projects. Let&apos;s talk about how I can contribute to your team.
          </p>
        </Reveal>

        <Reveal className="mx-auto max-w-2xl">
          <ContactForm />

          <div className="mt-16 border-t border-neutral-800/50 pt-8">
            <div className="font-display mb-6 text-center text-xs font-medium tracking-widest text-neutral-500 uppercase">
              Or reach out directly
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-4 transition-all hover:border-neutral-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/20 bg-violet-500/10 text-violet-400 transition-all group-hover:bg-violet-500/20">
                    <DirectIcon icon={link.icon} />
                  </div>
                  <div>
                    <div className="font-display text-xs text-neutral-500">
                      {link.label}
                    </div>
                    <div className="text-sm text-neutral-300 transition-colors group-hover:text-white">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
