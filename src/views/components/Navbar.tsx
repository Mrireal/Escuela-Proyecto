import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { MenuItem } from '../../models/types';
import { useMenuController } from '../../controllers/MenuController';

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const { isNosotrosOpen, isCoordinacionOpen, handleMouseEnter, handleMouseLeave } = useMenuController();
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Colegio San Miguel</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative h-16 flex items-center"
                  onMouseEnter={() => handleMouseEnter(item.label.toLowerCase().includes('nosotros') ? 'nosotros' : 'coordinacion')}
                  onMouseLeave={() => handleMouseLeave(item.label.toLowerCase().includes('nosotros') ? 'nosotros' : 'coordinacion')}
                >
                  <button className="flex items-center text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-colors">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  
                  {((item.label.toLowerCase().includes('nosotros') && isNosotrosOpen) || 
                    (item.label.toLowerCase().includes('coordinación') && isCoordinacionOpen)) && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`h-16 flex items-center text-gray-700 hover:text-emerald-600 border-b-2 transition-colors ${
                    location.pathname === item.path ? 'border-emerald-600 text-emerald-600' : 'border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;