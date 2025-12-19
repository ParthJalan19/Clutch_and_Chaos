import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Every vehicle in our collection meets the highest standards of luxury and performance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our experienced professionals provide personalized service and expert guidance."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your automotive dreams become reality."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description: "We share your passion for exceptional vehicles and automotive excellence."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-golden to-platinum bg-clip-text text-transparent">
            About Clutch & Chaos
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded on the principle that exceptional vehicles deserve exceptional service, 
            Clutch & Chaos has been the premier destination for automotive enthusiasts seeking 
            the perfect blend of luxury, performance, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              What started as a passion project has evolved into a curated collection of the world's 
              finest vehicles. We believe that every car and motorcycle tells a story, and we're here 
              to help you find yours.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From classic beauties that turn heads to modern marvels that push the boundaries of 
              performance, our collection represents the pinnacle of automotive achievement.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Luxury showroom"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-golden/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-golden/20 hover:border-golden/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-golden mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;