import React, { useState } from 'react';
import { Circle, Star, MapPin, Calendar, Clock } from 'lucide-react';

const NatalChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateChart = () => {
    setLoading(true);
    setTimeout(() => {
      setChartData({
        houses: Array.from({length: 12}, (_, i) => ({
          number: i + 1,
          sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][Math.floor(Math.random() * 12)],
          degree: Math.floor(Math.random() * 30)
        })),
        planets: [
          { name: 'Sun', sign: 'Leo', house: 5, degree: 15 },
          { name: 'Moon', sign: 'Cancer', house: 4, degree: 22 },
          { name: 'Mercury', sign: 'Virgo', house: 6, degree: 8 },
          { name: 'Venus', sign: 'Libra', house: 7, degree: 12 },
          { name: 'Mars', sign: 'Aries', house: 1, degree: 28 }
        ]
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Circle className="w-8 h-8 text-purple-400" />
            Natal Chart Generator
          </h1>
          <p className="text-purple-200 text-lg">Your complete astrological blueprint</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Birth Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <input
                  type="date"
                  className="flex-1 p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                />
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-400" />
                <input
                  type="time"
                  className="flex-1 p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                />
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Birth location"
                  className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
                />
              </div>
            </div>
            <button
              onClick={generateChart}
              disabled={loading}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Generating Chart...' : 'Generate Natal Chart'}
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            {loading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-400"></div>
              </div>
            ) : chartData ? (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Your Natal Chart</h3>
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-400/50"></div>
                  <div className="absolute inset-4 rounded-full border-2 border-pink-400/50"></div>
                  <div className="absolute inset-8 rounded-full border border-yellow-400/50"></div>
                  {chartData.planets.map((planet, index) => (
                    <div
                      key={planet.name}
                      className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                      style={{
                        top: `${50 + 35 * Math.cos((index * 72) * Math.PI / 180)}%`,
                        left: `${50 + 35 * Math.sin((index * 72) * Math.PI / 180)}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={planet.name}
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  {chartData.planets.map((planet) => (
                    <div key={planet.name} className="flex justify-between items-center text-sm">
                      <span className="text-purple-200">{planet.name}</span>
                      <span className="text-white">{planet.sign} {planet.degree}°</span>
                      <span className="text-purple-300">House {planet.house}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-purple-200 py-16">
                <Star className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Enter your birth details to generate your natal chart</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatalChart;