"use client";

import Link from "next/link";

const alumnoDemo = {
  nombre: "Juan García",
  email: "juan.garcia@email.com",
};

const cursosInscritosDemo = [
  {
    slug: "prevencion-riesgos-laborales",
    titulo: "Prevención de riesgos laborales",
    progreso: 65,
    estado: "En progreso",
  },
  {
    slug: "seguridad-maquinaria",
    titulo: "Seguridad en el uso de maquinaria",
    progreso: 0,
    estado: "Pendiente",
  },
  {
    slug: "logistica-cargas",
    titulo: "Logística y manipulación de cargas",
    progreso: 100,
    estado: "Completado",
  },
];

const certificadosDemo = [
  {
    codigo: "CERT-2026-001234",
    curso: "Logística y manipulación de cargas",
    fecha: "15/09/2026",
  },
];

export default function PanelAlumnoPage() {
  const cursosCompletados = cursosInscritosDemo.filter((c) => c.estado === "Completado").length;
  const certificadosObtenidos = certificadosDemo.length;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hola, {alumnoDemo.nombre}</h1>
              <p className="text-gray-600">{alumnoDemo.email}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Cerrar sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resumen */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Cursos inscritos</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{cursosInscritosDemo.length}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Cursos completados</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{cursosCompletados}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Certificados obtenidos</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{certificadosObtenidos}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mis cursos */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Mis cursos</h2>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {cursosInscritosDemo.map((curso) => (
              <div key={curso.slug} className="bg-white rounded-lg shadow p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{curso.titulo}</h3>
                    <p className="mt-1 text-sm text-gray-600">Estado: {curso.estado}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      curso.estado === "Completado"
                        ? "bg-green-100 text-green-800"
                        : curso.estado === "En progreso"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {curso.estado}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Progreso</span>
                    <span>{curso.progreso}%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        curso.progreso === 100
                          ? "bg-green-500"
                          : curso.progreso > 0
                          ? "bg-orange-600"
                          : "bg-gray-400"
                      }`}
                      style={{ width: `${curso.progreso}%` }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/cursos/${curso.slug}`}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                  >
                    {curso.progreso === 0 ? "Comenzar" : "Continuar"}
                  </Link>
                  {curso.estado === "Completado" && (
                    <Link
                      href="/certificado"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                    >
                      Ver certificado
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificados */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Mis certificados</h2>
          {certificadosDemo.length === 0 ? (
            <p className="mt-4 text-gray-600">Aún no tienes certificados. Completa un curso para obtener el tuyo.</p>
          ) : (
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              {certificadosDemo.map((cert) => (
                <div key={cert.codigo} className="bg-white rounded-lg shadow p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{cert.curso}</h3>
                      <p className="mt-1 text-sm text-gray-600">Código: {cert.codigo}</p>
                      <p className="text-sm text-gray-600">Fecha: {cert.fecha}</p>
                    </div>
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">
                      Disponible
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href="/certificado"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                    >
                      Descargar
                    </Link>
                    <Link
                      href="/verificar"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
                    >
                      Verificar
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Navegación rápida */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Navegación rápida</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/cursos"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Explorar cursos
            </Link>
            <Link
              href="/verificar"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Verificar certificado
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Contacto / Soporte
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
