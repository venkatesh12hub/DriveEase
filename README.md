# DriveEase — Luxury Car Rental & Exotic Vehicle Fleet Platform

> An industry-standard, high-performance frontend application built with **Vite**, **React 19**, **pure JavaScript (ES6+)**, **React Router v7**, **Tailwind CSS**, **Lucide Icons**, and **Framer Motion**.

---

## 🏎️ Overview

**DriveEase** is an exotic and ultra-luxury vehicle rental platform architected with clean modularity, scalable feature segregation, and a high-end luxury automotive aesthetic (deep obsidian/dark navy palette accented with dynamic automotive orange).

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Build Tooling** | [Vite](https://vitejs.dev/) | Ultra-fast HMR, ES module bundling, optimized production builds |
| **UI Library** | [React](https://react.dev/) | Modern component-based frontend (Pure JavaScript, No TypeScript) |
| **Routing** | [React Router DOM](https://reactrouter.com/) | Centralized client-side routing, nested layouts, and route parameter parsing |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) & PostCSS | Utility-first responsive design, custom luxury theme tokens, and animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight, consistent iconography |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Fluid micro-interactions, page gestures, and card hover physics |
| **Code Quality** | [ESLint 9](https://eslint.org/) & [Prettier](https://prettier.io/) | Flat configuration linting and automated formatting |

---

## 📁 Scalable Directory Architecture

```text
driveease/
├── public/
│   ├── favicon.svg                  # Brand SVG favicon
│   ├── favicon.ico                  # Fallback favicon
│   ├── icons/                       # Static public icons
│   └── images/                      # Static brand imagery
├── src/
│   ├── app/
│   │   ├── App.jsx                  # Root application entry component
│   │   └── routes.jsx               # Centralized React Router configuration
│   ├── assets/
│   │   ├── fonts/                   # Local fonts (if required)
│   │   ├── icons/                   # Custom SVG/asset icons
│   │   └── images/                  # Bundled assets
│   ├── components/
│   │   ├── common/                  # Shared atomic UI primitives
│   │   │   ├── Button.jsx           # Luxury button with variants, links, & motion
│   │   │   ├── Container.jsx        # Constrained responsive width container
│   │   │   └── SectionHeading.jsx   # Eyebrow, headline, and subtitle typography
│   │   ├── layout/                  # Global shell layouts
│   │   │   ├── Navbar.jsx           # Glassmorphic navbar with active indicator
│   │   │   ├── Footer.jsx           # Luxury footer with VIP concierge links
│   │   │   └── Layout.jsx           # Master layout with auto scroll-to-top
│   │   └── ui/                      # Presentational UI elements
│   │       └── Badge.jsx            # Multi-variant status and category badges
│   ├── features/                    # Domain-driven feature modules
│   │   ├── cars/                    # Fleet domain
│   │   │   ├── components/
│   │   │   │   └── CarCard.jsx      # Luxury car preview card with specs & CTA
│   │   │   ├── data/
│   │   │   │   └── carCategories.js # Fleet category taxonomies
│   │   │   └── services/
│   │   │       └── carService.js    # Simulated async data layer for vehicles
│   │   └── bookings/                # Reservations domain
│   │       ├── components/
│   │       │   └── BookingSummaryCard.jsx # Price & fee calculation breakdown
│   │       └── services/
│   │           └── bookingService.js      # Rental estimate & booking simulation
│   ├── hooks/
│   │   ├── useDocumentTitle.js      # Dynamic page title management
│   │   └── useScrollPosition.js     # Window scroll offset detector
│   ├── services/
│   │   └── api.js                   # Base API client abstraction
│   ├── data/
│   │   └── carsData.js              # Mock fleet dataset (Lamborghini, Rolls-Royce, etc.)
│   ├── lib/
│   │   └── constants.js             # Global navigation links, config, & company info
│   ├── utils/
│   │   ├── cn.js                    # Dynamic class concatenation helper
│   │   └── formatters.js            # Currency & performance metric formatters
│   ├── styles/
│   │   ├── index.css                # Global stylesheet, Tailwind layers, scrollbar
│   │   └── variables.css            # CSS custom properties & theme design tokens
│   └── main.jsx                     # Application entry point with React StrictMode
├── .env.example                     # Environment variables template
├── .gitignore                       # Git exclusions (dependencies, env, builds)
├── .prettierrc                      # Prettier code formatting standards
├── eslint.config.js                 # Modern ESLint 9 flat configuration
├── index.html                       # HTML5 entry with fonts, SEO tags, & dark theme
├── jsconfig.json                    # Path alias (@/* -> src/*) IDE configuration
├── package.json                     # Dependency manifests and npm scripts
├── postcss.config.js                # PostCSS processor configuration
├── tailwind.config.js               # Tailwind custom luxury theme palette
└── vite.config.js                   # Vite bundler configuration & @ alias resolver
```

---

## 🚦 Routes & Navigation

| Route | Page | Purpose |
|---|---|---|
| `/` | `Home.jsx` | Hero banner, key fleet stats, featured vehicles, brand pillars, & reservation CTA |
| `/cars` | `Cars.jsx` | Full fleet catalogue with category filtering and interactive search |
| `/cars/:id` | `CarDetails.jsx` | Detailed supercar specifications, performance metrics, and reservation trigger |
| `/booking` | `Booking.jsx` | Reservation configurator with dynamic duration, insurance, and summary card |
| `/about` | `About.jsx` | Brand philosophy, 4 pillars of excellence, and fleet guarantees |
| `/contact` | `Contact.jsx` | Beverly Hills showroom coordinates and direct VIP concierge inquiry form |
| `*` | `NotFound.jsx` | Elegant 404 fallback page with navigation back to the fleet |

---

## 💻 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0+ (Tested on v24.20.0)
- **npm**: v9.0.0+ (Tested on v11.19.0)

### 2. Installation
Navigate to the project root and install all dependencies:
```bash
npm install
```

### 3. Environment Configuration
Create a local `.env` file based on the provided template:
```bash
cp .env.example .env
```

### 4. Running the Development Server
```bash
npm run dev
```
The server will boot locally at `http://localhost:3000`.

---

## 📜 Available NPM Scripts

- `npm run dev` — Starts Vite dev server with Hot Module Replacement (HMR)
- `npm run build` — Builds optimized production bundle to the `dist/` directory
- `npm run preview` — Locally previews the production build
- `npm run lint` — Runs ESLint across all JavaScript and JSX source files
- `npm run lint:fix` — Automatically resolves fixable ESLint errors
- `npm run format` — Formats all source files with Prettier
- `npm run format:check` — Verifies code format compliance without modifying files

---

## 🎨 Design Foundation

- **Primary Background**: Deep Obsidian (`#070A10`) & Rich Midnight Navy (`#0D131F`).
- **Elevated Surfaces**: Deep Indigo-Slate (`#131B2B` / `#1B263B`).
- **Accent**: Vibrant High-Performance Automotive Orange (`#FF5E14` / `#E64B04`).
- **Typography**: `Plus Jakarta Sans`, `Inter`, modern sans-serif stack.
- **Glassmorphism**: Backdrop blur overlays with subtle metallic hairline borders (`rgba(255,255,255,0.08)`).
