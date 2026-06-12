## ADDED Requirements

### Requirement: Three pricing tiers are displayed in COP
The Pricing section SHALL render three plan cards labeled for small, medium, and large farms, with monthly prices displayed in Colombian pesos (COP).

#### Scenario: Three plans rendered
- **WHEN** the Pricing section is rendered
- **THEN** exactly three plan cards appear for "Pequeña Finca", "Mediana Finca", and "Gran Finca"

#### Scenario: COP currency format
- **WHEN** any plan price is rendered
- **THEN** the price is formatted with the COP symbol and thousands separator (e.g., "$89.000/mes")

---

### Requirement: The middle tier is visually highlighted as the recommended plan
The medium-tier card SHALL be visually distinguished from the other two cards as the "más popular" or recommended option.

#### Scenario: Highlighted plan appearance
- **WHEN** the medium plan card is rendered
- **THEN** it uses a distinct border color (`border-[#53B04B]`), a "Más Popular" badge, and optionally a larger card size or elevated shadow

---

### Requirement: All plans include a 30-day free trial callout
Every pricing card SHALL communicate that the plan includes a 30-day free trial with no credit card required.

#### Scenario: Free trial label
- **WHEN** any plan card is rendered
- **THEN** it displays a "30 días gratis" or equivalent callout

---

### Requirement: Each plan lists its key included features
Each pricing card SHALL display a bullet list of the features included in that tier.

#### Scenario: Feature list presence
- **WHEN** a plan card is rendered
- **THEN** it shows at least 4 feature bullets relevant to the farm size tier

---

### Requirement: CTA on each card opens a WhatsApp deep-link
The action button on each pricing card SHALL route the user to WhatsApp with a pre-filled message referencing the selected plan.

#### Scenario: Pricing CTA click
- **WHEN** user taps the CTA on any plan card
- **THEN** a WhatsApp conversation opens pre-filled with the plan name and trial request message
