# Omnigent Docs

> **Built by Omnigent** — the multi-agent platform that lets vibe coders keep their flow, no matter how big the project gets.

---

## What is this project?

This is the official documentation and marketing site for **Omnigent** — built entirely inside an Omnigent session by a team of specialized AI subagents working in parallel.

The site covers the core problem every vibe coder runs into: **token maxing** — when your AI coding assistant runs out of context, forgets everything, and kills your momentum. Omnigent solves this by orchestrating multiple persistent AI sessions that each own their domain, never lose context, and run simultaneously.

---

## How this was built (the session story)

This project was created live in a single Omnigent session. Here's what happened:

1. **Session opened in Omnigent** — the orchestrating Claude session connected to the Omnigent local server at `http://127.0.0.1:6767`.

2. **Five fullstack subagents were spawned in parallel:**
   - `Frontend Engineer` — React, TypeScript, Vite, component architecture
   - `Backend Engineer` — Express, TypeScript, REST API design
   - `Database Engineer` — Schema design, migrations, query optimization
   - `DevOps Engineer` — Local dev server, deployment configs, CI/CD
   - `Code Review & QA Engineer` — Review, security, testing

3. **The Frontend Engineer** built a full Databricks-style single-page site (`index.html`, 60KB) covering the Omnigent product — hero, problem, features, tutorial, and testimonials — with animated components, scroll-spy sidebar, syntax-highlighted code blocks, and full mobile responsiveness.

4. **The DevOps Engineer** produced the local server configs (`serve.py`, `package.json`, `.gitignore`).

5. **The whole thing was committed to `main`**, pushed to GitHub, and then refactored into a proper TypeScript monorepo — frontend in React/Vite, backend in Express — by the same agent team running in parallel.

This is Omnigent doing what it does: breaking a project into pieces, handing each piece to the right specialist, and shipping — without any single agent ever hitting a token wall.

---

## Project Structure

```
omnigent-docs/
├── frontend/               # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/     # One file per page section
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── WhatIsOmnigent.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Tutorial.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTABanner.tsx
│   │   │   └── Footer.tsx
│   │   ├── styles/
│   │   │   └── globals.css
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── package.json
│
├── backend/                # Express + TypeScript REST API
│   ├── src/
│   │   ├── index.ts        # Entry point, port 4000
│   │   └── routes/
│   │       └── api.ts      # All route handlers
│   ├── tsconfig.json
│   └── package.json
│
├── README.md               # You are here
└── package.json            # Root scripts (run both services)
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### 1. Install dependencies

```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 2. Run in development mode

**Frontend** (Vite dev server with HMR, port 5173):
```bash
cd frontend
npm run dev
# → http://localhost:5173
```

**Backend** (ts-node + nodemon, port 4000):
```bash
cd backend
npm run dev
# → http://localhost:4000
```

### 3. Build for production

```bash
# Frontend
cd frontend && npm run build   # outputs to frontend/dist/

# Backend
cd backend && npm run build    # outputs to backend/dist/
cd backend && npm start        # runs compiled JS
```

---

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/features` | Omnigent feature list |
| GET | `/api/testimonials` | Vibe coder testimonials |
| GET | `/api/tutorial-steps` | Step-by-step getting started guide |
| POST | `/api/contact` | Contact form submission |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, highlight.js |
| Backend | Express, TypeScript, ts-node, nodemon |
| Styling | CSS custom properties (Databricks design system) |
| Build | Vite (frontend), tsc (backend) |

---

## Who built this?

**Omnigent** — a multi-agent orchestration platform for Claude Code, Codex, Cursor, and Pi.

Omnigent is designed for developers who think faster than a single AI context window can handle. Instead of one agent that forgets everything after 200k tokens, Omnigent gives you a team: persistent sessions per domain, parallel execution, a visual session tree, and token-aware routing that keeps each agent focused and effective.

- **Website:** http://127.0.0.1:6767 (local Omnigent server)
- **Install:** `pip install omnigent`
- **Launch:** `omnigent claude`

---

## For New Developers

If you're joining this project, here's what to know:

1. **All UI is in `frontend/src/components/`** — one file per section, no logic in `App.tsx`
2. **All API logic is in `backend/src/routes/api.ts`** — typed Express handlers, no raw `any`
3. **Design tokens live in `frontend/src/styles/globals.css`** — edit CSS vars there, not inline
4. **The backend runs on port 4000**, frontend proxies API calls to it via Vite config
5. **TypeScript is strict** — no `any`, explicit prop interfaces on every component
6. **To add a new section:** create a new component in `components/`, import it in `App.tsx`
7. **To add a new endpoint:** add a route in `backend/src/routes/api.ts`, register it in `index.ts`

---

*Generated in a live Omnigent session — 2026*
