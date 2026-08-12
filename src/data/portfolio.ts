export const profile = {
  name: "Mishan Kumar Shrestha",
  firstName: "Mishan Kumar",
  lastName: "Shrestha",
  role: "Junior Full Stack Developer",
  email: "mishanshrestha18@gmail.com",
  linkedin: "https://linkedin.com/in/mishanshrestha18",
  github: "https://github.com/mishanshrestha18",
  handle: "mishanshrestha18",
  availability: "Open to opportunities",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
] as const;

export const stats = [
  { value: "3+", label: "Years Exp", accent: false },
  { value: "5+", label: "Stacks", accent: false },
  { value: "MSc", label: "Degree", accent: true },
  { value: "∞", label: "Curiosity", accent: true },
] as const;

export type SkillGroup = {
  title: string;
  icon: "code" | "layers" | "database" | "wrench";
  skills: { name: string; highlight?: boolean }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "PHP" },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "Node.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "database",
    skills: [
      { name: "Supabase", highlight: true },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "REST APIs" },
      { name: "Auth" },
    ],
  },
  {
    title: "Tools & Practice",
    icon: "wrench",
    skills: [
      { name: "Git/GitHub" },
      { name: "Netlify" },
      { name: "Figma" },
      { name: "AI-Assisted Dev" },
      { name: "Agile" },
    ],
  },
];

export const strengths = [
  { icon: "gauge", title: "Rapid Learning", detail: "New frameworks, fast" },
  { icon: "pen", title: "Clear Comm", detail: "Written & verbal" },
  { icon: "home", title: "Self-Directed", detail: "Remote & autonomous" },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  badge: { label: string; tone: "violet" | "fuchsia" };
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  tags: { name: string; highlight?: boolean }[];
  links: { label: string; href: string; kind: "primary" | "source" }[];
  reversed: boolean;
};

export const projects: Project[] = [
  {
    slug: "cargo-pulse",
    title: "Cargo-Pulse",
    category: "Full Stack Application",
    badge: { label: "Live Project", tone: "violet" },
    image: "https://picsum.photos/seed/cargo-pulse-logistics/800/600",
    imageAlt: "Cargo Pulse logistics platform",
    summary:
      "A full stack logistics tracking platform covering shipment management, real-time status updates, and role-based access for operators and clients.",
    highlights: [
      "Designed & implemented PostgreSQL schema and REST API layer, connected to responsive React front end",
      "Role-based access control for operators and clients with real-time status updates",
      "AI coding tools throughout development to accelerate delivery, debug & refactor",
    ],
    tags: [
      { name: "Next.js", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "PostgreSQL" },
      { name: "React" },
      { name: "REST API" },
    ],
    links: [
      { label: "View Project", href: "#", kind: "primary" },
      { label: "Source", href: "#", kind: "source" },
    ],
    reversed: false,
  },
  {
    slug: "southport-restaurant",
    title: "Southport Restaurant",
    category: "Full Stack · Branding · 3D",
    badge: { label: "Client Work", tone: "fuchsia" },
    image: "https://picsum.photos/seed/restaurant-turkish-cafe/800/600",
    imageAlt: "Southport restaurant website",
    summary:
      "Complete restaurant website built end-to-end as sole developer — from brand identity in Figma to deployed production site with interactive 3D loyalty card.",
    highlights: [
      "Interactive 3D animated emoji loyalty card with Three.js & React Three Fiber",
      "Custom hero, brand identity & vectorised cezve SVG logo designed in Figma",
      "Full project ownership: requirements, build, testing & ongoing maintenance",
    ],
    tags: [
      { name: "Three.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Figma" },
      { name: "SVG" },
      { name: "R3F" },
    ],
    links: [{ label: "View Project", href: "#", kind: "primary" }],
    reversed: true,
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Full Stack Web Developer",
    company: "Southport — Contract",
    period: "Jan 2026 – June 2026",
    bullets: [
      "Built and deployed the restaurant's website end-to-end, handling front-end UI, backend logic, and hosting/deployment as the sole developer.",
      "Developed custom hero section and core site components from scratch, working directly with the owner to turn informal, non-technical requirements into a working build.",
      "Built interactive loyalty rewards card with 3D animated emoji using Three.js and React Three Fiber.",
      "Created brand visual identity in Figma, including vectorised cezve SVG logo, integrated directly into codebase.",
      "Owned full project lifecycle independently: requirements, technical decisions, build, testing & maintenance.",
    ],
  },
  {
    role: "WordPress Developer & Digital Support",
    company: "Education First Pvt. Ltd., Nepal",
    period: "2023 – Dec 2025",
    bullets: [
      "Built and maintained website and digital tools for the business, translating informal, non-technical requirements into working features.",
      "Proactively identified bugs and performance issues in live site and resolved them without close supervision.",
      "Communicated regularly and clearly with non-technical stakeholders, managing expectations and explaining technical trade-offs in plain language.",
    ],
  },
];

export const education = {
  degree: "MSc Computer Science",
  institution: "University of Wolverhampton, England",
  period: "Jan 2025 – Dec 2026",
  focusTags: [
    { icon: "code", label: "Software Engineering" },
    { icon: "database", label: "Database Development" },
    { icon: "rocket", label: "Production-Ready" },
  ],
} as const;
