# Plan: Personal Portfolio CLI Tool

## Technical Context
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animations**: Framer Motion, Vanilla CSS (tokens)
- **CLI**: Node.js, Commander, Inquirer
- **Deployment**: Vercel, Resend (Email)
- **Data**: Local JSON (`projects.json`, `skills.json`)

## Constitution Check
- [x] **Performance First**: Next.js Image optimization, static generation, and Framer Motion for performant animations.
- [x] **Aesthetic Excellence**: CSS variables used for "Dark Void" palette and typography tokens.
- [x] **Seamless Interactivity**: Framer Motion handles `prefers-reduced-motion` and interactive triggers.
- [x] **Recruiter-Centric UX**: Prioritized above-the-fold content and clear navigation in component design.

## Strategy
We will implement a monorepo-style structure where the `web` app and `cli` tool coexist. The CLI will act as the orchestrator for local content management and deployment, while the Next.js app will provide the high-performance visual experience.

## Execution Plan

### Phase 1: Core Scaffolding & CLI
1. Initialize monorepo structure.
2. Build `portfolio init` command to scaffold the Next.js project.
3. Define JSON schemas for `projects.json` and `skills.json`.

### Phase 2: Design System & Components
1. Implement "Dark Void" design tokens in Tailwind/CSS.
2. Build core components: Hero, Navbar (Glassmorphism), Project Grid, Skills Orbit.
3. Integrate Framer Motion for scroll-triggered reveals and micro-interactions.

### Phase 3: CLI Management & Build
1. Implement `portfolio add project/skill` interactive commands.
2. Create `portfolio build` (wrapper for `next build`) and `portfolio deploy` (Vercel CLI integration).

### Phase 4: Final Polishing & Audit
1. Implement "tracked" resume download and contact form.
2. Perform Lighthouse audit and fine-tune animations.
