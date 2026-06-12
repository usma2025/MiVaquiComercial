## Context

MiVaqui is a WhatsApp-first cattle management platform targeting Colombian and Latin American cattle farmers. The product currently has no public web presence; growth is 100% word-of-mouth. The landing page must act as the top-of-funnel conversion surface: explain the product, remove technology friction, and capture free-trial leads.

Key constraints:
- **User environment**: 90%+ mobile, often in low-bandwidth rural areas. Pages must load fast and be usable under direct sunlight.
- **Product state**: Text-based WhatsApp interaction is live. Voice note input is in development → must be surfaced as "Próximamente" to set expectations without misleading users.
- **Tech stack already in place**: Next.js 14 App Router, Tailwind CSS, TypeScript. No additional runtime frameworks needed.

## Goals / Non-Goals

**Goals:**
- Ship a high-conversion, mobile-first landing page with all 10 sections.
- Maintain strict Server Component defaults; only add `"use client"` where interactivity is required (FAQ accordion, any future lead-capture form).
- Achieve ≥90 Lighthouse performance score on mobile by keeping JS bundle lean and deferring non-critical animations.
- Express the brand identity (MiVaqui color palette, Poppins typeface) consistently and accessibly (WCAG AA contrast).

**Non-Goals:**
- Backend API or lead-capture form submission wiring (WhatsApp link is sufficient as the CTA for now).
- Authentication, user dashboard, or any logged-in state.
- i18n / multi-language support beyond Spanish.
- A/B testing infrastructure.

## Decisions

### 1. Component isolation: one file per section in `components/landing/`

**Decision**: Each of the 10 sections lives in its own file (`Hero.tsx`, `Problema.tsx`, etc.) assembled in `app/page.tsx`.

**Rationale**: Keeps each section independently modifiable and reviewable. Co-location in `components/landing/` signals these are page-specific, not shared UI primitives.

**Alternative considered**: Single `page.tsx` monolith with inline components. Rejected — harder to maintain and review at 10+ sections.

---

### 2. Animation strategy: Tailwind transitions + `@keyframes` in `globals.css`; no animation library

**Decision**: Use CSS transitions for hover/focus states and a minimal set of `@keyframes` (fade-in-up, slide-in) declared in `globals.css`. Avoid Framer Motion or GSAP.

**Rationale**: Keeps the JS bundle near zero for animation. Tailwind's `transition`, `duration-*`, and `animate-*` utilities cover 90% of needs. For scroll-triggered animations, use the `IntersectionObserver` API in a single lightweight `useIntersectionObserver` hook rather than pulling in a library.

**Alternative considered**: Framer Motion. Rejected — ~35 kB gzipped bundle cost not justified for a marketing page where Time-to-Interactive is critical on 3G.

---

### 3. Font: Poppins via `next/font/google` in root layout

**Decision**: Import Poppins (weights 400, 600, 700) in `app/layout.tsx` using `next/font/google` and apply the CSS variable to `<html>`. Configure `font-sans` in `tailwind.config.ts` to resolve to Poppins.

**Rationale**: `next/font` zero-layout-shift font loading, self-hosted from Google CDN via Next.js infra. No FOUT.

---

### 4. CTA links: WhatsApp deep-link, not a form

**Decision**: All primary CTAs open `https://wa.me/<number>?text=Quiero+probar+MiVaqui+gratis` in a new tab.

**Rationale**: The product is WhatsApp-native. Sending users directly to a chat is frictionless and matches their existing mental model. A separate form would add a conversion step without adding trust.

---

### 5. Pricing in COP with no backend

**Decision**: Pricing values are hardcoded in the `Precios.tsx` component as static content.

**Rationale**: Pricing changes infrequently. A CMS or API integration is overkill for V1. When pricing changes, a single file edit + deploy is sufficient.

---

### 6. `"use client"` boundary

**Decision**: Only `PreguntasFrecuentes.tsx` (accordion state) carries `"use client"`. All other components are Server Components.

**Rationale**: Minimizes client JS. The Hero WhatsApp chat mockup is purely visual/CSS, not interactive state.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Pricing COP values go stale | Document in component comment that values must be updated on plan changes; track as a task in the project board |
| WhatsApp number hardcoded in CTAs | Extract to a single `WHATSAPP_CTA_URL` constant in `lib/constants.ts` so it's one-place-to-change |
| Voice note "Próximamente" badge creates confusion if feature ships | Badge is a standalone component — easy to remove when the feature goes live |
| Font loading on very slow connections | `next/font` uses `font-display: swap` by default; acceptable fallback to system sans-serif |
| Tailwind purge removes dynamic classes | All dynamic classes (color variants) must use full class strings, not string interpolation |
