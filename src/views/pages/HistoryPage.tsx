import React from 'react';

const HistoryPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            alt="Historia background"
          />
          <div className="absolute inset-0 bg-emerald-600 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Nuestra Historia
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Un viaje a través del tiempo: La evolución de nuestra institución educativa
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-emerald max-w-none">
            <h2>Los Inicios</h2>
            <p>
              Este proyecto educativo nace hace 16 años, dando forma con su Resolución Exenta 2565, De Fecha 30/07/2010 inspirados en la idea de construir un espacio educativo laico, que favorezca la búsqueda de la equidad educativa y la excelencia en la enseñanza.
            </p>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Primeros años"
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Los primeros años de nuestra institución</p>
            </div>

            <h2>Crecimiento y Desarrollo</h2>
            <p>
              A partir del año 2012, el Colegio San Miguel está ubicado en un sector campestre de mucha hermosura y tranquilidad. Cuenta con un edificio de 1.500 m2 para el desarrollo de actividades académicas y extracurriculares.
            </p>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="Instalaciones actuales"
                className="rounded-lg shadow-md w-full"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">Nuestras instalaciones actuales</p>
            </div>

            <h2>Logros y Reconocimientos</h2>
            <p>
              A lo largo de estos años, nuestra institución se ha consolidado como un referente en educación de calidad, obteniendo importantes reconocimientos y, lo más importante, formando generaciones de estudiantes preparados para los desafíos del futuro.
            </p>

            <h2>Mirando al Futuro</h2>
            <p>
              Seguimos comprometidos con nuestra misión de proporcionar una educación integral, basada en valores y excelencia académica, preparando a nuestros estudiantes para ser líderes del mañana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;