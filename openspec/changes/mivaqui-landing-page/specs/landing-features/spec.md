## ADDED Requirements

### Requirement: Six features rendered in an icon-grid layout
The Features section SHALL display at least six key product capabilities in a grid, each with a `lucide-react` icon, a short title, and a one-sentence description.

#### Scenario: Feature grid rendering
- **WHEN** the Features section is rendered
- **THEN** at least six feature cards appear in a responsive grid (`sm:grid-cols-2 lg:grid-cols-3`)

---

### Requirement: Features cover the core product capabilities
The Features section SHALL include the following capabilities: intelligent birth registration, 10-second history queries, proactive heat/birth alerts, inventory control without spreadsheets, multi-animal tracking, and WhatsApp-native interaction.

#### Scenario: Birth registration feature
- **WHEN** the section is rendered
- **THEN** a card conveys intelligent birth registration with an appropriate icon

#### Scenario: Alert feature
- **WHEN** the section is rendered
- **THEN** a card conveys proactive alerts sent directly to the farmer's phone

#### Scenario: No-spreadsheet feature
- **WHEN** the section is rendered
- **THEN** a card conveys inventory and record-keeping without paper or complex apps

---

### Requirement: Each feature card uses the brand primary green for its icon
Icon elements in feature cards SHALL be colored `text-[#53B04B]` to reinforce brand identity.

#### Scenario: Icon color
- **WHEN** a feature card icon is rendered
- **THEN** it displays in `text-[#53B04B]`
