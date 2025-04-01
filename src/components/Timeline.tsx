
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, GraduationCap, Award } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description?: string[];
  type: 'experience' | 'education' | 'certification';
  color?: string;
  position: 'left' | 'right';
  date: Date; // For chronological sorting
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  type,
  color = 'bg-primary',
  position
}) => {
  const { language } = useLanguage();
  
  // Define icon based on type
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-3 h-3 text-white" />;
      case 'certification':
        return <Award className="w-3 h-3 text-white" />;
      default:
        return <Building2 className="w-3 h-3 text-white" />;
    }
  };

  return (
    <div className="relative pb-16 group">
      {/* Timeline center line */}
      <div className={`absolute left-1/2 top-0 w-1 h-full -ml-0.5 ${color} opacity-60 group-last:h-1/2`}></div>
      
      {/* Timeline dot with icon */}
      <div className={`absolute left-1/2 top-7 w-7 h-7 -ml-3.5 rounded-full ${color} flex items-center justify-center border-4 border-background dark:border-gray-900 z-10`}>
        {getIcon()}
      </div>
      
      {/* Content */}
      <div className={`flex ${position === 'left' ? 'justify-end' : 'justify-start'} items-start`}>
        {position === 'left' ? (
          <>
            {/* Left positioned content */}
            <div className="w-5/12 pr-8">
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col mb-4">
                    <div className={`text-right ${language === 'ar' ? 'text-left' : ''}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{subtitle} | {location}</p>
                      <Badge variant="outline" className={`${color} text-white font-bold py-1 px-3 rounded-full mt-2`}>
                        {period}
                      </Badge>
                    </div>
                  </div>
                  
                  {description && description.length > 0 && (
                    <ul className={`list-disc pl-5 ${language === 'ar' ? 'pr-5 pl-0 text-right' : ''} space-y-2`}>
                      {description.map((item, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
            {/* Empty right side */}
            <div className="w-5/12 pl-8"></div>
          </>
        ) : (
          <>
            {/* Empty left side */}
            <div className="w-5/12 pr-8"></div>
            {/* Right positioned content */}
            <div className="w-5/12 pl-8">
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col mb-4">
                    <div className={`${language === 'ar' ? 'text-right' : ''}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{subtitle} | {location}</p>
                      <Badge variant="outline" className={`${color} text-white font-bold py-1 px-3 rounded-full mt-2`}>
                        {period}
                      </Badge>
                    </div>
                  </div>
                  
                  {description && description.length > 0 && (
                    <ul className={`list-disc pl-5 ${language === 'ar' ? 'pr-5 pl-0 text-right' : ''} space-y-2`}>
                      {description.map((item, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface TimelineProps {
  items: Omit<TimelineItemProps, 'position'>[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  // Array of timeline item colors
  const colors = [
    'bg-orange-400',
    'bg-rose-500',
    'bg-rose-600',
    'bg-green-500',
    'bg-blue-500',
    'bg-cyan-500'
  ];

  // Sort items chronologically from newest to oldest
  const sortedItems = [...items].sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return (
    <div className="max-w-5xl mx-auto py-8">
      {sortedItems.map((item, index) => (
        <TimelineItem 
          key={index}
          {...item}
          position={index % 2 === 0 ? 'left' : 'right'}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

export default Timeline;
