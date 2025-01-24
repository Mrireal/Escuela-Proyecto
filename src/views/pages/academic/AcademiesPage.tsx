import React from 'react';
import { Music, Palette, FolderRoot as Football, ChevronRight as ChessKnight } from 'lucide-react';

const AcademiesPage: React.FC = () => {
  const academies = [
    {
      title: 'Academia de Música',
      description: 'Desarrollo de habilidades musicales a través de diversos instrumentos y géneros.',
      icon: Music,
      schedule: 'Lunes y Miércoles 15:30 - 17:00',
      instructor: 'Prof. Juan Pérez'
    },
    {
      title: 'Academia de Arte',
      description: 'Exploración de diferentes técnicas artísticas y desarrollo de la creatividad.',
      icon: Palette,
      schedule: 'Martes y Jueves 15:30 - 17:00',
      instructor: 'Prof. María González'
    },
    {
      title: 'Academia de Deportes',
      description: 'Práctica de diferentes disciplinas deportivas y desarrollo físico integral.',
      icon: Football,
      schedule: 'Lunes a Viernes 16:00 - 17:30',
      instructor: 'Prof. Carlos Rodríguez'
    },
    {
      title: 'Club de Ajedrez',
      description: 'Desarrollo del pensamiento estratégico y habilidades cognitivas.',
      icon: ChessKnight,
      schedule: 'Viernes 15:30 - 17:00',
      instructor: 'Prof. Ana Silva'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Academias</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {academies.map((academy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <academy.icon className="h-8 w-8 text-emerald-500" />
                  <h2 className="text-2xl font-semibold text-gray-900">{academy.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{academy.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>
                    <span className="font-medium">Horario:</span> {academy.schedule}
                  </p>
                  <p>
                    <span className="font-medium">Instructor:</span> {academy.instructor}
                  </p>
                </div>
                <button className="mt-4 inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                  Más información
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademiesPage;