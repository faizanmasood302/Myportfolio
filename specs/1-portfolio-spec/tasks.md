# Tasks: Personal Portfolio CLI Tool

## Phase 1: Setup
- [x] T001 Initialize monorepo structure with `packages/cli` and `packages/web` in root
- [x] T002 Configure root `package.json` with workspaces and shared scripts
- [x] T003 [P] Setup TypeScript base configuration in `tsconfig.base.json`
- [x] T004 Setup ESLint and Prettier for the entire monorepo in root

## Phase 2: Foundational
- [x] T005 [P] Define Project and Skill JSON schemas in `packages/cli/src/schemas/`
- [x] T006 Implement "Dark Void" theme tokens and CSS variables in `packages/web/styles/tokens.css`
- [x] T007 Initialize Commander.js in `packages/cli/src/index.ts`
- [x] T008 [P] Configure Tailwind CSS with "Dark Void" palette in `packages/web/tailwind.config.js`

## Phase 3: [US2] Developer Management (CLI)
**Goal**: Enable Faizan to initialize projects and add content via CLI.
**Test Criteria**: `portfolio init` creates a folder; `portfolio add project` updates `projects.json`.

- [x] T009 [US2] Implement `portfolio init` command in `packages/cli/src/commands/init.ts`
- [x] T010 [US2] Implement project scaffolding templates in `packages/cli/templates/`
- [x] T011 [P] [US2] Implement interactive `portfolio add project` prompts in `packages/cli/src/commands/add-project.ts`
- [x] T012 [P] [US2] Implement interactive `portfolio add skill` prompts in `packages/cli/src/commands/add-skill.ts`
- [x] T013 [US2] Create data utility to read/write JSON files in `packages/cli/src/utils/data.ts`

## Phase 4: [US1] Recruiter Assessment (Web Core)
**Goal**: Establish the high-impact visual shell for recruiters.
**Test Criteria**: Landing page displays name, role, and glassmorphism navbar.

- [x] T014 [US1] Setup Next.js 14 App Router in `packages/web/app/`
- [x] T015 [US1] Implement Glassmorphism Navbar with scroll-spy in `packages/web/components/Navbar.tsx`
- [x] T016 [US1] Build Hero Section with Typewriter and Role cycling in `packages/web/components/Hero.tsx`
- [x] T017 [P] [US1] Implement Animated Mesh Gradient background in `packages/web/components/MeshBackground.tsx`
- [x] T018 [P] [US1] Implement Particle Canvas with mouse repel in `packages/web/components/ParticleCanvas.tsx`

## Phase 5: [US1] Recruiter Assessment (Content)
**Goal**: Display projects and skills with rich animations.
**Test Criteria**: Scroll-triggered reveals show masonry grid and orbiting skills.

- [x] T019 [US1] Implement responsive Project Masonry grid in `packages/web/components/ProjectGrid.tsx`
- [x] T020 [P] [US1] Build Project Card with hover effects and tech chips in `packages/web/components/ProjectCard.tsx`
- [x] T021 [US1] Implement Orbiting Tech Logos with progress rings in `packages/web/components/SkillsOrbit.tsx`
- [x] T022 [US1] Add Framer Motion scroll-triggered reveal wrapper in `packages/web/components/Reveal.tsx`

## Phase 6: [US1] Recruiter Assessment (Tools)
**Goal**: Finalize recruitment conversion tools.
**Test Criteria**: Resume download works; contact form sends data (mocked/resend).

- [x] T023 [US1] Implement Contact Form with serverless integration in `packages/web/components/ContactForm.tsx`
- [x] T024 [P] [US1] Create tracked Resume Download button in `packages/web/components/ResumeButton.tsx`
- [x] T025 [US1] Integrate Resend API for email delivery in `packages/web/app/api/contact/route.ts`

## Phase 7: CLI Build & Deploy
- [x] T026 [US2] Implement `portfolio build` (Next.js build wrapper) in `packages/cli/src/commands/build.ts`
- [x] T027 [US2] Implement `portfolio deploy` (Vercel CLI wrapper) in `packages/cli/src/commands/deploy.ts`
- [x] T028 Add asset optimization (image minification) to build process in `packages/cli/src/utils/optimize.ts`

## Phase 8: Polish & Audit
- [x] T029 Implement `prefers-reduced-motion` global support in `packages/web/styles/animations.css`
- [x] T030 Perform Lighthouse CI audit and fix performance bottlenecks
- [x] T031 Finalize CLI help documentation and error handling

## Dependencies
- Phase 1 & 2 must be complete before any US phases.
- [US2] CLI (Phase 3) can be developed in parallel with [US1] Web Core (Phase 4).
- Phase 7 depends on Phase 3 and 4 completion.

## Implementation Strategy
- **MVP First**: Focus on T001-T013 (CLI basics) and T014-T016 (Hero/Nav).
- **Incremental Delivery**: Deploy the basic shell first, then add masonry grid and skills orbit.
