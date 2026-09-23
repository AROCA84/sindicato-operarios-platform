"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const cursosDB: Record<
  string,
  {
    titulo: string;
    categoria: string;
    nivel: string;
    duracion: string;
    precio: string;
    descripcion: string;
    objetivos: string[];
    modulos: { titulo: string; lecciones: string[]; duracion: string }[];
    requisitos: string[];
    faqs: { pregunta: string; respuesta: string }[];
  }
> = {
  "prevencion-riesgos-laborales": {
    titulo: "Prevención de riesgos laborales",
    categoria: "Prevención",
    nivel: "Básico",
    duracion: "4 horas",
    precio: "49€",
    descripcion:
      "Este curso te enseña a identificar y prevenir los riesgos más comunes en el entorno laboral. Aprenderás conceptos básicos de seguridad, normativa aplicable y buenas prácticas para proteger tu salud y la de tus compañeros.",
    objetivos: [
      "Identificar riesgos laborales habituales.",
      "Conocer la normativa básica de prevención.",
      "Aplicar medidas de prevención y protección.",
      "Fomentar una cultura de seguridad en el trabajo.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: Introducción a la PRL",
        lecciones: ["Conceptos básicos", "Normativa vigente", "Responsabilidades"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Riesgos comunes",
        lecciones: ["Caídas", "Golpes y cortes", "Esfuerzos físicos"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 3: Equipos de protección",
        lecciones: ["EPIs básicos", "Uso correcto", "Mantenimiento"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 4: Emergencias",
        lecciones: ["Protocolos de actuación", "Primeros auxilios básicos"],
        duracion: "0,5 horas",
      },
    ],
    requisitos: ["No se requieren conocimientos previos."],
    faqs: [
      {
        pregunta: "¿El certificado es válido para todas las empresas?",
        respuesta: "El certificado acredita la formación recibida. Algunas empresas o sectores pueden requerir formación específica adicional.",
      },
      {
        pregunta: "¿Puedo hacer el curso a mi ritmo?",
        respuesta: "Sí, el curso es 100% online y puedes acceder cuando quieras.",
      },
    ],
  },
  "seguridad-maquinaria": {
    titulo: "Seguridad en el uso de maquinaria",
    categoria: "Maquinaria",
    nivel: "Intermedio",
    duracion: "5 horas",
    precio: "59€",
    descripcion:
      "Aprende a operar maquinaria de forma segura. Este curso cubre protocolos de seguridad, inspecciones previas y buenas prácticas para evitar accidentes.",
    objetivos: [
      "Conocer los riesgos asociados al uso de maquinaria.",
      "Realizar inspecciones previas al uso.",
      "Aplicar protocolos de seguridad.",
      "Actuar correctamente en caso de incidente.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: Riesgos en maquinaria",
        lecciones: ["Tipos de maquinaria", "Riesgos principales", "Accidentes habituales"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Inspección y mantenimiento",
        lecciones: ["Checklist previo", "Mantenimiento básico", "Señalización"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 3: Operación segura",
        lecciones: ["Procedimientos de arranque", "Uso correcto", "Parada segura"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 4: Emergencias",
        lecciones: ["Parada de emergencia", "Protocolos de actuación"],
        duracion: "1 hora",
      },
    ],
    requisitos: ["Conocimientos básicos del sector.", "Experiencia previa recomendada."],
    faqs: [
      {
        pregunta: "¿Este curso habilita para operar cualquier maquinaria?",
        respuesta: "No. Este curso es formativo general. Para maquinaria específica puede ser necesaria formación adicional certificada.",
      },
    ],
  },
  "operarios-construccion": {
    titulo: "Formación básica para operarios de construcción",
    categoria: "Construcción",
    nivel: "Básico",
    duracion: "6 horas",
    precio: "69€",
    descripcion:
      "Curso introductorio para personas que quieren trabajar en el sector de la construcción. Cubre seguridad, herramientas básicas y conceptos fundamentales.",
    objetivos: [
      "Conocer el entorno de trabajo en construcción.",
      "Identificar riesgos específicos del sector.",
      "Manejar herramientas básicas de forma segura.",
      "Entender la organización de una obra.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: El sector de la construcción",
        lecciones: ["Tipos de obra", "Agentes intervinientes", "Organización básica"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Seguridad en obra",
        lecciones: ["EPIs", "Señalización", "Riesgos habituales"],
        duracion: "2 horas",
      },
      {
        titulo: "Módulo 3: Herramientas básicas",
        lecciones: ["Herramientas manuales", "Pequeña maquinaria", "Mantenimiento"],
        duracion: "2 horas",
      },
      {
        titulo: "Módulo 4: Buenas prácticas",
        lecciones: ["Orden y limpieza", "Trabajo en equipo", "Comunicación"],
        duracion: "1 hora",
      },
    ],
    requisitos: ["No se requieren conocimientos previos."],
    faqs: [
      {
        pregunta: "¿Este curso es obligatorio para trabajar en construcción?",
        respuesta: "Depende del país y la empresa. Este curso es formativo y puede complementar la formación oficial requerida.",
      },
    ],
  },
  "logistica-cargas": {
    titulo: "Logística y manipulación de cargas",
    categoria: "Logística",
    nivel: "Básico",
    duracion: "4 horas",
    precio: "49€",
    descripcion:
      "Aprende técnicas seguras para el manejo, almacenamiento y transporte de materiales. Ideal para operarios de almacén, logística y distribución.",
    objetivos: [
      "Manipular cargas de forma ergonómica.",
      "Conocer equipos de manutención básicos.",
      "Organizar espacios de almacenamiento.",
      "Prevenir lesiones por esfuerzos.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: Principios de manipulación",
        lecciones: ["Ergonomía", "Posturas correctas", "Límites de peso"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Equipos de manutención",
        lecciones: ["Carretillas manuales", "Transpaletas", "Mantenimiento"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 3: Almacenamiento",
        lecciones: ["Organización", "Apilamiento", "Señalización"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 4: Transporte interno",
        lecciones: ["Rutas seguras", "Normas de circulación", "Carga y descarga"],
        duracion: "0,5 horas",
      },
    ],
    requisitos: ["No se requieren conocimientos previos."],
    faqs: [
      {
        pregunta: "¿Este curso incluye certificación para carretillero?",
        respuesta: "No. Este curso es introductorio. La certificación oficial de carretillero requiere formación práctica presencial.",
      },
    ],
  },
  "prl-altura": {
    titulo: "PRL en trabajos en altura",
    categoria: "Prevención",
    nivel: "Intermedio",
    duracion: "5 horas",
    precio: "59€",
    descripcion:
      "Formación específica para trabajos en altura. Aprenderás a usar equipos de protección, anclajes y protocolos de seguridad.",
    objetivos: [
      "Identificar riesgos en trabajos en altura.",
      "Seleccionar y usar EPIs adecuados.",
      "Conocer sistemas de anclaje.",
      "Actuar en caso de emergencia.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: Riesgos en altura",
        lecciones: ["Tipos de trabajos", "Riesgos principales", "Legislación"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Equipos de protección",
        lecciones: ["Arnés", "Casco", "Calzado", "Otros EPIs"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 3: Anclajes y líneas de vida",
        lecciones: ["Tipos de anclaje", "Instalación", "Inspección"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 4: Rescate y emergencia",
        lecciones: ["Protocolos", "Primeros auxilios", "Evacuación"],
        duracion: "1 hora",
      },
    ],
    requisitos: ["Formación básica en PRL recomendada."],
    faqs: [
      {
        pregunta: "¿Este curso sustituye la formación oficial en altura?",
        respuesta: "No. Este curso es complementario. La formación oficial requiere prácticas presenciales certificadas.",
      },
    ],
  },
  carretillero: {
    titulo: "Carretillero principiante",
    categoria: "Maquinaria",
    nivel: "Básico",
    duracion: "8 horas",
    precio: "79€",
    descripcion:
      "Introducción a la conducción segura de carretillas elevadoras. Ideal para personas que quieren iniciarse en este perfil profesional.",
    objetivos: [
      "Conocer los tipos de carretillas.",
      "Realizar inspecciones previas.",
      "Manejar la carretilla de forma segura.",
      "Cargar y descargar correctamente.",
    ],
    modulos: [
      {
        titulo: "Módulo 1: Tipos de carretillas",
        lecciones: ["Carretillas frontales", "Retráctiles", "Preparadoras de pedidos"],
        duracion: "1 hora",
      },
      {
        titulo: "Módulo 2: Inspección y mantenimiento",
        lecciones: ["Checklist diario", "Niveles", "Averías comunes"],
        duracion: "1,5 horas",
      },
      {
        titulo: "Módulo 3: Conducción segura",
        lecciones: ["Maniobras básicas", "Circuitos", "Normas de circulación"],
        duracion: "3 horas",
      },
      {
        titulo: "Módulo 4: Carga y descarga",
        lecciones: ["Estiba", "Apilamiento", "Precauciones"],
        duracion: "2,5 horas",
      },
    ],
    requisitos: ["Mayor de edad.", "No se requiere experiencia previa."],
    faqs: [
      {
        pregunta: "¿Este curso da el carnet oficial de carretillero?",
        respuesta: "No. El carnet oficial requiere formación práctica presencial con entidad certificada. Este curso es una base teórica.",
      },
    ],
  },
};

export default function CursoDetallePage() {
  const params = useParams();
  const slug = params.slug as string;
  const curso = cursosDB[slug];

  if (!curso) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Curso no encontrado</h1>
          <p className="mt-2 text-gray-600">El curso que buscas no existe o ha sido eliminado.</p>
          <Link
            href="/cursos"
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
          >
            Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Encabezado */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/cursos"
            className="text-sm text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
          >
            ← Volver al catálogo
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{curso.titulo}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="px-2 py-1 bg-gray-100 rounded">{curso.categoria}</span>
            <span>📊 {curso.nivel}</span>
            <span>⏱ {curso.duracion}</span>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Columna izquierda: información */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900">Descripción</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{curso.descripcion}</p>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">Objetivos</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {curso.objetivos.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">Programa del curso</h3>
              <div className="mt-3 space-y-4">
                {curso.modulos.map((modulo, i) => (
                  <div key={i} className="bg-white border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">{modulo.titulo}</h4>
                      <span className="text-sm text-gray-600">{modulo.duracion}</span>
                    </div>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
                      {modulo.lecciones.map((leccion, j) => (
                        <li key={j}>{leccion}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">Requisitos</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                {curso.requisitos.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>

              <h3 className="mt-8 text-lg font-semibold text-gray-900">Preguntas frecuentes</h3>
              <div className="mt-3 space-y-4">
                {curso.faqs.map((faq, i) => (
                  <div key={i} className="bg-white border rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">{faq.pregunta}</h4>
                    <p className="mt-2 text-sm text-gray-700">{faq.respuesta}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha: tarjeta de inscripción */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-5 sticky top-4">
                <div className="text-3xl font-bold text-gray-900">{curso.precio}</div>
                <p className="mt-1 text-sm text-gray-600">Pago único</p>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <span>⏱</span>
                    <span>{curso.duracion}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📊</span>
                    <span>{curso.nivel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>💻</span>
                    <span>100% online</span>
                  </div>
                </div>

                <Link
                  href="/pago"
                  className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition"
                >
                  Inscribirse en este curso
                </Link>

                <p className="mt-3 text-xs text-gray-500 text-center">
                  Al inscribirte, aceptas nuestros términos y condiciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
