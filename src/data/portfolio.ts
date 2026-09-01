export const profile = {
  name: "Mishan Kumar Shrestha",
  firstName: "Mishan Kumar",
  lastName: "Shrestha",
  role: "Full Stack Developer",
  tagline:
    "MSc Computer Science · Building production systems for real businesses",
  stack: ["Next.js", "React", "Electron", "Supabase", "Laravel"],
  email: "mishanshrestha18@gmail.com",
  linkedin: "https://linkedin.com/in/mishanshrestha18",
  github: "https://github.com/mishanshrestha18",
  handle: "mishanshrestha18",
  availability: "Open to opportunities",
  workRights: "UK Graduate Route until May 2028 — no sponsorship required to start",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
] as const;

export const stats = [
  { value: "3", label: "Live Clients", accent: true },
  { value: "3+", label: "Years Exp", accent: false },
  { value: "MSc", label: "Degree", accent: true },
  { value: "1.3k+", label: "Commits '26", accent: false },
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
      { name: "TypeScript", highlight: true },
      { name: "JavaScript" },
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
      { name: "Electron", highlight: true },
      { name: "Laravel" },
      { name: "Node.js" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "database",
    skills: [
      { name: "Supabase", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Stripe", highlight: true },
      { name: "REST APIs" },
      { name: "Auth & RLS" },
      { name: "MySQL" },
    ],
  },
  {
    title: "Tools & Practice",
    icon: "wrench",
    skills: [
      { name: "Git/GitHub" },
      { name: "Docker" },
      { name: "Netlify" },
      { name: "Railway" },
      { name: "Sentry" },
      { name: "Figma" },
    ],
  },
];

export const strengths = [
  { icon: "gauge", title: "Ships Alone", detail: "Sole dev, three clients" },
  { icon: "pen", title: "Clear Comm", detail: "Non-technical owners" },
  { icon: "home", title: "Self-Directed", detail: "Remote & autonomous" },
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  badge: { label: string; tone: "accent" | "stone" };
  image?: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  tags: { name: string; highlight?: boolean }[];
  links: { label: string; href: string; kind: "primary" | "source" }[];
  reversed: boolean;
};

export const projects: Project[] = [
  {
    slug: "southport-fancy-costumes",
    title: "Southport Fancy Costumes",
    category: "E-commerce · EPOS · Desktop",
    badge: { label: "Client Work", tone: "stone" },
    image: "/projects/southport-fancy-costumes.jpg",
    imageAlt:
      "Southport Fancy Costumes storefront hero with full category navigation and next-day delivery countdown",
    summary:
      "A fancy costume retailer's complete commerce system. The shop sells over the counter and online from one set of stock, so the till and the website read the same data. Five packages in one pnpm workspace, built as sole developer.",
    highlights: [
      "Electron EPOS till running daily on the shop counter, talking to the API over the shop LAN with auto-update via electron-updater",
      "A second Electron application for bringing stock in from supplier spreadsheets",
      "Dependency-free Node HTTP API on Railway — PostgreSQL, JWT auth with bcrypt, Stripe payments and Sharp image processing",
      "Barcode & QR scanning (ZXing) at the counter; a till refund needs manager authorisation and records who approved it",
      "Containerised with Docker, process-managed with PM2, storefront deployed on Netlify",
    ],
    tags: [
      { name: "Electron", highlight: true },
      { name: "React" },
      { name: "Node.js", highlight: true },
      { name: "PostgreSQL" },
      { name: "Stripe" },
      { name: "Docker" },
    ],
    links: [
      {
        label: "Live Storefront",
        href: "https://www.southportfancycostumes.co.uk",
        kind: "primary",
      },
    ],
    reversed: false,
  },
  {
    slug: "joarr-hot-food",
    title: "Joarr Hot Food",
    category: "Full Stack · Payments · Auth",
    badge: { label: "Client Work", tone: "stone" },
    image: "/projects/joarr-hot-food.jpg",
    imageAlt:
      "Joarr Hot Food Emporium homepage with live delivery estimate and menu ordering",
    summary:
      "An online ordering platform for a Turkish restaurant, covering the full order lifecycle, staff administration and customer accounts — with three separate payment providers integrated and reconciled.",
    highlights: [
      "Integrated Stripe (Checkout Sessions, Payment Intents, signed webhooks), CardNet and Atoa open banking, including a server-side refund flow",
      "Phone OTP authentication, multi-provider auth detection and staff password reset across 24 Supabase Edge Functions in Deno",
      "Role-based staff account management with automated order-lifecycle emails triggered from database state changes",
      "Brand identity in Figma including a vectorised cezve SVG logo, integrated directly into the codebase",
    ],
    tags: [
      { name: "React", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "Stripe", highlight: true },
      { name: "Deno" },
      { name: "TypeScript" },
    ],
    links: [],
    reversed: true,
  },
  {
    slug: "jokellys",
    title: "Jokelly's",
    category: "Full Stack · Access Control · Payments",
    badge: { label: "Client Work", tone: "stone" },
    image: "/projects/jokellys.jpg",
    imageAlt:
      "Jokelly's Southport storefront with live rider status and 24/7 delivery",
    summary:
      "Late-night convenience delivery for Southport. One Next.js application serves three separate areas — the customer storefront, the operations dashboard and the rider console — split by subdomain and sharing one Supabase backend.",
    highlights: [
      "Middleware maps host to area and carries the Supabase auth cookies across the rewrite, which a plain rewrite drops and which logs staff out",
      "Four roles across customer, staff, admin and driver, with a database trigger blocking self-granted roles",
      "Found and closed a data exposure: the riders table was readable by anyone holding the public key, putting rider names and last-seen times in reach",
      "Atomic stock reservation at checkout, with unpaid orders unwound after thirty minutes",
      "Age-restricted baskets pass a verification gate before checkout; unit tests cover the order, payment and age-gate paths",
    ],
    tags: [
      { name: "Next.js", highlight: true },
      { name: "React", highlight: true },
      { name: "Supabase" },
      { name: "Stripe" },
      { name: "PostgreSQL" },
    ],
    links: [],
    reversed: false,
  },
  {
    slug: "cargo-pulse",
    title: "CargoPulse",
    category: "Full Stack Application",
    badge: { label: "Personal Project", tone: "accent" },
    image: "/projects/cargo-pulse.png",
    imageAlt:
      "CargoPulse logistics dashboard showing fleet status and inventory charts",
    summary:
      "A logistics and fleet management platform tracking shipments across road and air freight — multi-stop routing, fleet records, warehouse inventory, maintenance scheduling and operational analytics.",
    highlights: [
      "Algorithmic route optimisation via the OSRM Trip API with real-time vehicle movement simulation using Turf.js",
      "PostgreSQL schema across 13 tables with Row Level Security enforced at the database, not just the UI",
      "Interactive Leaflet map views, Recharts dashboards and PDF report export via jsPDF",
    ],
    tags: [
      { name: "Next.js", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "PostgreSQL" },
      { name: "Leaflet" },
      { name: "Turf.js" },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://cargopulse-mishan.netlify.app",
        kind: "primary",
      },
      {
        label: "Source",
        href: "https://github.com/mishanshrestha18/CargoPulse",
        kind: "source",
      },
    ],
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
    role: "Freelance Full Stack Developer",
    company: "Southport, England",
    period: "Jan 2026 – Present",
    bullets: [
      "Sole developer for three Southport businesses — Southport Fancy Costumes, Joarr Hot Food and Jokelly's — delivered concurrently across retail and hospitality.",
      "Built a five-package commerce system including an Electron point-of-sale till now in daily commercial use on a shop counter.",
      "Integrated three payment providers (Stripe, CardNet, Atoa open banking) with signed webhooks and server-side refunds.",
      "Built a Next.js delivery application serving a customer storefront, an operations dashboard and a rider console from one codebase, with four-role access control enforced in the database.",
      "Owned every project end-to-end: requirements gathering with non-technical owners, technical decisions, build, testing, deployment and ongoing production support.",
    ],
  },
  {
    role: "WordPress Developer & Digital Support",
    company: "Education First Pvt. Ltd., Nepal",
    period: "2023 – Dec 2024",
    bullets: [
      "Built and maintained website and digital tools for the business, translating informal, non-technical requirements into working features.",
      "Proactively identified bugs and performance issues in the live site and resolved them without close supervision.",
      "Communicated regularly and clearly with non-technical stakeholders, managing expectations and explaining technical trade-offs in plain language.",
    ],
  },
];

export const education = {
  degree: "MSc Computer Science",
  institution: "University of Wolverhampton, England",
  period: "Jan 2025 – Jan 2026",
  focusTags: [
    { icon: "code", label: "Software Engineering" },
    { icon: "database", label: "Database Development" },
    { icon: "rocket", label: "Production-Ready" },
  ],
} as const;
