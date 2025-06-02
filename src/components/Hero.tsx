
import React from 'react';
import { Mail } from 'lucide-react';

const Hero = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@lienertconsulting.ch';
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/lovable-uploads/61424ba3-ab6e-47ca-b97d-f5272a4c5bba.png')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-3xl">
          {/* Company Name Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-lg">
            <span className="font-bold">Lienert</span> Consulting
          </h1>

          {/* Main Headline - using responsive text sizing similar to clamp() */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-8 drop-shadow-lg">
            Erstklassige Unterstützung in Venture&nbsp;Building, Marketing und Operations – direkt aus dem Herzen Zürichs.
          </h2>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className="inline-block px-9 py-4 rounded-full font-semibold text-gray-900 bg-white/85 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300 text-lg"
          >
            <Mail className="inline mr-2 h-5 w-5" />
            Jetzt&nbsp;Kontakt&nbsp;aufnehmen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
