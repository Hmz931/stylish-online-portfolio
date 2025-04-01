
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
        t('experience.job1.task5')
      ],
      type: 'experience' as const,
      date: new Date('2023-04-01') // Date précise: Avril 2023
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
      date: new Date('2022-06-01') // Date précise: Juin 2022
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
      date: new Date('2021-09-01') // Date précise: Septembre 2021
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
      date: new Date('2020-07-01') // Date précise: Juillet 2020
    }
  ];

  // Trier les expériences de la plus récente à la plus ancienne
  const sortedExperiences = [...experiences].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="experience" className={`section-padding bg-gray-50 dark:bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('experience.title')}</h2>
        
        <div className="grid gap-6 mt-8">
          {sortedExperiences.map((exp, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                    <h4 className="text-blue-500 font-medium">{exp.subtitle}</h4>
                    
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
                  
                  <Badge className="w-fit bg-blue-500 text-white">
                    <Building2 className="mr-1 h-3 w-3" /> 
                    {t('experience.badge')}
                  </Badge>
                </div>
                
                {exp.description && exp.description.length > 0 && (
                  <ul className="list-disc pl-5 mt-4 space-y-1">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">{item}</li>
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
