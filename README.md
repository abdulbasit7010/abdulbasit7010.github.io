# Malik Abdul Basit — Portfolio

Personal portfolio built with **Next.js**, **Tailwind CSS v4** and **Motion**, exported as a static site and hosted on GitHub Pages.

**Live:** https://abdulbasit7010.github.io

## Features

- Dark and light mode with four switchable accent themes (saved per visitor)
- Animated aurora hero, typewriter roles and a live "agent terminal" demo
- Cursor-following spotlight cards, scroll reveal animations and an infinite skills marquee
- Responsive layout, respects `prefers-reduced-motion`
- All content in one file: [`src/data/profile.ts`](src/data/profile.ts)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deployment

Every push to `main` builds and deploys through GitHub Actions (`.github/workflows/deploy.yml`).
