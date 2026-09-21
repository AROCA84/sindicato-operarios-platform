'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, User, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RegistroPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      // Redirect to login or dashboard
      router.push('/login?registered=true');
    } catch (err: any) {
      setError(err.message || 'Error al registrar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Volver al inicio
          </Link>

          <div className="card">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-industrial-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">SO</span>
              </div>
              <h1 className="text-2xl font-bold mb-2">Crear Cuenta Gratis</h1>
              <p className="text-gray-400">
                Regí¬¡strate y comienza a estudiar sin coste
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <User size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Tu nombre"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field pl-10"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ContraseÓ±a
                </label>
                <div className="relative">
                  <Lock size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="input-field pl-10"
                    placeholder="MÍ¬nimo 6 caracteres"
                    minLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Registrando...' : 'Registrarse Gratis'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                ¿Ya tienes cuenta?{' '}
                <Link href="/login" className="text-industrial-orange hover:underline">
                  Iniciar sesiÓ¬n
                </Link>
              </p>
            </div>

            <div className="mt-6 p-4 bg-industrial-green/10 border border-industrial-green/30 rounded-lg">
              <p className="text-sm text-gray-300 text-center">
                <strong className="text-industrial-green">GRATIS:</strong> Registro, acceso a cursos y tests
              </p>
              <p className="text-sm text-gray-400 text-center mt-1">
                Solo pagas 4,99 € si apruebas y quieres tu certificado
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
