import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactInfo } from '../../models/types';

interface ContactProps {
  contactInfo: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contactInfo }) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contáctenos</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          ¿Desea realizar alguna consulta sobre admisiones, programas de estudios o cualquier otra inquietud? 
          Puede visitarnos en horario de oficina, llamarnos por teléfono o rellenar este formulario.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <Phone className="h-8 w-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Teléfono</h3>
              <p className="text-gray-600">{contactInfo.phone}</p>
              <p className="text-sm text-gray-500 mt-1">{contactInfo.schedule}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="h-8 w-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
              <p className="text-sm text-gray-500 mt-1">Respuesta dentro de 24-48 horas</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="h-8 w-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Dirección</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
              <p className="text-sm text-gray-500 mt-1">Puerto Montt, Chile</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="h-8 w-8 text-emerald-600 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Horario de Atención</h3>
              <p className="text-gray-600">Lunes a Viernes</p>
              <p className="text-sm text-gray-500 mt-1">{contactInfo.schedule}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;