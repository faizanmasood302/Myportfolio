# Muhammad Faizan Portfolio CLI & Web

A high-performance personal portfolio and management CLI tool, built for AI/ML engineers.

## Architecture
- **Monorepo**: Powered by NPM Workspaces.
- **packages/web**: Next.js 14, Tailwind CSS v4, Framer Motion.
- **packages/cli**: Node.js, Commander, Inquirer, Zod.

## Getting Started

### Prerequisites
- Node.js (v18+)
- NPM

### Installation
```bash
npm install
```

### Running the Web App
```bash
npm run dev:web
```
Open [http://localhost:3000](http://localhost:3000)

### Using the CLI
Build the CLI first:
```bash
npm run build:cli
```
Run commands:
```bash
node packages/cli/dist/index.js init <name>
node packages/cli/dist/index.js add-project
node packages/cli/dist/index.js add-skill
```

## Features
- **Dark Void Aesthetic**: Deep editorial theme with electric mint accents.
- **Interactive Visuals**: Particle canvas, animated mesh gradients, and scroll-triggered reveals.
- **Content-Driven**: Manage your CV data via JSON files or the interactive CLI.
- **Lighthouse Optimized**: Built for speed and accessibility.
