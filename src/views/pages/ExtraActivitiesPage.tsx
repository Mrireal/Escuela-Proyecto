import React from 'react';
import { Dumbbell, BookOpen, Music } from 'lucide-react';

const ExtraActivitiesPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Actividades background"
          />
          <div className="absolute inset-0 bg-emerald-600 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Actividades Extraescolares
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Desarrollando talentos y fomentando el crecimiento integral
          </p>
        </div>
      </div>

      {/* Activities */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-24">
          {/* Deporte */}
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-lg transform -rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Deportes"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <Dumbbell className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">Deporte</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                En el Colegio San Miguel, el deporte forma parte fundamental de la formación integral de nuestros estudiantes. A través de diversas disciplinas deportivas, fomentamos el trabajo en equipo, la disciplina y el desarrollo de habilidades físicas y sociales. Contamos con programas especializados en fútbol, básquetbol, voleibol y atletismo.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Entrenamiento personalizado
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Competencias interescolares
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Instalaciones deportivas modernas
                </li>
              </ul>
            </div>
          </div>

          {/* Publicaciones Internas */}
          <div className="lg:flex lg:items-center lg:space-x-12 lg:flex-row-reverse">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-lg transform rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Publicaciones"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">Publicaciones Internas</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                El Colegio San Miguel promueve la expresión escrita a través de diversas publicaciones internas. Nuestros estudiantes participan activamente en la creación de contenido para el periódico escolar, revista literaria y boletín informativo, desarrollando habilidades de comunicación y creatividad.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Periódico escolar mensual
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Revista literaria semestral
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Boletín informativo digital
                </li>
              </ul>
            </div>
          </div>

          {/* Artes Escénicas y Música */}
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-100 rounded-lg transform -rotate-6"></div>
                <img
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Artes Escénicas"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center space-x-4 mb-4">
                <Music className="h-8 w-8 text-emerald-600" />
                <h2 className="text-3xl font-bold text-gray-900">Artes Escénicas y Música</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Creemos que el arte es esencial para el desarrollo integral de nuestros estudiantes. A través de talleres de teatro, danza y música, fomentamos la expresión artística, la creatividad y el trabajo en equipo. Nuestros alumnos participan en presentaciones regulares y festivales artísticos.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Taller de teatro
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Clases de música instrumental
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-emerald-500 rounded-full mr-3"></span>
                  Grupo de danza contemporánea
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraActivitiesPage;