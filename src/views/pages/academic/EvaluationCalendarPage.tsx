import React from 'react';

const EvaluationCalendarPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Calendario de Evaluación</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid gap-8">
            {/* Primer Semestre */}
            <div>
              <h2 className="text-2xl font-bold text-emerald-600 mb-4">Primer Semestre</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asignatura</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluación</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Ejemplo de evaluaciones */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/03/2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Matemáticas</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Prueba Parcial</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1° Medio</td>
                    </tr>
                    {/* Agregar más filas según sea necesario */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Segundo Semestre */}
            <div>
              <h2 className="text-2xl font-bold text-emerald-600 mb-4">Segundo Semestre</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asignatura</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluación</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Ejemplo de evaluaciones */}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/08/2025</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Lenguaje</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Prueba Global</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2° Medio</td>
                    </tr>
                    {/* Agregar más filas según sea necesario */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationCalendarPage;