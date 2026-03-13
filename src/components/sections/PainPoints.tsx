import { XCircle, CheckCircle } from 'lucide-react';

const pains = [
  {
    problem: "They never show up on time",
    solution: "We're on time or you get $50 off"
  },
  {
    problem: "Hidden fees and price blow-outs",
    solution: "Fixed pricing quoted upfront, no surprises"
  },
  {
    problem: "Takes days to get a quote back",
    solution: "We respond within 15 minutes, quote within 48 hours"
  }
];

export function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tired of Unreliable Electricians?</h2>
          <p className="text-xl text-gray-600">You&apos;re not alone. Here&apos;s what Melbourne homeowners tell us they hate about hiring electricians:</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
              <div className="mb-6 space-y-4 w-full">
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.problem}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-lg text-sm border border-green-100">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-bold">{item.solution}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
