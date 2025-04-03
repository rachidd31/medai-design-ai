
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Insights', href: '#insights' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-xl font-semibold text-medai-blue flex items-center">
            <span className="text-2xl font-bold">med</span>
            <span className="text-medai-teal">ai</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-medai-dark-gray hover:text-medai-blue transition-colors font-medium text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-medai-dark-gray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container-custom md:hidden py-4 pb-6 bg-white">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-medai-dark-gray hover:text-medai-blue transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
