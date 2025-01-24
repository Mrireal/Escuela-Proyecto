import React from 'react';
import { Calendar, FileText, Mail } from 'lucide-react';

const AdmissionPage: React.FC = () => {
  const schedules = [
    { level: 'Kinder, 1° y 2° Básico', date: 'JUEVES 05 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: '3° y 4° Básico', date: 'VIERNES 06 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: '5° y 6° Básico', date: 'LUNES 09 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: '7° y 8° Básico', date: 'MARTES 10 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: 'I° MEDIO A', date: 'MIÉRCOLES 11 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: 'II° MEDIO A y B', date: 'JUEVES 12 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: 'III° MEDIO A y B', date: 'VIERNES 13 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' },
    { level: 'IV° MEDIO', date: 'VIERNES 13 DE DICIEMBRE', time: '09:00 A 14:00 HRS.' }
  ];

  const documents = [
    'FICHA DE MATRÍCULA 2025 (descargar de la página web o solicitar en secretaría del colegio, en la página propia completa con todos los datos solicitados)',
    '3 FOTOS TAMAÑO CARNÉ',
    'COPIA REGISTRO SOCIAL DE HOGAR, ACTUALIZADO',
    'FOTOCOPIA CARNÉ APODERADO'
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Admisión background"
          />
          <div className="absolute inset-0 bg-emerald-600/90 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Proceso Admisión Año Académico 2025
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Desde el 5 al 13 de Diciembre 2024
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calendario de Matrículas */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-8 w-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Calendario de Matrículas</h2>
            </div>
            <p className="text-gray-600 mb-6 italic">
              Estimados Padres y Apoderados, junto con saludar, les comunicamos que las fechas de matrícula de nuestros alumnos antiguos, serán las siguientes:
            </p>
            <div className="space-y-4">
              {schedules.map((schedule, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900">{schedule.level}</h3>
                  <p className="text-emerald-600">
                    {schedule.date} DE {schedule.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Documentación Requerida */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Documentación Requerida</h2>
            </div>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-emerald-50 transition-colors"
                >
                  <span className="h-6 w-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-gray-600">{doc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Mail className="h-8 w-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Información de Contacto</h2>
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-2">Parcela Alto La Paloma, Lote K-3, Puerto Montt</p>
            <p className="text-gray-600 mb-2">
              <a href="http://www.cpulmahue.cl" className="text-emerald-600 hover:text-emerald-700">
                www.cpulmahue.cl
              </a>
            </p>
            <p className="text-gray-600">
              652772250 y secretaria@cpulmahue.cl.contralor@cpulmahue.cl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;