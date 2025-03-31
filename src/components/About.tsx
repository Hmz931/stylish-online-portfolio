
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const { t, language } = useLanguage();
  
  return (
    <section id="about" className={`section-padding bg-white dark:bg-gray-800 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('about.title')}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`prose max-w-none ${language === 'ar' ? 'text-right' : ''}`}>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                {t('about.paragraph3')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.paragraph4')}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow w-full max-w-xs">
              <CardContent className="p-0">
                <a href="https://github.com/Hmz931" target="_blank" rel="noopener noreferrer" className="block">
                  <img
                    src="https://avatars.githubusercontent.com/u/5649277?v=4"
                    alt="Hamza Bouguerra"
                    className="w-full h-auto object-cover"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.personalInfo')}</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-medium">{t('about.name')}:</span> Hamza Bouguerra</li>
              <li><span className="font-medium">{t('about.location')}:</span> La Soukra, Ariana, Tunisia</li>
              <li><span className="font-medium">{t('about.email')}:</span> hamza93bouguerra@gmail.com</li>
              <li><span className="font-medium">{t('about.phone')}:</span> (+216) 56 650 414</li>
            </ul>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.interests')}</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>{t('about.interest1')}</li>
              <li>{t('about.interest2')}</li>
              <li>{t('about.interest3')}</li>
              <li>{t('about.interest4')}</li>
              <li>{t('about.interest5')}</li>
            </ul>
          </Card>
          
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.languages')}</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{t('about.arabic')}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{t('about.native')}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{t('about.french')}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{t('about.advanced')}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300">{t('about.english')}</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{t('about.intermediate')}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
