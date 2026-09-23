"use client";

import Link from "next/link";

const statsDemo = {
  cursos: 12,
  alumnos: 348,
  certificados: 892,
  ingresosMes: "4.250€",
};

const seccionesGestion = [
  {
    titulo: "Cursos",
    descripcion: "Crear, editar y eliminar cursos, módulos y lecciones.",
    href: "/admin/cursos",
    color: "bg-orange-600",
  },
  {
    titulo: "Alumnos",
    descripcion: "Gestionar usuarios, inscripciones y progreso.",
    href: "/admin/alumnos",
    color: "bg-blue-600",
  },
  {
    titulo: "Inscripciones",
    descripcion: "Ver y gestionar inscripciones a cursos.",
    href: "/admin/inscripciones",
    color: "bg-green-600",
  },
  {
    titulo: "Certificados",
    descripcion: "Emitir, descargar y verificar certificados.",
    href: "/admin/certificados",
    color: "bg-purple-600",
  },
  {
    titulo: "Pagos",
    descripcion: "Revisar pedidos y pagos con Stripe.",
    href: "/admin/pagos",
    color: "bg-gray-700",
  },
  {
    titulo: "Configuración",
    descripcion: "Ajustes generales de la plataforma.",
    href: "/admin/configuracion",
    color: "bg-gray-600",
  },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel de administración</h1>
              <p className="text-gray-600">Gestión de cursos, alumnos y certificados</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Ver web
              </Link>
              <Link
                href="/panel-alumno"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Panel alumno
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Resumen</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Total de cursos</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{statsDemo.cursos}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Total de alumnos</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{statsDemo.alumnos}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Certificados emitidos</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{statsDemo.certificados}</div>
            </div>
            <div className="bg-white rounded-lg shadow p-5">
              <div className="text-sm text-gray-600">Ingresos este mes</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{statsDemo.ingresosMes}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gestión */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Gestión</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {seccionesGestion.map((seccion) => (
              <Link
                key={seccion.titulo}
                href={seccion.href}
                className="bg-white rounded-lg shadow p-5 hover:shadow-md transition"
              >
                <div className={`inline-block px-3 py-1 text-xs font-medium text-white rounded ${seccion.color}`}>
                  {seccion.titulo}
                </div>
                <p className="mt-3 text-gray-700">{seccion.descripcion}</p>
                <div className="mt-4 text-sm text-orange-600 font-medium">
                  Gestionar →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Accesos rápidos</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/cursos"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Catálogo de cursos
            </Link>
            <Link
              href="/registro"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Página de registro
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Página de login
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
