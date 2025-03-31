
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-primary block">Hamza Bouguerra</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6 max-w-lg">
              Accountant with expertise in both finance and programming. Passionate about bridging the gap between financial analysis and technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full">
                <a href="#about">Learn More</a>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img
                src="https://placehold.co/600x600/3b82f6/ffffff?text=HB"
                alt="Hamza Bouguerra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
