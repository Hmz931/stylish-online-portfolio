
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

// Déplacer le script Google Analytics vers un composant séparé
const GoogleAnalytics = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-MEASUREMENT-ID"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YOUR-MEASUREMENT-ID');
        `
      }}></script>
    </>
  );
};

const Index = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  // Add RTL support for Arabic
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <GoogleAnalytics />
      <Header />
      <Hero />
      <About />
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <Experience />
          <Education />
        </div>
      </main>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
