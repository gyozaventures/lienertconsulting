
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:contact@linakconsulting.com';
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-wide">
          <span className="font-thin">Linak</span>
          <span className="font-normal ml-4">Consulting</span>
        </h1>

        {/* Call to Action */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-4">
            Erstklassige Unterstützung in
          </p>
          <p className="text-2xl md:text-3xl text-white font-medium mb-6">
            Venture Building • Marketing • Operations
          </p>
          <p className="text-lg md:text-xl text-white/80 font-light italic">
            Erstklassig aus dem Herzen Zürichs
          </p>
        </div>

        {/* Contact Button */}
        <Button
          onClick={handleContactClick}
          size="lg"
          className="bg-white/90 hover:bg-white text-gray-900 font-medium px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          <Mail className="mr-3 h-5 w-5" />
          Jetzt Kontakt aufnehmen
        </Button>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  );
};

export default Hero;
