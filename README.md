# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness. This project reimagines the institution's digital presence with an editorial layout aesthetic, interactive micro-interactions (including magnetic blend-mode cursor and live marquee tickers), glassmorphic components, dual light/dark themes, and a conversion-optimized admissions funnel—all while strictly retaining the authentic brand identity, official color palette, and curriculum messaging from [tis.edu.in](https://tis.edu.in/).

## 🚀 Live Demo

- **Live URL:** [Insert Vercel / Netlify Link Here]
- **Repository:** [Insert GitHub Repo Link Here]

## 🛠️ Tech Stack

- **Framework:** React.js 19 (Vite)
- **Styling:** Tailwind CSS & Modern Custom CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons
- **Deployment:** Vercel / Netlify

## 📁 Project Structure

```text
tis-homepage-redesign/
├── public/                         # Static public assets & favicons
├── src/
│   ├── assets/                     # School visual assets & emblems
│   │   └── logo.png                # Official TIS crest logo
│   ├── components/
│   │   ├── animation/              # Ambient animation & physics drivers
│   │   │   ├── CustomCursor.jsx    # Desktop magnetic difference-blend cursor
│   │   │   └── ScrollProgress.jsx  # Top-fixed reading depth progress bar
│   │   ├── layout/                 # Global persistent chrome
│   │   │   ├── Footer.jsx          # Semantic footer with responsive navigation
│   │   │   └── Navbar.jsx          # Glassmorphic header & mobile drawer menu
│   │   ├── sections/               # Standalone modular page sections
│   │   │   ├── HeroSection.jsx     # Engaging hero with badges & floating visuals
│   │   │   ├── AboutSection.jsx    # 01 / Heritage story & community quote
│   │   │   ├── AcademicsSection.jsx# 02 / CBSE curriculum & educational pillars
│   │   │   ├── StatsSection.jsx    # 03 / Campus statistics & key metrics
│   │   │   ├── SportsSection.jsx   # 04 / Olympic athletics & live marquee ticker
│   │   │   ├── RecognitionSection.jsx# 05 / National rankings & awards
│   │   │   ├── TestimonialsSection.jsx# Campus life preview & parent reviews
│   │   │   └── AdmissionSection.jsx# 06 / Conversion enquiry card with validation
│   │   └── ui/                     # Atomic UI primitives
│   │       ├── Button.jsx          # Glassmorphic & primary action buttons
│   │       └── Reveal.jsx          # Viewport intersection animation wrapper
│   ├── data/
│   │   └── siteData.js             # Centralized site copy, stats & testimonials
│   ├── hooks/
│   │   ├── useScrollProgress.js    # Window scroll progress tracking hook
│   │   └── useTheme.js             # Theme state synchronization (dark/light)
│   ├── styles/
│   │   └── global.css              # Design tokens, variables & responsive media queries
│   ├── App.jsx                     # Top-level application component
│   └── main.jsx                    # React 19 application mounting point
├── index.html                      # Entry HTML with typography & metadata
├── package.json                    # Project scripts & package dependencies
├── README.md                       # Documentation & student submission guide
└── vite.config.js                  # Vite configuration & plugin setup
```

## ✨ Standout Features Implemented

1. **Interactive Custom Cursor & Micro-Interactions:** Custom spring-physics magnetic cursor with difference-blend mode on desktop that expands over interactive elements (`a`, `button`, cards) with accessible fallback for touch devices.
2. **Infinite Sports Marquee Scroll:** Live continuous horizontal marquee ticker showcasing all 16+ sports disciplines with smooth linear animation, CSS mask fade edges, and pause-on-hover interaction.
3. **Adaptive Light & Dark Modes:** System-aware theme switcher with persistent `localStorage` storage, dynamic glassmorphic outline buttons (translucent grey in light mode, translucent white in dark mode), and high-contrast form controls.
4. **High-Conversion Admission Enquiry Form:** Interactive enquiry card featuring real-time input handling, responsive 2-column grid layout on tablets and single-column on mobile, accessible form labels, and animated success state confirmation.
5. **Fluid Responsive Grid Architecture:** Custom-engineered layouts optimized across Mobile, Tablet, and Desktop viewports, featuring balanced 2-column editorial layouts on tablets and spacious touch-friendly footers on mobile.
6. **Scroll-Driven Reading Progress & Viewport Reveals:** Dynamic top-mounted progress indicator tracking scroll depth, paired with orchestrated viewport entrance reveals via Framer Motion.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install # or yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev # or yarn dev
   ```
   Open [http://localhost:5173](http://localhost:5173) (or [http://localhost:3000](http://localhost:3000)) in your browser.

## 🧱 Component Architecture Overview

- **`src/components/ui/`** - Atomic UI primitives and layout wrappers (`Button.jsx`, `Reveal.jsx`).
- **`src/components/sections/`** - Modular full-page sections (`HeroSection.jsx`, `AboutSection.jsx`, `AcademicsSection.jsx`, `StatsSection.jsx`, `SportsSection.jsx`, `RecognitionSection.jsx`, `TestimonialsSection.jsx`, `AdmissionSection.jsx`).
- **`src/components/animation/`** - Motion controllers and ambient animation drivers (`CustomCursor.jsx`, `ScrollProgress.jsx`).
- **`src/components/layout/`** - Global chrome and navigational scaffolding (`Navbar.jsx`, `Footer.jsx`).
- **`src/data/`** - Centralized site content, stats, sports listings, and testimonial records (`siteData.js`).
- **`src/hooks/`** - Reusable UI hooks for theme management and scroll measurement (`useTheme.js`, `useScrollProgress.js`).

## 🎨 Brand Identity Retained

- **Visual Palette:** Authentic deep forest green (`#0b5b44`), electric lime (`#d6e95b`), golden sand (`#e9bb5b`), and soft cream surfaces.
- **Institutional Legacy:** Preserved authentic school copy, accreditation milestones, mission values, contact helplines, and official school assets from [tis.edu.in](https://tis.edu.in/).

## 📝 Conclusion

This homepage redesign bridges traditional educational prestige with cutting-edge web craftsmanship, demonstrating how purposeful animations and refined responsive architecture can elevate prospective parent engagement. By maintaining strict brand fidelity while drastically enhancing mobile and tablet usability, the project delivers a high-impact, production-ready digital standard for modern school admissions.
