## ADDED Requirements

### Requirement: Section explains the web dashboard for owners and managers
The Admin Panel section SHALL communicate that herd data is automatically consolidated into a web panel, targeting farm owners and administrators rather than field workers.

#### Scenario: Section headline
- **WHEN** the Admin Panel section is rendered
- **THEN** the headline clearly states the existence of a centralized web management panel

---

### Requirement: Dashboard mockup displays three KPI metrics
The section SHALL include a Tailwind-built visual mockup simulating a minimal web dashboard with at least three KPI cards: total animals, pregnancy rate, and daily alerts count.

#### Scenario: KPI card — total animals
- **WHEN** the mockup is rendered
- **THEN** a card labeled "Total Animales" displays a representative numeric value

#### Scenario: KPI card — pregnancy rate
- **WHEN** the mockup is rendered
- **THEN** a card labeled "Tasa de Preñez" displays a percentage value

#### Scenario: KPI card — daily alerts
- **WHEN** the mockup is rendered
- **THEN** a card labeled "Alertas del Día" displays a numeric count with a visual indicator (e.g., colored badge)

---

### Requirement: Mockup is clearly marked as a demo representation
The dashboard mockup SHALL include a subtle label or watermark indicating it is an illustrative demo, not real data.

#### Scenario: Demo label
- **WHEN** the mockup is rendered
- **THEN** it displays a small "Vista de ejemplo" or equivalent label
