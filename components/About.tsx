import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-zinc-600">
              <p>
                At PixelForge Studios, we believe digital experiences should feel simple, delightful, and alive.
              </p>
              <p>
                Whether it’s a fast, modern website or an immersive game, our team builds everything with one goal in mind: 
                <span className="block text-xl font-bold text-zinc-900 mt-2">Make your audience say “wow.”</span>
              </p>
              <p>
                We mix creativity, solid tech skills, and real human understanding to create experiences people love exploring.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-700">No complicated tech talk</div>
              <div className="px-4 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-700">No jargon</div>
              <div className="px-4 py-2 bg-zinc-100 rounded-lg text-sm font-medium text-zinc-700">Clear communication</div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-square rounded-2xl bg-zinc-900 p-8 flex flex-col justify-between text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold mb-2">100%</div>
                  <div className="text-zinc-400">Custom Built</div>
                </div>

                <div className="relative z-10 grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-zinc-800/50 backdrop-blur p-4 rounded-xl">
                    <div className="text-2xl font-bold mb-1">Fast</div>
                    <div className="text-sm text-zinc-400">Performance</div>
                  </div>
                  <div className="bg-zinc-800/50 backdrop-blur p-4 rounded-xl">
                    <div className="text-2xl font-bold mb-1">Clean</div>
                    <div className="text-sm text-zinc-400">Codebase</div>
                  </div>
                </div>
             </div>
             {/* Decorative dots */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] [background-size:16px_16px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;