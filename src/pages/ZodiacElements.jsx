import React, { useState } from 'react';
import { Flame, Mountain, Wind, Waves, Heart, Users, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodiacElements = () => {
  const [selectedElement, setSelectedElement] = useState('Fire');

  const elements = {
    Fire: {
      name: 'Fire',
      icon: Flame,
      color: 'from-red-400 to-orange-600',
      textColor: 'text-red-400',
      signs: ['Aries', 'Leo', 'Sagittarius'],
      traits: ['Passionate', 'Energetic', 'Spontaneous', 'Confident', 'Inspiring', 'Dynamic'],
      strengths: ['Natural leadership', 'High energy', 'Enthusiasm', 'Courage', 'Initiative'],
      challenges: ['Impatience', 'Impulsiveness', 'Aggression', 'Burnout', 'Selfishness'],
      description: 'Fire signs are the initiators of the zodiac, bringing passion, energy, and inspiration wherever they go.',
      loveStyle: 'Passionate and direct, Fire signs love with intensity and excitement. They need partners who can match their energy.',
      careerStyle: 'Natural leaders who thrive in competitive environments. They excel in roles requiring quick decisions and innovation.',
      healthStyle: 'High energy that needs regular outlet. Benefit from intense physical activities and need to manage stress.',
      compatibleWith: ['Air'],
      challengingWith: ['Water'],
      neutralWith: ['Earth'],
      elementAdvice: 'Channel your fiery energy constructively. Practice patience and consider others\' feelings.'
    },
    Earth: {
      name: 'Earth',
      icon: Mountain,
      color: 'from-green-400 to-emerald-600',
      textColor: 'text-green-400',
      signs: ['Taurus', 'Virgo', 'Capricorn'],
      traits: ['Practical', 'Reliable', 'Grounded', 'Patient', 'Hardworking', 'Stable'],
      strengths: ['Dependability', 'Practical wisdom', 'Persistence', 'Organization', 'Loyalty'],
      challenges: ['Stubbornness', 'Materialism', 'Resistance to change', 'Pessimism', 'Rigidity'],
      description: 'Earth signs are the builders of the zodiac, creating stability, security, and tangible results.',
      loveStyle: 'Steady and loyal, Earth signs show love through actions and creating security. They value long-term commitment.',
      careerStyle: 'Excel in structured environments with clear goals. Prefer steady growth over risky ventures.',
      healthStyle: 'Benefit from routine and consistency. Need regular exercise to avoid stagnation.',
      compatibleWith: ['Water'],
      challengingWith: ['Air'],
      neutralWith: ['Fire'],
      elementAdvice: 'Embrace change and flexibility. Allow yourself to dream beyond practical limitations.'
    },
    Air: {
      name: 'Air',
      icon: Wind,
      color: 'from-cyan-400 to-blue-600',
      textColor: 'text-cyan-400',
      signs: ['Gemini', 'Libra', 'Aquarius'],
      traits: ['Intellectual', 'Communicative', 'Social', 'Objective', 'Innovative', 'Curious'],
      strengths: ['Communication skills', 'Adaptability', 'Intelligence', 'Social awareness', 'Innovation'],
      challenges: ['Detachment', 'Inconsistency', 'Superficiality', 'Indecision', 'Restlessness'],
      description: 'Air signs are the communicators of the zodiac, bringing ideas, connections, and fresh perspectives.',
      loveStyle: 'Mental connection is key. Air signs need intellectual stimulation and freedom in relationships.',
      careerStyle: 'Thrive in communication-based roles. Excel in networking, teaching, and collaborative environments.',
      healthStyle: 'Need mental stimulation and social interaction. Benefit from activities that engage the mind.',
      compatibleWith: ['Fire'],
      challengingWith: ['Earth'],
      neutralWith: ['Water'],
      elementAdvice: 'Ground your ideas in practical action. Develop emotional depth and consistency.'
    },
    Water: {
      name: 'Water',
      icon: Waves,
      color: 'from-blue-400 to-purple-600',
      textColor: 'text-blue-400',
      signs: ['Cancer', 'Scorpio', 'Pisces'],
      traits: ['Emotional', 'Intuitive', 'Empathetic', 'Nurturing', 'Psychic', 'Compassionate'],
      strengths: ['Emotional intelligence', 'Intuition', 'Empathy', 'Healing abilities', 'Creativity'],
      challenges: ['Moodiness', 'Oversensitivity', 'Escapism', 'Manipulation', 'Victim mentality'],
      description: 'Water signs are the healers of the zodiac, bringing emotional depth, intuition, and compassion.',
      loveStyle: 'Deep emotional connection is essential. Water signs love with their whole heart and seek soul bonds.',
      careerStyle: 'Excel in helping professions and creative fields. Thrive in emotionally supportive environments.',
      healthStyle: 'Emotional well-being affects physical health. Need outlets for emotional expression.',
      compatibleWith: ['Earth'],
      challengingWith: ['Fire'],
      neutralWith: ['Air'],
      elementAdvice: 'Develop healthy boundaries. Balance emotional sensitivity with practical action.'
    }
  };

  const currentElement = elements[selectedElement];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            Zodiac Elements
          </h1>
          <p className="text-purple-200 text-lg">Understanding the four fundamental energies</p>
        </div>

        {/* Element Selector */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(elements).map(([key, element]) => (
              <button
                key={key}
                onClick={() => setSelectedElement(key)}
                className={`p-4 rounded-xl transition-all duration-300 border ${
                  selectedElement === key 
                    ? `bg-gradient-to-r ${element.color} text-white border-white/50 scale-105` 
                    : 'bg-white/10 text-purple-200 border-purple-400/30 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  {React.createElement(element.icon, { 
                    className: `w-8 h-8 mx-auto mb-2 ${selectedElement === key ? 'text-white' : element.textColor}` 
                  })}
                  <h3 className="font-semibold">{element.name}</h3>
                  <p className="text-xs opacity-80 mt-1">{element.signs.join(', ')}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Element Details */}
        <div className="space-y-8">
          <div className={`bg-gradient-to-r ${currentElement.color}/20 backdrop-blur-lg rounded-2xl p-8 border border-current/30`}>
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${currentElement.color} flex items-center justify-center mx-auto mb-4`}>
                {React.createElement(currentElement.icon, { className: 'w-10 h-10 text-white' })}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{currentElement.name} Element</h2>
              <p className="text-purple-100 text-lg max-w-2xl mx-auto">{currentElement.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {currentElement.signs.map((sign) => (
                <Link
                  key={sign}
                  to={`/zodiac/${sign.toLowerCase()}`}
                  className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-white font-bold text-lg">{sign}</h3>
                  <p className="text-purple-200 text-sm">Explore {sign} traits</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Element Strengths
                </h3>
                <ul className="space-y-2">
                  {currentElement.strengths.map((strength, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-orange-400" />
                  Growth Areas
                </h3>
                <ul className="space-y-2">
                  {currentElement.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Element Compatibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-600/20 rounded-lg">
                    <span className="text-green-200">Most Compatible:</span>
                    <span className="text-white font-semibold">{currentElement.compatibleWith.join(', ')} Signs</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-600/20 rounded-lg">
                    <span className="text-orange-200">Challenging:</span>
                    <span className="text-white font-semibold">{currentElement.challengingWith.join(', ')} Signs</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-600/20 rounded-lg">
                    <span className="text-gray-200">Neutral:</span>
                    <span className="text-white font-semibold">{currentElement.neutralWith.join(', ')} Signs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-400" />
                  Love & Relationships
                </h3>
                <p className="text-purple-200">{currentElement.loveStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Career Approach
                </h3>
                <p className="text-purple-200">{currentElement.careerStyle}</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Health & Wellness</h3>
                <p className="text-purple-200">{currentElement.healthStyle}</p>
              </div>

              <div className={`bg-gradient-to-r ${currentElement.color}/20 rounded-2xl p-6 border border-current/30`}>
                <h3 className="text-white font-bold mb-3">Element Advice</h3>
                <p className="text-purple-100 italic">"{currentElement.elementAdvice}"</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Core Element Traits</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {currentElement.traits.map((trait, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${currentElement.color}`}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacElements;