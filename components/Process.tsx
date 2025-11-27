import React from 'react';
import { PROCESS_STEPS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-zinc-400 text-lg">We keep your journey smooth and transparent.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-10"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-24 h-24 bg-zinc-800 rounded-2xl flex items-center justify-center text-2xl font-bold font-mono border border-zinc-700 mb-6 mx-auto group-hover:bg-white group-hover:text-zinc-900 transition-colors z-10">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold mb-3 text-center">{step.title}</h3>
              <p className="text-zinc-400 text-sm text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <span className="inline-flex items-center gap-2 text-zinc-300 font-mono text-sm border border-zinc-700 rounded-full px-4 py-2">
                Simple <ArrowRight size={14}/> Clear <ArrowRight size={14}/> Enjoyable
            </span>
        </div>
      </div>
    </section>
  );
};

export default Process;