
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, GraduationCap, Award, Clock, CalendarDays, MapPin } from 'lucide-react';

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
  icon?: React.ReactNode; // Custom icon
}

// Timeline item component
export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  type,
  color = 'bg-primary',
  position,
  icon
}) => {
  const { language } = useLanguage();
  
  // Define icon based on type if not provided
  const getIcon = () => {
    if (icon) return icon;
    
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-white" />;
      case 'certification':
        return <Award className="w-4 h-4 text-white" />;
      default:
        return <Building2 className="w-4 h-4 text-white" />;
    }
  };

  // Get appropriate text color based on background color
  const getTextColor = () => {
    switch (type) {
      case 'education':
        return 'text-green-400';
      case 'certification':
        return 'text-orange-400';
      default:
        return 'text-blue-400';
    }
  };

  return (
    <div className="relative pb-24 group">
      {/* Timeline center line */}
      <div className={`absolute left-1/2 top-0 w-1 h-full -ml-0.5 ${color} opacity-80 group-last:h-1/2`}></div>
      
      {/* Timeline dot with icon */}
      <div className={`absolute left-1/2 top-7 w-9 h-9 -ml-4 rounded-full ${color} flex items-center justify-center border-4 border-background dark:border-gray-900 z-10`}>
        {getIcon()}
      </div>
      
      {/* Timeline year marker for larger screens */}
      <div className={`absolute top-7 ${position === 'left' ? 'right-[52%]' : 'left-[52%]'} z-10 hidden md:block`}>
        <div className={`${getTextColor()} font-bold text-3xl`}>
          {new Date(period.split(' - ')[0]).getFullYear()}
        </div>
      </div>
      
      {/* Content */}
      <div className={`flex ${position === 'left' ? 'justify-end' : 'justify-start'} items-start w-full`}>
        {position === 'left' ? (
          <>
            {/* Left positioned content */}
            <div className="w-5/12 pr-8">
              <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  {/* Year badge for mobile */}
                  <Badge variant="outline" className={`mb-2 md:hidden ${getTextColor()} border-current`}>
                    {new Date(period.split(' - ')[0]).getFullYear()}
                  </Badge>
                  
                  <div className="flex flex-col mb-4">
                    <div className={`${language === 'ar' ? 'text-left' : 'text-right'}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                      <h4 className={`text-lg font-medium ${getTextColor()}`}>{subtitle}</h4>
                      
                      <div className="flex flex-wrap gap-2 mt-2 justify-end items-center text-sm text-gray-600 dark:text-gray-400">
                        {period && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{period}</span>
                          </div>
                        )}
                        
                        {location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {description && description.length > 0 && (
                    <>
                      <Separator className="my-3" />
                      <ul className={`list-disc pl-5 ${language === 'ar' ? 'pr-5 pl-0 text-right' : 'text-right'} space-y-2`}>
                        {description.map((item, index) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </>
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
                  {/* Year badge for mobile */}
                  <Badge variant="outline" className={`mb-2 md:hidden ${getTextColor()} border-current`}>
                    {new Date(period.split(' - ')[0]).getFullYear()}
                  </Badge>
                  
                  <div className="flex flex-col mb-4">
                    <div className={`${language === 'ar' ? 'text-right' : ''}`}>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                      <h4 className={`text-lg font-medium ${getTextColor()}`}>{subtitle}</h4>
                      
                      <div className="flex flex-wrap gap-2 mt-2 items-center text-sm text-gray-600 dark:text-gray-400">
                        {period && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{period}</span>
                          </div>
                        )}
                        
                        {location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {description && description.length > 0 && (
                    <>
                      <Separator className="my-3" />
                      <ul className={`list-disc pl-5 ${language === 'ar' ? 'pr-5 pl-0 text-right' : ''} space-y-2`}>
                        {description.map((item, index) => (
                          <li key={index} className="text-gray-700 dark:text-gray-300">{item}</li>
                        ))}
                      </ul>
                    </>
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
  title?: string;
  subtitle?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, title = "Timeline", subtitle }) => {
  // Colors for different item types
  const typeColors = {
    experience: 'bg-blue-500',
    education: 'bg-green-500',
    certification: 'bg-orange-400'
  };

  // Sort items chronologically from newest to oldest
  const sortedItems = [...items].sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return (
    <div className="relative">
      {/* Timeline header with title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-800 dark:text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        <Separator className="max-w-md mx-auto mt-6" />
      </div>
      
      {/* Timeline content */}
      <div className="max-w-7xl mx-auto py-8">
        {sortedItems.map((item, index) => (
          <TimelineItem 
            key={index}
            {...item}
            position={index % 2 === 0 ? 'left' : 'right'}
            color={typeColors[item.type]}
          />
        ))}
        
        {/* Timeline end marker */}
        <div className="flex justify-center">
          <div className={`w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 z-10`}></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
