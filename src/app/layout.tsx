import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SINDICATO DE OPERARIOS - Formación Online Profesional',
  description: 'Plataforma de formación online para operarios y trabajadores industriales. Estudiar y hacer el test es gratis. Solo pagas al final si quieres obtener tu certificado.',
  keywords: 'formaciÓ¬n, operarios, industrial, cursos, certificado, carretillero, PEMP, puente grÚ¬a, prevenciÓ¬n riesgos',
  authors: [{ name: 'Sindicato de Operarios' }],
  openGraph: {
    title: 'SINDICATO DE OPERARIOS',
    description: 'FormaciÓ¬n online profesional para operarios industriales',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-industrial-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
