import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TerminosPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">TÉ¬RMINOS Y CONDICIONES</h1>
          
          <div className="card space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">1. ACEPTACIÓ¬N</h2>
              <p className="text-gray-300">
                Al registrarse y utilizar la plataforma SINDICATO DE OPERARIOS, usted acepta estos tÉ¬rminos y condiciones 
                en su totalidad. Si no estÁ¬ de acuerdo, no utilice este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">2. SERVICIOS</h2>
              <p className="text-gray-300 mb-4">
                SINDICATO DE OPERARIOS proporciona una plataforma de formaciÓ¬n online que incluye:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Acceso a cursos y temarios</li>
                <li>• Tests de evaluaciÓ¬n</li>
                <li>• EmisiÓ¬n de certificados profesionales (previo pago)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">3. REGISTRO</h2>
              <p className="text-gray-300 mb-4">
                Para acceder a los cursos, debe registrarse proporcionando informaciÓ¬n veraz y completa. Usted es responsable 
                de mantener la confidencialidad de su cuenta y contraseÓ±a.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">4. PRECIOS Y PAGOS</h2>
              <p className="text-gray-300 mb-4">
                El acceso a cursos y tests es GRATUITO. Ú­nicamente se cobra el certificado profesional (4,99 €) cuando:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• El usuario aprueba el test</li>
                <li>• El usuario decide obtener su certificado</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Los precios pueden ser modificados con notificaciÓ¬n previa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">5. CERTIFICADOS</h2>
              <p className="text-gray-300 mb-4">
                Los certificados son personales e intransferibles. Para obtenerlo, el alumno debe:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Completar el curso</li>
                <li>• Aprobar el test con la puntuaciÓ¬n mÍ¬nima requerida</li>
                <li>• Abonar el precio del certificado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">6. PROPIEDAD INTELECTUAL</h2>
              <p className="text-gray-300">
                Todos los contenidos de los cursos son propiedad de SINDICATO DE OPERARIOS. Queda prohibida su reproducciÓ¬n, 
                distribuciÓ¬n o comunicaciÓ¬n pÚ¬blica sin autorizaciÓ¬n.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">7. LIMITACIÓ¬N DE RESPONSABILIDAD</h2>
              <p className="text-gray-300">
                SINDICATO DE OPERARIOS no se responsabiliza de los daÓ±os o perjuicios que puedan derivarse del uso incorrecto 
                de la plataforma o de los contenidos formativos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">8. MODIFICACIONES</h2>
              <p className="text-gray-300">
                Nos reservamos el derecho a modificar estos tÉ¬rminos en cualquier momento. Los cambios serÁ¬n publicados en esta pÁ¬gina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">9. LEY APLICABLE</h2>
              <p className="text-gray-300">
                Estos tÉ¬rminos se rigen por la legislaciÓ¬n espaÓ±ola. Cualquier conflicto se someterÁ¬a a los tribunales 
                correspondientes.
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
