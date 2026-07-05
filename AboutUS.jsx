import React from 'react';
import { PenTool, Target, TrendingUp, Camera } from 'lucide-react';
export default function AboutUs() {
  const cards = [
    { icon: <PenTool className="h-8 w-8 text-white" />, title: 'Creative Design' },
    { icon: <Target className="h-8 w-8 text-white" />, title: 'Target Oriented' },
    { icon: <TrendingUp className="h-8 w-8 text-white" />, title: 'Business Growth' },
    { icon: <Camera className="h-8 w-8 text-white" />, title: 'Photography' }
  ];
  const tags = [
    { text: 'Creative', rot: '-3deg', delay: '0s' },
    { text: 'Consistent', rot: '2deg', delay: '0.2s' },
    { text: 'Relevant', rot: '-1deg', delay: '0.4s' },
    { text: 'Consistent', rot: '4deg', delay: '0.1s' },
    { text: 'Creative', rot: '-2deg', delay: '0.3s' },
    { text: 'Professional', rot: '1deg', delay: '0.5s' },
    { text: 'Strategic', rot: '-4deg', delay: '0.2s' },
    { text: 'Innovative', rot: '3deg', delay: '0.4s' },
    { text: 'Solution', rot: '-2deg', delay: '0s' }
  ];
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Layout: Description + Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
                About Us
              </h2>
              <p className="font-script text-2xl md:text-3xl text-primary leading-tight">
                Visual & Content Design Solution
              </p>
            </div>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Kami adalah partner desain yang membantu bisnis meningkatkan daya tarik visual produk dan konten promosi. Kami percaya bahwa desain yang baik bukan sekadar tentang estetika, melainkan tentang membangun komunikasi visual yang efektif dan relevan bagi target audiens Anda.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
              Dengan perpaduan kreativitas dan analisis pasar yang matang, Rice Project berkomitmen untuk menyajikan solusi desain visual profesional, mulai dari branding identitas hingga konten media sosial harian yang terstruktur dan konsisten.
            </p>
          </div>
          {/* Right Column: 4 Icon Cards (Matching design reference) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-dark/95 hover:bg-dark p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-xl transform hover:-translate-y-2 transition-all duration-300 group border border-gray-800"
              >
                <div className="p-4 bg-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <span className="text-white font-bold text-sm tracking-wide mt-4">
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Lower Layout: Floating / Scattered Badges (Pills) */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="px-6 py-2.5 bg-secondaryBlue text-white font-bold text-sm md:text-base rounded-full shadow-md hover:bg-lightBlue hover:shadow-lg transition-all duration-300 animate-float cursor-default"
              style={{
                '--rot': tag.rot,
                animationDelay: tag.delay,
                transform: `rotate(${tag.rot})`
              }}
            >
              {tag.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
