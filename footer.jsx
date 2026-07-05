import React from 'react';
// Custom inline SVG icons for brands to ensure 100% build compatibility
const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16 relative overflow-hidden">
      
      {/* Subtle background overlay (radial shading) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Logo Icon */}
        <div className="flex flex-col items-center space-y-2">
          <img 
            src="/images/logo.png" 
            alt="Rice Project Logo" 
            className="h-14 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <span className="font-extrabold text-3xl tracking-tight text-white uppercase mt-2">
            RICE<span className="text-primary font-normal ml-1">PROJECT</span>
          </span>
          <span className="text-xs text-gray-400 font-semibold tracking-widest uppercase block -mt-1">
            Your Graphic Design Solutions
          </span>
        </div>
        {/* Social Icons (LinkedIn, Instagram) */}
        <div className="flex space-x-6 mt-8">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
        {/* Divider line */}
        <div className="w-full max-w-lg border-t border-white/10 my-8" />
        {/* Copyright */}
        <p className="text-gray-500 text-[10px] sm:text-xs font-bold tracking-wider uppercase text-center">
          © {new Date().getFullYear()} Rice Project. All rights reserved. Made with Visual Excellence.
        </p>
      </div>
    </footer>
  );
}
