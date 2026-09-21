'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      // Redirect to dashboard
      router.push('/panel-alumno');
    } catch (err: any) {
      setError(err.message || 'Error al iniciar sesiÓ¬n');
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
              <h1 className="text-2xl font-bold mb-2">Iniciar SesiÓ¬n</h1>
              <p className="text-gray-400">
                Accede a tu cuenta para continuar estudiando
              </p>
            </div>

            {registered && (
              <div className="bg-industrial-green/10 border border-industrial-green text-industrial-green p-4 rounded-lg mb-6">
                ¡Registro completado! Ahora inicia sesiÓ¬n
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Tu contraseÓ±a"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Iniciando...' : 'Iniciar SesiÓ¬n'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                ¿No tienes cuenta?{' '}
                <Link href="/registro" className="text-industrial-orange hover:underline">
                  Registrarse gratis
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
