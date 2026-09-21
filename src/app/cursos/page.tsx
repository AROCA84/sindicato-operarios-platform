'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { BookOpen, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Course {
  id: number;
  title: string;
  description: string;
  image_url: string | null;
  passing_percentage: number;
  category: { name: string } | null;
}

export default function CursosPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const { data, error } = await supabase
        .from('courses')
        .select('*, category:categories(name)')
        .eq('is_active', true)
        .order('title');

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || course.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(courses.map(c => c.category?.name).filter(Boolean))) as string[];

  return (
    <>
      <Header />
      
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">TODOS LOS CURSOS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              FormaciÓ¬n profesional para operarios industriales. Estudia gratis, haz el test gratis.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cursos..."
                className="input-field pl-10"
              />
            </div>

            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    !selectedCategory
                      ? 'bg-industrial-orange text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Todos
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-industrial-orange text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Courses Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-industrial-orange mx-auto"></div>
              <p className="text-gray-400 mt-4">Cargando cursos...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <Link href={`/cursos/${course.id}`} key={course.id}>
                  <div className="card group cursor-pointer">
                    <div className="h-40 bg-gradient-to-br from-industrial-orange/20 to-industrial-green/20 rounded-lg mb-4 flex items-center justify-center">
                      <BookOpen size={48} className="text-industrial-orange/60" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-industrial-orange transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Aprobado: {course.passing_percentage}%
                      </span>
                      <span className="text-industrial-green font-medium">
                        Gratis
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {filteredCourses.length === 0 && !loading && (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">No se encontraron cursos</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
