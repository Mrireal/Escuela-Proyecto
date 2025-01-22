import { Feature } from '../models/types';

export const getFeatures = (): Feature[] => [
  {
    icon: 'BookOpen',
    title: 'Excelencia Académica',
    description: 'Programa educativo integral enfocado en el desarrollo de habilidades y competencias.'
  },
  {
    icon: 'Users',
    title: 'Comunidad Educativa',
    description: 'Ambiente acogedor y colaborativo que fomenta el crecimiento personal y social.'
  },
  {
    icon: 'Calendar',
    title: 'Actividades Extracurriculares',
    description: 'Amplia oferta de actividades deportivas, culturales y artísticas.'
  }
];