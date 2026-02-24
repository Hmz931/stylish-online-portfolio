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
import { Building2, GraduationCap, Award } from 'lucide-react';

const Index = () => {
  const { language, t } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const timelineItems = [
    // Current education (ongoing)
    {
      title: t('education.degree0.title'),
      subtitle: t('education.degree0.institution'),
      location: t('education.degree0.location'),
      period: t('education.degree0.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2025-09-01'),
    },
    // Current job – UB Services, Apr 2021
    {
      title: t('experience.job1.title'),
      subtitle: t('experience.job1.company'),
      location: t('experience.job1.location'),
      period: t('experience.job1.period'),
      description: [
        t('experience.job1.task1'),
        t('experience.job1.task3'),
        t('experience.job1.task4'),
        t('experience.job1.task5'),
      ].filter(Boolean),
      type: 'experience' as const,
      date: new Date('2021-04-01'),
    },
    // Master degree completed 2021
    {
      title: t('education.degree1.title'),
      subtitle: t('education.degree1.institution'),
      location: t('education.degree1.location'),
      period: t('education.degree1.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2021-01-01'),
    },
    // Power BI cert Feb 2025
    {
      title: t('certifications.cert1.title'),
      subtitle: t('certifications.cert1.organization'),
      location: '',
      period: t('certifications.cert1.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2025-02-01'),
    },
    // Web Dev Bootcamp 2024
    {
      title: t('certifications.cert2.title'),
      subtitle: t('certifications.cert2.organization'),
      location: '',
      period: t('certifications.cert2.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2024-05-01'),
    },
    // Zero to Mastery 2023
    {
      title: t('certifications.cert3.title'),
      subtitle: t('certifications.cert3.organization'),
      location: '',
      period: t('certifications.cert3.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2023-03-01'),
    },
    // Manpower Feb 2018 – Dec 2018
    {
      title: t('experience.job2.title'),
      subtitle: t('experience.job2.company'),
      location: t('experience.job2.location'),
      period: t('experience.job2.period'),
      description: [
        t('experience.job2.task1'),
        t('experience.job2.task2'),
        t('experience.job2.task3'),
      ].filter(Boolean),
      type: 'experience' as const,
      date: new Date('2018-02-01'),
    },
    // Internship Jul 2017
    {
      title: t('experience.job3.title'),
      subtitle: t('experience.job3.company'),
      location: t('experience.job3.location'),
      period: t('experience.job3.period'),
      description: [t('experience.job3.task1')].filter(Boolean),
      type: 'experience' as const,
      date: new Date('2017-07-01'),
    },
    // Bachelor degree 2013–2017
    {
      title: t('education.degree2.title'),
      subtitle: t('education.degree2.institution'),
      location: t('education.degree2.location'),
      period: t('education.degree2.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2017-06-01'),
    },
  ];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <Hero />
      <About />
      <main className="bg-gray-50 dark:bg-gray-900">
        <section id="timeline" className={`section-padding ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Timeline
              items={timelineItems}
              title={t('timeline.title')}
              subtitle={t('timeline.subtitle')}
            />
          </div>
        </section>
      </main>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
