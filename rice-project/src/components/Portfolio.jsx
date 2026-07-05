import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export default function Portfolio() {
  const [focusIndex, setFocusIndex] = useState(2);
  const projects = [
    { id: 0, image: '/images/portfolio_1.png', title: 'Brand ID', desc: 'Logo & Stationery' },
    { id: 1, image: '/images/portfolio_2.png', title: 'Feeds Design', desc: 'Instagram Grid Content' },
    { id: 2, image: '/images/portfolio_3.png', title: 'Socmed Design', desc: 'Creative Ad Campaigns' },
    { id: 3, image: '/images/portfolio_1.png', title: 'Packaging', desc: 'Product Packaging' },
    { id: 4, image: '/images/portfolio_2.png', title: 'Campaign', desc: 'Ad Campaigns' }
  ];

  const handleNext = () => setFocusIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setFocusIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  const visibleItems = [
    projects[(focusIndex + projects.length - 2) % projects.length],
    projects[(focusIndex + projects.length - 1) % projects.length],
    projects[focusIndex],
    projects[(focusIndex + 1) % projects.length],
    projects[(focusIndex + 2) % projects.length]
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">What We've Done</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="portfolio-wrapper py-6">
          <button onClick={handlePrev} className="absolute left-4 z-20 p-2 rounded-full bg-white/90 shadow-md -translate-y-1/2 top-1/2">
            <ChevronLeft className="h-5 w-5 text-dark" />
          </button>

          <div className="portfolio-grid">
            {visibleItems.map((p, idx) => {
              const projectIndex = (focusIndex + idx - 2 + projects.length) % projects.length;
              const offset = idx - 2;
              const isActive = offset === 0;
              const absOffset = Math.abs(offset);
              const xPosition = offset * 150;
              const yPosition = absOffset * 18;
              const zIndex = isActive ? 30 : 20 - absOffset;
              return (
                <div
                  key={`slot-${idx}`}
                  className="portfolio-slot"
                  style={{
                    transform: `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`,
                    zIndex,
                    opacity: isActive ? 1 : 0.65
                  }}
                >
                  <div
                    className={`card ${isActive ? 'active' : 'side'}`}
                    onClick={() => setFocusIndex(projectIndex)}
                  >
                    <img src={p.image} alt={p.title} onError={(e) => { e.target.style.display = 'none'; }} />
                    <div className="caption">
                      <h3 className="font-bold">{p.title}</h3>
                      <p className="text-sm text-white/80">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button onClick={handleNext} className="absolute right-4 z-20 p-2 rounded-full bg-white/90 shadow-md -translate-y-1/2 top-1/2">
            <ChevronRight className="h-5 w-5 text-dark" />
          </button>
          </div>
        <div className="mt-4 flex justify-center">
          <Link
            to="/work"
            className="inline-flex items-center justify-center rounded-full bg-white text-dark font-semibold px-8 py-3 shadow-lg shadow-black/10 hover:bg-gray-100 transition-all duration-300"
          >
            See All Work
          </Link>
        </div>
      </div>
    </section>
  );
}
