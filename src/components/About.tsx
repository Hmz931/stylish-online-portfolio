
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Dynamic, open-minded, curious, quick learner, and always ready to change: 
                I consider these skills as my strengths. I always try to adapt because I believe nothing is static in this world.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I hold a Bachelor's degree in Finance and a Master's degree in Econometrics and Quantitative Analysis from the École Supérieure de Commerce de Tunis.
                Currently, I work as an accountant in Tunisia.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Socializing and meeting new people from different cultures to share knowledge and ideas has always brought me inspiration and new ways of thinking.
              </p>
              <p className="text-lg text-gray-700">
                With solid experience in accounting and a passion for programming, I am continually expanding my skillset to excel in both fields. My background in finance combined with technical skills in various programming languages makes me particularly effective at creating automated financial solutions.
              </p>
            </div>
          </div>
          
          <div>
            <Card className="border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src="https://placehold.co/600x800/3b82f6/ffffff?text=Hamza+Bouguerra"
                  alt="Hamza Bouguerra"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Personal Info</h3>
            <ul className="space-y-2 text-gray-700">
              <li><span className="font-medium">Name:</span> Hamza Bouguerra</li>
              <li><span className="font-medium">Location:</span> La Soukra, Ariana, Tunisia</li>
              <li><span className="font-medium">Email:</span> hamza93bouguerra@gmail.com</li>
              <li><span className="font-medium">Phone:</span> (+216) 56 650 414</li>
            </ul>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Professional Interests</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Financial Analysis</li>
              <li>Data Analytics</li>
              <li>Web Development</li>
              <li>Process Automation</li>
              <li>Econometric Modeling</li>
            </ul>
          </Card>
          
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">Arabic</span>
                  <span className="text-gray-500 text-sm">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">French</span>
                  <span className="text-gray-500 text-sm">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-500 text-sm">Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
