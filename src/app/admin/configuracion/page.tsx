"use client";

import Link from "next/link";

export default function AdminConfiguracionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
              <p className="text-gray-600">Ajustes generales de la plataforma</p>
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
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900">Configuración general</h2>
            <p className="mt-2 text-gray-600">Esta página está en construcción. Aquí podrás configurar:</p>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              <li>Nombre y logo de la plataforma</li>
              <li>Correo electrónico de contacto</li>
              <li>Claves de API de Stripe y Supabase</li>
              <li>Nota mínima para aprobar cursos</li>
              <li>Configuración de certificados</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/admin"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
              >
                Volver al panel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
