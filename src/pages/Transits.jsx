import React, { useState, useEffect } from 'react';
import { Orbit, TrendingUp, AlertCircle, Calendar } from 'lucide-react';

const Transits = () => {
  const [currentTransits, setCurrentTransits] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState('all');

  useEffect(() => {
    // Simulated current transits
    setCurrentTransits([
      {
        planet: 'Jupiter',
        aspect: 'Trine',
        natalPlanet: 'Sun',
        influence: 'Expansion and growth in personal identity',
        intensity: 'High',
        duration: '2 weeks',
        color: 'from-yellow-400 to-orange-500'
      },
      {
        planet: 'Saturn',
        aspect: 'Square',
        natalPlanet: 'Moon',
        influence: 'Emotional challenges and restructuring',
        intensity: 'Medium',
        duration: '1 month',
        color: 'from-gray-400 to-gray-600'
      },
      {
        planet: 'Venus',
        aspect: 'Conjunction',
        natalPlanet: 'Venus',
        influence: 'Enhanced love and beauty in relationships',
        intensity: 'High',
        duration: '3 days',
        color: 'from-pink-400 to-rose-500'
      },
      {
        planet: 'Mars',
        aspect: 'Opposition',
        natalPlanet: 'Mercury',
        influence: 'Communication conflicts and mental tension',
        intensity: 'Medium',
        duration: '1 week',
        color: 'from-red-400 to-red-600'
      }
    ]);
  }, []);

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Orbit className="w-8 h-8 text-purple-400" />
            Current Transits
          </h1>
          <p className="text-purple-200 text-lg">Planetary influences affecting you now</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setSelectedPlanet('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedPlanet === 'all' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/20 text-purple-200 hover:bg-white/30'
              }`}
            >
              All Planets
            </button>
            {['Jupiter', 'Saturn', 'Venus', 'Mars', 'Mercury'].map((planet) => (
              <button
                key={planet}
                onClick={() => setSelectedPlanet(planet)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedPlanet === planet 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30'
                }`}
              >
                {planet}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {currentTransits
            .filter(transit => selectedPlanet === 'all' || transit.planet === selectedPlanet)
            .map((transit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${transit.color}`}></div>
                  <h3 className="text-xl font-semibold text-white">
                    {transit.planet} {transit.aspect} {transit.natalPlanet}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className={`w-4 h-4 ${getIntensityColor(transit.intensity)}`} />
                  <span className={`text-sm font-medium ${getIntensityColor(transit.intensity)}`}>
                    {transit.intensity}
                  </span>
                </div>
              </div>
              
              <p className="text-purple-200 mb-4">{transit.influence}</p>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar className="w-4 h-4" />
                  Duration: {transit.duration}
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <AlertCircle className="w-4 h-4" />
                  Active Transit
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transits;