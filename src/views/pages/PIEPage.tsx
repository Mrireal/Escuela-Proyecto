import React from 'react';
import { Users, Brain, Target, Heart } from 'lucide-react';

const PIEPage: React.FC = () => {
  const team = [
    {
      role: 'Coordinador PIE',
      description: 'Lidera y coordina el equipo multidisciplinario, asegurando una implementación efectiva del programa.'
    },
    {
      role: 'Psicopedagogos',
      description: 'Especialistas en dificultades de aprendizaje y apoyo educativo personalizado.'
    },
    {
      role: 'Psicólogos',
      description: 'Brindan apoyo emocional y evaluación psicológica para el desarrollo integral del estudiante.'
    },
    {
      role: 'Fonoaudiólogos',
      description: 'Especialistas en trastornos del lenguaje y la comunicación.'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="PIE background"
          />
          <div className="absolute inset-0 bg-emerald-600/90 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Programa de Integración Escolar (PIE)
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Construyendo una educación inclusiva y de calidad para todos nuestros estudiantes
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* ¿Qué es el PIE? */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Brain className="h-8 w-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">¿Qué es el PIE?</h2>
          </div>
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              El Programa de Integración Escolar (PIE) es una estrategia inclusiva del sistema escolar que tiene el propósito de contribuir al mejoramiento continuo de la calidad de la educación, favoreciendo la presencia en la sala de clases, la participación y el logro de los objetivos de aprendizaje de todos y cada uno de los estudiantes.
            </p>
            <p>
              Este programa permite entregar apoyos adicionales a los estudiantes que presentan Necesidades Educativas Especiales (NEE), sean éstas de carácter permanente o transitorio.
            </p>
          </div>
        </div>

        {/* Objetivos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <Target className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusión</h3>
            <p className="text-gray-600">
              Promover la inclusión de todos los estudiantes, valorando la diversidad como una oportunidad de aprendizaje.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <Heart className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Apoyo</h3>
            <p className="text-gray-600">
              Brindar apoyo personalizado y especializado a cada estudiante según sus necesidades específicas.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <Brain className="h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Desarrollo</h3>
            <p className="text-gray-600">
              Potenciar el desarrollo integral de los estudiantes, considerando sus capacidades y talentos únicos.
            </p>
          </div>
        </div>

        {/* Equipo PIE */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Users className="h-8 w-8 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Nuestro Equipo</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-600 mb-2">{member.role}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Galería Motivacional */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Estudiantes trabajando juntos"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-emerald-600/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white text-center px-6 font-medium">Aprendiendo juntos, creciendo juntos</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Estudiantes celebrando"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-emerald-600/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white text-center px-6 font-medium">Celebrando cada logro</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Apoyo educativo"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-emerald-600/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
              <p className="text-white text-center px-6 font-medium">Construyendo futuros brillantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIEPage;