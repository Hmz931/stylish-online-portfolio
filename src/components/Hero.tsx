
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="home" className={`min-h-screen flex items-center justify-center bg-gradient-subtle pt-20 ${language === 'ar' ? 'rtl' : 'ltr'} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <Button asChild size="lg" className="rounded-full bg-gradient-primary hover:shadow-glow">
                <a href="#contact">{t('hero.contactButton')} <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full backdrop-blur-sm bg-card/30 border-primary/20 hover:bg-card/50">
                <a href="#about">{t('hero.learnMoreButton')}</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-card/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500">
                <img
                  src="https://avatars.githubusercontent.com/u/47541283?s=400&u=788a85f9f63abfd03210c2ebfb30b0bb11c95954&v=4"
                  alt="Hamza Bouguerra"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
