import React, { useState } from 'react';
import { Star, Flame, Mountain, Wind, Waves, Crown, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodiacOverview = () => {
  const [selectedElement, setSelectedElement] = useState('all');
  const [selectedModality, setSelectedModality] = useState('all');

  const zodiacSigns = [
    {
      name: 'Aries',
      symbol: '♈',
      dates: 'Mar 21 - Apr 19',
      element: 'Fire',
      modality: 'Cardinal',
      polarity: 'Positive',
      ruler: 'Mars',
      traits: ['Leadership', 'Courage', 'Initiative'],
      color: 'from-red-400 to-red-600',
      description: 'The pioneering ram, first to charge into new adventures'
    },
    {
      name: 'Taurus',
      symbol: '♉',
      dates: 'Apr 20 - May 20',
      element: 'Earth',
      modality: 'Fixed',
      polarity: 'Negative',
      ruler: 'Venus',
      traits: ['Stability', 'Sensuality', 'Determination'],
      color: 'from-green-400 to-green-600',
      description: 'The steadfast bull, grounded in beauty and comfort'
    },
    {
      name: 'Gemini',
      symbol: '♊',
      dates: 'May 21 - Jun 20',
      element: 'Air',
      modality: 'Mutable',
      polarity: 'Positive',
      ruler: 'Mercury',
      traits: ['Communication', 'Adaptability', 'Curiosity'],
      color: 'from-yellow-400 to-yellow-600',
      description: 'The versatile twins, masters of communication and change'
    },
    {
      name: 'Cancer',
      symbol: '♋',
      dates: 'Jun 21 - Jul 22',
      element: 'Water',
      modality: 'Cardinal',
      polarity: 'Negative',
      ruler: 'Moon',
      traits: ['Nurturing', 'Intuition', 'Protection'],
      color: 'from-blue-400 to-blue-600',
      description: 'The caring crab, protective of home and family'
    },
    {
      name: 'Leo',
      symbol: '♌',
      dates: 'Jul 23 - Aug 22',
      element: 'Fire',
      modality: 'Fixed',
      polarity: 'Positive',
      ruler: 'Sun',
      traits: ['Confidence', 'Creativity', 'Generosity'],
      color: 'from-orange-400 to-orange-600',
      description: 'The regal lion, born to shine and lead with heart'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      dates: 'Aug 23 - Sep 22',
      element: 'Earth',
      modality: 'Mutable',
      polarity: 'Negative',
      ruler: 'Mercury',
      traits: ['Precision', 'Service', 'Analysis'],
      color: 'from-green-500 to-green-700',
      description: 'The meticulous maiden, perfecting life through service'
    },
    {
      name: 'Libra',
      symbol: '♎',
      dates: 'Sep 23 - Oct 22',
      element: 'Air',
      modality: 'Cardinal',
      polarity: 'Positive',
      ruler: 'Venus',
      traits: ['Balance', 'Harmony', 'Justice'],
      color: 'from-pink-400 to-pink-600',
      description: 'The balanced scales, seeking harmony and beauty'
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      dates: 'Oct 23 - Nov 21',
      element: 'Water',
      modality: 'Fixed',
      polarity: 'Negative',
      ruler: 'Pluto',
      traits: ['Intensity', 'Transformation', 'Mystery'],
      color: 'from-red-600 to-red-800',
      description: 'The mysterious scorpion, master of transformation'
    },
    {
      name: 'Sagittarius',
      symbol: '♐',
      dates: 'Nov 22 - Dec 21',
      element: 'Fire',
      modality: 'Mutable',
      polarity: 'Positive',
      ruler: 'Jupiter',
      traits: ['Adventure', 'Philosophy', 'Freedom'],
      color: 'from-purple-400 to-purple-600',
      description: 'The adventurous archer, seeking truth and wisdom'
    },
    {
      name: 'Capricorn',
      symbol: '♑',
      dates: 'Dec 22 - Jan 19',
      element: 'Earth',
      modality: 'Cardinal',
      polarity: 'Negative',
      ruler: 'Saturn',
      traits: ['Ambition', 'Discipline', 'Achievement'],
      color: 'from-gray-400 to-gray-600',
      description: 'The ambitious goat, climbing to the peaks of success'
    },
    {
      name: 'Aquarius',
      symbol: '♒',
      dates: 'Jan 20 - Feb 18',
      element: 'Air',
      modality: 'Fixed',
      polarity: 'Positive',
      ruler: 'Uranus',
      traits: ['Innovation', 'Humanity', 'Independence'],
      color: 'from-cyan-400 to-cyan-600',
      description: 'The visionary water-bearer, pouring forth innovation'
    },
    {
      name: 'Pisces',
      symbol: '♓',
      dates: 'Feb 19 - Mar 20',
      element: 'Water',
      modality: 'Mutable',
      polarity: 'Negative',
      ruler: 'Neptune',
      traits: ['Compassion', 'Intuition', 'Creativity'],
      color: 'from-blue-500 to-blue-700',
      description: 'The mystical fish, swimming in oceans of imagination'
    }
  ];

  const elements = [
    { name: 'Fire', icon: Flame, color: 'text-red-400', signs: ['Aries', 'Leo', 'Sagittarius'] },
    { name: 'Earth', icon: Mountain, color: 'text-green-400', signs: ['Taurus', 'Virgo', 'Capricorn'] },
    { name: 'Air', icon: Wind, color: 'text-cyan-400', signs: ['Gemini', 'Libra', 'Aquarius'] },
    { name: 'Water', icon: Waves, color: 'text-blue-400', signs: ['Cancer', 'Scorpio', 'Pisces'] }
  ];

  const modalities = [
    { name: 'Cardinal', signs: ['Aries', 'Cancer', 'Libra', 'Capricorn'], description: 'Initiators and leaders' },
    { name: 'Fixed', signs: ['Taurus', 'Leo', 'Scorpio', 'Aquarius'], description: 'Stabilizers and maintainers' },
    { name: 'Mutable', signs: ['Gemini', 'Virgo', 'Sagittarius', 'Pisces'], description: 'Adapters and transformers' }
  ];

  const filteredSigns = zodiacSigns.filter(sign => {
    const elementMatch = selectedElement === 'all' || sign.element === selectedElement;
    const modalityMatch = selectedModality === 'all' || sign.modality === selectedModality;
    return elementMatch && modalityMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Star className="w-10 h-10 text-yellow-400" />
            The Zodiac Universe
          </h1>
          <p className="text-purple-200 text-xl max-w-3xl mx-auto">
            Explore the cosmic personalities that shape our world. Each sign carries unique energies, 
            gifts, and lessons that influence how we love, work, and grow.
          </p>
        </div>

        {/* Element Filter */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore by Element & Modality</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-purple-300 font-semibold mb-4">Filter by Element</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedElement('all')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedElement === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/20 text-purple-200 hover:bg-white/30'
                  }`}
                >
                  All Elements
                </button>
                {elements.map((element) => (
                  <button
                    key={element.name}
                    onClick={() => setSelectedElement(element.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedElement === element.name 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-200 hover:bg-white/30'
                    }`}
                  >
                    {React.createElement(element.icon, { className: `w-4 h-4 ${element.color}` })}
                    {element.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-purple-300 font-semibold mb-4">Filter by Modality</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedModality('all')}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedModality === 'all' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/20 text-purple-200 hover:bg-white/30'
                  }`}
                >
                  All Modalities
                </button>
                {modalities.map((modality) => (
                  <button
                    key={modality.name}
                    onClick={() => setSelectedModality(modality.name)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedModality === modality.name 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-200 hover:bg-white/30'
                    }`}
                  >
                    {modality.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Zodiac Signs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredSigns.map((sign, index) => (
            <Link
              key={sign.name}
              to={`/zodiac/${sign.name.toLowerCase()}`}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${sign.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-3xl font-bold">{sign.symbol}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{sign.name}</h3>
                <p className="text-purple-300 text-sm mb-3">{sign.dates}</p>
                <p className="text-purple-200 text-sm mb-4 italic">{sign.description}</p>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Element:</span>
                    <span className="text-white font-semibold">{sign.element}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Modality:</span>
                    <span className="text-white font-semibold">{sign.modality}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-300">Ruler:</span>
                    <span className="text-white font-semibold">{sign.ruler}</span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-purple-400/30">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {sign.traits.map((trait, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded-full text-xs">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Element Overview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Four Elements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elements.map((element) => (
              <div key={element.name} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {React.createElement(element.icon, { className: `w-8 h-8 ${element.color}` })}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{element.name} Signs</h3>
                <div className="space-y-2">
                  {element.signs.map((sign) => (
                    <Link
                      key={sign}
                      to={`/zodiac/${sign.toLowerCase()}`}
                      className="block p-2 bg-white/5 rounded-lg text-purple-200 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {sign}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modality Overview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Three Modalities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {modalities.map((modality) => (
              <div key={modality.name} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{modality.name}</h3>
                <p className="text-purple-300 text-sm mb-4">{modality.description}</p>
                <div className="space-y-2">
                  {modality.signs.map((sign) => (
                    <Link
                      key={sign}
                      to={`/zodiac/${sign.toLowerCase()}`}
                      className="block p-2 bg-white/5 rounded-lg text-purple-200 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {sign}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Explore Deeper</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              to="/zodiac-elements"
              className="p-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl text-center hover:from-red-600/30 hover:to-orange-600/30 transition-all duration-300 border border-red-400/30"
            >
              <Flame className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Element Compatibility</h3>
              <p className="text-red-200 text-sm">Fire, Earth, Air, Water dynamics</p>
            </Link>
            
            <Link
              to="/zodiac-modalities"
              className="p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl text-center hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 border border-purple-400/30"
            >
              <Crown className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Modality Dynamics</h3>
              <p className="text-purple-200 text-sm">Cardinal, Fixed, Mutable energies</p>
            </Link>
            
            <Link
              to="/zodiac-polarities"
              className="p-6 bg-gradient-to-r from-yellow-600/20 to-pink-600/20 rounded-xl text-center hover:from-yellow-600/30 hover:to-pink-600/30 transition-all duration-300 border border-yellow-400/30"
            >
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Sign Polarities</h3>
              <p className="text-yellow-200 text-sm">Positive & Negative energies</p>
            </Link>
            
            <Link
              to="/zodiac-traits"
              className="p-6 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-xl text-center hover:from-green-600/30 hover:to-teal-600/30 transition-all duration-300 border border-green-400/30"
            >
              <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Traits Database</h3>
              <p className="text-green-200 text-sm">Comprehensive characteristics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacOverview;