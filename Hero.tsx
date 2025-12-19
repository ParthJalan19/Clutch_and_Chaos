import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToVehicles = () => {
    const element = document.getElementById('vehicles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-golden via-platinum to-golden bg-clip-text text-transparent animate-fade-in">
          CLUTCH & CHAOS
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed animate-slide-up">
          Where Premium Meets Performance. Experience the Ultimate Collection of 
          <span className="text-golden font-medium"> Luxury Vehicles</span>
        </p>
        <button
          onClick={scrollToVehicles}
          className="bg-gradient-to-r from-golden to-platinum text-black px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-golden/50 animate-slide-up"
        >
          Explore Collection
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-golden cursor-pointer hover:text-platinum transition-colors duration-300"
          onClick={scrollToVehicles}
        />
      </div>
    </section>
  );
};

export default Hero;