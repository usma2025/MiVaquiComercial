## ADDED Requirements

### Requirement: Three problem cards surface real cattle-farm pain points
The section SHALL render exactly three cards, each addressing a distinct operational pain that MiVaqui solves.

#### Scenario: Card content — forgotten dates
- **WHEN** the Problem section is rendered
- **THEN** the first card conveys the pain of forgotten birth/heat dates causing extended calving intervals and lost revenue

#### Scenario: Card content — idle cows
- **WHEN** the Problem section is rendered
- **THEN** the second card conveys the pain of cows past their optimal insemination window that are eating without producing

#### Scenario: Card content — paper records
- **WHEN** the Problem section is rendered
- **THEN** the third card conveys the pain of paper notebooks getting wet, lost, or forgotten, making herd data inaccessible

---

### Requirement: Cards render responsively
The Problem section SHALL use a responsive grid that stacks cards vertically on mobile and places them in a row on desktop.

#### Scenario: Mobile layout
- **WHEN** viewport width is < 768px
- **THEN** cards stack in a single column with adequate vertical spacing

#### Scenario: Desktop layout
- **WHEN** viewport width is ≥ 768px
- **THEN** cards display in a three-column grid (`md:grid-cols-3`)

---

### Requirement: Each card includes an icon and emotionally resonant copy
Each card SHALL include a visual icon (from `lucide-react`) and short, empathy-driven body copy written in the farmer's language.

#### Scenario: Icon presence
- **WHEN** any problem card is rendered
- **THEN** it displays a `lucide-react` icon visually related to its pain theme
