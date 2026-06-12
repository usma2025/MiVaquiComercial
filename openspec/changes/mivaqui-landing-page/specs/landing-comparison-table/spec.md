## ADDED Requirements

### Requirement: Table compares traditional methods against MiVaqui across key dimensions
The Comparison Table section SHALL render an HTML table with at least five comparison dimensions, contrasting "Cuadernos / Apps complejas" vs. "MiVaqui".

#### Scenario: Table dimensions
- **WHEN** the table is rendered
- **THEN** it includes rows for: curva de aprendizaje, alertas proactivas, disponibilidad en el potrero, riesgo de pérdida de datos, and costo de adopción

#### Scenario: MiVaqui column highlight
- **WHEN** the table is rendered
- **THEN** the MiVaqui column header and cells use `bg-[#53B04B]` or a green tint to visually favor MiVaqui

---

### Requirement: Table is responsive and legible on mobile
The table SHALL scroll horizontally on small screens rather than breaking layout, with sticky first column if needed.

#### Scenario: Mobile horizontal scroll
- **WHEN** viewport is < 640px
- **THEN** the table container scrolls horizontally and no content is clipped or hidden

---

### Requirement: Traditional column uses negative visual cues, MiVaqui column uses positive cues
Each cell SHALL use checkmarks (✓ or green icon) for MiVaqui advantages and X marks or red/gray indicators for traditional-method limitations.

#### Scenario: Visual cue contrast
- **WHEN** a table row is rendered
- **THEN** the MiVaqui cell displays a green checkmark or positive text and the traditional cell displays a red/gray X or limitation text
