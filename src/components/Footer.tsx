
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="font-heading font-medium">
              Clarity <span className="text-primary">Compass</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-600">
            {content.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
