import React, { useState } from 'react';
import { Heart, Users, Star, TrendingUp } from 'lucide-react';

const CompatibilityMatrix = () => {
  const [selectedSign1, setSelectedSign1] = useState('');
  const [selectedSign2, setSelectedSign2] = useState('');
  const [compatibility, setCompatibility] = useState(null);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const compatibilityMatrix = {
    'Aries-Aries': { score: 85, type: 'Fiery Passion' },
    'Aries-Leo': { score: 95, type: 'Dynamic Duo' },
    'Aries-Sagittarius': { score: 90, type: 'Adventure Partners' },
    'Taurus-Virgo': { score: 88, type: 'Stable Foundation' },
    'Taurus-Capricorn': { score: 92, type: 'Power Couple' },
    'Gemini-Libra': { score: 87, type: 'Mental Connection' },
    'Gemini-Aquarius': { score: 89, type: 'Intellectual Bond' },
    'Cancer-Scorpio': { score: 94, type: 'Emotional Depth' },
    'Cancer-Pisces': { score: 91, type: 'Intuitive Union' },
    'Leo-Sagittarius': { score: 88, type: 'Joyful Journey' },
    'Virgo-Capricorn': { score: 90, type: 'Practical Partnership' },
    'Libra-Aquarius': { score: 86, type: 'Harmonious Vision' },
    'Scorpio-Pisces': { score: 93, type: 'Mystical Bond' }
  };

  const calculateCompatibility = () => {
    if (!selectedSign1 || !selectedSign2) return;

    const key1 = `${selectedSign1}-${selectedSign2}`;
    const key2 = `${selectedSign2}-${selectedSign1}`;
    
    let result = compatibilityMatrix[key1] || compatibilityMatrix[key2];
    
    if (!result) {
      // Generate random compatibility for unlisted combinations
      const score = Math.floor(Math.random() * 40) + 50; // 50-90 range
      const types = ['Challenging Growth', 'Learning Experience', 'Opposite Attraction', 'Karmic Connection'];
      result = {
        score,
        type: types[Math.floor(Math.random() * types.length)]
      };
    }

    setCompatibility({
      ...result,
      sign1: selectedSign1,
      sign2: selectedSign2,
      details: generateDetailedReading(selectedSign1, selectedSign2, result.score)
    });
  };

  const generateDetailedReading = (sign1, sign2, score) => {
    return {
      strengths: [
        'Complementary energies create balance',
        'Shared values in important life areas',
        'Natural understanding of each other\'s needs'
      ],
      challenges: [
        'Different communication styles may cause misunderstandings',
        'Varying approaches to conflict resolution',
        'Need to respect each other\'s independence'
      ],
      advice: [
        'Focus on open and honest communication',
        'Appreciate your differences as growth opportunities',
        'Create shared goals and experiences together'
      ]
    };
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreGradient = (score) => {
    if (score >= 90) return 'from-green-400 to-emerald-500';
    if (score >= 80) return 'from-yellow-400 to-orange-500';
    if (score >= 70) return 'from-orange-400 to-red-500';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-pink-400" />
            Compatibility Matrix
          </h1>
          <p className="text-purple-200 text-lg">Discover cosmic connections between zodiac signs</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Select Signs to Compare</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-purple-200 mb-2">First Sign</label>
              <select
                value={selectedSign1}
                onChange={(e) => setSelectedSign1(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
              >
                <option value="">Choose a sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign} className="bg-purple-900">{sign}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-purple-200 mb-2">Second Sign</label>
              <select
                value={selectedSign2}
                onChange={(e) => setSelectedSign2(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
              >
                <option value="">Choose a sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign} className="bg-purple-900">{sign}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={calculateCompatibility}
            disabled={!selectedSign1 || !selectedSign2}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate Compatibility
          </button>
        </div>

        {compatibility && (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-white">{compatibility.sign1}</span>
                  <Heart className="w-8 h-8 text-pink-400" />
                  <span className="text-2xl font-bold text-white">{compatibility.sign2}</span>
                </div>
                <div className={`text-6xl font-bold mb-2 ${getScoreColor(compatibility.score)}`}>
                  {compatibility.score}%
                </div>
                <div className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${getScoreGradient(compatibility.score)}`}>
                  {compatibility.type}
                </div>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3 mb-6">
                <div
                  className={`h-3 rounded-full bg-gradient-to-r ${getScoreGradient(compatibility.score)} transition-all duration-1000`}
                  style={{ width: `${compatibility.score}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {compatibility.details.strengths.map((strength, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <Star className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-400" />
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {compatibility.details.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <Star className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Relationship Advice
                </h3>
                <ul className="space-y-2">
                  {compatibility.details.advice.map((advice, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <Star className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      {advice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!compatibility && (
          <div className="text-center text-purple-200 py-16">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select two zodiac signs to explore their compatibility</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompatibilityMatrix;