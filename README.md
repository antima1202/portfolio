# Antima Modak - Portfolio

Personal engineering portfolio. React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Stack

- Vite + React 19 + TypeScript (strict)
- Tailwind CSS v4 (`@theme` tokens in `src/index.css` - dark by default, light mode via toggle)
- React Router v7 (client-side, route-level code splitting via `React.lazy`)
- Framer Motion (subtle scroll/hover transitions only)
- `cmdk` for the `⌘K` command palette
- `lucide-react` for icons (GitHub/LinkedIn marks are custom SVGs - lucide dropped brand logos in v1)

## Getting started

\`\`\`bash
npm install
npm run dev       # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview     # preview the production build locally
\`\`\`

## Deploying

### Vercel (recommended - zero config)

Import the repo at vercel.com/new. `vercel.json` already has the SPA rewrite rule so client-side
routing works. Every push to `main` redeploys automatically.

### GitHub Pages

1. In repo Settings → Pages, set Source to "GitHub Actions".
2. `.github/workflows/deploy.yml` handles the rest - it builds with the correct base path
   automatically and copies `index.html` to `404.html` so client-side routes survive a hard refresh.
3. Push to `main` and the site deploys automatically.

Both targets work from the same codebase - no code changes needed to switch between them.