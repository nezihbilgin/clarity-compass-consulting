
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbulb, LayoutDashboard, Search, Users } from 'lucide-react';

const Services: React.FC = () => {
  const { content } = useLanguage();
  
  // Map to convert icon strings to components
  const iconMap = {
    'lightbulb': Lightbulb,
    'layout-dashboard': LayoutDashboard,
    'search': Search,
    'users': Users,
  };
  
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {content.services.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className="flex flex-col bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
