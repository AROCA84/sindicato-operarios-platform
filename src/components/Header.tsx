'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-industrial-gray/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-industrial-orange to-industrial-yellow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SO</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              SINDICATO DE OPERARIOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/cursos" className="text-gray-300 hover:text-industrial-orange transition-colors">
              Cursos
            </Link>
            <Link href="/sobre-nosotros" className="text-gray-300 hover:text-industrial-orange transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-300 hover:text-industrial-orange transition-colors">
              Contacto
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-industrial-orange transition-colors">
              Iniciar SesiÓ¬n
            </Link>
            <Link href="/registro" className="btn-primary">
              Registrarse Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link href="/cursos" className="text-gray-300 hover:text-industrial-orange transition-colors py-2">
                Cursos
              </Link>
              <Link href="/sobre-nosotros" className="text-gray-300 hover:text-industrial-orange transition-colors py-2">
                Sobre Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-300 hover:text-industrial-orange transition-colors py-2">
                Contacto
              </Link>
              <Link href="/login" className="text-gray-300 hover:text-industrial-orange transition-colors py-2">
                Iniciar SesiÓ¬n
              </Link>
              <Link href="/registro" className="btn-primary text-center">
                Registrarse Gratis
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
