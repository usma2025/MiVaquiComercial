## MODIFIED Requirements

### Requirement: Orden de secciones de la landing page
`app/page.tsx` SHALL renderizar las secciones en el siguiente orden: Navbar, Hero, Problema, ComoFunciona, Caracteristicas, PanelAdmin, ParaQuien, TablaComparativa, Precios, PreguntasFrecuentes, FormularioPostulacion, Footer. La sección FormularioPostulacion SHALL tener `id="postulacion"` para permitir deep-linking desde el CTA del Hero.

#### Scenario: Sección formulario visible en la página
- **WHEN** el usuario navega a la landing page
- **THEN** el componente `FormularioPostulacion` se renderiza entre `PreguntasFrecuentes` y `Footer`

#### Scenario: Deep-link a la sección de postulación
- **WHEN** el usuario accede a `/#postulacion`
- **THEN** el navegador hace scroll hasta la sección del formulario
