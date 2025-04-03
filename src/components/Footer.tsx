
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-medai-dark-gray text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="/" className="text-xl font-semibold flex items-center mb-4">
              <span className="text-2xl font-bold text-white">med</span>
              <span className="text-medai-teal">ai</span>
            </a>
            <p className="text-gray-300 max-w-md">
              We partner with healthcare organizations to implement AI solutions that enhance efficiency, 
              accuracy, and innovation in medical operations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#insights" className="text-gray-300 hover:text-white transition-colors">Insights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">info@medai-health.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
              <li><a href="#contact" className="text-medai-teal hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MedAI Health. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
