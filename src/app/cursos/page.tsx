"use client";

import Link from "next/link";
import { useState } from "react";

const cursosDemo = [
  {
    slug: "prevencion-riesgos-laborales",
    titulo: "Prevención de riesgos laborales",
    descripcion: "Aprende a identificar y prevenir riesgos en tu entorno de trabajo.",
    duracion: "4 horas",
    nivel: "Básico",
    precio: "49€",
    categoria: "Prevención",
  },
  {
    slug: "seguridad-maquinaria",
    titulo: "Seguridad en el uso de maquinaria",
    descripcion: "Protocolos y buenas prácticas para operar maquinaria de forma segura.",
    duracion: "5 horas",
    nivel: "Intermedio",
    precio: "59€",
    categoria: "Maquinaria",
  },
  {
    slug: "operarios-construccion",
    titulo: "Formación básica para operarios de construcción",
    descripcion: "Conceptos fundamentales para trabajar en el sector de la construcción.",
    duracion: "6 horas",
    nivel: "Básico",
    precio: "69€",
    categoria: "Construcción",
  },
  {
    slug: "logistica-cargas",
    titulo: "Logística y manipulación de cargas",
    descripcion: "Técnicas seguras para el manejo y transporte de materiales.",
    duracion: "4 horas",
    nivel: "Básico",
    precio: "49€",
    categoria: "Logística",
  },
  {
    slug: "prl-altura",
    titulo: "PRL en trabajos en altura",
    descripcion: "Seguridad y equipos de protección para trabajos en altura.",
    duracion: "5 horas",
    nivel: "Intermedio",
    precio: "59€",
    categoria: "Prevención",
  },
  {
    slug: "carretillero",
    titulo: "Carretillero principiante",
    descripcion: "Formación inicial para la conducción segura de carretillas elevadoras.",
    duracion: "8 horas",
    nivel: "Básico",
    precio: "79€",
    categoria: "Maquinaria",
  },
];

export default function CursosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState<string>("Todas");
  const [busqueda, setBusqueda] = useState("");

  const categorias = ["Todas", "Prevención", "Maquinaria", "Construcción", "Logística"];

  const cursosFiltrados = cursosDemo.filter((curso) => {
    const coincideCategoria = filtroCategoria === "Todas" || curso.categoria === filtroCategoria;
    const coincideBusqueda =
      curso.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      curso.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Cursos disponibles</h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Explora nuestra oferta formativa. Cursos prácticos diseñados para trabajadores y empresas.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="busqueda" className="sr-only">
                Buscar curso
              </label>
              <input
                id="busqueda"
                type="text"
                placeholder="Buscar por nombre o descripción..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label htmlFor="categoria" className="sr-only">
                Categoría
              </label>
              <select
                id="categoria"
                value={filtroCategoria}
                onChange={(e) => setFiltroCategoria(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listado de cursos */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {cursosFiltrados.length === 0 ? (
            <div className="text-center text-gray-600">
              <p>No hay cursos que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cursosFiltrados.map((curso) => (
                <div key={curso.slug} className="bg-white rounded-lg shadow p-5 flex flex-col">
                  <h2 className="text-xl font-semibold text-gray-900">{curso.titulo}</h2>
                  <p className="mt-2 text-gray-600 text-sm flex-1">{curso.descripcion}</p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
                    <span>⏱ {curso.duracion}</span>
                    <span>📊 {curso.nivel}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">{curso.precio}</span>
                    <Link
                      href={`/cursos/${curso.slug}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                    >
                      Ver curso
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Llamada final */}
      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">¿No encuentras el curso que buscas?</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Cuéntanos qué formación necesitas y te ayudaremos a encontrarla o diseñarla.
          </p>
          <div className="mt-6">
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
