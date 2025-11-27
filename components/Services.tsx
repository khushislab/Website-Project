import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">What We Build</h2>
          <p className="text-zinc-600 text-lg">
            We keep things simple. Here’s what we’re really good at. 
            Everything is fully custom and built from scratch for YOU.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
          
          {/* Last card callout */}
          <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center">
            <h3 className="text-xl font-bold text-white mb-3">Have a unique idea?</h3>
            <p className="text-zinc-400 mb-6">We love challenges. Let's build something new.</p>
            <a href="#contact" className="inline-block px-6 py-2 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;