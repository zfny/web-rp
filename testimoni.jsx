import React from 'react';
export default function Team() {
  const teamMembers = [
    { id: 1, name: "Reza Aditya", role: "FOUNDER & CEO", img: "/images/team_1.png" },
    { id: 2, name: "Sarah Utami", role: "CREATIVE DIR", img: "/images/team_2.png" },
    { id: 3, name: "Dimas Pratama", role: "LEAD DESIGNER", img: "/images/team_3.png" },
    { id: 4, name: "Nabila Putri", role: "COPYWRITER", img: "/images/team_4.png" },
    { id: 5, name: "Budi Santoso", role: "ACCOUNT MGR", img: "/images/team_5.png" }
  ];
  return (
    <section id="team" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight uppercase">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
        {/* 5 Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-6xl">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative bg-white rounded-[2rem] border border-gray-100 p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col items-center group overflow-visible"
            >
              
              {/* Starburst Badge Decals for Card 1 and 5 (similar to design reference) */}
              {(member.id === 1 || member.id === 5) && (
                <div className="absolute -top-4 -left-3 bg-dark text-white p-2 rounded-full z-20 flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8 fill-accent text-accent" viewBox="0 0 24 24">
                    <path d="M12 2l1.6 3.3 3.6.5-2.6 2.5.6 3.6-3.2-1.7-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" />
                    <circle cx="12" cy="12" r="1.5" className="fill-dark" />
                  </svg>
                </div>
              )}
              {/* Photo Frame */}
              <div className="w-full aspect-[4/5] rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Overlay card details in design reference */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
              </div>
              {/* Member Details */}
              <div className="text-center mt-4 w-full px-1">
                {/* Role Badge in Accent Green (#A6FF00) */}
                <div className="inline-block bg-accent text-dark font-black text-[9px] tracking-wider px-2 py-0.5 rounded uppercase mb-1">
                  {member.role}
                </div>
                <h3 className="text-xs md:text-sm font-extrabold text-dark tracking-wide truncate">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { Star, Send, User } from 'lucide-react';
export default function Testimonials() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Apotek Medika",
      role: "Client Partner",
      rating: 5,
      text: "Sangat puas dengan hasil desain feeds dan logo yang dikerjakan oleh Rice Project. Sangat komunikatif, tepat waktu, dan hasilnya berkualitas."
    },
    {
      id: 2,
      name: "Kopi Seduh Indonesia",
      role: "Client Partner",
      rating: 5,
      text: "Rice Project membantu kami dalam rebranding identitas visual bisnis kopi kami. Desainnya sangat kekinian dan disukai pelanggan."
    },
    {
      id: 3,
      name: "Butik Cantik Jakarta",
      role: "Client Partner",
      rating: 5,
      text: "Sangat merekomendasikan Rice Project untuk pelaku usaha yang butuh desain konten Instagram konsisten dan relevan."
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;
    const newReview = {
      id: Date.now(),
      name: newName,
      role: "Brand Collaborator",
      rating: rating,
      text: newText
    };
    setReviews([newReview, ...reviews]);
    setNewName('');
    setNewText('');
    setRating(5);
  };
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Voices of Our Clients
          </h2>
          <p className="font-script text-2xl md:text-3xl text-secondaryBlue mt-2 tracking-wider">
            Real feedback from brands we've worked with
          </p>
        </div>
        {/* Reviews List */}
        <div className="w-full space-y-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex items-start space-x-4 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fadeIn"
            >
              {/* Avatar */}
              <div className="p-3 bg-primary/10 rounded-full text-primary flex-shrink-0">
                <User className="h-6 w-6" />
              </div>
              {/* Review Content */}
              <div className="flex-1 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-black text-sm text-dark tracking-wide">
                      {review.name}
                    </h3>
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {review.role}
                    </span>
                  </div>
                  {/* Stars */}
                  <div className="flex items-center space-x-0.5 mt-1 sm:mt-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm font-semibold leading-relaxed mt-2">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Feedback Input Form */}
        <div id="contact" className="w-full mt-16 bg-gray-50 border border-gray-150 p-6 md:p-8 rounded-[2rem] shadow-sm">
          <h3 className="text-lg md:text-xl font-black text-dark uppercase tracking-tight text-center mb-6">
            Write Your Feedback
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Brand Name Input */}
              <input
                type="text"
                placeholder="Brand / Your Name..."
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs md:text-sm font-semibold text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              {/* Star Rating Selector */}
              <div className="flex items-center space-x-2 bg-white px-5 py-3 rounded-full border border-gray-200 shadow-inner">
                <span className="text-xs font-bold text-gray-400">Rating:</span>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-5 w-5 transition-colors duration-150 ${
                          star <= (hoverRating || rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Description Text Input */}
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Write your review description here..."
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                required
                className="w-full pl-5 pr-16 py-3.5 rounded-full border border-gray-200 bg-white text-xs md:text-sm font-semibold text-dark placeholder-gray-400 focus:outline-none focus:border-primary transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 bg-accent hover:bg-dark hover:text-white text-dark p-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                aria-label="Send feedback"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
