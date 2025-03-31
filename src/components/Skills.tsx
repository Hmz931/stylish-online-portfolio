
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  const { language } = useLanguage();
  
  return (
    <Card className="border border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`flex flex-wrap gap-2 ${language === 'ar' ? 'justify-end' : ''}`}>
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const { t, language } = useLanguage();
  
  // Skills grouped by category
  const skillGroups = [
    {
      title: t('skills.software'),
      skills: ['ERP Abacus', 'Crésus', 'Excel/Office', 'Yooz', 'SPSS', 'Tanagra', 'Power BI']
    },
    {
      title: t('skills.programming'),
      skills: ['R', 'MATLAB', 'Python', 'JavaScript', 'TypeScript', 'STATA', 'LATEX', 'OxMetrics']
    },
    {
      title: t('skills.webDevelopment'),
      skills: ['HTML', 'CSS', 'React', 'Node.js', 'Tailwind CSS', 'Git', 'GitHub']
    },
    {
      title: t('skills.dataAnalysis'),
      skills: ['Statistical Analysis', 'Data Visualization', 'Financial Modeling', 'Econometrics', 'Time Series Analysis']
    }
  ];

  return (
    <section id="skills" className={`section-padding bg-gray-50 dark:bg-gray-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title dark:text-white">{t('skills.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <SkillCard key={index} title={group.title} skills={group.skills} />
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 italic">
            {t('skills.continuousLearning')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
