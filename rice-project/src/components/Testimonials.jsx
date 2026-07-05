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
    if (newName.trim() && newText.trim()) {
      const newReview = {
        id: reviews.length + 1,
        name: newName,
        role: 'Client Partner',
        rating: rating,
        text: newText
      };
      setReviews([newReview, ...reviews]);
      setNewName('');
      setNewText('');
      setRating(5);
    }
  };
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dark tracking-tight uppercase">
            Voice of Our Clients
          </h2>
          <p className="subtitle-font text-2xl md:text-3xl font-semibold mt-2 leading-tight" style={{ color: '#517EB7' }}>
            Real feedback from brands we've worked with
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 justify-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                "{review.text}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="font-bold text-dark text-sm">{review.name}</h4>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="bg-gradient-to-r from-dark to-dark/80 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Share Your Experience
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="flex items-center gap-2 text-white/80 text-sm font-semibold mb-2">
                <User className="h-4 w-4" />
                Your Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Enter your business name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="flex items-center gap-2 text-white/80 text-sm font-semibold mb-2">
                <Star className="h-4 w-4" />
                Rating
              </label>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setRating(i + 1)}
                    onMouseEnter={() => setHoverRating(i + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-all"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        i < (hoverRating || rating)
                          ? 'fill-accent text-accent'
                          : 'text-white/30'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="text-white/80 text-sm font-semibold block mb-2">
                Your Review
              </label>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Share your experience with Rice Project..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent h-24 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent text-dark font-bold py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
