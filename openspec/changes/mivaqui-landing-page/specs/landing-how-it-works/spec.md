## ADDED Requirements

### Requirement: Three-step flow communicates the product loop
The section SHALL display exactly three sequential steps visualizing how a farmer goes from WhatsApp message to actionable alert.

#### Scenario: Step labels
- **WHEN** the How It Works section is rendered
- **THEN** Step 1 is labeled "Escribe por WhatsApp", Step 2 is "MiVaqui procesa", and Step 3 is "Reciba alertas tempranas"

#### Scenario: Step connectors
- **WHEN** the section is rendered on desktop
- **THEN** a visual connector (arrow or line) links each step to the next

---

### Requirement: Step 1 carries a "Próximamente" voice-note badge
Step 1 SHALL display a secondary badge or label indicating that voice note input is coming soon, without implying it is currently available.

#### Scenario: Voice badge content
- **WHEN** Step 1 is rendered
- **THEN** a badge or chip with a microphone icon reads "Mensajes de voz (Próximamente)"

#### Scenario: Voice badge styling
- **WHEN** the badge is rendered
- **THEN** it is visually subtle (small font, muted color, outline style) so it does not distract from the current text-based functionality

---

### Requirement: Section uses the light background
The How It Works section SHALL use `bg-[#F5F7F4]` as its background to visually separate it from adjacent white sections.

#### Scenario: Background application
- **WHEN** the section is rendered
- **THEN** its outermost container has `bg-[#F5F7F4]` applied
