import React from 'react';
import { FileText } from 'lucide-react';

const ProtocolsPage: React.FC = () => {
  const protocols = [
    {
      title: 'Protocolo COVID-19',
      description: 'Medidas de prevención y actuación frente a casos de COVID-19 en la comunidad educativa.',
      lastUpdate: '01/02/2025'
    },
    {
      title: 'Protocolo de Convivencia Escolar',
      description: 'Lineamientos para mantener una sana convivencia entre todos los miembros de la comunidad educativa.',
      lastUpdate: '15/01/2025'
    },
    {
      title: 'Protocolo de Seguridad',
      description: 'Procedimientos de seguridad y evacuación en caso de emergencias.',
      lastUpdate: '10/01/2025'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Protocolos Institucionales</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protocols.map((protocol, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-emerald-500" />
                  <h3 className="text-xl font-semibold text-gray-900">{protocol.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{protocol.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Última actualización: {protocol.lastUpdate}
                  </span>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtocolsPage;