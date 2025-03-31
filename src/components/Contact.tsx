
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "(+216) 56 650 414",
      link: "tel:+21656650414"
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "hamza93bouguerra@gmail.com",
      link: "mailto:hamza93bouguerra@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "La Soukra, Ariana, Tunisia",
      link: "https://www.google.com/maps/place/La+Soukra"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      link: "https://github.com/Hmz931"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/hamza-bouguerra-a09788106/"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      title: "Twitter",
      link: "https://twitter.com/hmz931"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-gray-700 hover:text-primary transition-colors"
                      target={info.title === "Location" ? "_blank" : undefined}
                      rel={info.title === "Location" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-colors"
                  aria-label={`Visit ${social.title}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="border border-gray-200 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
