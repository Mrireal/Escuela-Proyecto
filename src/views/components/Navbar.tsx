import React from 'react';
import { GraduationCap, ChevronDown } from 'lucide-react';
import { MenuItem } from '../../models/types';
import { useMenuController } from '../../controllers/MenuController';

interface NavbarProps {
  menuItems: MenuItem[];
}

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  const { isNosotrosOpen, handleMouseEnter, handleMouseLeave } = useMenuController();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Colegio San Miguel</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.children ? (
                <div
                  key={item.label}
                  className="relative h-16 flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-colors">
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  
                  {isNosotrosOpen && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 bg-white rounded-lg shadow-lg py-1 border border-gray-100">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.path}
                          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-150"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.path}
                  className="h-16 flex items-center text-gray-700 hover:text-emerald-600 border-b-2 border-transparent hover:border-emerald-600 transition-colors"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;