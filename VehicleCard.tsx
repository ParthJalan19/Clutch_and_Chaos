// VehicleCard.tsx

import React from 'react';
import {
  Gauge,
  Zap,
  Star,
  Calendar,
  Fuel,
  Weight,
  Settings,
} from 'lucide-react';

interface Vehicle {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  specs: {
    power: string;
    acceleration: string;
    topSpeed: string;
    engine: string;
    transmission: string;
    drivetrain: string;
    weight: string;
    fuelEconomy: string;
    year: string;
  };
  features: string[];
}

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, index }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 hover:shadow-xl"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image & Category */}
      <div className="relative overflow-hidden h-56">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-black/60 text-yellow-400 px-2 py-1 text-xs rounded font-semibold">
          {vehicle.category.toUpperCase()}
        </div>
        <div className="absolute top-3 right-3 bg-yellow-400 text-black px-2 py-1 text-xs rounded font-bold flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {vehicle.specs.year}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
          {vehicle.name}
        </h3>
        <p className="text-lg font-semibold text-yellow-400 my-2">{vehicle.price}</p>

        {/* Basic Specs */}
        <div className="text-sm text-gray-300 space-y-1 mb-4">
          <div className="flex items-center">
            <Zap className="w-4 h-4 mr-2 text-yellow-400" />
            {vehicle.specs.power}
          </div>
          <div className="flex items-center">
            <Gauge className="w-4 h-4 mr-2 text-yellow-400" />
            {vehicle.specs.acceleration}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            {vehicle.specs.topSpeed}
          </div>
        </div>

        {/* More Details Toggle */}
        {showDetails && (
          <div className="bg-black/30 border border-yellow-400/20 rounded-lg p-3 text-sm space-y-1 mb-4">
            <div className="flex items-center">
              <Settings className="w-3 h-3 mr-2 text-yellow-400" />
              <strong>Engine:</strong> <span className="ml-1">{vehicle.specs.engine}</span>
            </div>
            <div className="flex items-center">
              <Settings className="w-3 h-3 mr-2 text-yellow-400" />
              <strong>Transmission:</strong> <span className="ml-1">{vehicle.specs.transmission}</span>
            </div>
            <div className="flex items-center">
              <Weight className="w-3 h-3 mr-2 text-yellow-400" />
              <strong>Weight:</strong> <span className="ml-1">{vehicle.specs.weight}</span>
            </div>
            <div className="flex items-center">
              <Fuel className="w-3 h-3 mr-2 text-yellow-400" />
              <strong>Fuel Economy:</strong> <span className="ml-1">{vehicle.specs.fuelEconomy}</span>
            </div>

            <div className="mt-3">
              <h4 className="text-yellow-400 font-semibold mb-1">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {vehicle.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full border border-yellow-400 text-yellow-400 rounded py-2 text-sm font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <button className="w-full bg-yellow-400 text-black rounded py-2 text-sm font-bold hover:bg-yellow-300 transition-colors">
            Contact Dealer
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
