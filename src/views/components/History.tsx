import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const History: React.FC = () => {
  return (
    <div id="history" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-600/10 rounded-lg transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="Colegio San Miguel"
              className="relative rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-emerald-600 font-medium mb-2">NUESTRO COLEGIO</h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">HISTORIA</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Este proyecto educativo nace hace 16 años, dando forma con su Resolución Exenta 2565, De Fecha 30/07/2010 inspirados en la idea de construir un espacio educativo laico, que favorezca la búsqueda de la equidad educativa y la excelencia en la enseñanza. Desde aquellos primeros años nuestra institución se ha consolidado, obteniendo en dicho devenir resultados que comprueban lo anterior.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              A partir del año 2012, el Colegio San Miguel está ubicado en un sector campestre de mucha hermosura y tranquilidad. Cuenta con un edificio de 1.500 m2 para...
            </p>
            <Link 
              to="/nosotros/historia"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors duration-300 group"
            >
              Saber más
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;