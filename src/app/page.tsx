import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Award, CheckCircle, ArrowRight, PlayCircle, Shield, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">FORMACIÓ¬N PROFESIONAL</span>
                <br />
                PARA OPERARIOS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Plataforma de formaciÓ¬n online especializada para trabajadores industriales.
                Estudia, haz el test y obtÉ¬n tu certificado profesional.
              </p>
              
              {/* Main Message */}
              <div className="bg-gradient-to-r from-industrial-orange/20 via-industrial-green/20 to-industrial-yellow/20 border border-industrial-orange/30 rounded-2xl p-6 md:p-8 mb-10 max-w-4xl mx-auto">
                <p className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ESTUDIAR Y HACER EL TEST ES GRATIS
                </p>
                <p className="text-xl md:text-2xl text-industrial-orange font-bold">
                  SOLO PAGAS AL FINAL SI QUIERES OBTENER TU CERTIFICADO
                </p>
                <p className="text-lg text-gray-300 mt-4">
                  Certificado profesional por solo <span className="text-industrial-green font-bold text-2xl">4,99 €</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registro" className="btn-primary text-lg px-8">
                  Registrarse Gratis
                </Link>
                <Link href="/cursos" className="btn-outline text-lg px-8">
                  Ver Cursos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 bg-industrial-gray/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              CÓ<span className="text-industrial-orange">MO</span> FUNCIONA
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen size={40} className="text-industrial-orange" />,
                  title: '1. Regí¬¡strate Gratis',
                  description: 'Crea tu cuenta en segundos sin ningÚ¬n coste',
                },
                {
                  icon: <PlayCircle size={40} className="text-industrial-green" />,
                  title: '2. Estudia',
                  description: 'Accede a todos los cursos y temarios gratuitamente',
                },
                {
                  icon: <CheckCircle size={40} className="text-industrial-yellow" />,
                  title: '3. Haz el Test',
                  description: 'Realiza el test de evaluaciÓ¬n sin pagar nada',
                },
                {
                  icon: <Award size={40} className="text-industrial-orange" />,
                  title: '4. Certificado',
                  description: 'Solo si apruebas y quieres tu certificado: 4,99 €',
                },
              ].map((step, index) => (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              CURSOS <span className="text-industrial-orange">DISPONIBLES</span>
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              FormaciÓ¬n especializada para operarios industriales con contenido actualizado y certificado profesional
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Carretillero',
                  description: 'FormaciÓ¬n completa para la conducciÓ¬n segura de carretillas elevadoras',
                  color: 'from-orange-500 to-red-500',
                },
                {
                  title: 'PEMP / Plataformas Elevadoras',
                  description: 'CertificaciÓ¬n para trabajar con plataformas elevadoras mÓ¬viles',
                  color: 'from-green-500 to-emerald-500',
                },
                {
                  title: 'Puente GrÚ¬a',
                  description: 'OperaciÓ¬n segura de puentes grÚ¬a en entornos industriales',
                  color: 'from-yellow-500 to-amber-500',
                },
                {
                  title: 'PrevenciÓ¬n de Riesgos Laborales',
                  description: 'FormaciÓ¬n bÁ¬sica y especÍ¬fica en prevenciÓ¬n de riesgos',
                  color: 'from-blue-500 to-cyan-500',
                },
                {
                  title: 'Carretilla Frontal',
                  description: 'EspecializaciÓ¬n en carretillas frontales y sus aplicaciones',
                  color: 'from-purple-500 to-pink-500',
                },
                {
                  title: 'Carretilla Retrá¬¬ctil',
                  description: 'TÉ¬cnicas avanzadas para carretillas retrá¬¬ctiles',
                  color: 'from-indigo-500 to-blue-500',
                },
              ].map((course, index) => (
                <Link href={`/cursos/${course.title.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <div className="card group cursor-pointer">
                    <div className={`h-40 bg-gradient-to-br ${course.color} rounded-lg mb-4 flex items-center justify-center`}>
                      <BookOpen size={48} className="text-white/80" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-industrial-orange transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>
                    <div className="flex items-center text-industrial-orange font-semibold">
                      Ver curso <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/cursos" className="btn-primary text-lg px-8">
                Ver Todos los Cursos
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-industrial-gray/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              ¿POR QUÉ¬ ELEGIRNOS?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award size={40} className="text-industrial-orange" />,
                  title: 'Certificado Profesional',
                  description: 'Diploma oficial con cÓ¬digo Ú­nico verificable',
                },
                {
                  icon: <Shield size={40} className="text-industrial-green" />,
                  title: 'FormaciÓ¬n Homologada',
                  description: 'Contenido actualizado segÚ¬n normativa vigente',
                },
                {
                  icon: <TrendingUp size={40} className="text-industrial-yellow" />,
                  title: 'Salida Laboral',
                  description: 'Mejora tus oportunidades en el sector industrial',
                },
              ].map((feature, index) => (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿LISTO PARA MEJORAR TU <span className="text-industrial-orange">FUTURO PROFESIONAL</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ú­nete a miles de operarios que ya han mejorado su formaciÓ¬n con nosotros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/registro" className="btn-primary text-lg px-8">
                Comenzar Ahora - Es Gratis
              </Link>
              <Link href="/contacto" className="btn-outline text-lg px-8">
                Contactar
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
