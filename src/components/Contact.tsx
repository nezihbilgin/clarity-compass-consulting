
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {content.contact.title}
          </h2>
          
          <p className="text-gray-700 mb-12">
            {content.contact.description}
          </p>
          
          <Card className="p-8 bg-white shadow-sm mx-auto max-w-xl">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">
                  {content.contact.emailLabel}
                </p>
                <div className="flex items-center justify-center text-lg font-medium">
                  <Mail size={18} className="mr-2 text-primary" />
                  <a href={`mailto:${content.contact.email}`} className="hover:text-primary transition-colors">
                    {content.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="w-full border-t border-gray-200 my-2"></div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  {content.contact.scheduleLabel}
                </p>
                <Button className="flex items-center px-6">
                  <Calendar size={18} className="mr-2" />
                  {content.contact.scheduleButton}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
