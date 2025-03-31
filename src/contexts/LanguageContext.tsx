
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the available languages
export type Language = 'fr' | 'en' | 'ar';

// Define the language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the translations
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.description': 'Comptable avec expertise en finance et programmation. Passionné par le développement de solutions qui font le pont entre l\'analyse financière et la technologie.',
    'hero.contactButton': 'Me Contacter',
    'hero.learnMoreButton': 'En Savoir Plus',
    
    // About
    'about.title': 'À Propos de Moi',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    
    // Education
    'education.title': 'Formation',
    
    // Skills
    'skills.title': 'Compétences',
    
    // Projects
    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Découvrez mes dernières créations',
    'projects.viewLive': 'Voir le site',
    'projects.viewCode': 'Voir le Code',
    'projects.portfolio': 'Portfolio Personnel',
    'projects.portfolioDesc': 'Mon site web personnel construit avec React, TypeScript et Tailwind CSS.',
    'projects.otherProjects': 'Plus de projets à venir...',
    
    // Contact
    'contact.title': 'Me Contacter',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.description': 'Accountant with expertise in both finance and programming. Passionate about bridging the gap between financial analysis and technology.',
    'hero.contactButton': 'Contact Me',
    'hero.learnMoreButton': 'Learn More',
    
    // About
    'about.title': 'About Me',
    
    // Experience
    'experience.title': 'Work Experience',
    
    // Education
    'education.title': 'Education',
    
    // Skills
    'skills.title': 'Skills',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Check out my latest work',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'projects.portfolio': 'Personal Portfolio',
    'projects.portfolioDesc': 'My personal website built with React, TypeScript, and Tailwind CSS.',
    'projects.otherProjects': 'More projects coming soon...',
    
    // Contact
    'contact.title': 'Contact Me',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Header - RTL language
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.description': 'محاسب ذو خبرة في المالية والبرمجة. شغوف بالجمع بين التحليل المالي والتكنولوجيا.',
    'hero.contactButton': 'اتصل بي',
    'hero.learnMoreButton': 'اعرف المزيد',
    
    // About
    'about.title': 'نبذة عني',
    
    // Experience
    'experience.title': 'الخبرة المهنية',
    
    // Education
    'education.title': 'التعليم',
    
    // Skills
    'skills.title': 'المهارات',
    
    // Projects
    'projects.title': 'مشاريعي',
    'projects.subtitle': 'تعرف على أحدث أعمالي',
    'projects.viewLive': 'عرض الموقع',
    'projects.viewCode': 'عرض الكود',
    'projects.portfolio': 'الموقع الشخصي',
    'projects.portfolioDesc': 'موقعي الشخصي مبني باستخدام React و TypeScript و Tailwind CSS.',
    'projects.otherProjects': 'المزيد من المشاريع قريباً...',
    
    // Contact
    'contact.title': 'اتصل بي',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
  }
};

// Create the provider
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr'); // Default language is French

  // Translate function
  const t = (key: string): string => {
    return translations[language][key] || key; // Return the key if translation is not found
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
