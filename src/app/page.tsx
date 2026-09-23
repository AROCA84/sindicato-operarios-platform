"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Formación para avanzar en tu trabajo
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Cursos online prácticos para trabajadores, afiliados y empresas. Aprende a tu ritmo, completa tu formación y obtén tu certificado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cursos"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
              >
                Ver cursos
              </Link>
              <Link
                href="/registro"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            ¿Por qué elegirnos?
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-orange-600 text-3xl font-bold">📚</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Aprende a tu ritmo
              </h3>
              <p className="mt-2 text-gray-600">
                Accede cuando quieras, desde cualquier dispositivo.
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-3xl font-bold">🎯</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Formación práctica
              </h3>
              <p className="mt-2 text-gray-600">
                Contenido directo, claro y aplicable a tu trabajo.
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-3xl font-bold">📊</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Sigue tu progreso
              </h3>
              <p className="mt-2 text-gray-600">
                Controla tu avance módulo a módulo.
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-600 text-3xl font-bold">✅</div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                Certificado verificable
              </h3>
              <p className="mt-2 text-gray-600">
                Obtén un certificado con código único de verificación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos destacados */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Cursos destacados
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Prevención de riesgos laborales
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Aprende a identificar y prevenir riesgos en tu entorno de trabajo.
              </p>
              <Link href="/cursos" className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium">
                Ver curso →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Seguridad en el uso de maquinaria
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Protocolos y buenas prácticas para operar maquinaria de forma segura.
              </p>
              <Link href="/cursos" className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium">
                Ver curso →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Formación básica para operarios de construcción
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Conceptos fundamentales para trabajar en el sector de la construcción.
              </p>
              <Link href="/cursos" className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium">
                Ver curso →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <h3 className="text-lg font-semibold text-gray-900">
                Logística y manipulación de cargas
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Técnicas seguras para el manejo y transporte de materiales.
              </p>
              <Link href="/cursos" className="mt-4 inline-block text-orange-600 hover:text-orange-700 font-medium">
                Ver curso →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Cómo funciona
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Crea tu cuenta
              </h3>
              <p className="mt-2 text-gray-600">
                Regístrate en pocos minutos.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Elige un curso
              </h3>
              <p className="mt-2 text-gray-600">
                Explora el catálogo e inscríbete.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Aprende y completa el test
              </h3>
              <p className="mt-2 text-gray-600">
                Estudia los módulos y supera la evaluación.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Obtén tu certificado
              </h3>
              <p className="mt-2 text-gray-600">
                Descarga y verifica tu certificado oficial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas */}
      <section className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Formación para tu equipo
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Ofrece a tus empleados formación práctica y accesible. Mejora las competencias de tu equipo con cursos diseñados para el mundo laboral.
          </p>
          <div className="mt-6">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-orange-600 hover:bg-orange-700 transition"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Certificados verificables
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Todos los certificados incluyen un código único que permite verificar su autenticidad de forma pública.
          </p>
          <div className="mt-6">
            <Link
              href="/verificar"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Verificar certificado
            </Link>
          </div>
        </div>
      </section>

      {/* Llamada final */}
      <section className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Empieza hoy tu formación
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Únete a trabajadores y empresas que ya están mejorando su cualificación.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cursos"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
            >
              Ver cursos
            </Link>
            <Link
              href="/registro"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Crear cuenta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Sindicato de Operarios Formación
            </p>
            <nav className="flex flex-wrap gap-4 text-sm text-gray-600">
              <Link href="/contacto" className="hover:text-gray-900">
                Contacto
              </Link>
              <Link href="/privacidad" className="hover:text-gray-900">
                Privacidad
              </Link>
              <Link href="/cookies" className="hover:text-gray-900">
                Cookies
              </Link>
              <Link href="/terminos" className="hover:text-gray-900">
                Términos
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
