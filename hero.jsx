import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(3); // 4th card is the center
  const cards = [
    { id: 1, image: '/images/Business_card_on_Cutting_Mat_4 1.png', title: 'Feed Design 1' },
    { id: 2, image: '/images/FEEDS PORTOFOLIO ANGKASA 3.png', title: 'Feed Design 2' },
    { id: 3, image: '/images/logo design igravatara.png', title: 'Logo Design' },
    { id: 4, image: '/images/LOGO PPK ORMAWA.png', title: 'Branding Project' },
    { id: 5, image: '/images/REVEAL MASKOT.png', title: 'Social Media' },
    { id: 6, image: '/images/hero_card_6.png', title: 'Flyer Design' },
    { id: 7, image: '/images/hero_card_7.png', title: 'Packaging Design' },
  ];
  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  // Autoplay carousel
  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="relative pt-32 pb-20 bg-white overflow-hidden flex flex-col items-center">
      
      {/* Decorative Top Sunburst (Subtle visual flair) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      {/* Main Title Header */}
      <div className="text-center px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-7xl font-black text-dark tracking-tight uppercase">
          RICE PROJECT
        </h1>
        <p className="font-script text-3xl md:text-5xl text-secondaryBlue mt-2 md:-mt-1 tracking-wide">
          Visual & Content Design Solution
        </p>
      </div>
      {/* 3D Perspective Carousel Container */}
      <div className="relative w-full max-w-6xl mt-12 md:mt-16 px-4 flex flex-col items-center select-none">
        
        {/* Navigation Buttons (Floating on the sides of the carousel) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-3 rounded-full shadow-lg border border-gray-100 transition-all z-30 hover:scale-110 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6 text-dark" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-dark p-3 rounded-full shadow-lg border border-gray-100 transition-all z-30 hover:scale-110 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6 text-dark" />
        </button>
        {/* Carousel Window */}
        <div className="relative flex justify-center items-center h-[260px] md:h-[400px] w-full max-w-4xl overflow-hidden perspective-1000">
          <div className="relative flex items-center justify-center w-full h-full preserve-3d">
            {cards.map((card, index) => {
              // Calculate offset relative to activeIndex
              let offset = index - activeIndex;
              
              // Handle wrap-around for rendering logic (so it feels continuous)
              if (offset < -3) offset += cards.length;
              if (offset > 3) offset -= cards.length;
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);
              
              // Only render items within visual range (-3 to +3)
              if (absOffset > 3) return null;
              // 3D Transformations based on position
              let rotation = 0;
              let translationX = 0;
              let scale = 1;
              let zIndex = 10 - absOffset;
              let opacity = 1;
              // Overlapping and skewing multipliers
              const stepWidth = window.innerWidth < 768 ? 45 : 95; // narrower overlap for mobile
              translationX = offset * stepWidth;
              if (offset < 0) {
                rotation = 22; // rotate right (facing center)
                scale = 0.85 - absOffset * 0.05;
                opacity = 1 - absOffset * 0.25;
              } else if (offset > 0) {
                rotation = -22; // rotate left (facing center)
                scale = 0.85 - absOffset * 0.05;
                opacity = 1 - absOffset * 0.25;
              } else {
                // Active Center Card
                rotation = 0;
                scale = 1.1;
                opacity = 1;
              }
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute w-[120px] h-[190px] md:w-[190px] md:h-[300px] rounded-2xl shadow-xl overflow-hidden border border-white/20 bg-dark cursor-pointer transition-all duration-500 ease-out`}
                  style={{
                    transform: `translateX(${translationX}px) translateZ(${-absOffset * 40}px) rotateY(${rotation}deg) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    onError={(e) => {
                      // Fallback if image fails to load (draw a nice gradient)
                      e.target.style.display = 'none';
                    }}
                  />
                  
                  {/* Glassmorphism gradient background fallback if no image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                    <span className="text-white text-xs md:text-sm font-semibold tracking-wide drop-shadow-md">
                      {card.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Carousel indicators */}
        <div className="flex space-x-2 mt-4 z-10">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-primary w-6' : 'bg-gray-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Description Text & CTA Button */}
      <div className="text-center mt-12 px-4 max-w-xl mx-auto z-10 flex flex-col items-center">
        <p className="text-gray-600 text-sm md:text-base font-semibold tracking-wide uppercase leading-relaxed">
          Upgrade visual usaha dengan desain yang profesional!
        </p>
        
        <a
          href="#contact"
          className="relative group mt-6 inline-flex items-center justify-center px-8 py-3.5 bg-accent text-dark font-extrabold text-base rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden shimmer-btn"
        >
          <span className="relative z-10">Konsultasi Sekarang</span>
          <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
        </a>
      </div>
    </section>
  );
}
