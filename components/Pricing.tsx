import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Simple & Transparent Pricing</h2>
          <p className="text-zinc-600 text-lg">
            Every project is different, but we keep pricing straightforward. Clear quotes. No hidden charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`flex flex-col p-6 rounded-2xl border ${
                plan.title === "Games" || plan.title === "Websites" 
                ? 'border-zinc-800 bg-zinc-900 text-white shadow-xl scale-105 z-10' 
                : 'border-zinc-200 bg-white text-zinc-900'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-2 ${
                     plan.title === "Games" || plan.title === "Websites" ? 'text-white' : 'text-zinc-900'
                }`}>{plan.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.suffix && <span className="text-sm opacity-70">{plan.suffix}</span>}
                </div>
                {!plan.suffix && <span className="text-xs opacity-70 uppercase tracking-wide">Starting At</span>}
                <p className={`text-sm mt-3 ${
                    plan.title === "Games" || plan.title === "Websites" ? 'text-zinc-400' : 'text-zinc-500'
                }`}>
                    {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={
                         plan.title === "Games" || plan.title === "Websites" ? 'text-green-400' : 'text-green-600'
                    } />
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`w-full py-3 rounded-xl text-center text-sm font-bold transition-colors ${
                     plan.title === "Games" || plan.title === "Websites"
                     ? 'bg-white text-zinc-900 hover:bg-gray-100'
                     : 'bg-zinc-900 text-white hover:bg-zinc-800'
                }`}
              >
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;