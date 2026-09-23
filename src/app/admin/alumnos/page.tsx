"use client";

import Link from "next/link";
import { useState } from "react";

const alumnosDemo = [
  { id: 1, nombre: "María López", email: "maria@email.com", curso: "Prevención de riesgos laborales", fecha: "22/09/2026" },
  { id: 2, nombre: "Carlos Ruiz", email: "carlos@email.com", curso: "Logística y cargas", fecha: "21/09/2026" },
  { id: 3, nombre: "Ana Martín", email: "ana@email.com", curso: "Seguridad en maquinaria", fecha: "20/09/2026" },
  { id: 4, nombre: "Luis García", email: "luis@email.com", curso: "PRL en altura", fecha: "19/09/2026" },
];

export default function AdminAlumnosPage() {
  const [busqueda, setBusqueda] = useState("");

  const alumnosFiltrados = alumnosDemo.filter(
    (a) =>
      a.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      a.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestión de alumnos</h1>
              <p className="text-gray-600">Ver y gestionar usuarios inscritos</p>
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

      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {alumnosFiltrados.map((alumno) => (
                  <tr key={alumno.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{alumno.nombre}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.curso}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{alumno.fecha}</td>
                    <td className="px-6 py-4 text-right text-sm">
                      <button className="text-orange-600 hover:text-orange-800 font-medium mr-3">Ver</button>
                      <button className="text-red-600 hover:text-red-800 font-medium">Eliminar</button>
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
