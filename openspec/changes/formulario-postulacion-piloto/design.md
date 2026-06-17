## Context

La landing de MiVaqui es una app Next.js 16 (App Router, Tailwind v4) estática. No tiene backend propio; el procesamiento de leads irá a una Lambda AWS expuesta como endpoint HTTP. El formulario debe capturar datos de ganaderos colombianos interesados en el programa piloto y enviarlos de forma segura.

Restricción clave: la `x-api-key` del endpoint Lambda **nunca puede estar en el bundle del navegador**. Toda llamada al backend debe pasar por una API Route de Next.js que lee las credenciales de variables de entorno del servidor.

## Goals / Non-Goals

**Goals:**
- Formulario client-side con validación básica (campos requeridos, formato de WhatsApp)
- 4 secciones lógicas que guían al usuario progresivamente
- Estados UI claros: idle → loading → success / error
- API Route proxy que oculta `BACKEND_API_URL` y `BACKEND_API_KEY`
- Integración en `app/page.tsx` antes del Footer
- Sin dependencias npm nuevas (solo React hooks + fetch nativo)

**Non-Goals:**
- Validación avanzada del lado servidor (queda en la Lambda)
- Formulario multi-paso con wizard (todo en una página scrollable)
- Persistencia local (localStorage/sessionStorage)
- Analytics de abandono de formulario

## Decisions

### 1. Client Component con `useState` monolítico vs. formulario dividido

**Decisión:** Un único `"use client"` component con un objeto de estado central `FormData`.

**Rationale:** El formulario tiene <15 campos; dividirlo en sub-componentes controlados sólo añade indirección sin beneficio real. Un estado plano es más fácil de serializar para el `POST`.

**Alternativa descartada:** `react-hook-form` — innecesario para este tamaño y añadiría ~25kB al bundle.

### 2. Proxy API Route vs. llamada directa al Lambda

**Decisión:** `app/api/postulacion/route.ts` siempre actúa de proxy.

**Rationale:** Las variables de entorno prefijadas sin `NEXT_PUBLIC_` sólo son accesibles en el servidor en Next.js. Esto garantiza que la API key no sea visible en DevTools → Network ni en el bundle JS.

**Alternativa descartada:** `NEXT_PUBLIC_BACKEND_API_KEY` en el cliente — expone la key en el HTML estático.

### 3. Posición en la página

**Decisión:** Después de `PreguntasFrecuentes`, antes de `Footer`.

**Rationale:** El usuario debe recorrer la propuesta de valor completa (Hero → Problema → ComoFunciona → Características → Panel Admin → ParaQuien → Tabla → Precios → FAQ) antes de encontrar el formulario. Esto aumenta la intención de postularse.

### 4. Estructura visual

**Decisión:** Tarjeta centrada `max-w-2xl` con fondo blanco sobre sección `bg-[#F5F7F4]`, usando el sistema de colores de la landing (`#0B4C4A`, `#53B04B`, orange-500 para el CTA).

**Rationale:** Consistencia con el design system existente. El CTA en orange-500 replica el botón principal del Hero, reforzando la acción primaria.

### 5. Validación

**Decisión:** Validación síncrona al submit: campos requeridos + regex básico de WhatsApp (10 dígitos colombianos o formato internacional).

**Rationale:** Feedback inmediato sin round-trip. La Lambda hace su propia validación; el cliente sólo previene envíos vacíos obvios.

## Risks / Trade-offs

- **Lambda no disponible** → La API Route retorna 500; el formulario muestra mensaje de error con opción de reintentar. No hay retry automático (riesgo bajo: el usuario puede reenviar manualmente).
- **Spam / bots** → Sin CAPTCHA por ahora. Mitigation: la Lambda puede implementar rate-limiting por IP. Se puede agregar `hCaptcha` en iteración posterior.
- **Variables de entorno no configuradas en producción** → La API Route responde 500 con mensaje claro en los logs. Agregar validación de env al inicializar la route.
- **Tailwind v4 arbitrary values en el formulario** → Usar sólo clases del design system existente para evitar conflictos con el `@theme inline`.

## Migration Plan

1. Agregar `BACKEND_API_URL` y `BACKEND_API_KEY` a `.env.local` (desarrollo) y a las variables de entorno de Vercel/producción.
2. Crear `app/api/postulacion/route.ts`.
3. Crear `components/landing/FormularioPostulacion.tsx`.
4. Agregar la sección en `app/page.tsx` con id `#postulacion`.
5. (Opcional) Actualizar el CTA del Hero para hacer scroll a `#postulacion`.

**Rollback:** Remover la importación de `FormularioPostulacion` en `page.tsx` y borrar la API Route. Sin impacto en el resto de la landing.

## Open Questions

- ¿El endpoint Lambda espera un body JSON con una estructura específica, o podemos definirla libremente? (Asumir JSON libre por ahora; ajustar en la Lambda.)
- ¿Requiere campo de email además de WhatsApp? (No incluido en el brief; omitir por ahora.)
