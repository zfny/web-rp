import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Portfolio() {
  const [focusIndex, setFocusIndex] = useState(1); // 1 is center
  const projects = [
    {
      id: 0,
      image: '/images/portfolio_1.png',
      title: 'Brand ID',
      desc: 'Logo & Stationery'
    },
    {
      id: 1,
      image: '/images/portfolio_2.png',
      title: 'Feeds Design',
      desc: 'Instagram Grid Content'
    },
    {
      id: 2,
      image: '/images/portfolio_3.png',
      title: 'Socmed Design',
      desc: 'Creative Ad Campaigns'
    }
  ];
  const handleNext = () => {
    setFocusIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setFocusIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  return (
    <section id="portfolio" className="py-24 bg-secondaryBlue text-white relative overflow-hidden">
      
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
            What We've Done
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
        {/* Overlapping 3D Carousel */}
        <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[360px] md:min-h-[460px] px-4 perspective-1000">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white text-dark p-3 rounded-full shadow-xl z-20 hover:scale-110 active:scale-95 transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white text-dark p-3 rounded-full shadow-xl z-20 hover:scale-110 active:scale-95 transition-all"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          {/* Cards Frame */}
          <div className="relative flex items-center justify-center w-full h-full preserve-3d">
            {projects.map((project, index) => {
              const isCenter = index === focusIndex;
              const isLeft = index === (focusIndex === 0 ? projects.length - 1 : focusIndex - 1);
              const isRight = index === (focusIndex === projects.length - 1 ? 0 : focusIndex + 1);
              let style = {};
              let statusClass = "";
              if (isCenter) {
                style = {
                  transform: 'translateX(0) scale(1.08) translateZ(50px)',
                  zIndex: 10,
                  opacity: 1
                };
                statusClass = "border-accent/40 shadow-2xl";
              } else if (isLeft) {
                style = {
                  transform: 'translateX(-110px) scale(0.88) rotateY(25deg)',
                  zIndex: 5,
                  opacity: 0.75
                };
                statusClass = "border-white/10 shadow-lg pointer-events-none md:pointer-events-auto";
              } else if (isRight) {
                style = {
                  transform: 'translateX(110px) scale(0.88) rotateY(-25deg)',
                  zIndex: 5,
                  opacity: 0.75
                };
                statusClass = "border-white/10 shadow-lg pointer-events-none md:pointer-events-auto";
              } else {
                style = {
                  transform: 'scale(0.5)',
                  zIndex: 0,
                  opacity: 0,
                  display: 'none'
                };
              }
              return (
                <div
                  key={project.id}
                  onClick={() => setFocusIndex(index)}
                  className={`absolute w-[200px] h-[280px] md:w-[260px] md:h-[370px] bg-dark rounded-[1.8rem] border-2 overflow-hidden cursor-pointer transition-all duration-500 ease-out select-none ${statusClass}`}
                  style={{
                    ...style,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-6 bg-gradient-to-b from-transparent via-dark/40 to-dark/90">
                    
                    {/* Background cropped reference image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover -z-10 mix-blend-lighten opacity-95"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-dark/20 hover:bg-transparent transition-colors duration-300" />
                    {/* Top corner category tags */}
                    <div className="relative z-10 self-start">
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-accent text-dark px-2.5 py-1 rounded-full">
                        Premium
                      </span>
                    </div>
                    {/* Content text */}
                    <div className="relative z-10 text-left mt-auto">
                      <h3 className="text-lg md:text-xl font-extrabold tracking-wide uppercase text-white">
                        {project.title}
                      </h3>
                      <p className="text-[11px] md:text-xs text-primary font-semibold tracking-wide uppercase mt-1">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Indicators */}
        <div className="flex space-x-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setFocusIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === focusIndex ? 'bg-accent w-6' : 'bg-white/30'
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        {/* See More CTA Button */}
        <button className="mt-14 px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-dark font-extrabold text-sm md:text-base rounded-full border border-white/20 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
          See More
        </button>
      </div>
    </section>
  );
}
