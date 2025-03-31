
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface SkillItemProps {
  name: string;
  level: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
};

const Skills = () => {
  const programmingSkills = [
    { name: "R", level: 90 },
    { name: "MATLAB", level: 85 },
    { name: "Python", level: 70 },
    { name: "JavaScript", level: 65 },
    { name: "STATA", level: 60 },
    { name: "LATEX", level: 60 },
    { name: "OxMetrics", level: 55 },
    { name: "Java", level: 40 },
    { name: "VBA", level: 40 },
  ];

  const softwareSkills = [
    { name: "ERP Abacus", level: 90 },
    { name: "Crésus accounting", level: 85 },
    { name: "Excel/Office", level: 85 },
    { name: "Yooz platform", level: 80 },
    { name: "SPSS", level: 70 },
    { name: "Tanagra", level: 65 },
  ];

  const professionalSkills = [
    { name: "Accounting", level: 90 },
    { name: "Financial Analysis", level: 85 },
    { name: "Data Analysis", level: 80 },
    { name: "Process Automation", level: 75 },
    { name: "Econometric Modeling", level: 85 },
    { name: "Web Development", level: 60 },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="professional" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="software">Software</TabsTrigger>
            </TabsList>
            
            <TabsContent value="professional">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {professionalSkills.map((skill, index) => (
                      <SkillItem 
                        key={index} 
                        name={skill.name} 
                        level={skill.level} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="programming">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {programmingSkills.map((skill, index) => (
                      <SkillItem 
                        key={index} 
                        name={skill.name} 
                        level={skill.level} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="software">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {softwareSkills.map((skill, index) => (
                      <SkillItem 
                        key={index} 
                        name={skill.name} 
                        level={skill.level} 
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
