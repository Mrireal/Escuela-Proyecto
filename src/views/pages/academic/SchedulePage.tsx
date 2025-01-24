import React from 'react';
import { Clock } from 'lucide-react';

const SchedulePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Horarios 2025</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Horario de Clases */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-bold text-emerald-600">Horario de Clases</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actividad</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">08:00 - 09:30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Primer Bloque</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">09:30 - 09:45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Recreo</td>
                  </tr>
                  {/* Agregar más bloques según sea necesario */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Horario de Atención */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="h-6 w-6 text-emerald-500" />
              <h2 className="text-2xl font-bold text-emerald-600">Horario de Atención</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secretaría</h3>
                <p className="text-gray-600">Lunes a Viernes: 08:00 - 17:00</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Biblioteca</h3>
                <p className="text-gray-600">Lunes a Viernes: 09:00 - 16:00</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Atención Apoderados</h3>
                <p className="text-gray-600">Martes y Jueves: 14:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;