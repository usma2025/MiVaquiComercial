## Why

MiVaqui currently has no public-facing web presence to acquire leads. Cattle farmers in Colombia and Latin America — operating primarily via WhatsApp — need a landing page that communicates the value proposition in their language, removes technology friction, and converts visits into free-trial signups. Without this, user growth depends entirely on word-of-mouth.

## What Changes

- Create a new Next.js 14+ App Router landing page at `app/page.tsx` as the commercial homepage for MiVaqui.
- Add 10 modular React components under `components/landing/` covering the full conversion funnel: Hero, Problem, How It Works, Features, Admin Panel, Target Audience, Comparison Table, Pricing, FAQ, and Footer.
- Configure Poppins via `next/font/google` as the global font in the root layout.
- Apply the MiVaqui brand palette (`#53B04B` primary green, `#0B4C4A` dark green, `#F5F7F4` light background, `orange-500` CTA accent) consistently across all components.
- Implement scroll-triggered animations and micro-interactions (Tailwind + CSS transitions) to maximize engagement without sacrificing performance.
- Mark voice-message functionality explicitly as "Próximamente" in the UI to set accurate user expectations.

## Capabilities

### New Capabilities

- `landing-hero`: Full-width hero section with H1 pain-point headline, subtitle, orange CTA button, and an animated WhatsApp chat mockup simulation.
- `landing-problem`: Three-card problem section highlighting forgotten dates, idle cows, and paper-based records.
- `landing-how-it-works`: Three-step visual flow (WhatsApp → AI processes → proactive alerts) with a "Próximamente" voice note badge on step 1.
- `landing-features`: Icon-grid of 6 key features using `lucide-react`.
- `landing-admin-panel`: Web-panel section with a Tailwind-built dashboard mockup showing KPIs (pregnancy rate, herd count, daily alerts).
- `landing-for-whom`: Three audience tiers (small / medium / large farm) with scaling value propositions.
- `landing-comparison-table`: Responsive comparison table: traditional methods vs. MiVaqui.
- `landing-pricing`: Three-column COP-denominated pricing cards with the mid-tier highlighted, all with 30-day free trial.
- `landing-faq`: Client-side accordion FAQ covering field connectivity, data security, and foreman usage.
- `landing-footer`: Footer with legal links, copyright, and WhatsApp support CTA.

### Modified Capabilities

## Impact

- **New files**: `app/page.tsx`, `components/landing/*.tsx` (10 components), font config in `app/layout.tsx`.
- **Dependencies**: `lucide-react` (already in most Next.js starters — confirm in `package.json`); no new runtime deps required beyond Next.js 14 + Tailwind CSS already present.
- **No breaking changes** to any existing routes or API surfaces.
- Performance: All components default to Server Components; only `PreguntasFrecuentes.tsx` (accordion) and any form-capture elements use `"use client"`.
