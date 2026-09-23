"use client";

import Link from "next/link";

const pagosDemo = [
  { id: "PAY-001", alumno: "María López", curso: "Logística y cargas", importe: "49€", estado: "Completado", fecha: "15/09/2026" },
  { id: "PAY-002", alumno: "Carlos Ruiz", curso: "Prevención de riesgos laborales", importe: "49€", estado: "Completado", fecha: "14/09/2026" },
  { id: "PAY-003", alumno: "Ana Martín", curso: "Seguridad en maquinaria", importe: "59€", estado: "Pendiente", fecha: "13/09/2026" },
];

export default function AdminPagosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pagos</h1>
              <p className="text-gray-600">Revisar pedidos y pagos con Stripe</p>
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Alumno</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Importe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pagosDemo.map((pago) => (
                  <tr key={pago.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{pago.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pago.alumno}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pago.curso}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">{pago.importe}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          pago.estado === "Completado"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {pago.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{pago.fecha}</td>
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
