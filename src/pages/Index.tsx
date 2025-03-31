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
import Timeline from '@/components/Timeline';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

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
  
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const experiences = [
    {
      title: 'Job 1',
      subtitle: 'Company 1',
      period: '2020 - 2023',
      location: 'Location 1',
      description: [
        'Task 1',
        'Task 2',
        'Task 3'
      ]
    },
    // Add more experiences here
  ];

  const education = [
    {
      title: 'Degree 1',
      subtitle: 'Institution 1',
      period: '2015 - 2019',
      location: 'Location 1'
    },
    // Add more education here
  ];

  const certifications = [
    {
      title: 'Certification 1',
      organization: 'Organization 1',
      date: '2023',
      url: 'https://linktocertification.com'
    },
    // Add more certifications here
  ];

  const timelineItems = [
    ...experiences,
    ...education,
    ...certifications
  ];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <GoogleAnalytics />
      <Header />
      <Hero />
      <About />
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="section-title dark:text-white">Timeline</h2>
          <Timeline items={timelineItems} />
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
