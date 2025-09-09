import React, { useState } from 'react';
import { Crown, Target, RefreshCw, Star, Users, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodiacModalities = () => {
  const [selectedModality, setSelectedModality] = useState('Cardinal');

  const modalities = {
    Cardinal: {
      name: 'Cardinal',
      icon: Crown,
      color: 'from-red-400 to-pink-600',
      textColor: 'text-red-400',
      signs: ['Aries', 'Cancer', 'Libra', 'Capricorn'],
      season: 'Beginning of seasons',
      traits: ['Leadership', 'Initiative', 'Ambition', 'Pioneer spirit', 'Goal-oriented', 'Decisive'],
      strengths: ['Natural leaders', 'Great at starting projects', 'Motivational', 'Visionary', 'Action-oriented'],
      challenges: ['May not finish what they start', 'Can be pushy', 'Impatient with details', 'Overwhelming to others'],
      description: 'Cardinal signs are the initiators of the zodiac, marking the beginning of each season with fresh energy and new directions.',
      loveStyle: 'Take charge in relationships, often making the first move. They like to lead and guide their partnerships.',
      careerStyle: 'Natural executives and entrepreneurs. Excel in leadership roles and starting new ventures.',
      lifeApproach: 'Direct and goal-focused. They see what needs to be done and take immediate action.',
      advice: 'Learn to delegate and follow through. Your initiation energy is powerful - use it wisely.',
      elementBreakdown: {
        'Aries': 'Cardinal Fire - The warrior leader',
        'Cancer': 'Cardinal Water - The nurturing protector', 
        'Libra': 'Cardinal Air - The diplomatic initiator',
        'Capricorn': 'Cardinal Earth - The ambitious achiever'
      }
    },
    Fixed: {
      name: 'Fixed',
      icon: Target,
      color: 'from-blue-400 to-purple-600',
      textColor: 'text-blue-400',
      signs: ['Taurus', 'Leo', 'Scorpio', 'Aquarius'],
      season: 'Middle of seasons',
      traits: ['Stability', 'Determination', 'Loyalty', 'Persistence', 'Strength', 'Reliability'],
      strengths: ['Incredible persistence', 'Loyal and dependable', 'Strong willpower', 'Consistent', 'Focused'],
      challenges: ['Stubbornness', 'Resistance to change', 'Inflexibility', 'Can be possessive', 'Rigid thinking'],
      description: 'Fixed signs are the stabilizers of the zodiac, providing strength, determination, and unwavering focus.',
      loveStyle: 'Deeply loyal and committed. They invest heavily in relationships and expect the same in return.',
      careerStyle: 'Excel in roles requiring consistency and follow-through. Great at maintaining and improving systems.',
      lifeApproach: 'Steady and determined. They build solid foundations and see projects through to completion.',
      advice: 'Embrace flexibility and openness to change. Your stability is a gift - share it without controlling.',
      elementBreakdown: {
        'Taurus': 'Fixed Earth - The steadfast builder',
        'Leo': 'Fixed Fire - The confident performer',
        'Scorpio': 'Fixed Water - The intense transformer',
        'Aquarius': 'Fixed Air - The revolutionary visionary'
      }
    },
    Mutable: {
      name: 'Mutable',
      icon: RefreshCw,
      color: 'from-green-400 to-cyan-600',
      textColor: 'text-green-400',
      signs: ['Gemini', 'Virgo', 'Sagittarius', 'Pisces'],
      season: 'End of seasons',
      traits: ['Adaptability', 'Flexibility', 'Versatility', 'Communication', 'Learning', 'Change'],
      strengths: ['Highly adaptable', 'Great communicators', 'Quick learners', 'Versatile', 'Open-minded'],
      challenges: ['Inconsistency', 'Scattered energy', 'Indecisiveness', 'Restlessness', 'Lack of focus'],
      description: 'Mutable signs are the adapters of the zodiac, bringing flexibility, communication, and the ability to navigate change.',
      loveStyle: 'Adaptable and communicative in relationships. They grow and evolve with their partners.',
      careerStyle: 'Thrive in dynamic environments with variety. Excel in roles requiring communication and adaptation.',
      lifeApproach: 'Flexible and open to change. They adjust their approach based on circumstances and new information.',
      advice: 'Focus your versatile energy. Your adaptability is powerful - use it to help others navigate change.',
      elementBreakdown: {
        'Gemini': 'Mutable Air - The curious communicator',
        'Virgo': 'Mutable Earth - The helpful perfectionist',
        'Sagittarius': 'Mutable Fire - The philosophical explorer',
        'Pisces': 'Mutable Water - The compassionate dreamer'
      }
    }
  };

  const currentModality = modalities[selectedModality];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-purple-400" />
            Zodiac Modalities
          </h1>
          <p className="text-purple-200 text-lg">How signs express their elemental energy</p>
        </div>

        {/* Modality Selector */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(modalities).map(([key, modality]) => (
              <button
                key={key}
                onClick={() => setSelectedModality(key)}
                className={`p-6 rounded-xl transition-all duration-300 border ${
                  selectedModality === key 
                    ? `bg-gradient-to-r ${modality.color} text-white border-white/50 scale-105` 
                    : 'bg-white/10 text-purple-200 border-purple-400/30 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  {React.createElement(modality.icon, { 
                    className: `w-8 h-8 mx-auto mb-3 ${selectedModality === key ? 'text-white' : modality.textColor}` 
                  })}
                  <h3 className="font-bold text-lg mb-2">{modality.name}</h3>
                  <p className="text-sm opacity-80 mb-3">{modality.season}</p>
                  <p className="text-xs opacity-70">{modality.signs.join(', ')}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Modality Details */}
        <div className="space-y-8">
          <div className={`bg-gradient-to-r ${currentModality.color}/20 backdrop-blur-lg rounded-2xl p-8 border border-current/30`}>
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentModality.color} flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(currentModality.icon, { className: 'w-10 h-10 text-white' })}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{currentModality.name} Signs</h2>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto">{currentModality.description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {currentModality.signs.map((sign) => (
                <Link
                  key={sign}
                  to={`/zodiac/${sign.toLowerCase()}`}
                  className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-white font-bold">{sign}</h3>
                  <p className="text-purple-200 text-sm mt-1">
                    {currentModality.elementBreakdown[sign]}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Modality Strengths
                </h3>
                <ul className="space-y-2">
                  {currentModality.strengths.map((strength, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-400" />
                  Growth Areas
                </h3>
                <ul className="space-y-2">
                  {currentModality.challenges.map((challenge, index) => (
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
                  {currentModality.traits.map((trait, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r ${currentModality.color}`}
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
                  Love Style
                </h3>
                <p className="text-purple-200">{currentModality.loveStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Career Approach
                </h3>
                <p className="text-purple-200">{currentModality.careerStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Life Approach</h3>
                <p className="text-purple-200">{currentModality.lifeApproach}</p>
              </div>

              <div className={`bg-gradient-to-r ${currentModality.color}/20 rounded-2xl p-6 border border-current/30`}>
                <h3 className="text-white font-bold mb-3">Modality Advice</h3>
                <p className="text-purple-100 italic">"{currentModality.advice}"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacModalities;