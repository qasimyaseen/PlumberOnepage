import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { QuoteForm } from '@/components/sections/QuoteForm';
import { PainPoints } from '@/components/sections/PainPoints';
import { Services } from '@/components/sections/Services';
import { FeatureSection } from '@/components/sections/FeatureSection';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { FAQ } from '@/components/sections/FAQ';
import Schema from '@/components/Schema';
import { CheckCircle, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="size-full bg-white">
      <Schema />
      <Navbar />

      <main>
        {/* We need to pass QuoteForm to Hero or manually place it since we changed the layout slightly for modularity */}
        <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden">
          <Hero />
          {/* Re-injecting QuoteForm into Hero grid layout locally on page for better control */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end">
              <div className="w-full lg:w-1/2 pointer-events-auto hidden lg:block py-20">
                <QuoteForm />
              </div>
            </div>
          </div>
          {/* Mobile Quote Form */}
          <div className="lg:hidden px-4 pb-20 relative z-10">
            <QuoteForm />
          </div>
        </section>

        <PainPoints />

        {/* Offer Stack - Keeping it here for now or can move to its own component */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What You Get When You Book With Us
              </h2>
              <p className="text-xl text-gray-600">
                Not just an electrician. A complete, worry-free service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12 rounded-2xl border-2 border-[#7FD13B]">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "FREE no-obligation quote within 48 hours",
                  "Same-day service available (when booked early)",
                  "Fixed pricing — no hidden fees or surprises",
                  "15+ years master electrician experience",
                  "Full year warranty on all parts supplied",
                  "Lifetime workmanship guarantee",
                  "We clean up and leave your home spotless",
                  "24/7 emergency service available",
                  "Fully licensed, insured & certified",
                  "Friendly service that respects your home"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#7FD13B] flex-shrink-0 mt-1" />
                    <span className="text-gray-900 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#quote" className="bg-[#7FD13B] hover:bg-[#6BC12B] text-white px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center gap-2 shadow-lg">
                  Book Your FREE Quote
                  <span className="text-xl">→</span>
                </a>
                <a href="tel:1300205205" className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition inline-flex items-center justify-center gap-2 border-2 border-gray-300">
                  <Phone className="w-6 h-6" />
                  Call 1300 205 205
                </a>
              </div>
            </div>
          </div>
        </section>

        <FeatureSection />

        <Services />
        <Gallery />
        <Reviews />
        <FAQ />

        {/* Areas Service Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                <MapPin className="inline w-10 h-10 text-[#7FD13B] mb-2" />
                {" "}Areas We Service
              </h2>
              <p className="text-xl text-gray-600">
                Proudly serving Melbourne's East & South-Eastern suburbs
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  "Melbourne CBD", "Box Hill", "Glen Waverley", "Doncaster", "Camberwell",
                  "Hawthorn", "Kew", "Balwyn", "Mont Albert", "Surrey Hills",
                  "Blackburn", "Mitcham", "Ringwood", "Croydon", "Bayswater",
                  "Chadstone", "Oakleigh", "Clayton", "Dandenong", "Noble Park",
                  "Springvale", "Berwick", "Narre Warren", "Pakenham", "Cranbourne",
                  "Belgrave", "Ferntree Gully", "Rowville", "Wantirna", "Boronia"
                ].map((suburb, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#7FD13B] flex-shrink-0" />
                    <span>{suburb}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
