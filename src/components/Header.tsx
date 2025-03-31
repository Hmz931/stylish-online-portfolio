
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update nav links with translations
  const navLinks = [
    { title: t('nav.home'), href: '#home' },
    { title: t('nav.about'), href: '#about' },
    { title: t('nav.experience'), href: '#experience' },
    { title: t('nav.education'), href: '#education' },
    { title: t('nav.skills'), href: '#skills' },
    { title: t('nav.projects'), href: '#projects' },
    { title: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com/Hmz931', ariaLabel: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/in/hamza-bouguerra-a09788106/', ariaLabel: 'LinkedIn' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/hmz931', ariaLabel: 'Twitter' },
    { icon: <Mail className="h-5 w-5" />, href: 'mailto:hamza93bouguerra@gmail.com', ariaLabel: 'Email' },
  ];
  
  const languageOptions = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'} ${language === 'ar' ? 'rtl' : 'ltr'}`}>
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

          {/* Desktop: Language selector and social icons */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Change language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((option) => (
                  <DropdownMenuItem 
                    key={option.code}
                    onClick={() => setLanguage(option.code as Language)}
                    className={language === option.code ? "bg-muted" : ""}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
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
              
              {/* Mobile: Language selector */}
              <div className="px-4 py-3 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Language</p>
                <div className="flex space-x-4">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => {
                        setLanguage(option.code as Language);
                        setIsOpen(false);
                      }}
                      className={`text-sm ${language === option.code ? 'text-primary font-medium' : 'text-gray-600'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Mobile: Social links */}
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
