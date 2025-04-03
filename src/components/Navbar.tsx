
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

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
    <nav className="border-b dark:border-gray-800 dark:bg-background/80 backdrop-blur-lg bg-white sticky top-0 z-50">
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Logo />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="dark:text-gray-300 dark:hover:text-biomindx-blue text-biomindx-dark-gray hover:text-biomindx-blue transition-colors font-medium text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden dark:text-white text-biomindx-dark-gray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container-custom md:hidden py-4 pb-6 dark:bg-background/95 backdrop-blur-lg bg-white">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="dark:text-gray-300 dark:hover:text-biomindx-blue text-biomindx-dark-gray hover:text-biomindx-blue transition-colors font-medium"
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
