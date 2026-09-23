"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegistroPage() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const fortalezaPassword = (() => {
    if (password.length === 0) return { nivel: 0, texto: "", color: "bg-gray-200" };
    let puntos = 0;
    if (password.length >= 8) puntos++;
    if (/[A-Z]/.test(password)) puntos++;
    if (/[0-9]/.test(password)) puntos++;
    if (/[^A-Za-z0-9]/.test(password)) puntos++;

    if (puntos <= 1) return { nivel: 1, texto: "Débil", color: "bg-red-500" };
    if (puntos <= 2) return { nivel: 2, texto: "Media", color: "bg-yellow-500" };
    if (puntos <= 3) return { nivel: 3, texto: "Buena", color: "bg-blue-500" };
    return { nivel: 4, texto: "Fuerte", color: "bg-green-500" };
  })();

  const puedeEnviar = nombre && email && password && confirmPassword && password === confirmPassword && aceptaTerminos;

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center">Crear cuenta</h1>
          <p className="mt-2 text-center text-gray-600">Únete a Sindicato de Operarios Formación</p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tu nombre"
              />
            </div>

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
                placeholder="Mínimo 8 caracteres"
              />
              {password.length > 0 && (
                <div className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${fortalezaPassword.color} transition-all`}
                        style={{ width: `${(fortalezaPassword.nivel / 4) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">{fortalezaPassword.texto}</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Repite tu contraseña"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-1 text-xs text-red-600">Las contraseñas no coinciden</p>
              )}
            </div>

            <div className="flex items-start">
              <input
                id="terminos"
                type="checkbox"
                checked={aceptaTerminos}
                onChange={(e) => setAceptaTerminos(e.target.checked)}
                className="mt-1 h-4 w-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <label htmlFor="terminos" className="ml-2 text-sm text-gray-700">
                Acepto los{" "}
                <Link href="/terminos" className="text-orange-600 hover:underline">
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link href="/privacidad" className="text-orange-600 hover:underline">
                  política de privacidad
                </Link>
              </label>
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
              Crear cuenta
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-orange-600 hover:underline font-medium">
              Inicia sesión
            </Link>
          </p>
        </div>

        <div className="mt-6 bg-white rounded-lg shadow p-5">
          <h2 className="text-sm font-semibold text-gray-900">Ventajas de crear una cuenta</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Acceso a todos los cursos inscritos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Seguimiento de tu progreso</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Certificados verificables</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>Formación 100% online a tu ritmo</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
