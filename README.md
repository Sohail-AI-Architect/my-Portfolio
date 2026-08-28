# Sohail Nawaz — Agentic AI Developer Portfolio

**Live site:** https://potfolio-ten-smoky.vercel.app/
**GitHub:** https://github.com/Sohail-AI-Architect
**LinkedIn:** https://www.linkedin.com/in/sohail-nawaz-96986a2aa
**Email:** sohailmahum8@gmail.com

A production-ready, responsive portfolio for an Agentic AI Developer,
showcasing real deployed AI agents built on governed SKILL.md files,
deterministic policy checkers, and evaluation-tested Workers — not just
static project cards. Built with Next.js, TypeScript, Tailwind CSS, and
Framer Motion.

## Featured Work

- **E-Commerce Support Agent** — a governed support agent using a
  deterministic policy engine for refund decisions, with a live Merchant
  Governance dashboard (audit trail, HITL escalation, policy violations
  prevented).
- **Meeting Action Extractor** — a Digital FTE that extracts action items
  from meeting notes, built on a governed SKILL.md and validated against a
  5-case eval set.

See the Projects section on the live site for the full list.

## Methodology

Both featured projects follow the same build pattern: a governed
**SKILL.md** that encodes domain judgment, a **Worker** that acts on it,
and an **eval set** (or deterministic checker) that proves the behavior —
the same trio used to build production-grade AI Workers, sometimes called
"Digital FTEs." This is a deliberate choice, not incidental: judgment lives
in a reviewable file, not buried in a prompt or hardcoded in logic.

## Features

- **Dark developer aesthetic** — terminal-inspired design with neon green accents
- **Fully responsive** — optimized for 320px to 1920px+
- **Accessible** — semantic HTML, keyboard navigation, reduced motion support
- **SEO optimized** — Open Graph, Twitter cards, canonical URL, structured metadata
- **Performance** — static generation, optimized fonts, minimal JS
- **Data-driven** — edit `src/data/*.ts` to update content without touching components
- **Vercel-ready** — zero-config deployment

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React icons

## Sections

1. **Navigation** — sticky navbar with mobile hamburger menu
2. **Hero** — headline, terminal animation, tech badges, CTAs
3. **About** — bio + stat cards
4. **Expertise** — 13 AI capability cards
5. **Services** — 6 service cards with technology tags
6. **Tech Stack** — categorized technology grid
7. **Projects** — project cards + future project placeholder
8. **Process** — 5-step development workflow
9. **Why Work With Me** — 4 value proposition cards
10. **Contact CTA** — strong final call-to-action
11. **Footer** — brand, navigation, social links, copyright

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Linting

```bash
npm run lint
```

## Deployment to Vercel

1. Push your repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**
6. (Optional) Add your custom domain in Vercel settings

### Environment Variables

No environment variables are required for the base portfolio. The AI chat assistant requires a Groq API key — see `.env.example` for reference.

## Customization

### Update Content

Edit the data files in `src/data/`:

| File | Controls |
|------|----------|
| `site.ts` | Site name, hero text, about, stats, process, contact, footer |
| `projects.ts` | Project list, future project placeholder |
| `services.ts` | Service cards |
| `skills.ts` | Expertise items + tech stack categories |

### Add a New Project

1. Open `src/data/projects.ts`
2. Add a project object to the `projects` array
3. The project card appears automatically in the portfolio

### Update Social Links

Edit `social` in `src/data/site.ts`:

```ts
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "you@example.com",
  cvDownload: "/cv.pdf",
},
```

### Update Brand Name

Change `name` and `domain` in `src/data/site.ts`.

## Project Structure

```
src/
  app/
    layout.tsx        — Root layout with fonts + metadata
    page.tsx          — Home page (assembles all sections)
    globals.css       — Global styles + theme
  components/
    Navbar.tsx        — Navigation bar
    Hero.tsx          — Hero section
    Terminal.tsx      — Terminal animation card
    About.tsx         — About section with stats
    Expertise.tsx     — AI capabilities grid
    Services.tsx      — Service cards
    TechStack.tsx     — Technology categories
    Projects.tsx      — Projects + future placeholder
    Process.tsx       — Development process timeline
    WhyWorkWithMe.tsx — Value propositions
    ContactCTA.tsx    — Contact call-to-action
    Footer.tsx        — Footer
    SectionHeading.tsx — Reusable section header
    FadeIn.tsx        — Scroll-triggered animation wrapper
    SocialIcons.tsx   — GitHub & LinkedIn SVG icons
  data/
    site.ts           — Site-wide configuration
    projects.ts       — Project data
    services.ts       — Service data
    skills.ts         — Expertise + tech stack data
```

## License

Built with Next.js. Feel free to use this as a starting point for your own portfolio.
