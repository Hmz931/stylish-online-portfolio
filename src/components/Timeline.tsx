
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description?: string[];
  isEducation?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  isEducation
}) => {
  const { language } = useLanguage();
  
  return (
    <div className="relative pl-8 sm:pl-10 pb-10 group">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 dark:bg-gray-700 group-last:h-1/2"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] sm:left-[-5px] top-7 w-4 h-4 rounded-full bg-primary border-4 border-background dark:border-gray-900"></div>
      
      <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div className={`${language === 'ar' ? 'text-right' : ''}`}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{subtitle} | {location}</p>
            </div>
            <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{period}</Badge>
          </div>
          
          {description && description.length > 0 && (
            <ul className={`${isEducation ? '' : 'list-disc'} ${language === 'ar' ? 'pr-5' : 'pl-5'} space-y-2`}>
              {description.map((item, index) => (
                <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

interface TimelineProps {
  items: TimelineItemProps[];
  isEducation?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ items, isEducation = false }) => {
  return (
    <div className="max-w-4xl mx-auto">
      {items.map((item, index) => (
        <TimelineItem 
          key={index}
          {...item}
          isEducation={isEducation}
        />
      ))}
    </div>
  );
};

export default Timeline;
