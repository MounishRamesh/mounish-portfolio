# Mounish R — Portfolio Website

A modern, responsive personal portfolio built with React, Tailwind CSS, Framer Motion, and React Icons — content auto-populated from Mounish R's resume.

## Tech Stack
- React 18 + Vite
- Tailwind CSS (dark/light theme via `class` strategy)
- Framer Motion (page/scroll animations)
- React Icons

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Project Structure

```
portfolio/
├── public/
│   └── Mounish_R_Resume.pdf      # downloadable resume
├── src/
│   ├── components/                # one component per section/UI piece
│   ├── context/ThemeContext.jsx   # dark/light theme provider
│   ├── data/resumeData.js         # all resume content, extracted once
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## Features
- Dark/light mode toggle with system preference detection + persistence
- Animated typing effect for role titles
- Scroll progress bar, back-to-top button, section-aware nav highlighting
- Animated skill bars and stat counters
- Fully responsive (mobile, tablet, desktop) and keyboard-accessible
- SEO meta tags (title, description, Open Graph)
- Working contact form (opens a pre-filled email to the site owner)

## Editing Content
All resume-derived content lives in `src/data/resumeData.js` — update that single file to change any text across the site.
