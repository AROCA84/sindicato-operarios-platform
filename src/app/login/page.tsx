"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(false);

  const puedeEnviar = email && password;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center">Iniciar sesión</h1>
          <p className="mt-2 text-center text-gray-600">Accede a tu área de alumno</p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu contraseña"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="recordar"
                  type="checkbox"
                  checked={recordar}
                  onChange={(e) => setRecordar(e.target.checked)}
                  className="h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                />
                <label htmlFor="recordar" className="ml-2 text-sm text-gray-700">
                  Recordarme
                </label>
              </div>
              <Link href="/contacto" className="text-sm text-orange-600 hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button
              type="button"
              disabled={!puedeEnviar}
              className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white transition ${
                puedeEnviar
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Entrar
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            ¿Aún no tienes cuenta?{" "}
            <Link href="/registro" className="text-orange-600 hover:underline font-medium">
              Regístrate
            </Link>
          </p>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-5">
          <h2 className="text-sm font-semibold text-gray-900">Beneficios de tu cuenta</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Acceso inmediato a tus cursos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Progreso guardado automáticamente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Certificados disponibles 24/7</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Soporte para empresas y afiliados</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
