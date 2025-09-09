import React, { useState } from 'react';
import { RotateCcw, TrendingUp, Calendar, Star } from 'lucide-react';

const Progressions = () => {
  const [progressions, setProgressions] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const generateProgressions = () => {
    const progressionData = [
      {
        planet: 'Progressed Sun',
        currentSign: 'Virgo',
        nextSign: 'Libra',
        timeToChange: '3 years',
        influence: 'Focus on service, health, and perfectionism',
        significance: 'Major life theme shift approaching'
      },
      {
        planet: 'Progressed Moon',
        currentSign: 'Gemini',
        nextSign: 'Cancer',
        timeToChange: '8 months',
        influence: 'Intellectual curiosity and communication focus',
        significance: 'Emotional needs evolving'
      },
      {
        planet: 'Progressed Mercury',
        currentSign: 'Libra',
        nextSign: 'Scorpio',
        timeToChange: '1.5 years',
        influence: 'Diplomatic thinking and relationship focus',
        significance: 'Communication style deepening'
      },
      {
        planet: 'Progressed Venus',
        currentSign: 'Scorpio',
        nextSign: 'Sagittarius',
        timeToChange: '6 months',
        influence: 'Intense, transformative relationships',
        significance: 'Love style expanding'
      }
    ];
    setProgressions(progressionData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <RotateCcw className="w-8 h-8 text-purple-400" />
            Secondary Progressions
          </h1>
          <p className="text-purple-200 text-lg">Your evolving astrological influences</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <label className="text-purple-200">Progression Year:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="p-2 rounded-lg bg-white/20 text-white border border-purple-400/30"
              >
                {Array.from({length: 10}, (_, i) => (
                  <option key={i} value={new Date().getFullYear() + i - 5}>
                    {new Date().getFullYear() + i - 5}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={generateProgressions}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Calculate Progressions
            </button>
          </div>
        </div>

        {progressions.length > 0 && (
          <div className="grid gap-6">
            {progressions.map((progression, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{progression.planet}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-purple-200">Current: {progression.currentSign}</span>
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-200">Next: {progression.nextSign}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-yellow-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {progression.timeToChange}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-1">Current Influence:</h4>
                    <p className="text-purple-100">{progression.influence}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-1">Significance:</h4>
                    <p className="text-purple-100">{progression.significance}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {progressions.length === 0 && (
          <div className="text-center text-purple-200 py-16">
            <Star className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Click "Calculate Progressions" to see your evolving astrological influences</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Progressions;