import React from 'react';
import { Heart, Star, Users, Lightbulb } from 'lucide-react';

const MatchExplanation = () => {
  const compatibilityFactors = [
    {
      factor: 'Sun Sign Compatibility',
      weight: '25%',
      description: 'Core personality traits and ego compatibility',
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      factor: 'Moon Sign Harmony',
      weight: '30%',
      description: 'Emotional needs and instinctive responses',
      icon: Heart,
      color: 'text-blue-400'
    },
    {
      factor: 'Venus-Mars Dynamics',
      weight: '20%',
      description: 'Romantic and sexual attraction patterns',
      icon: Heart,
      color: 'text-pink-400'
    },
    {
      factor: 'Mercury Communication',
      weight: '15%',
      description: 'How you communicate and understand each other',
      icon: Users,
      color: 'text-green-400'
    },
    {
      factor: 'Rising Sign Attraction',
      weight: '10%',
      description: 'First impressions and surface compatibility',
      icon: Lightbulb,
      color: 'text-purple-400'
    }
  ];

  const elementCompatibility = [
    {
      element: 'Fire Signs',
      signs: ['Aries', 'Leo', 'Sagittarius'],
      bestWith: 'Air Signs',
      traits: 'Passionate, energetic, spontaneous',
      color: 'from-red-400 to-orange-500'
    },
    {
      element: 'Earth Signs',
      signs: ['Taurus', 'Virgo', 'Capricorn'],
      bestWith: 'Water Signs',
      traits: 'Practical, stable, grounded',
      color: 'from-green-400 to-emerald-500'
    },
    {
      element: 'Air Signs',
      signs: ['Gemini', 'Libra', 'Aquarius'],
      bestWith: 'Fire Signs',
      traits: 'Intellectual, communicative, social',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      element: 'Water Signs',
      signs: ['Cancer', 'Scorpio', 'Pisces'],
      bestWith: 'Earth Signs',
      traits: 'Emotional, intuitive, empathetic',
      color: 'from-blue-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-yellow-400" />
            How Compatibility Works
          </h1>
          <p className="text-purple-200 text-lg">Understanding the science behind cosmic connections</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Compatibility Factors</h2>
            <div className="space-y-4">
              {compatibilityFactors.map((factor, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-purple-400/20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {React.createElement(factor.icon, {
                        className: `w-5 h-5 ${factor.color}`
                      })}
                      <span className="text-white font-semibold">{factor.factor}</span>
                    </div>
                    <span className="text-purple-300 text-sm font-medium">{factor.weight}</span>
                  </div>
                  <p className="text-purple-200 text-sm">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Element Compatibility</h2>
            <div className="space-y-4">
              {elementCompatibility.map((element, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-4 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${element.color}`}></div>
                    <span className="text-white font-semibold">{element.element}</span>
                  </div>
                  <div className="text-sm space-y-2">
                    <div>
                      <span className="text-purple-300">Signs: </span>
                      <span className="text-purple-200">{element.signs.join(', ')}</span>
                    </div>
                    <div>
                      <span className="text-purple-300">Best with: </span>
                      <span className="text-purple-200">{element.bestWith}</span>
                    </div>
                    <div>
                      <span className="text-purple-300">Traits: </span>
                      <span className="text-purple-200">{element.traits}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Compatibility Scoring System</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">90+</span>
              </div>
              <h3 className="text-green-400 font-semibold mb-2">Excellent</h3>
              <p className="text-purple-200 text-sm">Natural harmony, deep understanding, strong potential</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">80+</span>
              </div>
              <h3 className="text-yellow-400 font-semibold mb-2">Very Good</h3>
              <p className="text-purple-200 text-sm">Strong compatibility with minor adjustments needed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">70+</span>
              </div>
              <h3 className="text-orange-400 font-semibold mb-2">Good</h3>
              <p className="text-purple-200 text-sm">Workable relationship with effort and understanding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">60+</span>
              </div>
              <h3 className="text-red-400 font-semibold mb-2">Challenging</h3>
              <p className="text-purple-200 text-sm">Requires significant work and compromise</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Understanding Your Results</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-4">What High Compatibility Means</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>• Natural understanding and communication</li>
                <li>• Shared values and life goals</li>
                <li>• Complementary strengths and weaknesses</li>
                <li>• Easy resolution of conflicts</li>
                <li>• Strong emotional and physical attraction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Working with Challenges</h3>
              <ul className="space-y-2 text-purple-200 text-sm">
                <li>• Different perspectives can create growth</li>
                <li>• Patience and understanding are key</li>
                <li>• Focus on common ground and shared interests</li>
                <li>• Appreciate what each person brings to the relationship</li>
                <li>• Communication and compromise are essential</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchExplanation;