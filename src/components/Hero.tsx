
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {content.hero.subtitle}
          </p>
          <Button className="px-8 py-6 text-base">
            {content.hero.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
