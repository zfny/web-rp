import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(3); // 4th card is the center
  const cards = [
    { id: 1, image: '/images/REVEAL MASKOT 1.png', title: 'Reveal Maskot' },
    { id: 2, image: '/images/LOGO PPK ORMAWA SRE 1.png', title: 'Logo PPK' },
    { id: 3, image: '/images/logo design igravatara.png', title: 'Logo Design' },
    { id: 4, image: '/images/FEEDS PORTOFOLIO ANGKASA 3.png', title: 'Feeds Portfolio' },
    { id: 5, image: '/images/Business_Card_on_Cutting_Mat_4 1.png', title: 'Business Card' },
    { id: 6, image: '/images/branding umkm.png', title: 'Branding UMKM' },
    { id: 7, image: '/images/fmc.png', title: 'Event Visual' },
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
        <p className="subtitle-font text-3xl md:text-5xl mt-2 md:-mt-1 tracking-wide" style={{ color: '#517EB7' }}>
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
        <div className="relative flex justify-center items-center h-[360px] md:h-[400px] w-full max-w-4xl overflow-visible md:overflow-hidden perspective-1000">
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
                  className="absolute rounded-2xl shadow-xl overflow-hidden border border-white/20 bg-dark cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    width: isActive ? '280px' : '200px',
                    aspectRatio: '1080 / 1350',
                    transform: `translateX(${translationX}px) rotateZ(${rotation}deg) scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-white text-[8px] md:text-xs font-bold text-center">{card.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA under carousel */}
      <div className="mt-8 text-center z-10">
        <p className="text-xl md:text-2xl font-semibold mb-4">
          Upgrade Visual Brand-mu dengan Desain & Konten Profesional
        </p>
        <button
          type="button"
          className="inline-block bg-gradient-to-r from-[#82A1BA] to-[#A6FF00] text-white rounded-full px-6 py-3 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </section>
  );
}
