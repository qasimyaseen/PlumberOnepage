import { Button } from '@/components/ui/button';

export function QuoteForm() {
  return (
    <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Get Your FREE Quote</h3>
        <p className="text-gray-600">Takes 60 seconds. No obligation.</p>
        <p className="text-sm text-[#7FD13B] font-semibold mt-2">⚡ We typically respond within 15 minutes</p>
      </div>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Your Full Name *" 
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
          required
        />
        <input 
          type="tel" 
          placeholder="Mobile Number *" 
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
          required
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
        />
        <div className="grid grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Suburb *" 
            className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
            required
          />
          <input 
            type="text" 
            placeholder="Postcode" 
            className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
          />
        </div>
        <select 
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#7FD13B] focus:ring-2 focus:ring-[#7FD13B]/20 outline-none transition"
          required
        >
          <option value="">What do you need? *</option>
          <option>Emergency Repair</option>
          <option>Switchboard Upgrade</option>
          <option>Lighting Installation</option>
          <option>Safety Inspection</option>
          <option>Smoke Alarm</option>
          <option>Other</option>
        </select>
        <Button 
          type="submit" 
          size="lg"
          className="w-full bg-[#7FD13B] hover:bg-[#6BC12B] text-white font-bold text-lg h-auto py-4"
        >
          Get My FREE Quote →
        </Button>
        <p className="text-xs text-gray-500 text-center">By submitting, you agree to our privacy policy. No spam, ever.</p>
      </form>
    </div>
  );
}
