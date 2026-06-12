## ADDED Requirements

### Requirement: Accordion FAQ with at least five questions
The FAQ section SHALL render an accordion component with at least five questions and answers addressing common adoption barriers.

#### Scenario: FAQ questions coverage
- **WHEN** the FAQ section is rendered
- **THEN** it includes questions about: internet connectivity in the field, data security, foreman/employee usage, what happens during connectivity gaps, and how to get started

---

### Requirement: Only one accordion item is open at a time
The accordion SHALL collapse previously opened items when a new item is expanded.

#### Scenario: Single open item
- **WHEN** user opens a FAQ item that is not currently open
- **THEN** any previously open item collapses and only the newly selected item is expanded

#### Scenario: Toggle closed
- **WHEN** user taps an already-open FAQ item
- **THEN** that item collapses

---

### Requirement: Component uses client-side state
The FAQ accordion SHALL be a `"use client"` component using React `useState` to manage the open/closed state of items.

#### Scenario: Client directive
- **WHEN** the component file is read
- **THEN** it begins with `"use client"` directive

---

### Requirement: Accordion items animate open and close
Item content SHALL expand and collapse with a smooth CSS height transition rather than an abrupt show/hide.

#### Scenario: Smooth expand animation
- **WHEN** a FAQ item is opened
- **THEN** the answer content smoothly expands with a transition of 200–300ms
