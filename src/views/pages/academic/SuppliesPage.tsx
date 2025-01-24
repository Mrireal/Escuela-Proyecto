import React from 'react';
import { BookOpen } from 'lucide-react';

const SuppliesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Lista de Útiles 2025</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Básica */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-emerald-500" />
                <h2 className="text-xl font-semibold text-gray-900">Enseñanza Básica</h2>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  1° Básico
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  2° Básico
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  3° Básico
                </button>
                {/* Agregar más cursos según sea necesario */}
              </div>
            </div>
          </div>

          {/* Media */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-emerald-500" />
                <h2 className="text-xl font-semibold text-gray-900">Enseñanza Media</h2>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  1° Medio
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  2° Medio
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-50 text-gray-700 hover:text-emerald-600 transition-colors">
                  3° Medio
                </button>
                {/* Agregar más cursos según sea necesario */}
              </div>
            </div>
          </div>

          {/* Útiles Generales */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <BookOpen className="h-6 w-6 text-emerald-500" />
                <h2 className="text-xl font-semibold text-gray-900">Útiles Generales</h2>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Agenda escolar institucional</li>
                <li>• Estuche completo</li>
                <li>• Uniforme escolar</li>
                <li>• Uniforme de educación física</li>
                {/* Agregar más items según sea necesario */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuppliesPage;