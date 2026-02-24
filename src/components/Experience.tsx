import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Clock, MapPin } from 'lucide-react';

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
        t('experience.job1.task5'),
        t('experience.job1.task6'),
      ].filter(Boolean),
      date: new Date('2021-04-01'),
      isCurrent: true,
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
      ].filter(Boolean),
      date: new Date('2018-02-01'),
      isCurrent: false,
    },
    {
      title: t('experience.job3.title'),
      subtitle: t('experience.job3.company'),
      location: t('experience.job3.location'),
      period: t('experience.job3.period'),
      description: [
        t('experience.job3.task1'),
      ].filter(Boolean),
      date: new Date('2017-07-01'),
      isCurrent: false,
    },
  ];

  const sortedExperiences = [...experiences].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <section id="experience" className={`section-padding bg-gray-50 dark:bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('experience.title')}</h2>

        <div className="grid gap-6 mt-8">
          {sortedExperiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {language === 'fr' ? 'Poste actuel' : language === 'en' ? 'Current' : 'حالي'}
                        </span>
                      )}
                    </div>
                    <h4 className="text-blue-500 font-medium mt-1">{exp.subtitle}</h4>

                    <div className="flex flex-wrap gap-3 mt-2 items-center text-sm text-gray-600 dark:text-gray-400">
                      {exp.period && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      )}
                      {exp.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Badge className="w-fit bg-blue-500 text-white shrink-0">
                    <Building2 className="mr-1 h-3 w-3" />
                    {t('experience.badge')}
                  </Badge>
                </div>

                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc pl-5 mt-4 space-y-1.5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm">{item}</li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
