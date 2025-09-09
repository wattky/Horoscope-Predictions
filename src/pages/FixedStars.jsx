import React, { useState } from 'react';
import { Star, Sparkles, Eye, Crown } from 'lucide-react';

const FixedStars = () => {
  const [selectedStar, setSelectedStar] = useState(null);

  const fixedStars = [
    {
      name: 'Regulus',
      constellation: 'Leo',
      magnitude: 1.4,
      position: '29° Leo',
      nature: 'Mars/Jupiter',
      influence: 'Royal power, leadership, success, but potential for downfall if misused',
      keywords: ['Leadership', 'Success', 'Honor', 'Nobility'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      name: 'Spica',
      constellation: 'Virgo',
      magnitude: 1.0,
      position: '23° Libra',
      nature: 'Venus/Mercury',
      influence: 'Artistic gifts, scientific ability, protection, and good fortune',
      keywords: ['Creativity', 'Protection', 'Gifts', 'Fortune'],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Antares',
      constellation: 'Scorpius',
      magnitude: 1.1,
      position: '9° Sagittarius',
      nature: 'Mars/Jupiter',
      influence: 'Courage, military honors, but also rashness and destructive tendencies',
      keywords: ['Courage', 'Intensity', 'Passion', 'Conflict'],
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'Aldebaran',
      constellation: 'Taurus',
      magnitude: 0.9,
      position: '9° Gemini',
      nature: 'Mars',
      influence: 'Military honors, wealth, but success depends on integrity',
      keywords: ['Honor', 'Integrity', 'Wealth', 'Leadership'],
      color: 'from-orange-400 to-red-500'
    },
    {
      name: 'Sirius',
      constellation: 'Canis Major',
      magnitude: -1.5,
      position: '14° Cancer',
      nature: 'Jupiter/Mars',
      influence: 'Fame, honor, wealth, passion, and devotion',
      keywords: ['Fame', 'Passion', 'Devotion', 'Success'],
      color: 'from-white to-blue-300'
    },
    {
      name: 'Vega',
      constellation: 'Lyra',
      magnitude: 0.0,
      position: '15° Capricorn',
      nature: 'Venus/Mercury',
      influence: 'Artistic and musical abilities, charisma, but potential for excess',
      keywords: ['Music', 'Art', 'Charisma', 'Beauty'],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            Fixed Stars
          </h1>
          <p className="text-purple-200 text-lg">Ancient stellar influences in modern astrology</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Major Fixed Stars</h2>
            {fixedStars.map((star, index) => (
              <div
                key={index}
                onClick={() => setSelectedStar(star)}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 border cursor-pointer transition-all duration-300 hover:bg-white/15 ${
                  selectedStar?.name === star.name ? 'border-yellow-400/50 bg-white/15' : 'border-purple-400/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white">{star.name}</h3>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${star.color}`}></div>
                </div>
                <div className="flex items-center gap-4 text-sm text-purple-200">
                  <span>{star.constellation}</span>
                  <span>•</span>
                  <span>{star.position}</span>
                  <span>•</span>
                  <span>Mag {star.magnitude}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            {selectedStar ? (
              <div>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedStar.color} mx-auto mb-4 flex items-center justify-center`}>
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedStar.name}</h3>
                  <p className="text-purple-200">in {selectedStar.constellation}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Position & Nature
                    </h4>
                    <div className="bg-purple-900/30 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-purple-300">Position:</span>
                          <span className="text-white ml-2">{selectedStar.position}</span>
                        </div>
                        <div>
                          <span className="text-purple-300">Nature:</span>
                          <span className="text-white ml-2">{selectedStar.nature}</span>
                        </div>
                        <div>
                          <span className="text-purple-300">Magnitude:</span>
                          <span className="text-white ml-2">{selectedStar.magnitude}</span>
                        </div>
                        <div>
                          <span className="text-purple-300">Constellation:</span>
                          <span className="text-white ml-2">{selectedStar.constellation}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Influence
                    </h4>
                    <p className="text-purple-100 leading-relaxed">{selectedStar.influence}</p>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedStar.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-purple-200 py-16">
                <Eye className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Select a fixed star to learn about its influence</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedStars;