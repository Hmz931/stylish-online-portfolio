
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Education', href: '#education' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Hmz931', ariaLabel: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/hamza-bouguerra-a09788106/', ariaLabel: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/hmz931', ariaLabel: 'Twitter' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:hamza93bouguerra@gmail.com', ariaLabel: 'Email' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-primary">HB.</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-4 py-3 text-foreground hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
              <div className="flex space-x-4 px-4 py-3 border-t border-gray-100">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-gray-600 hover:text-primary"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
