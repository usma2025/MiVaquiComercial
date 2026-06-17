## 1. Variables de Entorno

- [x] 1.1 Agregar `BACKEND_API_URL=` y `BACKEND_API_KEY=` como placeholders en `.env.local` (si no existe, crearlo)
- [x] 1.2 Verificar que `.env.local` está en `.gitignore`

## 2. API Route Proxy

- [x] 2.1 Crear directorio `app/api/postulacion/`
- [x] 2.2 Crear `app/api/postulacion/route.ts` con función `POST` que lea `BACKEND_API_URL` y `BACKEND_API_KEY` desde `process.env`
- [x] 2.3 Implementar validación de variables de entorno (retornar 500 si no están definidas)
- [x] 2.4 Implementar el forward del body JSON al Lambda con header `x-api-key`
- [x] 2.5 Hacer proxy del status code y body de respuesta del Lambda al cliente

## 3. Componente FormularioPostulacion

- [x] 3.1 Crear `components/landing/FormularioPostulacion.tsx` como `"use client"` component
- [x] 3.2 Definir el tipo `FormData` con todos los campos (contacto, perfil, digitalización, dolor)
- [x] 3.3 Implementar estado `formData` con `useState` inicializado con valores vacíos
- [x] 3.4 Implementar estado `status: 'idle' | 'loading' | 'success' | 'error'` con `useState`
- [x] 3.5 Implementar estado `errors` para mensajes de validación inline por campo

## 4. Sección Información de Contacto

- [x] 4.1 Renderizar campo Nombre Completo (input text, requerido)
- [x] 4.2 Renderizar campo Nombre de la Finca (input text, requerido)
- [x] 4.3 Renderizar campo Ubicación / Municipio / Departamento (input text, requerido)
- [x] 4.4 Renderizar campo WhatsApp (input tel, requerido, validar mínimo 10 dígitos)
- [x] 4.5 Renderizar select Rol en la finca con opciones: Dueño, Administrador, Veterinario, Mayordomo / Trabajador

## 5. Sección Perfil Productivo

- [x] 5.1 Renderizar grupo de radio buttons Tipo de Ganadería: Leche, Carne, Doble Propósito
- [x] 5.2 Renderizar grupo de radio buttons Cantidad de animales: Menos de 50, 51 a 200, Más de 200
- [x] 5.3 Aplicar estilos de radio button custom consistentes con el design system

## 6. Sección Nivel de Digitalización

- [x] 6.1 Renderizar checkboxes de selección múltiple: Cuaderno / Papel, Excel, WhatsApp, Memoria, Software especializado
- [x] 6.2 Manejar el array de selecciones en `formData.registros`
- [x] 6.3 Validar que al menos una opción esté seleccionada al enviar

## 7. Sección Dolor Principal

- [x] 7.1 Renderizar checkboxes: Se nos olvida anotar, Tomar decisiones toma tiempo, El personal no se adapta a la PC, Pérdida de apuntes
- [x] 7.2 Agregar checkbox "Otro" con input de texto libre que se muestra al seleccionarlo
- [x] 7.3 Validar que al menos una opción esté seleccionada al enviar

## 8. Lógica de Envío y Estados UI

- [x] 8.1 Implementar función `validate()` que retorna el objeto `errors` con todos los mensajes
- [x] 8.2 Implementar función `handleSubmit` que valida, setea `loading`, llama a `/api/postulacion` y maneja `success`/`error`
- [x] 8.3 Renderizar estado `loading`: botón con spinner, deshabilitar todos los inputs
- [x] 8.4 Renderizar estado `success`: reemplazar formulario con mensaje de agradecimiento con el nombre del usuario
- [x] 8.5 Renderizar estado `error`: mostrar banner de error con botón "Intentar de nuevo" que resetea el status a `idle`

## 9. Estilos y UX

- [x] 9.1 Sección con `bg-[#F5F7F4] py-16 lg:py-24`, header con `Reveal animation="blur-up"`
- [x] 9.2 Tarjeta del formulario `bg-white rounded-2xl shadow-xl max-w-2xl mx-auto p-8`
- [x] 9.3 Labels, inputs y selects con estilos consistentes (border, focus ring en `#53B04B`)
- [x] 9.4 Botón CTA `bg-orange-500 hover:bg-orange-400` con texto "Postular mi finca al piloto gratuito"
- [x] 9.5 Mensajes de error inline en rojo bajo cada campo inválido
- [x] 9.6 Animación `Reveal` aplicada a la tarjeta del formulario

## 10. Integración en la Página

- [x] 10.1 Importar `FormularioPostulacion` en `app/page.tsx`
- [x] 10.2 Insertar `<FormularioPostulacion />` entre `<PreguntasFrecuentes />` y `<Footer />` con `id="postulacion"`
- [x] 10.3 Ejecutar `npm run build` y confirmar que el build pasa sin errores TypeScript
