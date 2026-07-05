import React from 'react';

export default function Team() {
  const members = [
    { id: 1, name: 'Rais', role: 'Creative Direct & Project Manager', img: '/images/fotorais.png' },
    { id: 2, name: 'Tyas', role: 'Graphic Designer & Illustrator', img: '/images/fototyas.png' },
    { id: 3, name: 'Tiara', role: 'Copywriter & Web Developer', img: '/images/fototiara.png' },
    { id: 4, name: 'Fany', role: 'Graphic Designer & UI UX Designer', img: '/images/fotofany.png' },
    { id: 5, name: 'Dian', role: 'Finance & Social Media Management', img: '/images/fotodian.png' }
  ];
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">Our Team</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {members.map((m) => (
            <div key={m.id} className="team-card">
              <div className="team-image">
                <img src={m.img} alt={m.name} className="" onError={(e)=>{e.target.style.display='none'}}/>
              </div>
              <div className="team-info">
                <h4 className="subtitle-font text-2xl font-bold text-dark">{m.name}</h4>
                <p className="text-sm text-gray-500 mt-2">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
