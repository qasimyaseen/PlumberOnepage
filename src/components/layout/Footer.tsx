import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

const logo = '/logo.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image src={logo} alt="Hit The Switch" width={150} height={40} className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Melbourne's trusted electrical experts since 2009.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>ABN: 12 345 678 901</p>
              <p>Licence: REC 12345</p>
              <p>Fully Insured</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-[#7FD13B] transition">Our Services</a></li>
              <li><a href="#reviews" className="hover:text-[#7FD13B] transition">Customer Reviews</a></li>
              <li><a href="#process" className="hover:text-[#7FD13B] transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-[#7FD13B] transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-[#7FD13B] transition">Emergency Repairs</a></li>
              <li><a href="#services" className="hover:text-[#7FD13B] transition">Switchboard Upgrades</a></li>
              <li><a href="#services" className="hover:text-[#7FD13B] transition">Lighting Installation</a></li>
              <li><a href="#services" className="hover:text-[#7FD13B] transition">Safety Inspections</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#7FD13B]" />
                <a href="tel:1300205205" className="hover:text-[#7FD13B] transition font-bold">1300 205 205</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7FD13B] mt-1 flex-shrink-0" />
                <span>Melbourne CBD, East & South-Eastern Suburbs</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7FD13B]" />
                <span>24/7 Emergency Service</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hit The Switch. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#7FD13B] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#7FD13B] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
