import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 sticky top-24">
              Why Brands Choose PixelForge
            </h2>
            <p className="text-zinc-600 text-lg mb-8 lg:max-w-xs">
              We focus on clarity, quality, and a stress-free process.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 gap-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
                    <feature.icon size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                  <p className="text-zinc-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;