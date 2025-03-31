
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({ 
  title, 
  company, 
  location, 
  period, 
  description 
}) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{company} | {location}</p>
          </div>
          <Badge variant="outline" className="mt-2 md:mt-0 w-fit">{period}</Badge>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Accountant",
      company: "UB Services",
      location: "Centre Urbain Nord, Ariana, Tunisia",
      period: "Apr 2021 - Present",
      description: [
        "Accurately record financial transactions such as sales, purchases, expenses, and revenues in the accounting system, following Swiss accounting standards.",
        "Analyze and verify accounts, reconcile balances, prepare closing entries, and ensure that accounts are ready for presentation to tax authorities and stakeholders.",
        "Maintain organized electronic archives with an Electronic Document Management System (EDMS) to facilitate traceability and verification.",
        "Identify opportunities for automating accounting processes to improve operational efficiency and reduce errors.",
        "Train new employees in Swiss accounting, accounting software, and available IT techniques."
      ]
    },
    {
      title: "Accounting Assistant",
      company: "Manpower",
      location: "Les berges du lac 1, Tunis, Tunisia",
      period: "Feb 2018 - Dec 2018",
      description: [
        "Recording client and supplier invoices.",
        "Reconciling accounts and bank statements.",
        "Monthly tax declarations.",
        "Quarterly CNSS declarations.",
        "Verification, recording, and reimbursement of employee expense reports.",
        "Assist with accounting audits by gathering required documents and responding to auditor requests."
      ]
    },
    {
      title: "Accounting Intern",
      company: "Maghreb Conseil et Audit (MCA)",
      location: "Centre Urbain Nord, Ariana, Tunisia",
      period: "Jul 2017 - Sep 2017",
      description: [
        "Recording client and supplier invoices."
      ]
    },
    {
      title: "Logistics and Inventory Agent",
      company: "Groupe SOTEFI (SELECTA)",
      location: "La Soukra, Ariana, Tunisia",
      period: "Feb 2014 - Jul 2014",
      description: [
        "Ensure strict qualitative and quantitative control of received goods.",
        "Optimize storage space organization to facilitate handling.",
        "Manage inventory using the FIFO (First In, First Out) method.",
        "Organize stock by class and product families for better management."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
