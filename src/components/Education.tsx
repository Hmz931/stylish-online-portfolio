import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

const Education = () => {
  const { t, language } = useLanguage();

  const education = [
    {
      title: t('education.degree0.title'),
      subtitle: t('education.degree0.institution'),
      location: t('education.degree0.location'),
      period: t('education.degree0.period'),
      date: new Date('2025-09-01'),
      coursework: language === 'fr'
        ? 'Business Intelligence, Analyse de Données, Statistiques pour la Décision, Visualisation de Données'
        : language === 'en'
        ? 'Business Intelligence, Data Analysis, Statistics for Decision Making, Data Visualization'
        : 'ذكاء الأعمال، تحليل البيانات، الإحصاء للقرار، تصور البيانات',
      isCurrent: true,
    },
    {
      title: t('education.degree1.title'),
      subtitle: t('education.degree1.institution'),
      location: t('education.degree1.location'),
      period: t('education.degree1.period'),
      date: new Date('2021-06-01'),
      isCurrent: false,
    },
    {
      title: t('education.degree2.title'),
      subtitle: t('education.degree2.institution'),
      location: t('education.degree2.location'),
      period: t('education.degree2.period'),
      date: new Date('2017-06-01'),
      isCurrent: false,
    },
  ];

  const certifications = [
    {
      title: t('certifications.cert1.title'),
      subtitle: t('certifications.cert1.organization'),
      period: t('certifications.cert1.date'),
      date: new Date('2025-02-01'),
    },
    {
      title: t('certifications.cert2.title'),
      subtitle: t('certifications.cert2.organization'),
      period: t('certifications.cert2.date'),
      date: new Date('2024-05-01'),
    },
    {
      title: t('certifications.cert3.title'),
      subtitle: t('certifications.cert3.organization'),
      period: t('certifications.cert3.date'),
      date: new Date('2023-03-01'),
    },
  ];

  const sortedEducation = [...education].sort((a, b) => b.date.getTime() - a.date.getTime());
  const sortedCertifications = [...certifications].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <section id="education" className={`section-padding bg-white dark:bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('education.title')}</h2>

        <div className="grid gap-6 mt-8 mb-12">
          {sortedEducation.map((edu, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{edu.title}</h3>
                      {edu.isCurrent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {language === 'fr' ? 'En cours' : language === 'en' ? 'In Progress' : 'جارٍ'}
                        </span>
                      )}
                    </div>
                    <h4 className="text-green-500 font-medium mt-1">{edu.subtitle}</h4>

                    <div className="flex flex-wrap gap-3 mt-2 items-center text-sm text-gray-600 dark:text-gray-400">
                      {edu.period && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                      )}
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      )}
                    </div>

                    {edu.coursework && (
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 italic">
                        <span className="font-medium not-italic">
                          {language === 'fr' ? 'Cours : ' : language === 'en' ? 'Coursework: ' : 'المقررات: '}
                        </span>
                        {edu.coursework}
                      </p>
                    )}
                  </div>

                  <Badge className="w-fit bg-green-500 text-white shrink-0">
                    <GraduationCap className="mr-1 h-3 w-3" />
                    {t('education.badge')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        <h3 className="section-subtitle dark:text-white mb-6">{t('certifications.title')}</h3>
        <div className="grid gap-6">
          {sortedCertifications.map((cert, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{cert.title}</h3>
                    <h4 className="text-orange-400 font-medium mt-1">{cert.subtitle}</h4>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                  <Badge className="w-fit bg-orange-400 text-white shrink-0">
                    <Award className="mr-1 h-3 w-3" />
                    {t('certifications.badge')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
