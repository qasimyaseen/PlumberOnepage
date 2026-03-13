import { Star, Shield, Clock, CheckCircle, Phone, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcxNTcxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Electrician working"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Trust Badges Above Headline */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-bold">4.9/5 on Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-[#7FD13B]" />
                <span className="font-bold">Licensed Master Electricians</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-[#7FD13B]" />
                <span className="font-bold">24/7 Emergency</span>
              </div>
            </div>

            {/* Clear, Outcome-Focused Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Melbourne Electricians Who Fix It Same Day — <span className="text-[#7FD13B]">Guaranteed</span>
            </h1>
            
            {/* Subheadline That Reduces Friction */}
            <p className="text-xl text-gray-200">
              Book a free quote in 60 seconds. No obligation. No hidden fees. Just honest electrical service across Melbourne's East & South-Eastern suburbs.
            </p>

            {/* Risk Reversal - Prominent */}
            <div className="bg-[#7FD13B]/20 border-2 border-[#7FD13B] p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#7FD13B] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">Our Iron-Clad Guarantee:</p>
                  <ul className="space-y-1 text-gray-200">
                    <li>✓ If we're late, you get $50 off</li>
                    <li>✓ 100% satisfaction or we fix it free</li>
                    <li>✓ Full year warranty on all parts</li>
                    <li>✓ Lifetime guarantee on workmanship</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Primary CTA - Bright & Obvious */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#quote" className="bg-[#7FD13B] hover:bg-[#6BC12B] px-8 py-5 rounded-xl font-bold text-xl transition inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Book Free Quote Now
                <span className="text-2xl">→</span>
              </a>
              <a href="tel:1300205205" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-5 rounded-xl font-bold text-xl transition inline-flex items-center justify-center gap-2 border-2 border-white">
                <Phone className="w-6 h-6" />
                1300 205 205
              </a>
            </div>

            {/* Scarcity/Urgency */}
            <div className="flex items-center gap-2 text-[#7FD13B] bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <span className="font-semibold">Only 3 same-day bookings left this week</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
