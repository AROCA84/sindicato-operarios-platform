# Sindicato de Operarios

Plataforma de formación online para operarios y trabajadores industriales.

## Fase de pagos y certificados

La aplicación ya incluye la estructura segura para:

- Guardar intentos de test y validar el aprobado.
- Guardar el progreso del alumno.
- Crear pedidos de certificado por 4,99 €.
- Crear certificados con código `SDO-XXXXXX`.
- Procesar el evento `checkout.session.completed`.
- Permitir consultar certificados de un usuario autenticado.

## Configuración pendiente de producción

Antes de activar cobros reales hay que completar la creación oficial de `Stripe Checkout Session` en `src/app/api/stripe/checkout/route.ts`, firmar y verificar el webhook con `stripe.webhooks.constructEvent`, y configurar `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` y `NEXT_PUBLIC_APP_URL` en el entorno de despliegue. No uses claves reales en GitHub.

El pago solo debe permitirse después de encontrar un intento aprobado del curso. El webhook debe ser la única fuente de confirmación del pago.

## Supabase

Ejecuta `supabase/schema.sql`, configura las variables públicas de Supabase y aplica políticas RLS revisadas antes de publicar.

Contacto: sindicatooperarios@gmail.com · WhatsApp +34 642 077 425
