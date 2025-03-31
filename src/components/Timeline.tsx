import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description?: string[];
  isEducation?: boolean;
  color?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  period,
  location,
  description,
  isEducation,
  color = 'bg-primary'
}) => {
  const { language } = useLanguage();
  
  return (
    <div className="relative pl-10 sm:pl-12 pb-10 group">
      {/* Timeline line */}
      <div className={`absolute left-3 top-0 w-1 h-full ${color} opacity-60 group-last:h-1/2`}></div>
      
      {/* Timeline dot with icon */}
      <div className={`absolute left-0 top-7 w-7 h-7 rounded-full ${color} flex items-center justify-center border-4 border-background dark:border-gray-900`}>
        {isEducation ? (
          <GraduationCap className="w-3 h-3 text-white" />
        ) : (
          <Building2 className="w-3 h-3 text-white" />
        )}
      </div>
      
      {/* Year or period badge - positioned on the left */}
      <div className="absolute left-12 top-7">
        <Badge variant="outline" className={`${color} text-white font-bold py-1 px-3 rounded-full`}>
          {period}
        </Badge>
      </div>
      
      <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow ml-16">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div className={`${language === 'ar' ? 'text-right' : ''}`}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{subtitle} | {location}</p>
            </div>
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
  const colors = [
    'bg-orange-400',
    'bg-rose-400',
    'bg-rose-600',
    'bg-green-400',
    'bg-blue-400',
    'bg-cyan-400'
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {items.map((item, index) => (
        <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
          <TimelineItem 
            key={index}
            {...item}
            isEducation={isEducation}
            color={colors[index % colors.length]}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
