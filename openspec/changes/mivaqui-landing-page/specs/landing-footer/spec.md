## ADDED Requirements

### Requirement: Footer includes legal links and copyright
The Footer SHALL display at minimum a copyright notice for MiVaqui and links to Privacy Policy and Terms of Service pages (even if those pages are placeholder links for V1).

#### Scenario: Copyright notice
- **WHEN** the Footer is rendered
- **THEN** it displays "© {currentYear} MiVaqui. Todos los derechos reservados."

#### Scenario: Legal links
- **WHEN** the Footer is rendered
- **THEN** it includes links labeled "Política de Privacidad" and "Términos de Uso"

---

### Requirement: Footer includes a WhatsApp support CTA
The Footer SHALL provide a direct WhatsApp link for technical support, making it easy for users to get help from any point in the page.

#### Scenario: WhatsApp support link
- **WHEN** the Footer is rendered
- **THEN** a link or button labeled "Soporte por WhatsApp" opens the MiVaqui support WhatsApp in a new tab

#### Scenario: WhatsApp link styling
- **WHEN** the support link is rendered
- **THEN** it uses the primary green color (`text-[#53B04B]` or similar) and includes a WhatsApp icon or message icon from `lucide-react`

---

### Requirement: Footer uses the dark brand background
The Footer SHALL use `bg-[#0B4C4A]` background with appropriate light-colored text to create a strong visual closing anchor for the page.

#### Scenario: Footer background and text color
- **WHEN** the Footer is rendered
- **THEN** background is `bg-[#0B4C4A]` and text is white or light gray passing WCAG AA contrast
