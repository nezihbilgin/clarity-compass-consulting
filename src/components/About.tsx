
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {content.about.title}
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-highlight flex items-center justify-center overflow-hidden">
                {/* Placeholder for profile image */}
                <div className="text-4xl font-bold text-primary">CC</div>
              </div>
            </div>
            
            <div className="md:w-2/3 space-y-4">
              {content.about.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
