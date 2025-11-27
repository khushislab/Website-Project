import React from 'react';
import { BENEFITS } from '../constants';
import { Check } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-50 rounded-3xl p-8 md:p-16 border border-zinc-100">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-zinc-900">What You Get With Every Project</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-zinc-700 font-medium">{benefit}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;