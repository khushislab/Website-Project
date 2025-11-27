import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{question}</span>
        <span className={`flex-shrink-0 ml-4 p-1 rounded-full border transition-colors ${isOpen ? 'bg-zinc-900 border-zinc-900 text-white' : 'bg-transparent border-zinc-300 text-zinc-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-zinc-600 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-zinc-600">Simple answers to common questions.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 px-8">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;