
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  location, 
  period 
}) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{degree}</h3>
            <p className="text-gray-600">{institution}, {location}</p>
          </div>
          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{period}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

interface CertificationItemProps {
  title: string;
  organization: string;
  date: string;
  url: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({ 
  title, 
  organization, 
  date, 
  url 
}) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {organization}
              </a>
            </p>
          </div>
          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{date}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const Education = () => {
  const education = [
    {
      degree: "Master's in Econometrics and Quantitative Analysis",
      institution: "École Supérieure de Commerce",
      location: "Tunis",
      period: "2019 - 2021"
    },
    {
      degree: "Bachelor's in Management Science – Finance Specialization",
      institution: "École Supérieure de Commerce",
      location: "Tunis",
      period: "2013 - 2017"
    },
    {
      degree: "Baccalaureate in Economics/Management",
      institution: "Lycée Dar Fadhal, La Soukra",
      location: "Ariana",
      period: "2013"
    }
  ];

  const certifications = [
    {
      title: "Power BI Beginner to Pro Workshop",
      organization: "Pragmatic Works",
      date: "Feb 2025",
      url: "https://certificationcompletion.blob.core.windows.net/certifications/PowerBIBeginnertoProWorkshop-HamzaBouguerra"
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      organization: "Udemy",
      date: "May 2024",
      url: "https://www.udemy.com/certificate/UC-7d1fa22b-9e74-48a4-97f0-e6c163e7688e/"
    },
    {
      title: "The Complete Web Developer in 2023: Zero to Mastery",
      organization: "Udemy",
      date: "Mar 2023",
      url: "https://www.udemy.com/certificate/UC-5ac74d9c-6166-4c9e-b05b-689deaf1841b/"
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-subtitle">Education</h2>
            <div>
              {education.map((edu, index) => (
                <EducationItem 
                  key={index}
                  degree={edu.degree}
                  institution={edu.institution}
                  location={edu.location}
                  period={edu.period}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="section-subtitle">Certifications</h2>
            <div>
              {certifications.map((cert, index) => (
                <CertificationItem 
                  key={index}
                  title={cert.title}
                  organization={cert.organization}
                  date={cert.date}
                  url={cert.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
