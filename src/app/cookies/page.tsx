import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">POLÍ¬TICA DE COOKIES</h1>
          
          <div className="card space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">1. ¿QUÉ¬ SON LAS COOKIES?</h2>
              <p className="text-gray-300">
                Las cookies son pequeÓ±os archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. 
                Nos ayudan a mejorar su experiencia de navegaciÓ¬n y a ofrecerle servicios personalizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">2. COOKIES QUE UTILIZAMOS</h2>
              
              <h3 className="text-xl font-bold mb-2 text-industrial-green">Cookies TÉ¬cnicas (Necesarias)</h3>
              <p className="text-gray-300 mb-4">
                Son esenciales para el funcionamiento de la plataforma. Permiten la navegaciÓ¬n y el uso de funciones 
                bÁ¬sicas como el inicio de sesiÓ¬n y el acceso a cursos.
              </p>

              <h3 className="text-xl font-bold mb-2 text-industrial-green">Cookies de Preferencias</h3>
              <p className="text-gray-300 mb-4">
                Guardan sus preferencias de configuraciÓ¬n para mejorar su experiencia (idioma, tema, etc.).
              </p>

              <h3 className="text-xl font-bold mb-2 text-industrial-green">Cookies de AnÁ¬lisis</h3>
              <p className="text-gray-300 mb-4">
                Nos ayudan a entender cÓ¬mo los usuarios interactÚ¬an con nuestro sitio web para mejorarlo continuamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">3. GESTIÓ¬N DE COOKIES</h2>
              <p className="text-gray-300 mb-4">
                Puede configurar su navegador para rechazar todas las cookies o para que le avise cuando se envÍ¬a una cookie. 
                Sin embargo, algunas funciones del sitio pueden no funcionar correctamente sin cookies.
              </p>
              <p className="text-gray-300">
                La mayorÍ¬a de los navegadores permiten gestionar las cookies en la configuraciÓ¬n de privacidad o seguridad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">4. COOKIES DE TERCEROS</h2>
              <p className="text-gray-300">
                Algunos servicios de terceros (como Stripe para pagos o servicios de hosting) pueden utilizar sus propias cookies. 
                Le recomendamos revisar sus polÍ¬ticas de privacidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">5. ACTUALIZACIONES</h2>
              <p className="text-gray-300">
                Esta polÍ¬tica de cookies puede actualizarse periÓ¬dicamente. Le recomendamos revisarla regularmente.
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="text-industrial-orange hover:underline">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
