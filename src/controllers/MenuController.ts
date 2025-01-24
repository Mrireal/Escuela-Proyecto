import { useState, useCallback, useRef } from 'react';
import { MenuItem } from '../models/types';

export const useMenuController = () => {
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);
  const [isCoordinacionOpen, setIsCoordinacionOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout>();

  const handleMouseEnter = useCallback((menu: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    if (menu === 'nosotros') {
      setIsNosotrosOpen(true);
    } else if (menu === 'coordinacion') {
      setIsCoordinacionOpen(true);
    }
  }, []);

  const handleMouseLeave = useCallback((menu: string) => {
    closeTimeout.current = setTimeout(() => {
      if (menu === 'nosotros') {
        setIsNosotrosOpen(false);
      } else if (menu === 'coordinacion') {
        setIsCoordinacionOpen(false);
      }
    }, 300);
  }, []);

  return {
    isNosotrosOpen,
    isCoordinacionOpen,
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
      { label: 'Historia San Miguel', path: '/nosotros/historia' },
      { label: 'Centro General Padres', path: '/nosotros/centro-padres' },
      { label: 'Centro de Alumnos', path: '/nosotros/centro-alumnos' },
      { label: 'Actividades Extraprogramáticas', path: '/nosotros/actividades-extra' },
      { label: 'Actividades Curriculares', path: '/nosotros/actividades-curriculares' }
    ]
  },
  { label: 'Comunicados', path: '/comunicados' },
  {
    label: 'Coordinación Académica',
    path: '/coordinacion',
    children: [
      { label: 'PEI', path: '/coordinacion/pei' },
      { label: 'CALENDARIO DE EVALUACIÓN', path: '/coordinacion/calendario-evaluacion' },
      { label: 'PLAN LECTOR', path: '/coordinacion/plan-lector' },
      { label: 'PROTOCOLOS', path: '/coordinacion/protocolos' },
      { label: 'REGLAMENTOS', path: '/coordinacion/reglamentos' },
      { label: 'HORARIOS 2025', path: '/coordinacion/horarios' },
      { label: 'LISTA DE ÚTILES 2025', path: '/coordinacion/lista-utiles' },
      { label: 'ACADEMIAS', path: '/coordinacion/academias' }
    ]
  },
  { label: 'PIE', path: '/pie' },
  { label: 'Contacto', path: '/contacto' }
];