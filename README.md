# Rahul S — Portfolio

A React + Vite portfolio, styled like a code editor / IDE. Terminal hero types through
your four role titles (Fullstack / Software / Frontend / React Developer), nav is a
tab bar, projects/skills are styled as code and JSON, and "View Resume" opens your
PDF directly.

Pure frontend — no backend/server included, deploys as a static site.

## Run locally

```bash
npm install
npm run dev
```

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel
```
Follow the prompts (link/create a project). It auto-detects Vite:
- Build command: `vite build`
- Output directory: `dist`

**Option B — Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: Vite (auto-detected). Click Deploy.

## Before you deploy

- `src/App.jsx` has a placeholder GitHub link (`https://github.com/`) — replace it
  with your real profile URL.
- Your resume PDF lives at `public/Rahul_S_FullStack_Resume.pdf`. Swap in a new file
  (keep the same name, or update the `href` in the Resume section of `App.jsx`) if
  you want to update it later.

## Stack

React 18 · Vite 5 · lucide-react (icons) · no backend, no database, no API calls.
