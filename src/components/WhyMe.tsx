
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

const WhyMe: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <section id="why-me" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {content.whyMe.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {content.whyMe.items.map((item, index) => (
            <Card key={index} className="border border-gray-100 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">Client Feedback</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.whyMe.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-highlight/30 p-6 rounded-lg">
                <blockquote className="text-gray-800 mb-4">"{testimonial.quote}"</blockquote>
                <cite className="text-sm font-medium block text-right">— {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
