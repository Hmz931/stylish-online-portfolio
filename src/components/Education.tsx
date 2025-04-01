
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CertificationItemProps {
  title: string;
  organization: string;
  date: string;
  url: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ 
  title, 
  organization, 
  date, 
  url 
}) => {
  return (
    <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                {organization}
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>
          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{date}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const Education = () => {
  const { t, language } = useLanguage();
  
  const education = [
    {
      title: t('education.degree1.title'),
      subtitle: t('education.degree1.institution'),
      location: t('education.degree1.location'),
      period: t('education.degree1.period'),
      type: 'education' as const,
      date: new Date('2019-06-15') // Accurate date: June 2019
    },
    {
      title: t('education.degree2.title'),
      subtitle: t('education.degree2.institution'),
      location: t('education.degree2.location'),
      period: t('education.degree2.period'),
      type: 'education' as const,
      date: new Date('2017-05-30') // Accurate date: May 2017
    },
    {
      title: t('education.degree3.title'),
      subtitle: t('education.degree3.institution'),
      location: t('education.degree3.location'),
      period: t('education.degree3.period'),
      type: 'education' as const,
      date: new Date('2015-06-30') // Accurate date: June 2015
    }
  ];

  const certifications = [
    {
      title: t('certifications.cert1.title'),
      subtitle: t('certifications.cert1.organization'),
      location: "",
      period: t('certifications.cert1.date'),
      type: 'certification' as const,
      date: new Date('2022-06-15'), // Accurate date: June 2022
    },
    {
      title: t('certifications.cert2.title'),
      subtitle: t('certifications.cert2.organization'),
      location: "",
      period: t('certifications.cert2.date'),
      type: 'certification' as const,
      date: new Date('2021-09-15'), // Accurate date: September 2021
    },
    {
      title: t('certifications.cert3.title'),
      subtitle: t('certifications.cert3.organization'),
      location: "",
      period: t('certifications.cert3.date'),
      type: 'certification' as const,
      date: new Date('2020-07-15'), // Accurate date: July 2020
    }
  ];

  return (
    <section id="education" className={`section-padding bg-white dark:bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-subtitle dark:text-white">{t('education.title')}</h2>
        {/* Timeline will be combined in the Index page */}
      </div>
    </section>
  );
};

export default Education;
