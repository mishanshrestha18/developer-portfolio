"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { navLinks, profile } from "@/data/portfolio";

const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "contact",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);

      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) current = id;
      }
      setActiveId(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md transition-all duration-300"
        style={{
          borderBottomColor: scrolled
            ? "rgba(38,38,38,0.5)"
            : "rgba(38,38,38,0.2)",
          backgroundColor: "rgba(10,10,10,0.8)",
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#hero" className="group flex items-center gap-2">
            <div className="font-display flex h-8 w-8 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-sm font-semibold text-violet-400 transition-all group-hover:bg-violet-500/20">
              M
            </div>
            <span className="font-display text-sm font-medium text-neutral-200 transition-colors group-hover:text-white">
              Mishan
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm text-neutral-400 transition-colors hover:text-white ${
                  activeId === link.href.slice(1) ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-display inline-flex items-center gap-2 rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-400"
            >
              Contact
              <ArrowRight size={14} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="p-2 text-neutral-400 transition-colors hover:text-white md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 bottom-0 z-[60] flex w-72 flex-col gap-6 border-l border-neutral-800 bg-neutral-900/95 p-8 backdrop-blur-xl ${
          menuOpen ? "open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          className="-mt-2 -mr-2 self-end p-2 text-neutral-400 transition-colors hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="mt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="font-display py-2 text-lg text-neutral-300 transition-colors hover:text-violet-400"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            className="font-display py-2 text-lg font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Contact
          </a>
        </div>

        <div className="mt-auto flex items-center gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            tabIndex={menuOpen ? 0 : -1}
            className="text-neutral-500 transition-colors hover:text-violet-400"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            tabIndex={menuOpen ? 0 : -1}
            className="text-neutral-500 transition-colors hover:text-violet-400"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>

      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[55] bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}
