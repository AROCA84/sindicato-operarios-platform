import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">POLÍ¬TICA DE PRIVACIDAD</h1>
          
          <div className="card space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">1. RESPONSABLE DEL TRATAMIENTO</h2>
              <p className="text-gray-300 mb-4">
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley OrgÁ¬nica 3/2018 de ProtecciÓ¬n de Datos, 
                informamos que los datos personales proporcionados serÁ¬n tratados por:
              </p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li><strong>Responsable:</strong> SINDICATO DE OPERARIOS</li>
                <li><strong>Email:</strong> sindicatooperarios@gmail.com</li>
                <li><strong>TelÉ¬fono:</strong> +34 642 077 425</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">2. FINALIDAD DEL TRATAMIENTO</h2>
              <p className="text-gray-300 mb-4">Sus datos serÁ¬n utilizados para:</p>
              <ul className="text-gray-300 space-y-2 ml-4">
                <li>• Gestionar su registro en la plataforma</li>
                <li>• Proporcionar acceso a cursos y formaciÓ¬n</li>
                <li>• Emitir certificados profesionales</li>
                <li>• Gestionar pagos y facturaciÓ¬n</li>
                <li>• Enviar comunicaciones relacionadas con sus cursos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">3. LEGITIMACIÓ¬N</h2>
              <p className="text-gray-300">
                La base legal para el tratamiento de sus datos es la ejecuciÓ¬n del contrato de prestaciÓ¬n de servicios 
                educativos y el consentimiento otorgado al registrarse en la plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">4. DESTINATARIOS</h2>
              <p className="text-gray-300">
                Sus datos no serÁ¬n cedidos a terceros, salvo obligaciÓ¬n legal o para la prestaciÓ¬n del servicio 
                (procesadores de pago como Stripe, hosting, etc.).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">5. DERECHOS</h2>
              <p className="text-gray-300 mb-4">
                Puede ejercer sus derechos de acceso, rectificaciÓ¬n, supresiÓ¬n, limitaciÓ¬n, oposiciÓ¬n y portabilidad 
                enviando un email a:
              </p>
              <p className="text-industrial-orange font-bold">
                sindicatooperarios@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">6. CONSERVACIÓ¬N DE DATOS</h2>
              <p className="text-gray-300">
                Los datos se conservarÁ¬n mientras mantenga su relaciÓ¬n con nosotros y durante los aÓ±os necesarios 
                para cumplir con las obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-industrial-orange">7. SEGURIDAD</h2>
              <p className="text-gray-300">
                Hemos adoptado las medidas tÉ¬cnicas y organizativas necesarias para garantizar la seguridad de sus datos 
                y evitar su alteraciÓ¬n, pÉ¬rdida, tratamiento o acceso no autorizado.
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
