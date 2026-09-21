# Sindicato de Operarios

Plataforma de formación online para operarios y trabajadores industriales.

## Flujo actual

- Registro e inicio de sesión preparados para Supabase Auth.
- Cursos, lecciones y tests gratuitos.
- Resultado inmediato con mínimo inicial del 70 %.
- Solicitud de certificado tras aprobar por 4,99 €.
- Panel de alumno, panel administrativo y verificación pública de certificados.

## Activar Supabase

1. Crea un proyecto en Supabase.
2. Ejecuta `supabase/schema.sql` en el SQL Editor.
3. Copia `.env.example` como `.env.local`.
4. Rellena `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
5. Inicia el proyecto con `npm install` y `npm run dev`.

La integración de Stripe y la generación PDF de certificados se incorporarán en la siguiente fase. Nunca subas claves secretas al repositorio.

## Contacto

sindicatooperarios@gmail.com · WhatsApp +34 642 077 425
