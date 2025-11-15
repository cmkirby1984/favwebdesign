# PostHog-Inspired Landing Page

A modern, responsive landing page built with Next.js 15, precisely replicating PostHog's design aesthetic and developer-friendly personality.

## Features

- **Cream Background (#FFFEF9)** with dark text (#35416B) and subtle noise texture
- **Hero Section** with 60-96px bold headlines and dual CTAs
- **Yellow Primary Button** (#F7A501) for primary actions with lift effects
- **Alternating Feature Sections** with image-left and image-right layouts
- **Customer Logo Grid** with grayscale hover effects
- **Usage-Based Pricing Cards** with transparent pricing and highlighted plan
- **Framer Motion Animations** for smooth scroll effects (200ms transitions)
- **Fully Mobile Responsive** with 1400px max-width containers
- **Developer-Focused Copy** with playful, self-aware tone
- **Code Snippets** showing API usage for technical transparency
- **Newsletter Signup** in footer with playful copy
- **Custom Design System** with PostHog-specific utilities

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling with custom PostHog utilities
- **Framer Motion** - Smooth scroll animations
- **React 18** - Latest React features
- **Inter Font** - Google Fonts typography

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
│   ├── page.tsx         # Main landing page (single-file implementation)
│   └── globals.css      # Global styles with noise texture
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind with PostHog design system
└── tsconfig.json        # TypeScript configuration
```

## Design System

### Colors

PostHog color palette with semantic naming:

```javascript
colors: {
  // Primary palette
  cream: "#FFFEF9",           // Background (also: posthog-cream)
  darkblue: "#35416B",        // Text (also: posthog-dark)
  posthog: "#F7A501",         // Primary accent (also: posthog-yellow)
}
```

Usage:
- `bg-cream` or `bg-posthog-cream`
- `text-darkblue` or `text-posthog-dark`
- `bg-posthog` or `bg-posthog-yellow`

### Typography

- **Hero**: `text-6xl md:text-7xl lg:text-8xl xl:text-9xl` (60-128px)
- **Section Headings**: `text-4xl md:text-5xl` to `text-5xl md:text-6xl`
- **Body**: `text-xl` to `text-2xl`
- **Font**: Inter (weights: 400, 500, 600, 700, 800, 900)

### Custom Utilities

#### Border Radius
```javascript
rounded-posthog: 8px      // Standard buttons, inputs
rounded-posthog-lg: 12px  // Cards, containers
```

#### Shadows (Layered System)
```javascript
shadow-posthog: 0 4px 6px rgba(0, 0, 0, 0.1)
shadow-posthog-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), ...
shadow-posthog-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), ...
```

#### Spacing
```javascript
py-24: 96px section spacing (6rem)
max-w-content: 1400px max width
```

#### Transitions
```javascript
duration-200: 200ms (all hover effects)
```

## Components & Sections

### Hero Section
- Large centered headline (60-96px responsive)
- Two-line value proposition
- Two CTAs with lift effects:
  - Primary: Yellow button with shadow-posthog-lg
  - Secondary: Dark button with hover fill
- Trust indicators below CTAs

### Customer Logos
- 2-6 column responsive grid
- Grayscale with color on hover (duration-200)
- Scale effect: `hover:scale-110`

### Feature Sections
Three alternating sections with:
- Icon placeholders with hover animations
- Code snippets in bordered boxes
- Feature lists with animated checkmarks
- Playful, developer-focused copy

### Pricing Cards
- Three-tier structure (Free, Scale, Enterprise)
- Transparent pricing ($0.00045/event)
- Highlighted middle tier with ring-4 and shadow-posthog-xl
- Playful parentheticals in feature lists

### Newsletter Footer
- Centered email signup form
- Input with focus ring effects
- "Stay in the loop" heading
- Privacy-conscious messaging
- Interactive footer links with hover states

## Key Design Patterns

### 1. Playful, Developer-Friendly Tone
- Casual copy: "Deploy to prod on Friday"
- Self-aware marketing: "(Yes, this is a shameless CTA)"
- Technical transparency with code examples
- Humor in feature descriptions

### 2. Visual Hierarchy
- 96px spacing between major sections
- Alternating white/cream backgrounds
- Layered shadows for depth
- Consistent 8-12px border radius

### 3. Interactive Elements
- 200ms hover transitions throughout
- Button lift effects: `hover:-translate-y-1`
- Checkmark scale on hover: `group-hover:scale-125`
- Logo scale and decolorize effects

### 4. Technical Transparency
Code snippets in three feature sections:
```javascript
// Analytics
posthog.capture('user_signed_up')

// Feature Flags
if (posthog.isFeatureEnabled('new-ui')) {
  // Ship it 🚀
}

// Session Replay
"I can't reproduce the bug"
— Things you'll never say again
```

## Critical Success Factors

1. **Whitespace**: Generous padding (py-24 = 96px between sections)
2. **Contrast**: High contrast for readability (dark text on cream)
3. **Personality**: Playful, self-aware copy throughout
4. **Performance**: Static generation, optimized bundle (40kB)
5. **Mobile-first**: Responsive breakpoints at 640px, 768px, 1024px, 1280px

## Example Component Structure

```jsx
// Hero Section with PostHog utilities
<section className="bg-cream px-4 py-24 max-w-content mx-auto">
  <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
    How developers build <span className="text-posthog">better products</span>
  </h1>
  <div className="flex gap-4">
    <button className="bg-posthog hover:bg-[#E89D01] rounded-posthog py-4 px-8
                       shadow-posthog-lg hover:shadow-posthog-xl transition-all
                       duration-200 transform hover:scale-105 hover:-translate-y-1">
      Get started - free forever
    </button>
    <button className="bg-darkblue text-cream rounded-posthog py-4 px-8
                       shadow-posthog hover:shadow-posthog-lg transition-all
                       duration-200 transform hover:scale-105 hover:-translate-y-1">
      Talk to a human
    </button>
  </div>
</section>
```

## Performance

- **Page Size**: 40kB (optimized)
- **First Load JS**: 140kB
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: Emoji placeholders (no image loading)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

MIT

---

Built with ☕ by developers, for developers.
