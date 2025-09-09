import React, { useState } from 'react';
import { Map, MapPin, Compass, Globe } from 'lucide-react';

const AstroCartography = () => {
  const [selectedLine, setSelectedLine] = useState(null);

  const planetaryLines = [
    {
      planet: 'Sun',
      type: 'MC Line',
      location: 'New York, USA',
      influence: 'Career success, recognition, leadership opportunities',
      energy: 'Powerful',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      planet: 'Venus',
      type: 'AC Line',
      location: 'Paris, France',
      influence: 'Love, beauty, artistic inspiration, harmonious relationships',
      energy: 'Harmonious',
      color: 'from-pink-400 to-rose-500'
    },
    {
      planet: 'Jupiter',
      type: 'DC Line',
      location: 'Tokyo, Japan',
      influence: 'Expansion, good fortune, spiritual growth, abundance',
      energy: 'Beneficial',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      planet: 'Mars',
      type: 'IC Line',
      location: 'Sydney, Australia',
      influence: 'Energy, action, potential conflicts, assertiveness',
      energy: 'Dynamic',
      color: 'from-red-400 to-red-600'
    },
    {
      planet: 'Mercury',
      type: 'MC Line',
      location: 'London, UK',
      influence: 'Communication, learning, networking, mental stimulation',
      energy: 'Mental',
      color: 'from-green-400 to-emerald-500'
    },
    {
      planet: 'Moon',
      type: 'AC Line',
      location: 'Mumbai, India',
      influence: 'Emotional connections, intuition, family ties',
      energy: 'Emotional',
      color: 'from-blue-300 to-cyan-400'
    }
  ];

  const getEnergyColor = (energy) => {
    switch (energy) {
      case 'Powerful': return 'text-yellow-400';
      case 'Harmonious': return 'text-pink-400';
      case 'Beneficial': return 'text-blue-400';
      case 'Dynamic': return 'text-red-400';
      case 'Mental': return 'text-green-400';
      case 'Emotional': return 'text-cyan-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-purple-400" />
            Astro-Cartography
          </h1>
          <p className="text-purple-200 text-lg">Discover your power places around the world</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Map className="w-6 h-6" />
              Planetary Lines
            </h2>
            <div className="space-y-4">
              {planetaryLines.map((line, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedLine(line)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    selectedLine?.planet === line.planet && selectedLine?.type === line.type
                      ? 'bg-white/20 border-purple-400/50'
                      : 'bg-white/5 border-purple-400/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${line.color}`}></div>
                      <span className="text-white font-semibold">{line.planet} {line.type}</span>
                    </div>
                    <span className={`text-sm font-medium ${getEnergyColor(line.energy)}`}>
                      {line.energy}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200 text-sm">
                    <MapPin className="w-4 h-4" />
                    {line.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            {selectedLine ? (
              <div>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedLine.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedLine.planet} {selectedLine.type}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-purple-200">
                    <MapPin className="w-4 h-4" />
                    {selectedLine.location}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Energy Type</h4>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${getEnergyColor(selectedLine.energy)} bg-current/20`}>
                      {selectedLine.energy}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Influence</h4>
                    <p className="text-purple-100 leading-relaxed">{selectedLine.influence}</p>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Line Types</h4>
                    <div className="bg-purple-900/30 rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-purple-300">AC (Ascendant):</span>
                        <span className="text-purple-100">Personal identity</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">MC (Midheaven):</span>
                        <span className="text-purple-100">Career & reputation</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">DC (Descendant):</span>
                        <span className="text-purple-100">Relationships</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-purple-300">IC (Imum Coeli):</span>
                        <span className="text-purple-100">Home & roots</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-purple-200 py-16">
                <Compass className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Select a planetary line to explore its influence</p>
                <p className="text-sm mt-2 opacity-75">
                  Astro-cartography shows where planetary energies are strongest on Earth
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroCartography;