import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Mitchell",
    suburb: "Glen Waverley",
    time: "2 weeks ago",
    initial: "S",
    color: "bg-pink-500",
    rating: 5,
    text: "Steven came to our house in Glen Waverley within 2 hours of calling. Fixed our switchboard issue same day and explained everything clearly. Price was exactly as quoted. Can't recommend enough!"
  },
  {
    name: "David Chen",
    suburb: "Doncaster",
    time: "1 month ago",
    initial: "D",
    color: "bg-blue-500",
    rating: 5,
    text: "Best electrician we've used in Doncaster. Installed downlights throughout our home, arrived on time, cleaned up perfectly, and the finish is professional. Worth every dollar."
  },
  {
    name: "Emma Robinson",
    suburb: "Box Hill",
    time: "3 weeks ago",
    initial: "E",
    color: "bg-purple-500",
    rating: 5,
    text: "Emergency call-out on Sunday night in Box Hill. Steven answered immediately and had our power back on within an hour. Honest pricing, no weekend price gouging. These guys are the real deal."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Reviews From Real Melbourne Locals
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 127+ Google reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {reviews.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
              <div className="flex items-start gap-3 mb-4">
                <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                  {testimonial.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-[#7FD13B] font-semibold">{testimonial.suburb}</div>
                  <div className="text-xs text-gray-500">{testimonial.time}</div>
                </div>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 48 48'%3E%3Cpath fill='%234285F4' d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'/%3E%3C/svg%3E" alt="Google" className="w-5 h-5" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://www.google.com/search?q=hit+the+switch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#7FD13B] hover:text-[#6BC12B] font-bold text-lg transition">
            Read all 127+ reviews on Google
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
