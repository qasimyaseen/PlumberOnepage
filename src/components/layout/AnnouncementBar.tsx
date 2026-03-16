import { Flame } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-2">
      <Flame className="w-4 h-4 animate-pulse" />
      <span>Limited Time Offer: Boiler Servicing from only £69!</span>
      <a href="#quote" className="underline hover:text-white/80 transition ml-2">Book Now →</a>
    </div>
  );
}
