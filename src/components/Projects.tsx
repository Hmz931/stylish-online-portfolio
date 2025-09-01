
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
      githubUrl: 'https://github.com/Hmz931/stylish-online-portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: 'Stochastic Volatility MCMC',
      description: 'Bayesian inference for stochastic volatility model using single-move algorithm',
      image: '/placeholder.svg',
      liveUrl: 'https://github.com/Hmz931/SV-Single-Move-MCMC',
      githubUrl: 'https://github.com/Hmz931/SV-Single-Move-MCMC',
      technologies: ['R', 'MCMC', 'Bayesian Statistics'],
    },
    {
      id: 3,
      title: 'EM Algorithm & GMM Model',
      description: 'Implementation of Expectation-Maximization algorithm and Gaussian Mixture Models',
      image: '/placeholder.svg',
      liveUrl: 'https://github.com/Hmz931/EM-algorithm-and-GMM-model',
      githubUrl: 'https://github.com/Hmz931/EM-algorithm-and-GMM-model',
      technologies: ['R', 'Machine Learning', 'Statistics'],
    },
    {
      id: 4,
      title: 'JavaScript Calculator',
      description: 'Mini project for building calculator using HTML/CSS and JavaScript',
      image: '/placeholder.svg',
      liveUrl: 'https://hmz931.github.io/Calculator/',
      githubUrl: 'https://github.com/Hmz931/Calculator',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
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
            <Card key={project.id} className="group overflow-hidden hover:shadow-elegant transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
              <div className="relative h-48 bg-gradient-subtle overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="p-6 bg-card/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="flex-1 group/btn">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" /> 
                      {t('projects.viewCode')}
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1 bg-gradient-primary hover:shadow-glow group/btn">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" /> 
                      {t('projects.viewLive')}
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
