# Specification: Personal Portfolio CLI Tool

## Overview
A high-performance, visually stunning personal portfolio designed to showcase Muhammad Faizan's expertise as an AI/ML Engineer and Creative Technologist. The project includes a CLI tool for scaffolding, building, and deploying the portfolio, ensuring a consistent and optimized developer experience.

## Constitution Alignment
- **Performance**: MUST achieve Lighthouse ≥ 95. FCP ≤ 1.2s, LCP ≤ 2.5s. Optimized for speed and smooth animations using transform/opacity.
- **Aesthetic**: Adheres to "Dark Void" palette (deep void background, electric mint/violet pulse accents) and Syne/DM Mono/Fraunces typography.
- **UX**: Designed for "8-second impact" for recruiters. Includes micro-interactions like magnetic buttons, 3D tilt, and custom cursors, with support for `prefers-reduced-motion`.

## User Scenarios
### Scenario 1: Recruiter Assessment
A recruiter lands on the site. They immediately see Faizan's name, role (AI/ML Engineer), and a clear CTA. As they scroll, they see a smooth fade-up sequence of projects and skills. They can quickly download the resume with one click and see live demos of ML projects.

### Scenario 2: Developer Management (CLI)
Faizan uses the CLI tool to add a new project. The tool prompts for details (title, description, tech stack, links) and automatically updates `projects.json`. He then runs `portfolio build` to generate an optimized production bundle.

## Functional Requirements
- **Hero Section**: Two-column layout with animated mesh gradient background and particle canvas. Typewriter effect for name and cycling roles.
- **Project Masonry**: Responsive grid showing project cards with tech-stack chips and hover effects (translateY, glow).
- **Skills Section**: Orbiting tech logos with radial progress rings and count-up animations for skill levels.
- **Navigation**: Sticky top glassmorphism bar with scroll-spy underline pill and top progress bar.
- **CLI Functionality**:
    - `init`: Scaffold a new portfolio project with a standard directory structure.
    - `add project/skill`: Interactive prompts to update project and skill data.
    - `build`: Generate an optimized production-ready bundle with asset minification.
    - `deploy`: One-command automated deployment to supported hosting providers.
- **Recruiter Tools**: Tracked resume PDF download, serverless contact form, and site-wide analytics.

## Edge Cases & Scope Boundaries
- **Edge Cases**:
    - **Asset Failure**: Graceful fallback if heavy visual assets (particle canvas, mesh gradients) fail to load or are blocked by browser settings.
    - **CLI Input Validation**: Error handling for invalid user input during interactive project/skill addition.
    - **Network Connectivity**: Offline support or clear "failed to send" messaging for the contact form.
- **Scope Boundaries**:
    - **Max Projects**: The UI is optimized for up to 12 projects; beyond this, a "View More" or pagination strategy may be required (not in initial scope).
    - **Content Management**: All content is managed via local JSON files through the CLI; no external CMS is supported in this version.
    - **Analytics**: Limited to standard visit and interaction tracking (project clicks, resume downloads).

## Success Criteria
- **Load Time**: 95+ Lighthouse score. FCP under 1.2s.
- **User Engagement**: Recruiter can find the resume and at least one project link within 5 seconds of the initial page load.
- **Visual Integrity**: No layout shifts (CLS = 0) during animation sequences.
- **Functional Completeness**: All CLI commands (`init`, `build`, `deploy`, `add`) perform their high-level functions correctly without requiring manual configuration of internal build tools by the user.

## Key Entities
- **Project**: Title, Description, Tech Stack (Tags), Links (Live/Repo), Image/Video.
- **Skill**: Name, Level (0-100), Icon/Logo.
- **Contact**: Name, Email, Message, Timestamp.

## Assumptions
- The portfolio will be hosted on platforms supporting serverless functions for the contact form (e.g., Vercel, Netlify).
- Assets (images/videos) provided by the user are reasonably optimized, though the CLI will perform additional optimization.
- Modern browsers (Chrome, Safari, Firefox, Edge) are the primary targets; legacy support (IE11) is not required.
