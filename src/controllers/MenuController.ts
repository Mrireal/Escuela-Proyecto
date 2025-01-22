import { useState, useCallback, useRef } from 'react';
import { MenuItem } from '../models/types';

export const useMenuController = () => {
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setIsNosotrosOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setIsNosotrosOpen(false);
    }, 300);
  }, []);

  return {
    isNosotrosOpen,
    handleMouseEnter,
    handleMouseLeave
  };
};

export const getMenuItems = (): MenuItem[] => [
  { label: 'Admisión 2025', path: '/admision' },
  {
    label: 'Nosotros',
    path: '/nosotros',
    children: [
      { label: 'Historia CPULMAHUE', path: '/nosotros/historia' },
      { label: 'Centro General Padres', path: '/nosotros/centro-padres' },
      { label: 'Centro de Alumnos', path: '/nosotros/centro-alumnos' },
      { label: 'Actividades Extraprogramáticas', path: '/nosotros/actividades-extra' },
      { label: 'Actividades Curriculares', path: '/nosotros/actividades-curriculares' }
    ]
  },
  { label: 'Comunicados', path: '/comunicados' },
  { label: 'Coordinación Académica', path: '/coordinacion' },
  { label: 'PIE', path: '/pie' },
  { label: 'Contacto', path: '/contacto' }
];