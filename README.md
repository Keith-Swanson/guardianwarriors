# Guardian Warriors Foundation Website

Production website for Guardian Warriors Foundation built with Astro and deployed on Cloudflare Workers.

## Stack
- Astro 6
- TypeScript 5
- Cloudflare adapter (`@astrojs/cloudflare`)

## Requirements
- **Node.js 22.12.0+** (Astro 6 will fail on Node 20)
- npm 10+

## Local development
```bash
npm install
npm run dev
```

## Quality checks
```bash
npm run check
npm run build
```

## Deployment
Build and deploy to Cloudflare Workers:
```bash
npm run build:cf
npm run deploy:cf
```

## Project layout
- `src/pages/index.astro` – single-page marketing website.
- `src/styles/global.css` – global layout/theme styles.
- `astro.config.mjs` – Astro + Cloudflare runtime/image configuration.
- `wrangler.json` – Worker deployment metadata.
