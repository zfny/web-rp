import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
export default function Services() {
  const pricingPlans = [
    {
      title: "Paket Starter",
      tagline: "Paket konten hemat untuk Rice Project",
      originalPrice: "987.500",
      discountPrice: "887.500",
      discountBadge: "Diskon 10%",
      features: [
        "Feeds (9 Post)",
        "Desain Story (3 Post)",
        "Copywriting & Hashtag",
        "Revisi Ringan (2x)"
      ],
      isPopular: false
    },
    {
      title: "Paket Business",
      tagline: "Paket konten terlengkap bersama Rice Project",
      originalPrice: "858.500",
      discountPrice: "658.500",
      discountBadge: "Diskon 25%",
      features: [
        "Feeds (15 Post)",
        "Desain Story (5 Post)",
        "Copywriting & Hashtag",
        "Revisi Ringan (3x)",
        "Admin Post Plan"
      ],
      isPopular: true
    },
    {
      title: "Paket Premium",
      tagline: "Paket konten maksimal bersama Rice Project",
      originalPrice: "941.000",
      discountPrice: "841.000",
      discountBadge: "Diskon 10%",
      features: [
        "Feeds (30 Post)",
        "Story (10 Post)",
        "Copywriting & Hashtag",
        "Admin Post Schedule",
        "Revisi Sepuasnya"
      ],
      isPopular: false
    }
  ];
  const instagramStories = [
    { id: 1, img: '/images/story_1.png', title: 'Instagram Story Layout 1' },
    { id: 2, img: '/images/story_2.png', title: 'Instagram Story Layout 2' },
    { id: 3, img: '/images/story_3.png', title: 'Instagram Story Layout 3' },
    { id: 4, img: '/images/story_4.png', title: 'Instagram Story Layout 4' }
  ];
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-semibold tracking-wide uppercase mt-2">
            Pilih paket yang paling sesuai dengan kebutuhan bisnismu
          </p>
        </div>
        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
                plan.isPopular 
                  ? 'border-primary ring-2 ring-primary/20 shadow-2xl scale-100 md:scale-105 z-10' 
                  : 'border-gray-200 hover:border-primary/40 shadow-lg'
              }`}
            >
              {/* Discount Tag */}
              <div className="absolute top-4 right-4 bg-dark text-white font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full">
                {plan.discountBadge}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                  Rice Packages
                </span>
                <h3 className="text-2xl font-extrabold text-dark mt-1">
                  {plan.title}
                </h3>
                <p className="text-gray-500 text-[11px] font-medium leading-tight mt-2 min-h-[30px]">
                  {plan.tagline}
                </p>
                {/* Price Details */}
                <div className="mt-6 flex flex-col">
                  <span className="text-gray-400 line-through text-xs font-semibold">
                    Rp {plan.originalPrice}
                  </span>
                  <div className="flex items-baseline mt-1">
                    <span className="text-3xl font-black text-dark">
                      Rp {plan.discountPrice}
                    </span>
                    <span className="text-gray-400 text-xs font-bold ml-1">/paket</span>
                  </div>
                </div>
                {/* Feature List */}
                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs font-bold text-gray-600">
                      <Check className="h-4 w-4 text-accent bg-dark rounded-full p-0.5 mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Order Button */}
              <button
                className={`mt-10 w-full py-3 rounded-full font-black text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 ${
                  plan.isPopular
                    ? 'bg-accent text-dark shadow-md hover:bg-dark hover:text-white'
                    : 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white'
                }`}
              >
                Pesan
              </button>
            </div>
          ))}
        </div>
        {/* Horizontal Mini Cards - Instagram Stories Layouts (Matching design reference) */}
        <div className="mt-24 w-full max-w-4xl flex flex-col items-center">
          <h4 className="text-2xl font-black uppercase text-dark text-center mb-8">
            Instagram Story Layout
          </h4>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {instagramStories.map((story) => (
              <div 
                key={story.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-md p-3 hover:shadow-xl hover:border-primary/20 transform hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center"
              >
                <div className="w-full aspect-[9/16] rounded-xl bg-gray-50 overflow-hidden relative border border-gray-100">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Visual overlay fallback */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent flex items-end p-2.5">
                    <span className="text-[10px] text-white/90 font-bold uppercase tracking-wider">
                      Instagram Story
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-gray-500 tracking-wider uppercase mt-3 text-center">
                  Story Layout
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* WhatsApp CTA Button */}
        <a
          href="https://wa.me/628123456789" // Dummy WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 flex items-center space-x-3 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-base rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shimmer-btn overflow-hidden relative"
        >
          <MessageSquare className="h-5 w-5 text-white" />
          <span>Order via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
