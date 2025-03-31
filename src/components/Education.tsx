
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Timeline from './Timeline';
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
      period: t('education.degree1.period')
    },
    {
      title: t('education.degree2.title'),
      subtitle: t('education.degree2.institution'),
      location: t('education.degree2.location'),
      period: t('education.degree2.period')
    },
    {
      title: t('education.degree3.title'),
      subtitle: t('education.degree3.institution'),
      location: t('education.degree3.location'),
      period: t('education.degree3.period')
    }
  ];

  const certifications = [
    {
      title: t('certifications.cert1.title'),
      organization: t('certifications.cert1.organization'),
      date: t('certifications.cert1.date'),
      url: "https://certificationcompletion.blob.core.windows.net/certifications/PowerBIBeginnertoProWorkshop-HamzaBouguerra"
    },
    {
      title: t('certifications.cert2.title'),
      organization: t('certifications.cert2.organization'),
      date: t('certifications.cert2.date'),
      url: "https://www.udemy.com/certificate/UC-7d1fa22b-9e74-48a4-97f0-e6c163e7688e/"
    },
    {
      title: t('certifications.cert3.title'),
      organization: t('certifications.cert3.organization'),
      date: t('certifications.cert3.date'),
      url: "https://www.udemy.com/certificate/UC-5ac74d9c-6166-4c9e-b05b-689deaf1841b/"
    }
  ];

  return (
    <section id="education" className={`section-padding bg-white dark:bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-subtitle dark:text-white">{t('education.title')}</h2>
            <Timeline items={education} isEducation={true} />
          </div>
          
          <div>
            <h2 className="section-subtitle dark:text-white">{t('certifications.title')}</h2>
            <div>
              {certifications.map((cert, index) => (
                <CertificationItem 
                  key={index}
                  title={cert.title}
                  organization={cert.organization}
                  date={cert.date}
                  url={cert.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
