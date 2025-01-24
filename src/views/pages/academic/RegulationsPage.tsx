import React from 'react';
import { ScrollText } from 'lucide-react';

const RegulationsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Reglamentos</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ScrollText className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Reglamento Interno
                </h2>
                <p className="text-gray-600 mb-4">
                  Documento que establece las normas de convivencia y funcionamiento del establecimiento.
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Descargar PDF
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ScrollText className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Reglamento de Evaluación
                </h2>
                <p className="text-gray-600 mb-4">
                  Normas y procedimientos de evaluación y promoción escolar.
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Descargar PDF
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <ScrollText className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Manual de Convivencia
                </h2>
                <p className="text-gray-600 mb-4">
                  Lineamientos para una sana convivencia entre todos los miembros de la comunidad educativa.
                </p>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Descargar PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegulationsPage;