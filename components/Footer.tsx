import React from 'react';
import { Terminal, ArrowRight, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Final CTA */}
        <div className="bg-zinc-900 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden mb-24 border border-zinc-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-zinc-400 mb-10">
              Tell us your idea — big, small, simple, or crazy. We’ll help you bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Start Your Project <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-xl font-medium text-lg hover:bg-zinc-800 transition-colors">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white text-zinc-950 p-1.5 rounded-lg">
                <Terminal size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-bold tracking-tight">PixelForge Studios</span>
            </div>
            <p className="text-zinc-500 max-w-sm mb-6">
              We create simple, modern websites and custom games built around your idea — no jargon, no stress.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@pixelforge.com" className="p-2 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Custom Websites</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile & Desktop Games</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AR Experiences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center md:text-left text-zinc-600 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} PixelForge Studios. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;