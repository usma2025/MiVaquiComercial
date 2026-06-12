## 1. Project Foundation

- [x] 1.1 Verify `lucide-react` is in `package.json`; install if missing (`npm install lucide-react`)
- [x] 1.2 Add Poppins import to `app/layout.tsx` via `next/font/google` (weights 400, 600, 700) and apply the CSS variable to `<html>`
- [x] 1.3 Extend `tailwind.config.ts` to map `font-sans` to the Poppins CSS variable
- [x] 1.4 Add the MiVaqui brand color constants to `lib/constants.ts` (WhatsApp CTA URL, support number)
- [x] 1.5 Add scroll-animation `@keyframes` (fade-in-up, slide-in) to `globals.css` and create a `useIntersectionObserver` hook in `hooks/useIntersectionObserver.ts`

## 2. Hero Component

- [x] 2.1 Create `components/landing/Hero.tsx` as a Server Component with the two-column `lg:grid-cols-2` layout
- [x] 2.2 Add the H1 pain-point headline, subtitle copy, and orange CTA button linking to the WhatsApp deep-link constant
- [x] 2.3 Build the phone-frame mockup with two WhatsApp-style chat bubbles (user right / MiVaqui left) using Tailwind
- [x] 2.4 Add sequential fade-in animation to chat bubbles using CSS `animation-delay` and the `fade-in-up` keyframe
- [x] 2.5 Ensure CTA button uses `py-4`, `bg-orange-500`, full-width on mobile, auto-width on desktop

## 3. Problema Component

- [x] 3.1 Create `components/landing/Problema.tsx` with a `md:grid-cols-3` responsive card grid on white background
- [x] 3.2 Add card 1 — "Fechas olvidadas" with `Calendar` icon and IEP-loss copy
- [x] 3.3 Add card 2 — "Vacas en mora de celo" with `AlertCircle` icon and idle-cow copy
- [x] 3.4 Add card 3 — "Registros en cuadernos" with `BookOpen` icon and lost-records copy
- [x] 3.5 Apply `text-[#53B04B]` to all card icons and add hover lift transition to cards

## 4. ComoFunciona Component

- [x] 4.1 Create `components/landing/ComoFunciona.tsx` on `bg-[#F5F7F4]` background
- [x] 4.2 Build three-step flow with numbered circles, step titles, and short descriptions
- [x] 4.3 Add desktop arrow/line connectors between steps using Tailwind positioning
- [x] 4.4 Add the "Próximamente" voice badge to Step 1 with a `Mic` icon from `lucide-react`
- [x] 4.5 Wire the `useIntersectionObserver` hook to animate steps in when they enter the viewport

## 5. Caracteristicas Component

- [x] 5.1 Create `components/landing/Caracteristicas.tsx` with a `sm:grid-cols-2 lg:grid-cols-3` feature grid
- [x] 5.2 Add six feature cards: birth registration, 10-second queries, heat/birth alerts, no-spreadsheet inventory, multi-animal tracking, WhatsApp-native interaction
- [x] 5.3 Use appropriate `lucide-react` icons (`Baby`, `Search`, `Bell`, `ClipboardList`, `Tag`, `MessageCircle`) colored `text-[#53B04B]`

## 6. PanelAdmin Component

- [x] 6.1 Create `components/landing/PanelAdmin.tsx` with copy explaining the web dashboard for owners/managers
- [x] 6.2 Build the Tailwind dashboard mockup: top bar, three KPI cards (Total Animales, Tasa de Preñez, Alertas del Día)
- [x] 6.3 Style KPI cards with subtle shadows, brand green accents, and representative placeholder values
- [x] 6.4 Add "Vista de ejemplo" label to the mockup to clarify it is illustrative

## 7. ParaQuien Component

- [x] 7.1 Create `components/landing/ParaQuien.tsx` on `bg-[#0B4C4A]` with white text
- [x] 7.2 Build three audience-tier cards: Pequeña Finca, Mediana Finca, Gran Finca with targeted value propositions
- [x] 7.3 Add progressive visual scaling cue across the three cards (icon size graduation or accent line weight)

## 8. TablaComparativa Component

- [x] 8.1 Create `components/landing/TablaComparativa.tsx` with an `overflow-x-auto` wrapper for mobile scrolling
- [x] 8.2 Build the HTML table with five comparison rows and two columns (traditional vs. MiVaqui)
- [x] 8.3 Apply green tint / `bg-[#53B04B]` to the MiVaqui column header and green checkmarks to MiVaqui cells
- [x] 8.4 Apply gray/red X indicators to the traditional-method cells

## 9. Precios Component

- [x] 9.1 Create `components/landing/Precios.tsx` with three COP-denominated plan cards
- [x] 9.2 Implement the "Más Popular" highlighted middle card with `border-[#53B04B]` border and badge
- [x] 9.3 Add "30 días gratis" callout and feature bullet list to each card
- [x] 9.4 Add per-card WhatsApp CTA button linking to deep-link with plan name in pre-filled message

## 10. PreguntasFrecuentes Component

- [x] 10.1 Create `components/landing/PreguntasFrecuentes.tsx` as a `"use client"` component
- [x] 10.2 Implement `useState` to track the currently open accordion index (or `null` for all closed)
- [x] 10.3 Add five FAQ items: connectivity/offline sync, data security, foreman usage, connectivity gaps, getting started
- [x] 10.4 Implement smooth CSS `max-height` or `grid-rows` transition for accordion expand/collapse (200–300ms)
- [x] 10.5 Add `ChevronDown` icon from `lucide-react` that rotates 180° when item is open

## 11. Footer Component

- [x] 11.1 Create `components/landing/Footer.tsx` on `bg-[#0B4C4A]` with white/gray text
- [x] 11.2 Add copyright notice with dynamic current year, "Política de Privacidad", and "Términos de Uso" links
- [x] 11.3 Add "Soporte por WhatsApp" link with `MessageCircle` icon styled in `text-[#53B04B]`

## 12. Page Assembly and QA

- [x] 12.1 Import and compose all 10 components in `app/page.tsx` in section order
- [x] 12.2 Add a sticky mobile-friendly navigation bar (optional: brand logo + CTA button) at the top
- [ ] 12.3 Test all sections at 375px, 768px, and 1280px breakpoints in browser DevTools
- [ ] 12.4 Verify CTA and WhatsApp links open correctly with pre-filled messages
- [x] 12.5 Run `npm run build` and confirm zero TypeScript errors
- [ ] 12.6 Check Lighthouse mobile performance score and address any issues below 85
