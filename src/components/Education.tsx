
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, GraduationCap, Award, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';

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
    <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                {organization}
                <ExternalLink className="h-4 w-4" />
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-1 text-sm">
            <Clock className="w-3 h-3 text-gray-500" />
            <span>{date}</span>
          </div>
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

  // Sort education and certifications from newest to oldest
  const sortedEducation = [...education].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  );
  
  const sortedCertifications = [...certifications].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  );

  return (
    <section id="education" className={`section-padding bg-white dark:bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('education.title')}</h2>
        
        {/* Education section */}
        <div className="grid gap-6 mt-8 mb-12">
          {sortedEducation.map((edu, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{edu.title}</h3>
                    <h4 className="text-green-500 font-medium">{edu.subtitle}</h4>
                    
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
                  </div>
                  
                  <Badge className="w-fit bg-green-500 text-white">
                    <GraduationCap className="mr-1 h-3 w-3" /> 
                    {t('education.badge')}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        {/* Certifications section */}
        <h3 className="section-subtitle dark:text-white mb-6">{t('certifications.title')}</h3>
        <div className="grid gap-6">
          {sortedCertifications.map((cert, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{cert.title}</h3>
                    <h4 className="text-orange-400 font-medium">{cert.subtitle}</h4>
                    
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                  
                  <Badge className="w-fit bg-orange-400 text-white">
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
