# Sindicato de Operarios

## Fase 5: Stripe y certificados

Incluye checkout real de Stripe en modo pago único de 4,99 €, validación de que el usuario ha aprobado el curso, webhook firmado y actualización idempotente del pedido.

### Configuración

Añade en el entorno de despliegue:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

Instala dependencias y ejecuta `npm run build` antes de desplegar. En Stripe configura el endpoint `/api/stripe/webhook` para eventos `checkout.session.completed`. Usa siempre HTTPS en producción.

El webhook confirma el pago; la página de éxito no concede por sí misma el certificado. La descarga exige usuario autenticado y un `pdf_url` guardado en el certificado.

El PDF profesional y su carga en Supabase Storage son el siguiente bloque de implementación.

Contacto: sindicatooperarios@gmail.com · WhatsApp +34 642 077 425
