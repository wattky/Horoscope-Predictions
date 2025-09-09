import React, { useState } from 'react';
import { Sun, Moon, Zap, Heart, Users, Star, TrendingUp, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodiacPolarities = () => {
  const [selectedPolarity, setSelectedPolarity] = useState('Positive');

  const polarities = {
    Positive: {
      name: 'Positive (Yang)',
      icon: Sun,
      color: 'from-yellow-400 to-orange-600',
      textColor: 'text-yellow-400',
      signs: ['Aries', 'Gemini', 'Leo', 'Libra', 'Sagittarius', 'Aquarius'],
      elements: ['Fire', 'Air'],
      traits: ['Outgoing', 'Assertive', 'Active', 'Expressive', 'Direct', 'Confident'],
      strengths: ['Natural leadership', 'High energy', 'Social confidence', 'Initiative', 'Optimism'],
      challenges: ['Can be overwhelming', 'May dominate others', 'Impatience', 'Restlessness', 'Burnout'],
      description: 'Positive signs are outwardly focused, expressing energy actively and directly into the world.',
      energy: 'Outward, active, assertive, masculine energy that seeks to influence and shape the external world.',
      loveStyle: 'Direct and expressive in love. They pursue what they want and aren\'t afraid to make the first move.',
      careerStyle: 'Thrive in leadership roles and competitive environments. Excel at networking and self-promotion.',
      lifeApproach: 'Action-oriented and goal-focused. They believe in making things happen through direct effort.',
      balanceWith: 'Negative signs provide grounding, reflection, and emotional depth.',
      advice: 'Balance your outward energy with introspection. Listen as much as you speak.'
    },
    Negative: {
      name: 'Negative (Yin)',
      icon: Moon,
      color: 'from-blue-400 to-purple-600',
      textColor: 'text-blue-400',
      signs: ['Taurus', 'Cancer', 'Virgo', 'Scorpio', 'Capricorn', 'Pisces'],
      elements: ['Earth', 'Water'],
      traits: ['Receptive', 'Reflective', 'Intuitive', 'Nurturing', 'Thoughtful', 'Introspective'],
      strengths: ['Deep wisdom', 'Emotional intelligence', 'Patience', 'Stability', 'Intuition'],
      challenges: ['May be too passive', 'Overthinking', 'Moodiness', 'Resistance to action', 'Withdrawal'],
      description: 'Negative signs are inwardly focused, drawing energy from within and responding to external stimuli.',
      energy: 'Inward, receptive, reflective, feminine energy that seeks to understand and nurture.',
      loveStyle: 'Deep and nurturing in love. They create safe spaces and respond to their partner\'s needs.',
      careerStyle: 'Excel in supportive roles and behind-the-scenes work. Great at analysis and careful planning.',
      lifeApproach: 'Thoughtful and reflective. They prefer to understand situations fully before taking action.',
      balanceWith: 'Positive signs provide energy, initiative, and outward expression.',
      advice: 'Trust your intuition and don\'t be afraid to take action. Your wisdom needs expression.'
    }
  };

  const oppositeSignPairs = [
    { sign1: 'Aries', sign2: 'Libra', theme: 'Self vs. Others', description: 'Individual action vs. partnership harmony' },
    { sign1: 'Taurus', sign2: 'Scorpio', theme: 'Security vs. Transformation', description: 'Stability vs. deep change' },
    { sign1: 'Gemini', sign2: 'Sagittarius', theme: 'Information vs. Wisdom', description: 'Facts vs. meaning' },
    { sign1: 'Cancer', sign2: 'Capricorn', theme: 'Emotion vs. Structure', description: 'Feeling vs. achievement' },
    { sign1: 'Leo', sign2: 'Aquarius', theme: 'Individual vs. Collective', description: 'Personal expression vs. group innovation' },
    { sign1: 'Virgo', sign2: 'Pisces', theme: 'Analysis vs. Intuition', description: 'Logic vs. imagination' }
  ];

  const currentPolarity = polarities[selectedPolarity];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-purple-400" />
            Zodiac Polarities
          </h1>
          <p className="text-purple-200 text-lg">Understanding Yang and Yin energies in astrology</p>
        </div>

        {/* Polarity Selector */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(polarities).map(([key, polarity]) => (
              <button
                key={key}
                onClick={() => setSelectedPolarity(key)}
                className={`p-6 rounded-xl transition-all duration-300 border ${
                  selectedPolarity === key 
                    ? `bg-gradient-to-r ${polarity.color} text-white border-white/50 scale-105` 
                    : 'bg-white/10 text-purple-200 border-purple-400/30 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  {React.createElement(polarity.icon, { 
                    className: `w-12 h-12 mx-auto mb-4 ${selectedPolarity === key ? 'text-white' : polarity.textColor}` 
                  })}
                  <h3 className="font-bold text-xl mb-2">{polarity.name}</h3>
                  <p className="text-sm opacity-80 mb-3">{polarity.elements.join(' & ')} Elements</p>
                  <p className="text-xs opacity-70">{polarity.signs.join(', ')}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Polarity Details */}
        <div className="space-y-8">
          <div className={`bg-gradient-to-r ${currentPolarity.color}/20 backdrop-blur-lg rounded-2xl p-8 border border-current/30`}>
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentPolarity.color} flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(currentPolarity.icon, { className: 'w-10 h-10 text-white' })}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{currentPolarity.name} Energy</h2>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-6">{currentPolarity.description}</p>
              <p className="text-purple-200 max-w-3xl mx-auto">{currentPolarity.energy}</p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {currentPolarity.signs.map((sign) => (
                <Link
                  key={sign}
                  to={`/zodiac/${sign.toLowerCase()}`}
                  className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-white font-bold">{sign}</h3>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Polarity Strengths
                </h3>
                <ul className="space-y-2">
                  {currentPolarity.strengths.map((strength, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-400" />
                  Growth Areas
                </h3>
                <ul className="space-y-2">
                  {currentPolarity.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Core Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {currentPolarity.traits.map((trait, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r ${currentPolarity.color}`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Love & Relationships
                </h3>
                <p className="text-purple-200">{currentPolarity.loveStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Career Approach
                </h3>
                <p className="text-purple-200">{currentPolarity.careerStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Life Philosophy</h3>
                <p className="text-purple-200">{currentPolarity.lifeApproach}</p>
              </div>

              <div className={`bg-gradient-to-r ${currentPolarity.color}/20 rounded-2xl p-6 border border-current/30`}>
                <h3 className="text-white font-bold mb-3">Polarity Wisdom</h3>
                <p className="text-purple-100 italic">"{currentPolarity.advice}"</p>
              </div>
            </div>
          </div>

          {/* Opposite Sign Pairs */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Opposite Sign Dynamics</h2>
            <p className="text-purple-200 text-center mb-8">
              Each sign has an opposite that provides balance and growth opportunities
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oppositeSignPairs.map((pair, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-purple-400/20">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-4 mb-3">
                      <Link 
                        to={`/zodiac/${pair.sign1.toLowerCase()}`}
                        className="text-lg font-bold text-white hover:text-yellow-400 transition-colors"
                      >
                        {pair.sign1}
                      </Link>
                      <Heart className="w-5 h-5 text-pink-400" />
                      <Link 
                        to={`/zodiac/${pair.sign2.toLowerCase()}`}
                        className="text-lg font-bold text-white hover:text-yellow-400 transition-colors"
                      >
                        {pair.sign2}
                      </Link>
                    </div>
                    <h3 className="text-purple-300 font-semibold">{pair.theme}</h3>
                  </div>
                  <p className="text-purple-200 text-sm text-center">{pair.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacPolarities;