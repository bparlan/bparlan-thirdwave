# Thirdwave Dashboard

A high-performance, terminal-inspired personal dashboard and consulting platform built with React, Tailwind CSS, and Vite. Hosted at [bparlan.com](https://bparlan.com) via Coolify.

## Project Structure

```
src/
├── components/
│   ├── TerminalDashboard.tsx  # Main dashboard container
│   └── terminal/
│       ├── Header.tsx         # Title bar with typewriter effect
│       ├── Footer.tsx         # System status and link bar
│       ├── MainContent.tsx      # Tab content renderer
│       ├── ThemeUtils.ts      # Dynamic accent color utilities
│       └── panels/
│           └── LeftSidebar.tsx  # Navigation sidebar
├── data.ts                    # Centralized content and social links
├── types.ts                   # TypeScript interface definitions
└── index.css                 # Global styles and fonts
```

## Development

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on port 3000
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # Type-check with TypeScript
```

## Deployment

This project deploys automatically via Coolify when pushing to the `main` branch.

**Build settings in Coolify:**
- Build Command: `npm ci && npm run build`
- Output Directory: `dist/`

## Design Principles

- **Typography**: `Inter` for headers, `JetBrains Mono` for terminal content
- **Styling**: Tailwind-based responsive design with border-centric terminal aesthetic
- **Navigation**: Tab-based interface (`bio`, `active`, `consult`, `partners`, `research`, `links`)
- **Theme**: Dynamic accent colors per section with glow effects via CSS variables