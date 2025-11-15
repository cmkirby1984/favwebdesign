# PostHog-Inspired Landing Page

A modern, responsive landing page built with Next.js 15, mimicking PostHog's design aesthetic.

## Features

- **Cream Background (#FFFEF9)** with dark text (#35416B)
- **Hero Section** with large bold headlines and dual CTAs
- **Yellow Primary Button** (#F9BD2B) for primary actions
- **Alternating Feature Sections** with image-left and image-right layouts
- **Customer Logo Grid** with grayscale effect
- **Usage-Based Pricing Cards** with highlighted plan
- **Framer Motion Animations** for smooth scroll effects
- **Fully Mobile Responsive** with clean spacing
- **Developer-Focused Copy** with playful, technical tone

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React 18** - Latest React features

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── components/          # Reusable components (if needed)
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Design System

### Colors
- **Cream**: `#FFFEF9` - Background
- **Dark Blue**: `#35416B` - Text
- **PostHog Yellow**: `#F9BD2B` - Primary accent

### Typography
- Hero: `text-5xl` to `text-8xl`
- Subheadings: `text-4xl` to `text-6xl`
- Body: `text-xl` to `text-2xl`
- Font: Inter (Google Fonts)

### Components

#### Hero Section
- Large bold headline with yellow accent
- Dual CTA buttons (primary yellow, secondary dark)
- Benefit copy below CTAs

#### Feature Sections
- Alternating image-left/right layouts
- Icon placeholders
- Feature lists with checkmarks
- Background variations (cream/light)

#### Customer Logos
- Grayscale grid with hover effects
- 2-6 columns responsive

#### Pricing Cards
- Three-tier structure
- Highlighted middle plan
- Feature lists
- CTA buttons

## Animations

All sections use Framer Motion's `whileInView` for scroll-triggered animations:
- Fade in effects
- Slide up transitions
- Stagger animations on lists

## License

MIT
