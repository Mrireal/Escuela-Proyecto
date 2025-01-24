import React from 'react';
import CountUp from 'react-countup';
import { Scroll, GraduationCap, Users, Percent } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: Scroll,
      value: 268,
      label: 'FUNDACIÓN',
      suffix: ''
    },
    {
      icon: GraduationCap,
      value: 69,
      label: 'ALUMNOS MATRICULADOS',
      suffix: ''
    },
    {
      icon: Users,
      value: 73,
      label: 'ALUMNOS EGRESADOS',
      suffix: '+'
    },
    {
      icon: Percent,
      value: 45,
      label: 'APODERADOS FELICES',
      suffix: '%'
    }
  ];

  return (
    <div className="relative py-20 bg-emerald-600">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 transform -skew-y-6 bg-emerald-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          NUESTROS NÚMEROS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white group"
            >
              <div className="mb-4 p-4 bg-white/10 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2 flex items-center">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span>{stat.suffix}</span>
              </div>
              <div className="text-sm tracking-wider text-center text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;