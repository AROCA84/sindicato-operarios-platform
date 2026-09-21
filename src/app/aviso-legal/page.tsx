import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AvisoLegalPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">AVISO LEGAL</h1>
          
          <div className="card space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">1. DATOS IDENTIFICATIVOS</h2>
              <p className="text-gray-300 mb-4">
                En cumplimiento con el deber de informaciÓ¬n recogido en artÍ¬culo 10 de la Ley 34/2002, de 11 de julio, 
                de Servicios de la Sociedad de la InformaciÓ¬n y del Comercio ElectrÓ¬nico, a continuaciÓ¬n se reflejan los siguientes datos:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li><strong>Nombre:</strong> SINDICATO DE OPERARIOS</li>
                <li><strong>Email:</strong> sindicatooperarios@gmail.com</li>
                <li><strong>TelÉ¬fono / WhatsApp:</strong> +34 642 077 425</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">2. OBJETO</h2>
              <p className="text-gray-300">
                El presente aviso legal regula el uso y utilizaciÓ¬n de la plataforma de formaciÓ¬n online 
                Sindicato de Operarios, accessible desde la URL correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">3. CONDICIONES DE USO</n2>
              <p className="text-gray-300 mb-4">
                El usuario se compromete a utilizar el sitio web de conformidad con la ley, el presente aviso legal, 
                y demÁ¬s avisos, reglamentos e instrucciones puestos en su conocimiento.
              </p>
              <p className="text-gray-300">
                Queda prohibido cualquier uso del portal con fines comerciales o no autorizados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">4. PROPIEDAD INTELECTUAL</h2>
              <p className="text-gray-300">
                Todos los contenidos del sitio web (textos, imÁ¬genes, logos, diseÓ±os, software) son propiedad de 
                SINDICATO DE OPERARIOS o de terceros y estÁ¬n protegidos por las leyes de propiedad intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">5. MODIFICACIONES</h2>
              <p className="text-gray-300">
                SINDICATO DE OPERARIOS se reserva el derecho a modificar el presente aviso legal en cualquier momento. 
                Las modificaciones serÁ¬n publicadas en esta pÁ¬gina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">6. LEGISLACIÓ¬N APLICABLE</h2>
              <p className="text-gray-300">
                La presente relaciÓ¬n contractual se rige por la legislaciÓ¬n espaÓ±ola. Para cualquier controversia, 
                las partes se someterÁ¬n a los Juzgados y Tribunales de la ciudad del usuario.
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
