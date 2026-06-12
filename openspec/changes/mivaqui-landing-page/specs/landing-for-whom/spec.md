## ADDED Requirements

### Requirement: Three audience tiers are presented with distinct value propositions
The For Whom section SHALL display three tiers — small farm, medium farm, and large farm — each with a headline, a targeted value statement, and visual differentiation.

#### Scenario: Small farm tier
- **WHEN** the For Whom section is rendered
- **THEN** a "Finca Pequeña" card communicates the value of organizing the family herd with zero tech friction

#### Scenario: Medium farm tier
- **WHEN** the For Whom section is rendered
- **THEN** a "Finca Mediana" card communicates the value of supervising foremen and production remotely

#### Scenario: Large farm tier
- **WHEN** the For Whom section is rendered
- **THEN** a "Finca Grande" card communicates the value of auditing multiple paddocks and veterinarians in real time

---

### Requirement: Section uses the dark green brand background to visually anchor it
The For Whom section SHALL use `bg-[#0B4C4A]` with white or light text to create a high-contrast, visually distinct band on the page.

#### Scenario: Background and text contrast
- **WHEN** the section is rendered
- **THEN** background is `bg-[#0B4C4A]` and all text passes WCAG AA contrast against it

---

### Requirement: Tier cards scale visually from small to large
The tier cards SHALL use a subtle visual progression (e.g., increasing icon size, accent line, or badge) to communicate that the platform scales with farm complexity.

#### Scenario: Visual scaling cue
- **WHEN** the three tier cards are rendered side by side
- **THEN** a visual element (icon, size, or decoration) suggests progression from simplest to most complex use case
