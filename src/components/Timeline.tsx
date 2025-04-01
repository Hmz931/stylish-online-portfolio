
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
  date: Date; // Pour le tri chronologique
  icon?: React.ReactNode; // Icône personnalisée
}

// Composant pour chaque élément de la timeline
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
  
  // Définir l'icône en fonction du type
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

  // Obtenir la couleur du texte appropriée en fonction du type
  const getTextColor = () => {
    switch (type) {
      case 'education':
        return 'text-green-500';
      case 'certification':
        return 'text-orange-500';
      default:
        return 'text-blue-500';
    }
  };

  // Année extraite de la période
  const year = new Date(period.split(' - ')[0]).getFullYear();

  return (
    <div className="relative mb-16 last:mb-0">
      {/* Ligne verticale centrale */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-green-500 opacity-80"></div>
      
      {/* Point avec icône sur la timeline */}
      <div className={`absolute left-1/2 top-7 -translate-x-1/2 w-10 h-10 rounded-full ${color} flex items-center justify-center z-20 border-4 border-gray-900`}>
        {getIcon()}
      </div>
      
      {/* Année sur la timeline */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-green-500 z-10">
        {year}
      </div>
      
      {/* Contenu */}
      <div className="grid grid-cols-2 gap-8">
        {position === 'left' ? (
          <>
            {/* Contenu à gauche */}
            <div className="pr-4 relative">
              <Card className="w-full bg-gray-900 border-gray-800 shadow-lg text-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  <p className={`${getTextColor()} font-medium mb-4`}>{subtitle}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 items-center text-sm text-gray-400">
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
                  
                  {description && description.length > 0 && (
                    <>
                      <Separator className="my-3 bg-gray-800" />
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </CardContent>
              </Card>
              
              {/* Flèche vers la timeline */}
              <div className="absolute top-7 right-0 w-4 h-4 bg-gray-900 transform rotate-45 translate-x-1/2"></div>
            </div>
            
            {/* Espace vide à droite */}
            <div></div>
          </>
        ) : (
          <>
            {/* Espace vide à gauche */}
            <div></div>
            
            {/* Contenu à droite */}
            <div className="pl-4 relative">
              <Card className="w-full bg-gray-900 border-gray-800 shadow-lg text-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  <p className={`${getTextColor()} font-medium mb-4`}>{subtitle}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 items-center text-sm text-gray-400">
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
                  
                  {description && description.length > 0 && (
                    <>
                      <Separator className="my-3 bg-gray-800" />
                      <ul className="list-disc pl-5 space-y-1 text-gray-300">
                        {description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </CardContent>
              </Card>
              
              {/* Flèche vers la timeline */}
              <div className="absolute top-7 left-0 w-4 h-4 bg-gray-900 transform rotate-45 -translate-x-1/2"></div>
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
  // Couleurs pour les différents types d'éléments
  const typeColors = {
    experience: 'bg-blue-500',
    education: 'bg-green-500',
    certification: 'bg-orange-500'
  };

  // Trier les éléments chronologiquement du plus récent au plus ancien
  const sortedItems = [...items].sort((a, b) => {
    return b.date.getTime() - a.date.getTime();
  });

  return (
    <div className="relative py-10">
      {/* En-tête de la timeline avec le titre */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-100">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-400">{subtitle}</p>
        )}
        <Separator className="max-w-md mx-auto mt-6 bg-gray-800" />
      </div>
      
      {/* Contenu de la timeline */}
      <div className="container max-w-5xl mx-auto">
        {sortedItems.map((item, index) => (
          <TimelineItem 
            key={index}
            {...item}
            position={index % 2 === 0 ? 'left' : 'right'}
            color={typeColors[item.type]}
          />
        ))}
        
        {/* Marqueur de fin de la timeline */}
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-green-500 relative z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
