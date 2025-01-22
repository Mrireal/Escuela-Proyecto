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
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
                <Icon className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;