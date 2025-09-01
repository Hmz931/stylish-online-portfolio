
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
import { Linkedin, Facebook, Youtube, Twitter, Instagram, FileText, Building2, GraduationCap, Award } from 'lucide-react';

// Inline Google Analytics component
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
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  
  // Add RTL support for Arabic
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Pre-process dates to ensure proper chronological sorting
  // Convert string dates to Date objects for accurate sorting
  const parseDate = (dateString) => {
    if (!dateString) return new Date();
    
    // Extract the first date if it's a range (e.g., "Jun 2022 - Present")
    const firstDate = dateString.split(' - ')[0];
    
    // Parse various date formats
    const parts = firstDate.split(' ');
    if (parts.length === 2) {
      // Format: "Jun 2022"
      const month = {'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 
                     'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11}[parts[0]];
      const year = parseInt(parts[1]);
      return new Date(year, month || 0);
    }
    return new Date(firstDate);
  };

  // Custom icons for timeline items
  const customIcons = {
    experience: <Building2 className="w-4 h-4 text-white" />,
    education: <GraduationCap className="w-4 h-4 text-white" />,
    certification: <Award className="w-4 h-4 text-white" />,
    portfolio: <FileText className="w-4 h-4 text-white" />,
    development: <Building2 className="w-4 h-4 text-white" />,
    research: <Award className="w-4 h-4 text-white" />,
    academic: <GraduationCap className="w-4 h-4 text-white" />
  };

  // Combined timeline data from experience, education, and certifications
  const timelineItems = [
    // Experience items
    {
      title: t('experience.job1.title'),
      subtitle: t('experience.job1.company'),
      location: t('experience.job1.location'),
      period: t('experience.job1.period'),
      description: [
        t('experience.job1.task1'),
        t('experience.job1.task2'),
        t('experience.job1.task3'),
        t('experience.job1.task4'),
        t('experience.job1.task5')
      ],
      type: 'experience' as const,
      date: new Date('2023-04-01'), // April 2023
      icon: customIcons.development
    },
    {
      title: t('experience.job2.title'),
      subtitle: t('experience.job2.company'),
      location: t('experience.job2.location'),
      period: t('experience.job2.period'),
      description: [
        t('experience.job2.task1'),
        t('experience.job2.task2'),
        t('experience.job2.task3'),
        t('experience.job2.task4'),
        t('experience.job2.task5'),
        t('experience.job2.task6')
      ],
      type: 'experience' as const,
      date: new Date('2022-06-01'), // June 2022
      icon: customIcons.experience
    },
    {
      title: t('experience.job3.title'),
      subtitle: t('experience.job3.company'),
      location: t('experience.job3.location'),
      period: t('experience.job3.period'),
      description: [
        t('experience.job3.task1')
      ],
      type: 'experience' as const,
      date: new Date('2021-09-01'), // September 2021
      icon: customIcons.development
    },
    {
      title: t('experience.job4.title'),
      subtitle: t('experience.job4.company'),
      location: t('experience.job4.location'),
      period: t('experience.job4.period'),
      description: [
        t('experience.job4.task1'),
        t('experience.job4.task2'),
        t('experience.job4.task3'),
        t('experience.job4.task4')
      ],
      type: 'experience' as const,
      date: new Date('2020-07-01'), // July 2020
      icon: customIcons.experience
    },
    
    // Education items
    {
      title: t('education.degree1.title'),
      subtitle: t('education.degree1.institution'),
      location: t('education.degree1.location'),
      period: t('education.degree1.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2019-06-15'), // June 2019 graduation
      icon: customIcons.academic
    },
    {
      title: t('education.degree2.title'),
      subtitle: t('education.degree2.institution'),
      location: t('education.degree2.location'),
      period: t('education.degree2.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2017-05-30'), // May 2017 graduation
      icon: customIcons.education
    },
    {
      title: t('education.degree3.title'),
      subtitle: t('education.degree3.institution'),
      location: t('education.degree3.location'),
      period: t('education.degree3.period'),
      description: [],
      type: 'education' as const,
      date: new Date('2015-06-30'), // June 2015 graduation
      icon: customIcons.education
    },
    
    // Certification items
    {
      title: t('certifications.cert1.title'),
      subtitle: t('certifications.cert1.organization'),
      location: "",
      period: t('certifications.cert1.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2022-06-15'), // June 2022 certification
      icon: customIcons.certification
    },
    {
      title: t('certifications.cert2.title'),
      subtitle: t('certifications.cert2.organization'),
      location: "",
      period: t('certifications.cert2.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2021-09-15'), // September 2021 certification
      icon: customIcons.certification
    },
    {
      title: t('certifications.cert3.title'),
      subtitle: t('certifications.cert3.organization'),
      location: "",
      period: t('certifications.cert3.date'),
      description: [],
      type: 'certification' as const,
      date: new Date('2020-07-15'), // July 2020 certification
      icon: customIcons.research
    }
  ];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'font-arabic' : ''} ${theme === 'dark' ? 'dark' : ''}`}>
      <GoogleAnalytics />
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
