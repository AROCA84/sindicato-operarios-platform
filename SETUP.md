# GUÍ¬A DE CONFIGURACIÓ¬N - SINDICATO DE OPERARIOS

## 1. CONFIGURAR SUPABASE

### Paso 1: Crear proyecto en Supabase
1. Ve a https://supabase.com
2. Crea una cuenta o inicia sesiÓ¬n
3. Click en "New Project"
4. Rellena:
   - Name: `sindicato-operarios`
   - Database Password: (guarda esta contraseÓ±a)
   - Region: Europe (Frankfurt) o mÁ¬s cercano a EspaÓ±a
5. Click en "Create new project"

### Paso 2: Ejecutar el schema SQL
1. En tu proyecto Supabase, ve a "SQL Editor" (menÚ¬ lateral)
2. Click en "New query"
3. Copia todo el contenido de `supabase/schema.sql`
4. Pega en el editor
5. Click en "Run" para ejecutar

### Paso 3: Obtener credenciales
1. Ve a "Settings" > "API"
2. Copia:
   - Project URL: `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Ve a "Settings" > "API" > "Service role key"
4. Copia el `service_role` key: `SUPABASE_SERVICE_ROLE_KEY`
   - ¡IMPORTANTE! No compartas nunca esta clave

### Paso 4: Configurar Auth
1. Ve a "Authentication" > "Providers"
2. AsegÚ¬rate de que "Email" estÁ¬ habilitado
3. Opcional: Configura email templates personalizados

## 2. CONFIGURAR STRIPE

### Paso 1: Crear cuenta en Stripe
1. Ve a https://stripe.com
2. Regí¬¡strate con tu email
3. Completa el perfil de tu negocio

### Paso 2: Obtener claves API
1. Ve al Dashboard de Stripe
2. Click en "Developers" > "API keys"
3. Copia:
   - Publishable key: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - Secret key: `STRIPE_SECRET_KEY`

### Paso 3: Crear producto para certificado
1. Ve a "Products" > "Add product"
2. Nombre: `Certificado Profesional - Sindicato de Operarios`
3. Precio: 4,99 EUR
4. Tipo: One-time payment
5. Guarda y copia el Price ID: `STRIPE_CERTIFICATE_PRICE_ID`

### Paso 4: Configurar Webhook
1. Ve a "Developers" > "Webhooks"
2. Click "Add endpoint"
3. URL: `https://tu-dominio.com/api/stripe/webhook`
4. Event types a escuchar:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copia el "Signing secret": `STRIPE_WEBHOOK_SECRET`

## 3. CONFIGURAR VARIABLES DE ENTORNO

### Copiar .env.example a .env.local
```bash
cp .env.example .env.local
```

### Rellenar .env.local
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...tu_clave_anon
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...tu_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_CERTIFICATE_PRICE_ID=price_...

# JWT Secret (genera uno nuevo)
JWT_SECRET=tu_jwt_secreto_muy_largo_y_aleatorio_cambialo

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Cambia a tu dominio cuando hagas deploy:
# NEXT_PUBLIC_APP_URL=https://sindicatooperarios.com
```

## 4. INSTALAR DEPENDENCIAS Y EJECUTAR

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre http://localhost:3000

## 5. CREAR PRIMER USUARIO ADMIN

DespuÉ¬s de ejecutar el schema SQL en Supabase, crea un usuario admin:

### OpciÓ¬n A: Desde SQL Editor en Supabase
1. Regí¬¡strate en la web como usuario normal
2. Ve a SQL Editor en Supabase
3. Ejecuta:
```sql
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'tu@email.com';
```

### OpciÓ¬n B: Insertar directamente
```sql
-- Primero crea el usuario en Auth
-- Luego inserta en profiles
INSERT INTO profiles (id, email, full_name, role)
VALUES (
  'uuid-del-usuario',
  'admin@sindicatooperarios.com',
  'Administrador',
  'admin'
);
```

## 6. INSERTAR CURSOS DE EJEMPLO

Ejecuta este SQL en Supabase para crear cursos iniciales:

```sql
-- Insertar cursos
INSERT INTO courses (title, description, passing_percentage, category_id) VALUES
('Carretillero', 'FormaciÓ¬n completa para la conducciÓ¬n segura de carretillas elevadoras. Incluye normativa, tipos de carretillas, manipulaciÓ¬n de cargas y prevenciÓ¬n de riesgos.', 70, 1),
('Carretilla Frontal', 'EspecializaciÓ¬n en carretillas frontales. TÉ¬cnicas de conducciÓ¬n, mantenimiento bÁ¬sico y seguridad en operaciones de carga.', 70, 1),
('Carretilla Retrá¬¬ctil', 'FormaciÓ¬n avanzada en carretillas retrá¬¬ctiles. Operaciones en altura, pasillos estrechos y manipulaciÓ¬n de palÉ¬s.', 70, 1),
('PEMP / Plataformas Elevadoras', 'CertificaciÓ¬n para trabajar con plataformas elevadoras mÓ¬viles de personal. Normativa, inspecciones y operaciones seguras.', 70, 2),
('Puente GrÚ¬a', 'OperaciÓ¬n segura de puentes grÚ¬a en entornos industriales. SeÓ±ales, cargas y prevenciÓ¬n de accidentes.', 70, 3),
('PrevenciÓ¬n de Riesgos Laborales', 'FormaciÓ¬n bÁ¬sica en prevenciÓ¬n de riesgos. Normativa vigente, equipos de protecciÓ¬n y protocolos de emergencia.', 70, 4),
('Seguridad Laboral', 'Protocolos de seguridad en el trabajo. IdentificaciÓ¬n de riesgos, medidas preventivas y actuaciÓ¬n en emergencias.', 70, 5),
('Maquinaria y Equipos de Trabajo', 'Uso seguro de maquinaria industrial. Mantenimiento, inspecciones y normativa de seguridad.', 70, 6);
```

## 7. PRÓ¬XIMOS PASOS

- [ ] Crear pÁ¬ginas de detalle de curso
- [ ] Implementar sistema de tests
- [ ] GeneraciÓ¬n de certificados PDF
- [ ] IntegraciÓ¬n completa de pagos con Stripe
- [ ] Panel de administraciÓ¬n
- [ ] Deploy a producciÓ¬n (Vercel recomendado)

## 8. DEPLOY A VERCEL

1. Ve a https://vercel.com
2. Importa tu repositorio de GitHub
3. Configura las variables de entorno (copia las de .env.local)
4. Deploy

## CONTACTO

Si tienes dudas:
- Email: sindicatooperarios@gmail.com
- WhatsApp: +34 642 077 425
