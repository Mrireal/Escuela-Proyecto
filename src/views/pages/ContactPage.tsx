import React from 'react';
import Contact from '../components/Contact';
import { getContactInfo } from '../../controllers/ContactController';

const ContactPage: React.FC = () => {
  const contactInfo = getContactInfo();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-24 bg-emerald-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1557425955-df376b5903c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Contact background"
          />
          <div className="absolute inset-0 bg-emerald-600 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Contáctenos
          </h1>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            ¿Desea realizar alguna consulta sobre admisiones, programas de estudios o cualquier otra inquietud? 
            Estamos aquí para ayudarle.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <Contact contactInfo={contactInfo} />

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.234567890123!2d-72.12345678901234!3d-41.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzM0LjQiUyA3MsKwMDcnMzQuNCJX!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Colegio San Miguel"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;