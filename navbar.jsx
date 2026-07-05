import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Project', href: '#portfolio' },
    { label: 'Pricelist', href: '#services' }
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a href="#home" className="flex items-center space-x-3 group">
              <img 
                src="/images/logo.png" 
                alt="Rice Project Logo" 
                className="h-10 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-dark uppercase flex items-center">
                  RICE<span className="text-primary font-normal ml-1">PROJECT</span>
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase -mt-1 block">
                  Your Graphic Design Solutions
                </span>
              </div>
            </a>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-dark hover:text-primary font-semibold text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="relative overflow-hidden inline-flex items-center justify-center px-6 py-2.5 bg-dark text-white font-semibold text-sm rounded-full shadow-md hover:bg-secondaryBlue transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-dark hover:bg-gray-50 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-dark text-white font-semibold rounded-full shadow-md hover:bg-secondaryBlue transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
