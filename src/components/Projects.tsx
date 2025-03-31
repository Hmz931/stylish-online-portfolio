
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t, language } = useLanguage();
  
  const projects = [
    {
      id: 1,
      title: t('projects.portfolio'),
      description: t('projects.portfolioDesc'),
      image: '/placeholder.svg',
      liveUrl: 'https://hamza-bouguerra.netlify.app/',
      githubUrl: 'https://github.com/Hmz931/personal-portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    // Add more projects as they come
  ];

  return (
    <section id="projects" className={`py-16 md:py-24 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center ${language === 'ar' ? 'text-right' : 'text-center'}`}>
          {t('projects.title')}
        </h2>
        <p className={`text-lg text-gray-600 mb-12 ${language === 'ar' ? 'text-right' : 'text-center'} max-w-3xl mx-auto`}>
          {t('projects.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" /> {t('projects.viewCode')}
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" /> {t('projects.viewLive')}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
          
          {/* Placeholder for future projects */}
          <Card className="overflow-hidden border-dashed border-2 flex flex-col justify-center items-center p-10">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-500 mb-2">{t('projects.otherProjects')}</h3>
              <Github className="h-16 w-16 mx-auto text-gray-300 mb-2" />
              <a 
                href="https://github.com/Hmz931" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
