import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-industrial-gray border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-industrial-orange to-industrial-yellow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SO</span>
              </div>
              <span className="text-xl font-bold gradient-text">
                SINDICATO DE OPERARIOS
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Plataforma de formaciÓ¬n online profesional para operarios y trabajadores industriales.
              Estudiar y hacer el test es gratis. Solo pagas al final si quieres obtener tu certificado.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-industrial-orange" />
                <span>sindicatooperarios@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle size={18} className="text-industrial-green" />
                <span>+34 642 077 425</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Enlaces RÁ¬pidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/registro" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  Registrarse
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  Iniciar SesiÓ¬n
                </Link>
              </li>
              <li>
                <Link href="/panel-alumno" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  Panel del Alumno
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aviso-legal" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  PolÍ¬tica de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  PolÍ¬tica de Cookies
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-industrial-orange transition-colors">
                  TÉ¬rminos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Sindicato de Operarios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
