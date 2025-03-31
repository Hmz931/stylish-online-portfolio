
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`order-2 md:order-1 animate-fade-in-up ${language === 'ar' ? 'text-right' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              <span className="block">{t('hero.greeting')}</span>
              <span className="text-primary block">Hamza Bouguerra</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">{t('hero.contactButton')} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
                <a href="#about">{t('hero.learnMoreButton')}</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white dark:border-gray-700 shadow-xl">
              <img
                src="https://avatars.githubusercontent.com/u/47541283?s=400&u=788a85f9f63abfd03210c2ebfb30b0bb11c95954&v=4"
                alt="Hamza Bouguerra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
