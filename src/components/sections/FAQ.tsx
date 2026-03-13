import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer emergency 24/7 electrical services?",
    answer: "Yes, we provide emergency electrical repairs across Melbourne's East & South-Eastern suburbs 24 hours a day, 7 days a week. From power outages to hazardous sparking, we respond quickly to keep your home safe."
  },
  {
    question: "How much does a call-out normally cost?",
    answer: "We offer transparent fixed pricing and provide a FREE no-obligation quote before any work starts. You'll know exactly what you'll pay with no hidden surcharges or surprise fees."
  },
  {
    question: "Are your electricians fully licensed and insured?",
    answer: "Absolutely. All our technicians are Registered Electrical Contractors (REC) and carry full public liability insurance. We provide a Certificate of Electrical Safety (CES) for all prescribed work."
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "We provide a lifetime workmanship guarantee. Additionally, all parts and materials we supply carry a full one-year manufacturer's warranty for your complete peace of mind."
  },
  {
    question: "Which areas of Melbourne do you service?",
    answer: "We primarily service the East and South-Eastern suburbs, including Box Hill, Glen Waverley, Doncaster, Hawthorn, Oakleigh, Dandenong, and surrounding areas. See our 'Areas Service' section for a full list."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about our electrical service</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-[#7FD13B] transition">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-lg text-gray-900 group-open:text-[#7FD13B]">{faq.question}</span>
                  <Plus className="w-6 h-6 text-gray-400 group-open:rotate-45 transition transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-lg border-2 border-dashed border-gray-200">
          <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
          <p className="text-gray-600 mb-6">Our friendly team is ready to help you with any electrical query.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1300205205" className="font-bold text-[#7FD13B] hover:text-[#6BC12B] transition text-lg underline">Call us on 1300 205 205</a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="#quote" className="font-bold text-[#7FD13B] hover:text-[#6BC12B] transition text-lg underline">Message us online</a>
          </div>
        </div>
      </div>
    </section>
  );
}
