# Research: Personal Portfolio CLI Tool

## Decision 1: Frontend Framework
- **Decision**: Next.js (App Router) with TypeScript
- **Rationale**: Provides industry-standard performance (SSR/SSG), excellent SEO (Open Graph), and type safety. Built-in optimization for images and scripts aligns with the "Performance First" principle.
- **Alternatives considered**: Astro (great for static but slightly less flexible for complex micro-interactions), Vite (standard SPA, lacks built-in SSR for SEO).

## Decision 2: Styling
- **Decision**: Tailwind CSS with Vanilla CSS for custom animations.
- **Rationale**: Tailwind allows for rapid, consistent styling using the project's "Dark Void" palette. Vanilla CSS provides the control needed for complex `@keyframes` and `backdrop-filter` effects mentioned in the constitution.
- **Alternatives considered**: Styled-components (runtime overhead), CSS Modules (good but Tailwind is faster for prototyping).

## Decision 3: Animations
- **Decision**: Framer Motion + Intersection Observer API
- **Rationale**: Framer Motion handles staggered fade-ups and micro-interactions (magnetic buttons, tilt) with high performance and accessibility (reduced motion support). Intersection Observer ensures animations only trigger when visible.
- **Alternatives considered**: GSAP (more powerful but larger bundle size), CSS-only (limited for complex interactivity).

## Decision 4: CLI Framework
- **Decision**: Commander.js + Inquirer.js
- **Rationale**: Commander is the industry standard for building robust CLIs. Inquirer provides the interactive prompts needed for adding projects/skills.
- **Alternatives considered**: yargs (powerful but slightly more verbose for interactive flows).

## Decision 5: Deployment & Backend
- **Decision**: Vercel (Deployment) + Resend (Contact Form API)
- **Rationale**: Vercel offers zero-config deployment for Next.js and high-performance CDN. Resend is a simple, developer-friendly way to handle serverless contact forms without a full backend.
- **Alternatives considered**: Netlify, GitHub Pages (no serverless support by default).
