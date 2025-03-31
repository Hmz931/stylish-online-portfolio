
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
    'header.darkMode': 'Mode Sombre',
    'header.lightMode': 'Mode Clair',
    
    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.description': 'Comptable avec expertise en finance et programmation. Passionné par le développement de solutions qui font le pont entre l\'analyse financière et la technologie.',
    'hero.contactButton': 'Me Contacter',
    'hero.learnMoreButton': 'En Savoir Plus',
    
    // About
    'about.title': 'À Propos de Moi',
    'about.paragraph1': 'Dynamique, ouvert d\'esprit, curieux, apprenant vite et toujours prêt à changer : Je considère ces compétences comme mes points forts. J\'essaie toujours de m\'adapter car je pense que rien n\'est statique dans ce Monde.',
    'about.paragraph2': 'Je suis titulaire d\'un diplôme de Licence en Finance et un Master en Économétrie et Analyses Quantitatives de l\'École Supérieure de Commerce de Tunis. Maintenant, je travaille en Tunisie en tant que comptable.',
    'about.paragraph3': 'Être social et entrer en contact avec de nouvelles personnes, de cultures différentes, afin de partager des connaissances et des idées, m\'a toujours apporté de l\'inspiration et de nouvelles façons de penser.',
    'about.paragraph4': 'Avec une solide expérience en comptabilité et une passion pour la programmation, j\'élargis continuellement mes compétences pour exceller dans ces deux domaines. Mon parcours financier combiné à des compétences techniques dans divers langages de programmation me rend particulièrement efficace dans la création de solutions financières automatisées.',
    'about.personalInfo': 'Informations Personnelles',
    'about.name': 'Nom',
    'about.location': 'Emplacement',
    'about.email': 'E-mail',
    'about.phone': 'Téléphone',
    'about.interests': 'Intérêts Professionnels',
    'about.interest1': 'Analyse Financière',
    'about.interest2': 'Analyse de Données',
    'about.interest3': 'Développement Web',
    'about.interest4': 'Automatisation des Processus',
    'about.interest5': 'Modélisation Économétrique',
    'about.languages': 'Langues',
    'about.arabic': 'Arabe',
    'about.french': 'Français',
    'about.english': 'Anglais',
    'about.native': 'Langue Maternelle',
    'about.advanced': 'Avancé',
    'about.intermediate': 'Intermédiaire',
    
    // Experience
    'experience.title': 'Expérience Professionnelle',
    'experience.job1.title': 'Comptable',
    'experience.job1.company': 'UB Services',
    'experience.job1.location': 'Centre Urbain Nord, Ariana, Tunisie',
    'experience.job1.period': 'Avr 2021 - Présent',
    'experience.job1.task1': 'Saisie et enregistrement précis des transactions financières, telles que ventes, achats, dépenses et recettes, dans le système comptable, en suivant les normes comptables suisses.',
    'experience.job1.task2': 'Analyse et vérification des comptes, réconciliation des soldes, préparation des écritures de clôture et présentation aux autorités fiscales et aux parties prenantes.',
    'experience.job1.task3': 'Maintien des archives électroniques organisées avec un système de gestion électronique des documents (GED) pour faciliter la traçabilité et la vérification.',
    'experience.job1.task4': 'Identification des opportunités d\'automatisation des processus comptables pour améliorer l\'efficacité opérationnelle et réduire les erreurs.',
    'experience.job1.task5': 'Formation des nouveaux employés en comptabilité suisse, en maîtrise du logiciel comptable et en techniques informatiques disponibles.',
    
    'experience.job2.title': 'Assistant comptable',
    'experience.job2.company': 'Manpower',
    'experience.job2.location': 'Les berges du lac 1, Tunis, Tunisie',
    'experience.job2.period': 'Fév 2018 - Déc 2018',
    'experience.job2.task1': 'Comptabilisation des factures clients et fournisseurs.',
    'experience.job2.task2': 'Lettrage des comptes et rapprochement bancaire.',
    'experience.job2.task3': 'Déclaration fiscale mensuelle.',
    'experience.job2.task4': 'Déclaration CNSS trimestrielle.',
    'experience.job2.task5': 'Vérification, comptabilisation et remboursement des notes de frais des employés.',
    'experience.job2.task6': 'Assistance lors de l\'audit comptable en rassemblant les documents requis et en répondant aux demandes de l\'auditeur.',
    
    'experience.job3.title': 'Comptable stagiaire',
    'experience.job3.company': 'Maghreb Conseil et Audit (MCA)',
    'experience.job3.location': 'Centre Urbain Nord, Ariana, Tunisie',
    'experience.job3.period': 'Juil 2017 - Sep 2017',
    'experience.job3.task1': 'Comptabilisation des factures clients et fournisseurs.',
    
    'experience.job4.title': 'Agent logistique et de stock',
    'experience.job4.company': 'Groupe SOTEFI (SELECTA)',
    'experience.job4.location': 'La Soukra, Ariana, Tunisie',
    'experience.job4.period': 'Fév 2014 - Juil 2014',
    'experience.job4.task1': 'Contrôle qualitatif et quantitatif rigoureux des marchandises réceptionnées.',
    'experience.job4.task2': 'Optimisation de l\'organisation de l\'espace de stockage pour faciliter les déplacements des manutentionnaires.',
    'experience.job4.task3': 'Gestion des stocks en appliquant la méthode FIFO (Premier Entré, Premier Sorti).',
    'experience.job4.task4': 'Organisation du stock en fonction des classes et des familles de produits pour une meilleure gestion.',
    
    // Education
    'education.title': 'Formation',
    'education.degree1.title': 'Master en Économétrie et Analyses Quantitatives',
    'education.degree1.institution': 'École Supérieure de Commerce',
    'education.degree1.location': 'Tunis',
    'education.degree1.period': '2019 - 2021',
    
    'education.degree2.title': 'Licence en Sciences de Gestion – Spécialité Finance',
    'education.degree2.institution': 'École Supérieure de Commerce',
    'education.degree2.location': 'Tunis',
    'education.degree2.period': '2013 - 2017',
    
    'education.degree3.title': 'Baccalauréat Économie/Gestion',
    'education.degree3.institution': 'Lycée Dar Fadhal, La Soukra',
    'education.degree3.location': 'Ariana',
    'education.degree3.period': '2013',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.cert1.title': 'Power BI Beginner to Pro Workshop',
    'certifications.cert1.organization': 'Pragmatic Works',
    'certifications.cert1.date': 'Fév 2025',
    
    'certifications.cert2.title': 'The Complete 2024 Web Development Bootcamp',
    'certifications.cert2.organization': 'Udemy',
    'certifications.cert2.date': 'Mai 2024',
    
    'certifications.cert3.title': 'The Complete Web Developer in 2023: Zero to Mastery',
    'certifications.cert3.organization': 'Udemy',
    'certifications.cert3.date': 'Mars 2023',
    
    // Skills
    'skills.title': 'Compétences',
    'skills.software': 'Logiciels',
    'skills.programming': 'Langages de Programmation',
    'skills.webDevelopment': 'Développement Web',
    'skills.dataAnalysis': 'Analyse de Données',
    'skills.continuousLearning': 'Je suis constamment en train d\'apprendre et d\'améliorer mes compétences dans ces domaines.',
    
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
    'header.darkMode': 'Dark Mode',
    'header.lightMode': 'Light Mode',
    
    // Hero
    'hero.greeting': 'Hello, I\'m',
    'hero.description': 'Accountant with expertise in both finance and programming. Passionate about bridging the gap between financial analysis and technology.',
    'hero.contactButton': 'Contact Me',
    'hero.learnMoreButton': 'Learn More',
    
    // About
    'about.title': 'About Me',
    'about.paragraph1': 'Dynamic, open-minded, curious, quick learner, and always ready to change: I consider these skills as my strengths. I always try to adapt because I believe nothing is static in this world.',
    'about.paragraph2': 'I hold a Bachelor\'s degree in Finance and a Master\'s degree in Econometrics and Quantitative Analysis from the École Supérieure de Commerce de Tunis. Currently, I work as an accountant in Tunisia.',
    'about.paragraph3': 'Socializing and meeting new people from different cultures to share knowledge and ideas has always brought me inspiration and new ways of thinking.',
    'about.paragraph4': 'With solid experience in accounting and a passion for programming, I am continually expanding my skillset to excel in both fields. My background in finance combined with technical skills in various programming languages makes me particularly effective at creating automated financial solutions.',
    'about.personalInfo': 'Personal Info',
    'about.name': 'Name',
    'about.location': 'Location',
    'about.email': 'Email',
    'about.phone': 'Phone',
    'about.interests': 'Professional Interests',
    'about.interest1': 'Financial Analysis',
    'about.interest2': 'Data Analytics',
    'about.interest3': 'Web Development',
    'about.interest4': 'Process Automation',
    'about.interest5': 'Econometric Modeling',
    'about.languages': 'Languages',
    'about.arabic': 'Arabic',
    'about.french': 'French',
    'about.english': 'English',
    'about.native': 'Native Language',
    'about.advanced': 'Advanced',
    'about.intermediate': 'Intermediate',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.job1.title': 'Accountant',
    'experience.job1.company': 'UB Services',
    'experience.job1.location': 'Centre Urbain Nord, Ariana, Tunisia',
    'experience.job1.period': 'Apr 2021 - Present',
    'experience.job1.task1': 'Accurately record financial transactions such as sales, purchases, expenses, and revenues in the accounting system, following Swiss accounting standards.',
    'experience.job1.task2': 'Analyze and verify accounts, reconcile balances, prepare closing entries, and ensure that accounts are ready for presentation to tax authorities and stakeholders.',
    'experience.job1.task3': 'Maintain organized electronic archives with an Electronic Document Management System (EDMS) to facilitate traceability and verification.',
    'experience.job1.task4': 'Identify opportunities for automating accounting processes to improve operational efficiency and reduce errors.',
    'experience.job1.task5': 'Train new employees in Swiss accounting, accounting software, and available IT techniques.',
    
    'experience.job2.title': 'Accounting Assistant',
    'experience.job2.company': 'Manpower',
    'experience.job2.location': 'Les berges du lac 1, Tunis, Tunisia',
    'experience.job2.period': 'Feb 2018 - Dec 2018',
    'experience.job2.task1': 'Recording client and supplier invoices.',
    'experience.job2.task2': 'Reconciling accounts and bank statements.',
    'experience.job2.task3': 'Monthly tax declarations.',
    'experience.job2.task4': 'Quarterly CNSS declarations.',
    'experience.job2.task5': 'Verification, recording, and reimbursement of employee expense reports.',
    'experience.job2.task6': 'Assist with accounting audits by gathering required documents and responding to auditor requests.',
    
    'experience.job3.title': 'Accounting Intern',
    'experience.job3.company': 'Maghreb Conseil et Audit (MCA)',
    'experience.job3.location': 'Centre Urbain Nord, Ariana, Tunisia',
    'experience.job3.period': 'Jul 2017 - Sep 2017',
    'experience.job3.task1': 'Recording client and supplier invoices.',
    
    'experience.job4.title': 'Logistics and Inventory Agent',
    'experience.job4.company': 'Groupe SOTEFI (SELECTA)',
    'experience.job4.location': 'La Soukra, Ariana, Tunisia',
    'experience.job4.period': 'Feb 2014 - Jul 2014',
    'experience.job4.task1': 'Ensure strict qualitative and quantitative control of received goods.',
    'experience.job4.task2': 'Optimize storage space organization to facilitate handling.',
    'experience.job4.task3': 'Manage inventory using the FIFO (First In, First Out) method.',
    'experience.job4.task4': 'Organize stock by class and product families for better management.',
    
    // Education
    'education.title': 'Education',
    'education.degree1.title': 'Master\'s in Econometrics and Quantitative Analysis',
    'education.degree1.institution': 'École Supérieure de Commerce',
    'education.degree1.location': 'Tunis',
    'education.degree1.period': '2019 - 2021',
    
    'education.degree2.title': 'Bachelor\'s in Management Science – Finance Specialization',
    'education.degree2.institution': 'École Supérieure de Commerce',
    'education.degree2.location': 'Tunis',
    'education.degree2.period': '2013 - 2017',
    
    'education.degree3.title': 'Baccalaureate in Economics/Management',
    'education.degree3.institution': 'Lycée Dar Fadhal, La Soukra',
    'education.degree3.location': 'Ariana',
    'education.degree3.period': '2013',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.cert1.title': 'Power BI Beginner to Pro Workshop',
    'certifications.cert1.organization': 'Pragmatic Works',
    'certifications.cert1.date': 'Feb 2025',
    
    'certifications.cert2.title': 'The Complete 2024 Web Development Bootcamp',
    'certifications.cert2.organization': 'Udemy',
    'certifications.cert2.date': 'May 2024',
    
    'certifications.cert3.title': 'The Complete Web Developer in 2023: Zero to Mastery',
    'certifications.cert3.organization': 'Udemy',
    'certifications.cert3.date': 'Mar 2023',
    
    // Skills
    'skills.title': 'Skills',
    'skills.software': 'Software',
    'skills.programming': 'Programming Languages',
    'skills.webDevelopment': 'Web Development',
    'skills.dataAnalysis': 'Data Analysis',
    'skills.continuousLearning': 'I am constantly learning and improving my skills in these areas.',
    
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
    'header.darkMode': 'الوضع المظلم',
    'header.lightMode': 'الوضع المضيء',
    
    // Hero
    'hero.greeting': 'مرحباً، أنا',
    'hero.description': 'محاسب ذو خبرة في المالية والبرمجة. شغوف بالجمع بين التحليل المالي والتكنولوجيا.',
    'hero.contactButton': 'اتصل بي',
    'hero.learnMoreButton': 'اعرف المزيد',
    
    // About
    'about.title': 'نبذة عني',
    'about.paragraph1': 'ديناميكي، منفتح الذهن، فضولي، سريع التعلم، ودائماً مستعد للتغيير: أعتبر هذه المهارات من نقاط قوتي. أحاول دائماً التكيف لأنني أؤمن بأن لا شيء ثابت في هذا العالم.',
    'about.paragraph2': 'أنا حاصل على درجة البكالوريوس في المالية ودرجة الماجستير في القياس الاقتصادي والتحليل الكمي من المدرسة العليا للتجارة في تونس. حالياً، أعمل كمحاسب في تونس.',
    'about.paragraph3': 'الاختلاط ولقاء أشخاص جدد من ثقافات مختلفة لتبادل المعرفة والأفكار، كان دائماً يجلب لي الإلهام وطرق جديدة للتفكير.',
    'about.paragraph4': 'مع خبرة قوية في المحاسبة وشغف بالبرمجة، أقوم باستمرار بتوسيع مهاراتي للتفوق في كلا المجالين. خلفيتي في المالية مع المهارات التقنية في مختلف لغات البرمجة تجعلني فعالاً بشكل خاص في إنشاء حلول مالية آلية.',
    'about.personalInfo': 'معلومات شخصية',
    'about.name': 'الاسم',
    'about.location': 'الموقع',
    'about.email': 'البريد الإلكتروني',
    'about.phone': 'الهاتف',
    'about.interests': 'الاهتمامات المهنية',
    'about.interest1': 'التحليل المالي',
    'about.interest2': 'تحليل البيانات',
    'about.interest3': 'تطوير الويب',
    'about.interest4': 'أتمتة العمليات',
    'about.interest5': 'النمذجة الاقتصادية',
    'about.languages': 'اللغات',
    'about.arabic': 'العربية',
    'about.french': 'الفرنسية',
    'about.english': 'الإنجليزية',
    'about.native': 'اللغة الأم',
    'about.advanced': 'متقدم',
    'about.intermediate': 'متوسط',
    
    // Experience
    'experience.title': 'الخبرة المهنية',
    'experience.job1.title': 'محاسب',
    'experience.job1.company': 'يو بي سيرفيس',
    'experience.job1.location': 'المركز العمراني الشمالي، أريانة، تونس',
    'experience.job1.period': 'أبريل 2021 - الحالي',
    'experience.job1.task1': 'تسجيل المعاملات المالية بدقة مثل المبيعات والمشتريات والنفقات والإيرادات في النظام المحاسبي، باتباع معايير المحاسبة السويسرية.',
    'experience.job1.task2': 'تحليل وتدقيق الحسابات، تسوية الأرصدة، إعداد قيود الإغلاق، والتأكد من جاهزية الحسابات للتقديم إلى السلطات الضريبية وأصحاب المصلحة.',
    'experience.job1.task3': 'الحفاظ على أرشيف إلكتروني منظم باستخدام نظام إدارة المستندات الإلكترونية لتسهيل التتبع والتحقق.',
    'experience.job1.task4': 'تحديد فرص أتمتة العمليات المحاسبية لتحسين الكفاءة التشغيلية وتقليل الأخطاء.',
    'experience.job1.task5': 'تدريب الموظفين الجدد على المحاسبة السويسرية، وبرامج المحاسبة، والتقنيات المعلوماتية المتاحة.',
    
    'experience.job2.title': 'مساعد محاسب',
    'experience.job2.company': 'مانباور',
    'experience.job2.location': 'ضفاف البحيرة 1، تونس، تونس',
    'experience.job2.period': 'فبراير 2018 - ديسمبر 2018',
    'experience.job2.task1': 'تسجيل فواتير العملاء والموردين.',
    'experience.job2.task2': 'تسوية الحسابات وكشوف البنوك.',
    'experience.job2.task3': 'الإقرارات الضريبية الشهرية.',
    'experience.job2.task4': 'إقرارات الضمان الاجتماعي الفصلية.',
    'experience.job2.task5': 'التحقق وتسجيل وسداد تقارير نفقات الموظفين.',
    'experience.job2.task6': 'المساعدة في عمليات التدقيق المحاسبي من خلال جمع المستندات المطلوبة والرد على استفسارات المدقق.',
    
    'experience.job3.title': 'متدرب محاسبة',
    'experience.job3.company': 'المغرب للاستشارات والتدقيق',
    'experience.job3.location': 'المركز العمراني الشمالي، أريانة، تونس',
    'experience.job3.period': 'يوليو 2017 - سبتمبر 2017',
    'experience.job3.task1': 'تسجيل فواتير العملاء والموردين.',
    
    'experience.job4.title': 'مسؤول لوجستيات ومخزون',
    'experience.job4.company': 'مجموعة سوتيفي (سيلكتا)',
    'experience.job4.location': 'السكرة، أريانة، تونس',
    'experience.job4.period': 'فبراير 2014 - يوليو 2014',
    'experience.job4.task1': 'ضمان رقابة نوعية وكمية صارمة على البضائع المستلمة.',
    'experience.job4.task2': 'تحسين تنظيم مساحة التخزين لتسهيل المناولة.',
    'experience.job4.task3': 'إدارة المخزون باستخدام طريقة الوارد أولاً يصرف أولاً (FIFO).',
    'experience.job4.task4': 'تنظيم المخزون حسب الفئة وعائلات المنتجات للإدارة الأفضل.',
    
    // Education
    'education.title': 'التعليم',
    'education.degree1.title': 'ماجستير في الاقتصاد القياسي والتحليل الكمي',
    'education.degree1.institution': 'المدرسة العليا للتجارة',
    'education.degree1.location': 'تونس',
    'education.degree1.period': '2019 - 2021',
    
    'education.degree2.title': 'بكالوريوس في علوم الإدارة - تخصص مالية',
    'education.degree2.institution': 'المدرسة العليا للتجارة',
    'education.degree2.location': 'تونس',
    'education.degree2.period': '2013 - 2017',
    
    'education.degree3.title': 'البكالوريا في الاقتصاد/الإدارة',
    'education.degree3.institution': 'معهد دار الفضل، السكرة',
    'education.degree3.location': 'أريانة',
    'education.degree3.period': '2013',
    
    // Certifications
    'certifications.title': 'الشهادات',
    'certifications.cert1.title': 'ورشة عمل Power BI من المبتدئ إلى المحترف',
    'certifications.cert1.organization': 'براغماتيك ووركس',
    'certifications.cert1.date': 'فبراير 2025',
    
    'certifications.cert2.title': 'دورة تطوير الويب الكاملة لعام 2024',
    'certifications.cert2.organization': 'يوديمي',
    'certifications.cert2.date': 'مايو 2024',
    
    'certifications.cert3.title': 'مطور الويب الكامل في 2023: من الصفر إلى الاحتراف',
    'certifications.cert3.organization': 'يوديمي',
    'certifications.cert3.date': 'مارس 2023',
    
    // Skills
    'skills.title': 'المهارات',
    'skills.software': 'البرمجيات',
    'skills.programming': 'لغات البرمجة',
    'skills.webDevelopment': 'تطوير الويب',
    'skills.dataAnalysis': 'تحليل البيانات',
    'skills.continuousLearning': 'أنا في حالة تعلم وتحسين مستمر لمهاراتي في هذه المجالات.',
    
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
