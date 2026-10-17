# molodtsov.dev

Personal portfolio and business card website built with React, TypeScript, Vite and Tailwind CSS.

## Overview

This project is designed as a lightweight personal landing page with:

- multilingual UI support
- responsive card-based layout
- Vite static deployment
- Vercel-ready configuration
- CI quality checks before merge

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Vitest + Testing Library
- ESLint + Prettier
- Husky + lint-staged

## Local development

```bash
npm install
npm run dev
```

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run lint:fix
npm run typecheck
npm run test
npm run test:run
npm run check
npm run format
npm run format:check
npm run ci
```

## Quality gate

The project includes a production-style quality gate:

- ESLint for correctness and code hygiene
- TypeScript type checking
- Vitest unit tests
- Prettier formatting validation
- CI pipeline on GitHub Actions
- pre-commit checks via Husky

## Deployment to Vercel

This project is ready for Vercel deployment:

1. Import the repository into Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`
5. Production branch: `main`

This setup supports automatic deployment on push to main.

## Environment variables

Copy the example file:

```bash
cp .env.example .env
```

Current variables:

```env
VITE_SITE_URL=https://molodtsov.dev
VITE_DEFAULT_LOCALE=en
```

## Project structure

```text
src/
  components/
  data/
  test/
  App.tsx
  main.tsx
  i18n.ts
```

## Notes

This is intentionally a small static portfolio site that can later grow into a multi-page personal brand site without changing the deployment approach.
