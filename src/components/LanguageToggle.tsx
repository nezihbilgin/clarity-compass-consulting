
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage} 
      className="text-sm font-medium px-3"
    >
      {language === 'en' ? 'TR' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
