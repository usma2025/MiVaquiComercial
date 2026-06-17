## ADDED Requirements

### Requirement: Formulario de postulación al piloto
El sistema SHALL proveer un formulario de postulación con 4 secciones estructuradas que permitan capturar información de contacto, perfil productivo, nivel de digitalización y dolor principal del ganadero. El formulario SHALL enviarse mediante POST a `/api/postulacion`.

#### Scenario: Renderizado inicial
- **WHEN** el usuario llega a la sección `#postulacion` de la landing
- **THEN** el formulario se muestra con todos los campos vacíos y el botón CTA habilitado

#### Scenario: Validación de campos requeridos
- **WHEN** el usuario hace clic en el botón de envío con campos requeridos vacíos
- **THEN** el sistema muestra mensajes de error inline en cada campo inválido y NO realiza la petición HTTP

#### Scenario: Estado de carga
- **WHEN** el usuario envía el formulario con todos los campos válidos
- **THEN** el botón CTA muestra un spinner y se deshabilita hasta recibir respuesta

#### Scenario: Estado de éxito
- **WHEN** la API Route responde con status 200
- **THEN** el formulario se reemplaza por un mensaje de agradecimiento amigable con el nombre del usuario

#### Scenario: Estado de error
- **WHEN** la API Route responde con status >= 400 o la petición falla por red
- **THEN** se muestra un mensaje de error con opción de reintentar, sin limpiar los datos del formulario

### Requirement: Sección Información de Contacto
El formulario SHALL incluir los campos: Nombre Completo (text, requerido), Nombre de la Finca (text, requerido), Ubicación / Municipio / Departamento (text, requerido), WhatsApp (tel, requerido, mínimo 10 dígitos), Rol en la finca (select, requerido: Dueño, Administrador, Veterinario, Mayordomo / Trabajador).

#### Scenario: Validación de WhatsApp
- **WHEN** el campo WhatsApp contiene menos de 10 dígitos numéricos
- **THEN** se muestra el error "Ingresa un número válido (mínimo 10 dígitos)"

#### Scenario: Selección de rol
- **WHEN** el usuario despliega el select de Rol en la finca
- **THEN** se muestran exactamente las opciones: Dueño, Administrador, Veterinario, Mayordomo / Trabajador

### Requirement: Sección Perfil Productivo
El formulario SHALL incluir: Tipo de Ganadería (radio: Leche, Carne, Doble Propósito, requerido) y Cantidad aproximada de animales (radio: Menos de 50, 51 a 200, Más de 200, requerido).

#### Scenario: Selección de tipo de ganadería
- **WHEN** el usuario selecciona una opción de Tipo de Ganadería
- **THEN** esa opción queda visualmente marcada y las demás desmarcadas

#### Scenario: Validación de perfil productivo
- **WHEN** el usuario intenta enviar sin seleccionar tipo de ganadería o cantidad de animales
- **THEN** se muestran mensajes de error en los grupos de radio correspondientes

### Requirement: Sección Nivel de Digitalización
El formulario SHALL incluir checkboxes de selección múltiple para "¿Cómo llevan hoy los registros?": Cuaderno / Papel, Excel, WhatsApp, Memoria, Software especializado. Al menos una opción SHALL ser requerida.

#### Scenario: Selección múltiple de registros
- **WHEN** el usuario marca varias opciones de registro
- **THEN** todas las opciones marcadas se incluyen en el payload como array

#### Scenario: Validación de digitalización
- **WHEN** el usuario intenta enviar sin seleccionar ningún método de registro
- **THEN** se muestra el error "Selecciona al menos una opción"

### Requirement: Sección Dolor Principal
El formulario SHALL incluir checkboxes para "¿Cuál es tu mayor reto en el registro de datos?": Se nos olvida anotar, Tomar decisiones toma tiempo, El personal no se adapta a la PC, Pérdida de apuntes. SHALL incluir opción "Otro" con campo de texto libre que se habilita al seleccionarla. Al menos una opción SHALL ser requerida.

#### Scenario: Opción Otro
- **WHEN** el usuario marca la opción "Otro"
- **THEN** aparece un input de texto para describir el reto personalizado

#### Scenario: Validación de dolor principal
- **WHEN** el usuario intenta enviar sin seleccionar ningún reto
- **THEN** se muestra el error "Selecciona al menos un reto"

### Requirement: API Route proxy segura
El sistema SHALL exponer `POST /api/postulacion` como API Route de Next.js. Esta route SHALL leer `BACKEND_API_URL` y `BACKEND_API_KEY` exclusivamente desde variables de entorno del servidor y hacer forward del body al endpoint Lambda con el header `x-api-key`. La API key NEVER SHALL estar expuesta en el bundle del cliente.

#### Scenario: Proxy exitoso
- **WHEN** el cliente envía POST a `/api/postulacion` con payload válido
- **THEN** la route hace forward al Lambda con `x-api-key` y retorna la respuesta del Lambda al cliente

#### Scenario: Variables de entorno no configuradas
- **WHEN** `BACKEND_API_URL` o `BACKEND_API_KEY` no están definidas
- **THEN** la route responde 500 con mensaje "Configuración del servidor incompleta"

#### Scenario: Lambda responde con error
- **WHEN** el Lambda retorna status >= 400
- **THEN** la route hace proxy del status y body de error al cliente sin modificación
