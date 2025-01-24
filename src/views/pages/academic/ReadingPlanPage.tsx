import React from 'react';
import { Book } from 'lucide-react';

const ReadingPlanPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Plan Lector 2025</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Primer Semestre */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">Primer Semestre</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Book className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Marzo</h3>
                  <p className="text-gray-600">"Cien años de soledad" - Gabriel García Márquez</p>
                  <p className="text-sm text-gray-500">Fecha evaluación: 30/03/2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Book className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Abril</h3>
                  <p className="text-gray-600">"El principito" - Antoine de Saint-Exupéry</p>
                  <p className="text-sm text-gray-500">Fecha evaluación: 30/04/2025</p>
                </div>
              </div>

              {/* Agregar más meses según sea necesario */}
            </div>
          </div>

          {/* Segundo Semestre */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-6">Segundo Semestre</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Book className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Agosto</h3>
                  <p className="text-gray-600">"Don Quijote de la Mancha" - Miguel de Cervantes</p>
                  <p className="text-sm text-gray-500">Fecha evaluación: 30/08/2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Book className="h-6 w-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Septiembre</h3>
                  <p className="text-gray-600">"Rayuela" - Julio Cortázar</p>
                  <p className="text-sm text-gray-500">Fecha evaluación: 30/09/2025</p>
                </div>
              </div>

              {/* Agregar más meses según sea necesario */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPlanPage;