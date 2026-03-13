import { Zap, Home, Lightbulb, Shield, AlertCircle, Award, CheckCircle, ThumbsUp } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-10 h-10 text-[#7FD13B]" />,
    title: "Emergency Repairs",
    description: "24/7 service. Power outages, faults, urgent fixes."
  },
  {
    icon: <Home className="w-10 h-10 text-[#7FD13B]" />,
    title: "Switchboard Upgrades",
    description: "Modern, safe switchboard installations & repairs."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#7FD13B]" />,
    title: "Lighting Installation",
    description: "Downlights, LED upgrades, outdoor lighting."
  },
  {
    icon: <Shield className="w-10 h-10 text-[#7FD13B]" />,
    title: "Safety Inspections",
    description: "Comprehensive checks, compliance testing."
  },
  {
    icon: <AlertCircle className="w-10 h-10 text-[#7FD13B]" />,
    title: "Smoke Alarms",
    description: "Installation, testing, battery replacements."
  },
  {
    icon: <Award className="w-10 h-10 text-[#7FD13B]" />,
    title: "Data & Phone Cabling",
    description: "Network points, structured cabling solutions."
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-[#7FD13B]" />,
    title: "RCD Testing",
    description: "Safety switch testing & maintenance."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-[#7FD13B]" />,
    title: "General Electrical",
    description: "Power points, ceiling fans, appliance installs."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Electrical Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to complete installations — we do it all
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition group">
              <div className="mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Repetition After Services */}
        <div className="mt-12 text-center">
          <a href="#quote" className="inline-flex items-center gap-2 bg-[#7FD13B] hover:bg-[#6BC12B] text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg">
            Get Your FREE Quote Today
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
