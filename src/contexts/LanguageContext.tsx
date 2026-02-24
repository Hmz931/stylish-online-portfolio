import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'header.darkMode': 'Mode Sombre',
    'header.lightMode': 'Mode Clair',

    'hero.greeting': 'Bonjour, je suis',
    'hero.description': 'Comptable avec une expérience en comptabilité suisse et un intérêt croissant pour l\'analyse des données et l\'automatisation des processus. En cours de Master Professionnel en Business Analytics.',
    'hero.contactButton': 'Me Contacter',
    'hero.learnMoreButton': 'En Savoir Plus',

    'about.title': 'À Propos de Moi',
    'about.paragraph1': 'Dynamique, ouvert d\'esprit, curieux, apprenant vite et toujours prêt à évoluer : je considère ces qualités comme mes points forts. J\'essaie toujours de m\'adapter car je pense que rien n\'est statique dans ce monde.',
    'about.paragraph2': 'Je suis titulaire d\'un Master en Économétrie et Analyses Quantitatives de l\'École Supérieure de Commerce de Tunis. Je poursuis actuellement un Master Professionnel en Business Analytics à Esprit Business School (programme du soir, 2025–2027).',
    'about.paragraph3': 'Être social et entrer en contact avec des personnes de cultures différentes pour partager des connaissances et des idées m\'a toujours apporté inspiration et nouvelles façons de penser.',
    'about.paragraph4': 'Je développe des compétences en Power BI, scripting Python et intégration de données ERP pour améliorer le reporting financier et l\'efficacité opérationnelle. J\'ai également développé un outil web pour faciliter l\'import structuré d\'écritures comptables depuis Excel vers l\'ERP Abacus.',
    'about.personalInfo': 'Informations Personnelles',
    'about.name': 'Nom',
    'about.location': 'Emplacement',
    'about.email': 'E-mail',
    'about.phone': 'Téléphone',
    'about.interests': 'Intérêts Professionnels',
    'about.interest1': 'Business Intelligence & Power BI',
    'about.interest2': 'Analyse de Données',
    'about.interest3': 'Automatisation des Processus Comptables',
    'about.interest4': 'Développement Web',
    'about.interest5': 'Intégration ERP',
    'about.languages': 'Langues',
    'about.arabic': 'Arabe',
    'about.french': 'Français',
    'about.english': 'Anglais',
    'about.native': 'Langue Maternelle',
    'about.advanced': 'Avancé',
    'about.intermediate': 'Intermédiaire',

    'experience.title': 'Expérience Professionnelle',
    'experience.badge': 'Expérience',
    'experience.job1.title': 'Comptable',
    'experience.job1.company': 'UB Services',
    'experience.job1.location': 'Ariana, Tunisie',
    'experience.job1.period': 'Avr 2021 - Présent',
    'experience.job1.task1': 'Saisie des transactions financières conformément aux normes comptables suisses.',
    'experience.job1.task2': 'Rapprochements de comptes, assistance aux clôtures mensuelles et annuelles.',
    'experience.job1.task3': 'Développement de tableaux de bord Power BI pour le suivi financier interne : répartition des charges, suivi de trésorerie, et suivi du recouvrement.',
    'experience.job1.task4': 'Support aux initiatives d\'automatisation via des scripts Python pour les tâches comptables répétitives.',
    'experience.job1.task5': 'Extraction de données comptables depuis l\'ERP Abacus via les web services SOAP (AbaConnect) et développement d\'un outil web pour l\'import structuré d\'écritures depuis Excel (hébergé sur Netlify).',
    'experience.job1.task6': 'Formation des nouveaux employés aux procédures comptables et aux outils internes.',

    'experience.job2.title': 'Assistant Comptable',
    'experience.job2.company': 'Manpower',
    'experience.job2.location': 'Tunis, Tunisie',
    'experience.job2.period': 'Fév 2018 - Déc 2018',
    'experience.job2.task1': 'Saisie des factures fournisseurs et clients.',
    'experience.job2.task2': 'Rapprochements bancaires et lettrage des comptes.',
    'experience.job2.task3': 'Assistance à la préparation des déclarations fiscales.',
    'experience.job2.task4': '',
    'experience.job2.task5': '',
    'experience.job2.task6': '',

    'experience.job3.title': 'Stagiaire Comptable',
    'experience.job3.company': 'Maghreb Conseil et Audit',
    'experience.job3.location': 'Ariana, Tunisie',
    'experience.job3.period': 'Juil 2017 - Sep 2017',
    'experience.job3.task1': 'Stage en cabinet d\'audit et d\'expertise comptable.',

    'experience.job4.title': 'Agent Logistique et de Stock',
    'experience.job4.company': 'Groupe SOTEFI (SELECTA)',
    'experience.job4.location': 'La Soukra, Ariana, Tunisie',
    'experience.job4.period': 'Fév 2014 - Juil 2014',
    'experience.job4.task1': 'Contrôle qualitatif et quantitatif des marchandises réceptionnées.',
    'experience.job4.task2': 'Gestion des stocks par la méthode FIFO.',
    'experience.job4.task3': '',
    'experience.job4.task4': '',

    'education.title': 'Formation',
    'education.badge': 'Diplôme',
    'education.degree0.title': 'Master Professionnel en Business Analytics (Programme du soir)',
    'education.degree0.institution': 'Esprit Business School',
    'education.degree0.location': 'Tunis',
    'education.degree0.period': 'Sep 2025 – Prévu 2027',

    'education.degree1.title': 'Master en Économétrie et Analyses Quantitatives',
    'education.degree1.institution': 'École Supérieure de Commerce',
    'education.degree1.location': 'Tunis',
    'education.degree1.period': '2019 - 2021',

    'education.degree2.title': 'Licence en Sciences de Gestion – Spécialité Finance',
    'education.degree2.institution': 'École Supérieure de Commerce',
    'education.degree2.location': 'Tunis',
    'education.degree2.period': '2013 - 2017',

    'certifications.title': 'Certifications',
    'certifications.badge': 'Certification',
    'certifications.cert1.title': 'Power BI Beginner to Pro Workshop',
    'certifications.cert1.organization': 'Pragmatic Works',
    'certifications.cert1.date': 'Fév 2025',

    'certifications.cert2.title': 'The Complete 2024 Web Development Bootcamp',
    'certifications.cert2.organization': 'Udemy',
    'certifications.cert2.date': 'Mai 2024',

    'certifications.cert3.title': 'The Complete Web Developer in 2023: Zero to Mastery',
    'certifications.cert3.organization': 'Udemy',
    'certifications.cert3.date': 'Mars 2023',

    'skills.title': 'Compétences',
    'skills.software': 'Logiciels & ERP',
    'skills.bi': 'Business Intelligence',
    'skills.programming': 'Langages de Programmation',
    'skills.webDevelopment': 'Développement Web',
    'skills.dataAnalysis': 'Analyse de Données',
    'skills.continuousLearning': 'Je suis constamment en train d\'apprendre et d\'améliorer mes compétences dans ces domaines.',

    'projects.title': 'Mes Projets',
    'projects.subtitle': 'Découvrez mes dernières créations',
    'projects.viewLive': 'Voir le site',
    'projects.viewCode': 'Voir le Code',
    'projects.portfolio': 'Portfolio Personnel',
    'projects.portfolioDesc': 'Mon site web personnel construit avec React, TypeScript et Tailwind CSS.',
    'projects.abacusImport': 'Outil Import Abacus ERP',
    'projects.abacusImportDesc': 'Outil web pour l\'import structuré d\'écritures comptables depuis Excel vers l\'ERP Abacus via AbaConnect. Hébergé sur Netlify.',
    'projects.otherProjects': 'Plus de projets à venir...',

    'contact.title': 'Me Contacter',
    'footer.rights': 'Tous droits réservés.',

    'timeline.title': 'Parcours',
    'timeline.subtitle': 'Mon évolution professionnelle et académique',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'header.darkMode': 'Dark Mode',
    'header.lightMode': 'Light Mode',

    'hero.greeting': 'Hello, I\'m',
    'hero.description': 'Accountant with experience in Swiss accounting and a growing interest in business analytics and process automation. Currently pursuing a Professional Master\'s in Business Analytics.',
    'hero.contactButton': 'Contact Me',
    'hero.learnMoreButton': 'Learn More',

    'about.title': 'About Me',
    'about.paragraph1': 'Dynamic, open-minded, curious, quick learner, and always ready to evolve: I consider these qualities as my strengths. I always try to adapt because I believe nothing is static in this world.',
    'about.paragraph2': 'I hold a Master\'s in Econometrics and Quantitative Analysis from École Supérieure de Commerce de Tunis. I am currently pursuing a Professional Master\'s in Business Analytics at Esprit Business School (evening program, 2025–2027).',
    'about.paragraph3': 'Socializing and meeting new people from different cultures to share knowledge and ideas has always brought me inspiration and new ways of thinking.',
    'about.paragraph4': 'I am developing skills in Power BI, Python scripting, and ERP data integration to improve financial reporting and operational efficiency. I also developed a web tool to facilitate structured import of accounting entries from Excel into Abacus ERP.',
    'about.personalInfo': 'Personal Info',
    'about.name': 'Name',
    'about.location': 'Location',
    'about.email': 'Email',
    'about.phone': 'Phone',
    'about.interests': 'Professional Interests',
    'about.interest1': 'Business Intelligence & Power BI',
    'about.interest2': 'Data Analytics',
    'about.interest3': 'Accounting Process Automation',
    'about.interest4': 'Web Development',
    'about.interest5': 'ERP Integration',
    'about.languages': 'Languages',
    'about.arabic': 'Arabic',
    'about.french': 'French',
    'about.english': 'English',
    'about.native': 'Native Language',
    'about.advanced': 'Advanced',
    'about.intermediate': 'Intermediate',

    'experience.title': 'Work Experience',
    'experience.badge': 'Experience',
    'experience.job1.title': 'Accountant',
    'experience.job1.company': 'UB Services',
    'experience.job1.location': 'Ariana, Tunisia',
    'experience.job1.period': 'Apr 2021 - Present',
    'experience.job1.task1': 'Record financial transactions in accordance with Swiss accounting standards.',
    'experience.job1.task2': 'Perform account reconciliations, assist with monthly and annual closings.',
    'experience.job1.task3': 'Develop Power BI dashboards for internal financial monitoring: expense distribution, cash & treasury follow-up, and revenue collection tracking.',
    'experience.job1.task4': 'Support automation initiatives using Python scripts for repetitive accounting tasks.',
    'experience.job1.task5': 'Extract accounting data from Abacus ERP using SOAP web services (AbaConnect) and developed a web tool for structured import of accounting entries from Excel into Abacus ERP (hosted on Netlify).',
    'experience.job1.task6': 'Train new employees on accounting procedures and internal tools.',

    'experience.job2.title': 'Accounting Assistant',
    'experience.job2.company': 'Manpower',
    'experience.job2.location': 'Tunis, Tunisia',
    'experience.job2.period': 'Feb 2018 - Dec 2018',
    'experience.job2.task1': 'Record supplier and customer invoices.',
    'experience.job2.task2': 'Perform bank and account reconciliations.',
    'experience.job2.task3': 'Assist in preparation of tax declarations.',
    'experience.job2.task4': '',
    'experience.job2.task5': '',
    'experience.job2.task6': '',

    'experience.job3.title': 'Accounting Intern',
    'experience.job3.company': 'Maghreb Conseil et Audit',
    'experience.job3.location': 'Ariana, Tunisia',
    'experience.job3.period': 'Jul 2017 - Sep 2017',
    'experience.job3.task1': 'Internship at an audit and accounting firm.',

    'experience.job4.title': 'Logistics & Inventory Agent',
    'experience.job4.company': 'Groupe SOTEFI (SELECTA)',
    'experience.job4.location': 'La Soukra, Ariana, Tunisia',
    'experience.job4.period': 'Feb 2014 - Jul 2014',
    'experience.job4.task1': 'Qualitative and quantitative control of received goods.',
    'experience.job4.task2': 'Inventory management using the FIFO method.',
    'experience.job4.task3': '',
    'experience.job4.task4': '',

    'education.title': 'Education',
    'education.badge': 'Degree',
    'education.degree0.title': 'Professional Master in Business Analytics (Evening Program)',
    'education.degree0.institution': 'Esprit Business School',
    'education.degree0.location': 'Tunis',
    'education.degree0.period': 'Sep 2025 – Expected 2027',

    'education.degree1.title': 'Master\'s in Econometrics and Quantitative Analysis',
    'education.degree1.institution': 'École Supérieure de Commerce',
    'education.degree1.location': 'Tunis',
    'education.degree1.period': '2019 - 2021',

    'education.degree2.title': 'Bachelor\'s in Management Science – Finance Specialization',
    'education.degree2.institution': 'École Supérieure de Commerce',
    'education.degree2.location': 'Tunis',
    'education.degree2.period': '2013 - 2017',

    'certifications.title': 'Certifications',
    'certifications.badge': 'Certificate',
    'certifications.cert1.title': 'Power BI Beginner to Pro Workshop',
    'certifications.cert1.organization': 'Pragmatic Works',
    'certifications.cert1.date': 'Feb 2025',

    'certifications.cert2.title': 'The Complete 2024 Web Development Bootcamp',
    'certifications.cert2.organization': 'Udemy',
    'certifications.cert2.date': 'May 2024',

    'certifications.cert3.title': 'The Complete Web Developer in 2023: Zero to Mastery',
    'certifications.cert3.organization': 'Udemy',
    'certifications.cert3.date': 'Mar 2023',

    'skills.title': 'Skills',
    'skills.software': 'Software & ERP',
    'skills.bi': 'Business Intelligence',
    'skills.programming': 'Programming Languages',
    'skills.webDevelopment': 'Web Development',
    'skills.dataAnalysis': 'Data Analysis',
    'skills.continuousLearning': 'I am constantly learning and improving my skills in these areas.',

    'projects.title': 'My Projects',
    'projects.subtitle': 'Check out my latest work',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    'projects.portfolio': 'Personal Portfolio',
    'projects.portfolioDesc': 'My personal website built with React, TypeScript, and Tailwind CSS.',
    'projects.abacusImport': 'Abacus ERP Import Tool',
    'projects.abacusImportDesc': 'A web tool to facilitate structured import of accounting entries from Excel into Abacus ERP via AbaConnect SOAP web services. Hosted on Netlify.',
    'projects.otherProjects': 'More projects coming soon...',

    'contact.title': 'Contact Me',
    'footer.rights': 'All rights reserved.',

    'timeline.title': 'Timeline',
    'timeline.subtitle': 'My professional and academic journey',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة',
    'nav.education': 'التعليم',
    'nav.skills': 'المهارات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بي',
    'header.darkMode': 'الوضع المظلم',
    'header.lightMode': 'الوضع المضيء',

    'hero.greeting': 'مرحباً، أنا',
    'hero.description': 'محاسب بخبرة في المحاسبة السويسرية واهتمام متنامٍ بتحليل الأعمال وأتمتة العمليات. أتابع حالياً ماجستيراً مهنياً في تحليل الأعمال.',
    'hero.contactButton': 'اتصل بي',
    'hero.learnMoreButton': 'اعرف المزيد',

    'about.title': 'نبذة عني',
    'about.paragraph1': 'ديناميكي، منفتح الذهن، فضولي، سريع التعلم، ودائماً مستعد للتطور: أعتبر هذه الصفات من نقاط قوتي.',
    'about.paragraph2': 'حاصل على ماجستير في القياس الاقتصادي والتحليل الكمي من المدرسة العليا للتجارة بتونس. أتابع حالياً ماجستيراً مهنياً في تحليل الأعمال بمدرسة إسبريت للأعمال (برنامج مسائي، 2025–2027).',
    'about.paragraph3': 'التواصل مع أشخاص من ثقافات مختلفة لتبادل المعرفة والأفكار كان دائماً مصدراً للإلهام وطرق تفكير جديدة.',
    'about.paragraph4': 'أطور مهاراتي في Power BI وبرمجة Python وتكامل بيانات ERP لتحسين التقارير المالية والكفاءة التشغيلية. طورت أيضاً أداة ويب لاستيراد القيود المحاسبية من Excel إلى ERP Abacus.',
    'about.personalInfo': 'معلومات شخصية',
    'about.name': 'الاسم',
    'about.location': 'الموقع',
    'about.email': 'البريد الإلكتروني',
    'about.phone': 'الهاتف',
    'about.interests': 'الاهتمامات المهنية',
    'about.interest1': 'ذكاء الأعمال و Power BI',
    'about.interest2': 'تحليل البيانات',
    'about.interest3': 'أتمتة العمليات المحاسبية',
    'about.interest4': 'تطوير الويب',
    'about.interest5': 'تكامل أنظمة ERP',
    'about.languages': 'اللغات',
    'about.arabic': 'العربية',
    'about.french': 'الفرنسية',
    'about.english': 'الإنجليزية',
    'about.native': 'اللغة الأم',
    'about.advanced': 'متقدم',
    'about.intermediate': 'متوسط',

    'experience.title': 'الخبرة المهنية',
    'experience.badge': 'خبرة',
    'experience.job1.title': 'محاسب',
    'experience.job1.company': 'يو بي سيرفيس',
    'experience.job1.location': 'أريانة، تونس',
    'experience.job1.period': 'أبريل 2021 - الحالي',
    'experience.job1.task1': 'تسجيل المعاملات المالية وفق المعايير المحاسبية السويسرية.',
    'experience.job1.task2': 'التسويات الحسابية والمساعدة في الإقفالات الشهرية والسنوية.',
    'experience.job1.task3': 'تطوير لوحات تحكم Power BI لمتابعة الأداء المالي الداخلي.',
    'experience.job1.task4': 'دعم مبادرات الأتمتة باستخدام سكريبتات Python للمهام المحاسبية المتكررة.',
    'experience.job1.task5': 'استخراج البيانات المحاسبية من ERP Abacus عبر خدمات SOAP (AbaConnect) وتطوير أداة ويب لاستيراد القيود من Excel.',
    'experience.job1.task6': 'تدريب الموظفين الجدد على الإجراءات المحاسبية والأدوات الداخلية.',

    'experience.job2.title': 'مساعد محاسب',
    'experience.job2.company': 'مانباور',
    'experience.job2.location': 'تونس، تونس',
    'experience.job2.period': 'فبراير 2018 - ديسمبر 2018',
    'experience.job2.task1': 'تسجيل فواتير الموردين والعملاء.',
    'experience.job2.task2': 'التسويات البنكية والحسابية.',
    'experience.job2.task3': 'المساعدة في إعداد التصاريح الجبائية.',
    'experience.job2.task4': '',
    'experience.job2.task5': '',
    'experience.job2.task6': '',

    'experience.job3.title': 'متدرب محاسبة',
    'experience.job3.company': 'المغرب للاستشارات والتدقيق',
    'experience.job3.location': 'أريانة، تونس',
    'experience.job3.period': 'يوليو 2017 - سبتمبر 2017',
    'experience.job3.task1': 'تدريب في مكتب التدقيق والمحاسبة.',

    'experience.job4.title': 'مسؤول لوجستيات ومخزون',
    'experience.job4.company': 'مجموعة سوتيفي (سيلكتا)',
    'experience.job4.location': 'السكرة، أريانة، تونس',
    'experience.job4.period': 'فبراير 2014 - يوليو 2014',
    'experience.job4.task1': 'الرقابة النوعية والكمية على البضائع المستلمة.',
    'experience.job4.task2': 'إدارة المخزون بطريقة الوارد أولاً يصرف أولاً.',
    'experience.job4.task3': '',
    'experience.job4.task4': '',

    'education.title': 'التعليم',
    'education.badge': 'شهادة',
    'education.degree0.title': 'ماجستير مهني في تحليل الأعمال (برنامج مسائي)',
    'education.degree0.institution': 'مدرسة إسبريت للأعمال',
    'education.degree0.location': 'تونس',
    'education.degree0.period': 'سبتمبر 2025 – متوقع 2027',

    'education.degree1.title': 'ماجستير في الاقتصاد القياسي والتحليل الكمي',
    'education.degree1.institution': 'المدرسة العليا للتجارة',
    'education.degree1.location': 'تونس',
    'education.degree1.period': '2019 - 2021',

    'education.degree2.title': 'بكالوريوس في علوم الإدارة - تخصص مالية',
    'education.degree2.institution': 'المدرسة العليا للتجارة',
    'education.degree2.location': 'تونس',
    'education.degree2.period': '2013 - 2017',

    'certifications.title': 'الشهادات',
    'certifications.badge': 'شهادة',
    'certifications.cert1.title': 'ورشة Power BI من المبتدئ إلى المحترف',
    'certifications.cert1.organization': 'براغماتيك ووركس',
    'certifications.cert1.date': 'فبراير 2025',

    'certifications.cert2.title': 'دورة تطوير الويب الكاملة 2024',
    'certifications.cert2.organization': 'يوديمي',
    'certifications.cert2.date': 'مايو 2024',

    'certifications.cert3.title': 'مطور الويب الكامل 2023: من الصفر إلى الاحتراف',
    'certifications.cert3.organization': 'يوديمي',
    'certifications.cert3.date': 'مارس 2023',

    'skills.title': 'المهارات',
    'skills.software': 'البرمجيات وأنظمة ERP',
    'skills.bi': 'ذكاء الأعمال',
    'skills.programming': 'لغات البرمجة',
    'skills.webDevelopment': 'تطوير الويب',
    'skills.dataAnalysis': 'تحليل البيانات',
    'skills.continuousLearning': 'أنا في تعلم وتحسين مستمر لمهاراتي في هذه المجالات.',

    'projects.title': 'مشاريعي',
    'projects.subtitle': 'تعرف على أحدث أعمالي',
    'projects.viewLive': 'عرض الموقع',
    'projects.viewCode': 'عرض الكود',
    'projects.portfolio': 'الموقع الشخصي',
    'projects.portfolioDesc': 'موقعي الشخصي مبني باستخدام React و TypeScript و Tailwind CSS.',
    'projects.abacusImport': 'أداة استيراد Abacus ERP',
    'projects.abacusImportDesc': 'أداة ويب لاستيراد القيود المحاسبية من Excel إلى ERP Abacus عبر AbaConnect.',
    'projects.otherProjects': 'المزيد من المشاريع قريباً...',

    'contact.title': 'اتصل بي',
    'footer.rights': 'جميع الحقوق محفوظة.',

    'timeline.title': 'المسار الزمني',
    'timeline.subtitle': 'رحلتي المهنية والأكاديمية',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
