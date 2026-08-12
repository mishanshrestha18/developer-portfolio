# Developer Portfolio — Mishan Kumar Shrestha

Personal portfolio site built with Next.js (App Router), React 19, TypeScript and Tailwind CSS v4.

## Stack

- **Next.js 16** — App Router, server components by default
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** — theme configured in `src/app/globals.css`
- **lucide-react** — icons (GitHub/LinkedIn marks are local SVGs in `src/components/BrandIcons.tsx`)
- **next/font** — Space Grotesk (display) + DM Sans (body), self-hosted at build time

## Getting started

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Structure

```
src/
  app/
    layout.tsx      # fonts, metadata, html shell
    page.tsx        # section composition
    globals.css     # Tailwind theme + custom animations/effects
  components/       # Navbar, Hero, About, Skills, Projects, Experience, Education, Contact, Footer
  data/
    portfolio.ts    # all content: profile, skills, projects, experience, education
```

Content is data-driven — edit `src/data/portfolio.ts` to update skills, projects, roles and education without touching components.

## Notes

- The contact form is currently client-side only and simulates a send (`src/components/ContactForm.tsx`). Wire it to an API route or a form service before going live.
- Project images use `picsum.photos` placeholders; `picsum.photos` is allowlisted in `next.config.ts`. Replace with real screenshots in `public/` when available.
- Project links point at `#` placeholders in `src/data/portfolio.ts`.
