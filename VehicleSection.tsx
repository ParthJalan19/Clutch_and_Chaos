import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import { vehicles } from '../data/vehicles';

const VehicleSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeType, setActiveType] = useState('cars');

  const filterOptions = {
    cars: [
      { id: 'all', label: 'All Cars' },
      { id: 'luxury', label: 'Luxury' },
      { id: 'performance', label: 'Performance' },
      { id: 'classic', label: 'Classic' }
    ],
    bikes: [
      { id: 'all', label: 'All Bikes' },
      { id: 'sport', label: 'Sport' },
      { id: 'cruiser', label: 'Cruiser' },
      { id: 'adventure', label: 'Adventure' }
    ]
  };

  const filteredVehicles = vehicles[activeType].filter(vehicle => 
    activeFilter === 'all' || vehicle.category === activeFilter
  );

  return (
    <section id="vehicles" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-golden to-platinum bg-clip-text text-transparent">
            Our Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our curated selection of premium vehicles, each representing the pinnacle of 
            automotive excellence and engineering mastery.
          </p>
        </div>

        {/* Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-2 border border-golden/20">
            {['cars', 'bikes'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setActiveType(type);
                  setActiveFilter('all');
                }}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  activeType === type
                    ? 'bg-gradient-to-r from-golden to-platinum text-black'
                    : 'text-white hover:text-golden'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterOptions[activeType].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-golden text-black border-golden'
                  : 'text-golden border-golden/50 hover:bg-golden/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleSection;