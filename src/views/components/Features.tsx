import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';
import { Feature } from '../../models/types';

interface FeaturesProps {
  features: Feature[];
}

const iconMap = {
  BookOpen,
  Users,
  Calendar
};

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div id="features" className="relative py-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-emerald-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Nuestros Pilares
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div 
                key={feature.title} 
                className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-white rounded-lg p-4 flex items-center justify-center">
                    <Icon className="h-12 w-12 text-emerald-600 transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;