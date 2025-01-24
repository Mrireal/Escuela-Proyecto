import React from 'react';

const PEIPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Proyecto Educativo Institucional (PEI)</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2>Misión</h2>
            <p>
              Formar estudiantes integrales con sólidos valores y excelencia académica, preparados para enfrentar los desafíos del futuro.
            </p>

            <h2>Visión</h2>
            <p>
              Ser reconocidos como una institución educativa líder en la formación de estudiantes comprometidos con su desarrollo personal y el bienestar de la sociedad.
            </p>

            <h2>Valores Institucionales</h2>
            <ul>
              <li>Respeto</li>
              <li>Responsabilidad</li>
              <li>Excelencia</li>
              <li>Compromiso</li>
              <li>Innovación</li>
            </ul>

            {/* Agregar más contenido según sea necesario */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PEIPage;