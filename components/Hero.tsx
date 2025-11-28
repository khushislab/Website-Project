import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl opacity-50 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-mono text-zinc-600 mb-8 uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Accepting New Projects
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          We Build Digital Experiences <br className="hidden md:block" />
          That Make Your Audience <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-900">Stay Longer</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          PixelForge Studios creates simple, modern websites and custom games built around your idea — no jargon, no stress.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium text-lg hover:bg-black transition-all hover:scale-105 shadow-xl shadow-zinc-900/20 flex items-center justify-center gap-2 group"
          >
            Start Your Project 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-medium text-lg hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;