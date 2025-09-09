import React, { useState } from 'react';
import { Hand, Eye, Heart, Brain, Zap } from 'lucide-react';

const HandReading = () => {
  const [selectedHand, setSelectedHand] = useState('right');
  const [analysis, setAnalysis] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);

  const palmLines = {
    heart: {
      name: 'Heart Line',
      icon: Heart,
      color: 'text-pink-400',
      meaning: 'Emotions, relationships, and matters of the heart',
      readings: [
        'Deep, clear line: Strong emotional nature, passionate relationships',
        'Curved upward: Optimistic in love, expressive emotions',
        'Straight across: Practical approach to relationships',
        'Broken or chained: Emotional challenges, multiple relationships'
      ]
    },
    head: {
      name: 'Head Line',
      icon: Brain,
      color: 'text-blue-400',
      meaning: 'Intelligence, thinking patterns, and mental approach',
      readings: [
        'Long, clear line: Strong intellect, good concentration',
        'Curved downward: Creative, imaginative thinking',
        'Straight across: Logical, practical mindset',
        'Short line: Prefers physical over mental activities'
      ]
    },
    life: {
      name: 'Life Line',
      icon: Zap,
      color: 'text-green-400',
      meaning: 'Vitality, life force, and major life changes',
      readings: [
        'Long, deep line: Strong vitality, robust health',
        'Curves around thumb: Energetic, loves adventure',
        'Close to thumb: Cautious, prefers familiar surroundings',
        'Breaks in line: Major life changes or health challenges'
      ]
    },
    fate: {
      name: 'Fate Line',
      icon: Eye,
      color: 'text-purple-400',
      meaning: 'Career, destiny, and life direction',
      readings: [
        'Strong, clear line: Clear life direction, strong destiny',
        'Starts from life line: Self-made success',
        'Starts from wrist: Early clarity about life path',
        'Absent or weak: Creates own destiny, less bound by fate'
      ]
    }
  };

  const analyzeHand = () => {
    const handAnalysis = {
      handShape: ['Earth', 'Air', 'Fire', 'Water'][Math.floor(Math.random() * 4)],
      dominantMount: ['Venus', 'Jupiter', 'Saturn', 'Apollo', 'Mercury', 'Mars', 'Luna'][Math.floor(Math.random() * 7)],
      fingerLength: ['Long', 'Medium', 'Short'][Math.floor(Math.random() * 3)],
      thumbStrength: ['Strong', 'Medium', 'Weak'][Math.floor(Math.random() * 3)],
      overallReading: 'Your palm reveals a creative and intuitive nature with strong leadership potential.'
    };
    setAnalysis(handAnalysis);
  };

  const getShapeDescription = (shape) => {
    const descriptions = {
      Earth: 'Square palm, short fingers - Practical, reliable, grounded',
      Air: 'Square palm, long fingers - Intellectual, communicative, social',
      Fire: 'Rectangular palm, short fingers - Energetic, passionate, impulsive',
      Water: 'Rectangular palm, long fingers - Emotional, intuitive, sensitive'
    };
    return descriptions[shape] || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Hand className="w-8 h-8 text-purple-400" />
            Palm Reading
          </h1>
          <p className="text-purple-200 text-lg">Discover your destiny in the lines of your hands</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Hand Analysis</h2>
            
            <div className="mb-6">
              <label className="block text-purple-200 mb-3">Select Hand</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedHand('left')}
                  className={`flex-1 p-3 rounded-lg transition-all duration-300 ${
                    selectedHand === 'left' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/20 text-purple-200 hover:bg-white/30'
                  }`}
                >
                  Left Hand (Past)
                </button>
                <button
                  onClick={() => setSelectedHand('right')}
                  className={`flex-1 p-3 rounded-lg transition-all duration-300 ${
                    selectedHand === 'right' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/20 text-purple-200 hover:bg-white/30'
                  }`}
                >
                  Right Hand (Future)
                </button>
              </div>
            </div>

            <div className="relative mb-6">
              <div className="w-48 h-64 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-full rounded-b-lg relative overflow-hidden">
                {/* Palm lines visualization */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 256">
                  <path
                    d="M30 80 Q60 70 120 85"
                    stroke="#8B4513"
                    strokeWidth="2"
                    fill="none"
                    className="cursor-pointer hover:stroke-pink-500"
                    onClick={() => setSelectedLine('heart')}
                  />
                  <path
                    d="M25 110 Q80 100 140 115"
                    stroke="#8B4513"
                    strokeWidth="2"
                    fill="none"
                    className="cursor-pointer hover:stroke-blue-500"
                    onClick={() => setSelectedLine('head')}
                  />
                  <path
                    d="M40 140 Q50 180 60 220"
                    stroke="#8B4513"
                    strokeWidth="2"
                    fill="none"
                    className="cursor-pointer hover:stroke-green-500"
                    onClick={() => setSelectedLine('life')}
                  />
                  <path
                    d="M96 140 L96 220"
                    stroke="#8B4513"
                    strokeWidth="1.5"
                    fill="none"
                    className="cursor-pointer hover:stroke-purple-500"
                    onClick={() => setSelectedLine('fate')}
                  />
                </svg>
              </div>
              <p className="text-center text-purple-200 text-sm mt-2">
                Click on the lines to learn their meanings
              </p>
            </div>

            <button
              onClick={analyzeHand}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Analyze {selectedHand === 'left' ? 'Left' : 'Right'} Hand
            </button>
          </div>

          <div className="space-y-6">
            {selectedLine && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <div className="flex items-center gap-3 mb-4">
                  {React.createElement(palmLines[selectedLine].icon, {
                    className: `w-6 h-6 ${palmLines[selectedLine].color}`
                  })}
                  <h3 className="text-xl font-semibold text-white">{palmLines[selectedLine].name}</h3>
                </div>
                <p className="text-purple-200 mb-4">{palmLines[selectedLine].meaning}</p>
                <div className="space-y-2">
                  {palmLines[selectedLine].readings.map((reading, index) => (
                    <div key={index} className="text-sm text-purple-100 bg-purple-900/30 rounded-lg p-3">
                      {reading}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {analysis && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-semibold text-white mb-4">Hand Analysis Results</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Hand Shape</h4>
                    <p className="text-white font-semibold">{analysis.handShape}</p>
                    <p className="text-purple-200 text-sm">{getShapeDescription(analysis.handShape)}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Dominant Mount</h4>
                    <p className="text-white font-semibold">Mount of {analysis.dominantMount}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Finger Length</h4>
                    <p className="text-white font-semibold">{analysis.fingerLength}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-300 font-medium mb-2">Thumb Strength</h4>
                    <p className="text-white font-semibold">{analysis.thumbStrength}</p>
                  </div>
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <h4 className="text-purple-300 font-medium mb-2">Overall Reading</h4>
                    <p className="text-purple-100">{analysis.overallReading}</p>
                  </div>
                </div>
              </div>
            )}

            {!selectedLine && !analysis && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
                <Hand className="w-16 h-16 mx-auto mb-4 text-purple-400 opacity-50" />
                <p className="text-purple-200">Click on palm lines or analyze your hand to see readings</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandReading;