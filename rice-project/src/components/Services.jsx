import React, { useState } from 'react';
import { Check } from 'lucide-react';
export default function Services() {
  const pricingPlans = [
    {
      title: "Paket Starter",
      tagline: "Paket konten hemat untuk Rice Project",
      originalPrice: "987.500",
      discountPrice: "887.500",
      discountBadge: "Diskon 10%",
      unitPrice: "98.750",
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
      unitPrice: "43.900",
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
      unitPrice: "28.033",
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
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Our Services
          </h2>
        </div>
        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {pricingPlans.map((plan, i) => {
            // center card no longer auto-scales; only hover or click triggers active state
            const isActive = hovered === i || selected === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(i)}
                className={`relative bg-white rounded-3xl p-8 border transition-transform duration-300 ease-in-out flex flex-col justify-between cursor-pointer ${isActive ? 'scale-105 shadow-2xl border-primary ring-2 ring-primary/20 z-10' : 'border-gray-200 shadow-lg'}`}
              >
                {/* Discount Tag */}
                <div className="absolute top-4 right-4 bg-[#A6FF00] text-dark font-extrabold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full">
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
                      <span className="text-xs text-gray-400 font-semibold ml-2">/bulan</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Harga per unit: Rp {plan.unitPrice}</div>
                  </div>
                  {/* Feature List */}
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* CTA Button */}
                <div className="mt-6">
                  <button
                    className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 ${isActive ? 'bg-primary text-white' : 'bg-gray-100 text-dark hover:bg-gray-200'}`}
                  >
                    Mulai Sekarang
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Horizontal unit-price slider */}
        <div className="mt-8 w-full max-w-5xl">
          <h4 className="text-lg font-bold mb-4">Harga Jasa Satuan</h4>
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
            {pricingPlans.map((p) => (
              <div key={p.title} className="min-w-[220px] bg-white rounded-2xl p-4 border border-gray-200 shadow-md flex-shrink-0">
                <h5 className="font-bold text-sm text-dark">{p.title}</h5>
                <p className="text-xs text-gray-500">{p.tagline}</p>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold">Rp {p.unitPrice}</span>
                  <span className="text-xs text-gray-400">/post</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">Harga satuan untuk layanan konten per post. Hubungi kami untuk paket kustom.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Order via WhatsApp */}
        <div className="mt-10">
          <a href="https://wa.me/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#82A1BA] to-[#A6FF00] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
              <path d="M21.7 5.3a11 11 0 10-2.6 11.9L22 22l4-1-0.3-1.7A11 11 0 0021.7 5.3z" fill="#fff" opacity="0.0" />
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149-.199.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.173.198-.297.298-.495.099-.198 0-.372-.049-.52-.049-.149-.672-1.618-.922-2.219-.242-.58-.487-.503-.672-.512l-.572-.01c-.199 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0.709.306 1.261.489 1.693.626.71.226 1.356.194 1.868.118.57-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347z" fill="#ffffff"/>
            </svg>
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
