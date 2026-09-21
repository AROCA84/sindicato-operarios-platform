'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { BookOpen, Award, TrendingUp, User, LogOut, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: 'admin' | 'student';
}

interface Enrollment {
  id: number;
  course: {
    id: number;
    title: string;
    image_url: string | null;
  };
  progress: number;
  completed_at: string | null;
}

interface QuizResult {
  id: number;
  course: {
    id: number;
    title: string;
  };
  percentage: number;
  passed: boolean;
  completed_at: string;
}

interface Certificate {
  id: number;
  certificate_code: string;
  course: {
    title: string;
  };
  issued_at: string;
}

export default function PanelAlumnoPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }

      // Load profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setProfile(profileData);

      // Load enrollments
      const { data: enrollmentsData } = await supabase
        .from('enrollments')
        .select('id, progress, completed_at, course:courses(id, title, image_url)')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      setEnrollments(enrollmentsData || []);

      // Load quiz results
      const { data: quizData } = await supabase
        .from('quiz_results')
        .select('id, percentage, passed, completed_at, course:courses(id, title)')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false });

      setQuizResults(quizData || []);

      // Load certificates
      const { data: certData } = await supabase
        .from('certificates')
        .select('id, certificate_code, issued_at, course:courses(title)')
        .eq('user_id', user.id)
        .order('issued_at', { ascending: false });

      setCertificates(certData || []);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-industrial-orange mx-auto mb-4"></div>
            <p className="text-gray-400">Cargando...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="card mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange to-industrial-yellow rounded-full flex items-center justify-center">
                  <User size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{profile?.full_name || 'Alumno'}</h1>
                  <p className="text-gray-400">{profile?.email}</p>
                  {profile?.role === 'admin' && (
                    <span className="inline-block mt-1 px-2 py-1 bg-industrial-orange/20 text-industrial-orange text-xs rounded">
                      Administrador
                    </span>
                  )}
                </div>
              </div>
              <button onClick={handleLogout} className="btn-outline flex items-center gap-2">
                <LogOut size={18} />
                Salir
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="card">
              <div className="flex items-center gap-3">
                <BookOpen size={24} className="text-industrial-orange" />
                <div>
                  <p className="text-2xl font-bold">{enrollments.length}</p>
                  <p className="text-gray-400 text-sm">Cursos Inscritos</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <CheckCircle size={24} className="text-industrial-green" />
                <div>
                  <p className="text-2xl font-bold">
                    {enrollments.filter(e => e.completed_at).length}
                  </p>
                  <p className="text-gray-400 text-sm">Cursos Completados</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <Award size={24} className="text-industrial-yellow" />
                <div>
                  <p className="text-2xl font-bold">{certificates.length}</p>
                  <p className="text-gray-400 text-sm">Certificados</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <TrendingUp size={24} className="text-industrial-green" />
                <div>
                  <p className="text-2xl font-bold">
                    {quizResults.length > 0
                      ? Math.round(quizResults.reduce((acc, r) => acc + Number(r.percentage), 0) / quizResults.length)
                      : 0}%
                  </p>
                  <p className="text-gray-400 text-sm">Nota Media</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* My Courses */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-industrial-orange" />
                Mis Cursos
              </h2>
              {enrollments.length === 0 ? (
                <div className="card text-center py-8">
                  <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400 mb-4">AÚ¬n no estÁ¬s inscrito en ningÚ¬n curso</p>
                  <Link href="/cursos" className="btn-primary">
                    Ver Cursos Disponibles
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {enrollments.map(enrollment => (
                    <Link
                      href={`/cursos/${enrollment.course.id}`}
                      key={enrollment.id}
                      className="card flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-industrial-orange/20 to-industrial-green/20 rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-industrial-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold group-hover:text-industrial-orange transition-colors">
                          {enrollment.course.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex-1 bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-industrial-orange h-2 rounded-full transition-all"
                              style={{ width: `${enrollment.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-400">{enrollment.progress}%</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quiz Results */}
            <div>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText size={20} className="text-industrial-green" />
                Resultados de Tests
              </h2>
              {quizResults.length === 0 ? (
                <div className="card text-center py-8">
                  <FileText size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400">AÚ¬n no has realizado ningÚ¬n test</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {quizResults.map(result => (
                    <div key={result.id} className="card">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold">{result.course.title}</h3>
                          <p className="text-sm text-gray-400">
                            {new Date(result.completed_at).toLocaleDateString('es-ES')}
                          </p>
                        </div>
                        <div className={`text-2xl font-bold ${
                          result.passed ? 'text-industrial-green' : 'text-red-500'
                        }`}>
                          {Math.round(Number(result.percentage))}%
                        </div>
                      </div>
                      {result.passed && (
                        <div className="mt-2 text-industrial-green text-sm">
                          ¡Aprobado! ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Certificates */}
          {certificates.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award size={20} className="text-industrial-yellow" />
                Mis Certificados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map(cert => (
                  <div key={cert.id} className="card">
                    <Award size={32} className="text-industrial-yellow mb-3" />
                    <h3 className="font-bold mb-1">{cert.course.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">
                      CÓ¬digo: {cert.certificate_code}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(cert.issued_at).toLocaleDateString('es-ES')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admin Link */}
          {profile?.role === 'admin' && (
            <div className="mt-8">
              <Link href="/admin" className="card border-industrial-orange hover:border-industrial-orange/60">
                <h2 className="text-xl font-bold mb-2">Panel de AdministraciÓ¬n</h2>
                <p className="text-gray-400">
                  Gestionar cursos, alumnos, certificados y configuraciÓ¬n
                </p>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
