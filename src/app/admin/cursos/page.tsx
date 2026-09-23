"use client";

import Link from "next/link";
import { useState } from "react";

const cursosDemo = [
  { id: 1, titulo: "Prevención de riesgos laborales", alumnos: 45, estado: "Activo" },
  { id: 2, titulo: "Seguridad en el uso de maquinaria", alumnos: 32, estado: "Activo" },
  { id: 3, titulo: "PRL en trabajos en altura", alumnos: 28, estado: "Activo" },
  { id: 4, titulo: "Logística y manipulación de cargas", alumnos: 51, estado: "Activo" },
  { id: 5, titulo: "Carretillero principiante", alumnos: 19, estado: "Borrador" },
];

export default function AdminCursosPage() {
  const [busqueda, setBusqueda] = useState("");

  const cursosFiltrados = cursosDemo.filter((c) =>
    c.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Gestión de cursos</h1>
              <p className="text-gray-600">Crear, editar y eliminar cursos</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition"
              >
                Volver al panel
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition">
                Nuevo curso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </section>

      {/* Listado de cursos */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alumnos</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {cursosFiltrados.map((curso) => (
                  <tr key={curso.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{curso.titulo}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{curso.alumnos}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          curso.estado === "Activo"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {curso.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right text-sm">
                      <button className="text-orange-600 hover:text-orange-800 font-medium mr-3">Editar</button>
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
