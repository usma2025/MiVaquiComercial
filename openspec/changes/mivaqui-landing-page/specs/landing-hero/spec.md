## ADDED Requirements

### Requirement: Hero section renders above the fold on mobile
The page SHALL display the Hero section as the first visible section, fully legible without scrolling on a 375px-wide viewport.

#### Scenario: Mobile hero visibility
- **WHEN** a user opens the page on a 375px device
- **THEN** the H1, subtitle, and CTA button are all visible without scrolling

---

### Requirement: H1 communicates loss-aversion pain point
The Hero SHALL display an H1 heading that frames the product around the farmer's financial and operational pain: lost calves, missed dates, untracked herd events.

#### Scenario: H1 content
- **WHEN** the Hero section is rendered
- **THEN** the H1 reads "¿Cuántos terneros y plata perdió este año por no saber las fechas exactas de su hato?"

---

### Requirement: CTA button opens WhatsApp deep-link
The primary CTA button SHALL open a WhatsApp conversation pre-filled with a trial-request message in a new browser tab.

#### Scenario: CTA click
- **WHEN** user taps "Probar MiVaqui gratis por 30 días"
- **THEN** a new tab opens with a WhatsApp deep-link to the MiVaqui support number with a pre-filled message

#### Scenario: CTA visual treatment
- **WHEN** the CTA button is rendered
- **THEN** it uses `bg-orange-500` background, white text, `py-4` vertical padding, and rounded corners

---

### Requirement: WhatsApp chat mockup simulates a real conversation
The Hero right column SHALL show an animated phone-frame mockup containing two WhatsApp-style chat bubbles representing a typical user interaction.

#### Scenario: Chat bubble content
- **WHEN** the Hero section is rendered
- **THEN** a right-aligned "user" bubble displays "La 204 parió una hembra"
- **THEN** a left-aligned "MiVaqui" bubble displays "Entendido. Registro exitoso de cría para la vaca 204. ¿Tiene número de arete?"

#### Scenario: Chat bubble animation
- **WHEN** the Hero section first enters the viewport
- **THEN** chat bubbles animate in sequentially with a fade/slide effect creating a typing illusion

---

### Requirement: Two-column layout on desktop
The Hero section SHALL use a single-column layout on mobile and a two-column (`lg:grid-cols-2`) layout on desktop with copy on the left and the phone mockup on the right.

#### Scenario: Desktop layout
- **WHEN** viewport width is ≥ 1024px
- **THEN** the headline/CTA and the phone mockup render side-by-side

#### Scenario: Mobile layout
- **WHEN** viewport width is < 1024px
- **THEN** the phone mockup stacks below the headline/CTA block
