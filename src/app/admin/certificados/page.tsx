"use client";

import Link from "next/link";

const certificadosDemo = [
  { codigo: "CERT-2026-001234", alumno: "María López", curso: "Logística y cargas", fecha: "15/09/2026" },
  { codigo: "CERT-2026-001235", alumno: "Carlos Ruiz", curso: "Prevención de riesgos laborales", fecha: "14/09/2026" },
  { codigo: "CERT-2026-001236", alumno: "Ana Martín", curso: "Seguridad en maquinaria", fecha: "13/09/2026" },
];

export default function AdminCertificadosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Certificados</h1>
              <p className="text-gray-600">Emitir y gestionar certificados</p>
            </div>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              Volver al panel
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Código</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alumno</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {certificadosDemo.map((cert) => (
                  <tr key={cert.codigo}>
                    <td className="px-6 py-4 text-sm text-gray-900">{cert.codigo}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{cert.alumno}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{cert.curso}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{cert.fecha}</td>
                    <td className="px-6 py-4 text-right text-sm">
                      <button className="text-orange-600 hover:text-orange-800 font-medium mr-3">Descargar</button>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">Verificar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
