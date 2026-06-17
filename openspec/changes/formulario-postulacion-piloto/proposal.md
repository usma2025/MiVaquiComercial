## Why

La landing page de MiVaqui no tiene un mecanismo para capturar prospectos interesados en el programa piloto gratuito. Necesitamos un formulario de postulación que permita recolectar información clave de los ganaderos antes de incorporarlos al piloto, calificando el lead y enviando los datos de forma segura a un backend serverless.

## What Changes

- Se agrega el componente `FormularioPostulacion` (client component) con 4 secciones: Información de Contacto, Perfil Productivo, Nivel de Digitalización y Dolor Principal.
- Se agrega la API Route `app/api/postulacion/route.ts` que actúa como proxy seguro hacia el endpoint Lambda, ocultando la `x-api-key` del navegador.
- El componente se inserta en `app/page.tsx` antes del Footer, después de `PreguntasFrecuentes`, para que el usuario recorra la propuesta de valor completa antes de ver el formulario.
- Se documentan las variables de entorno requeridas (`BACKEND_API_URL`, `BACKEND_API_KEY`).

## Capabilities

### New Capabilities

- `formulario-postulacion`: Formulario de postulación al piloto gratuito con validación client-side, estados de carga/éxito/error, y envío seguro a través de una API Route proxy.

### Modified Capabilities

- `page-assembly`: El orden de secciones en `app/page.tsx` cambia para incluir `FormularioPostulacion` antes del `Footer`.

## Impact

- **Nuevo archivo**: `components/landing/FormularioPostulacion.tsx` (client component)
- **Nuevo archivo**: `app/api/postulacion/route.ts` (Next.js API Route)
- **Modificado**: `app/page.tsx` — se agrega la sección del formulario
- **Variables de entorno**: requiere `BACKEND_API_URL` y `BACKEND_API_KEY` en `.env.local`
- **Sin dependencias externas nuevas** — usa `fetch` nativo y hooks de React estándar
