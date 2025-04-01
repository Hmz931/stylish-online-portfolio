
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t, language } = useLanguage();
  
  const experiences = [
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
      date: new Date('2023-01-01') // Adjust with actual start date
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
      date: new Date('2022-01-01') // Adjust with actual start date
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
      date: new Date('2021-01-01') // Adjust with actual start date
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
      date: new Date('2020-01-01') // Adjust with actual start date
    }
  ];

  return (
    <section id="experience" className={`section-padding bg-gray-50 dark:bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('experience.title')}</h2>
        {/* Timeline will be combined in the Index page */}
      </div>
    </section>
  );
};

export default Experience;
