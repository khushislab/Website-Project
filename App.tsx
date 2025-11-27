import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Process />
        <Benefits />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;