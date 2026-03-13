import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { Button } from '@/components/ui/button';

const galleryItems = [
  {
    tagline: "Kitchen Services",
    title: "Sink & Tap Repairs",
    description: "Fixing leaks, installing modern faucets, and clearing clogged drains with precision.",
    image: "/images/sink-repair.png",
  },
  {
    tagline: "Bathroom Logic",
    title: "Toilet Installations",
    description: "Full suite installations and emergency repairs for all residential bathroom systems.",
    image: "/images/toilet-install.png",
  },
  {
    tagline: "Maintenance",
    title: "Pipe Relining",
    description: "Modern no-dig solutions for broken underground pipes to save your garden.",
    image: "https://images.unsplash.com/photo-1605380595304-406cb752957e?q=80&w=800&auto=format&fit=crop",
  },
  {
    tagline: "Energy Efficiency",
    title: "Hot Water Systems",
    description: "Installation and servicing of gas, electric, and solar hot water units.",
    image: "/images/hot-water.png",
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#7FD13B] font-bold uppercase tracking-wider text-sm">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Latest Craftsmanship</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why Melbournians trust us for every drop. Quality work that stands the test of time.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: 2x2 Small Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <p className="text-xs font-bold text-[#7FD13B] uppercase tracking-tighter">{item.tagline}</p>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  <button className="flex items-center gap-1 text-gray-900 font-bold text-sm hover:gap-2 transition-all pt-2 group-hover:text-[#7FD13B]">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 1 Large Card */}
          <div className="flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex-1 relative min-h-[300px] overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&w=1200&auto=format&fit=crop" 
                alt="Full Kitchen & Bathroom Plumbing Project" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-8 lg:p-12 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-bold text-[#7FD13B] uppercase tracking-widest">Premium Projects</p>
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1]">
                  Complete Residential Plumbing & Gas Makeover
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  A high-end residential project in Camberwell featuring bespoke brass fittings, 
                  efficient gas heating integration, and a dedicated rainwater harvesting system.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Button className="bg-[#7FD13B] hover:bg-[#6BC12B] text-white px-8 py-6 rounded-xl font-bold text-lg shadow-lg">
                  Get Started
                </Button>
                <button className="flex items-center gap-2 text-gray-900 font-bold text-lg hover:gap-3 transition-all underline decoration-2 decoration-[#7FD13B] underline-offset-4">
                  View Full Case Study <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
