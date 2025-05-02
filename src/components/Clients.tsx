
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const Clients: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <section id="clients" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            {content.clients.title}
          </h2>
          
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            {content.clients.description}
          </p>
          
          <div className="space-y-4">
            {content.clients.items.map((item, index) => (
              <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 bg-highlight rounded-full flex items-center justify-center">
                    <Check size={16} className="text-primary" />
                  </div>
                </div>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
