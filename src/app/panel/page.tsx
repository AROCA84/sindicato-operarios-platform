"use client";

import Link from "next/link";

const cursosRecientesDemo = [
  { titulo: "Prevención de riesgos laborales", alumnos: 45, fecha: "20/09/2026" },
  { titulo: "Seguridad en maquinaria", alumnos: 32, fecha: "18/09/2026" },
  { titulo: "PRL en altura", alumnos: 28, fecha: "15/09/2026" },
];

const alumnosRecientesDemo = [
  { nombre: "María López", email: "maria@email.com", curso: "Prevención de riesgos laborales", fecha: "22/09/2026" },
  { nombre: "Carlos Ruiz", email: "carlos@email.com", curso: "Logística y cargas", fecha: "21/09/2026" },
  { nombre: "Ana Martín", email: "ana@email.com", curso: "Seguridad en maquinaria", fecha: "20/09/2026" },
];

export default function PanelDashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Vista general de la plataforma</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Panel completo
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Ver web
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos recientes */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Cursos recientes</h2>
          <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alumnos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cursosRecientesDemo.map((curso, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm text-gray-900">{curso.titulo}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{curso.alumnos}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{curso.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Alumnos recientes */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Alumnos recientes</h2>
          <div className="mt-4 bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alumnosRecientesDemo.map((alumno, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm text-gray-900">{alumno.nombre}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.curso}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enlaces de gestión */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900">Gestión rápida</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/admin/cursos"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Gestionar cursos
            </Link>
            <Link
              href="/admin/alumnos"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Gestionar alumnos
            </Link>
            <Link
              href="/admin/certificados"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Certificados
            </Link>
            <Link
              href="/admin/pagos"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Pagos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
