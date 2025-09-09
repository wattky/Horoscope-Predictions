import React, { useState } from 'react';
import { Heart, Zap, Star, Users, Sparkles } from 'lucide-react';

const InstantMatch = () => {
  const [userSign, setUserSign] = useState('');
  const [matches, setMatches] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const generateMatches = () => {
    if (!userSign) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      const potentialMatches = [
        {
          name: 'Luna StarGazer',
          sign: 'Pisces',
          age: 28,
          compatibility: 94,
          distance: '2.3 miles',
          interests: ['Meditation', 'Crystals', 'Moon rituals'],
          bio: 'Spiritual soul seeking deep cosmic connections ✨',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Alex Cosmic',
          sign: 'Scorpio',
          age: 32,
          compatibility: 89,
          distance: '4.7 miles',
          interests: ['Astrology', 'Tarot', 'Psychology'],
          bio: 'Passionate about understanding the mysteries of life 🔮',
          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Maya Moonbeam',
          sign: 'Cancer',
          age: 26,
          compatibility: 87,
          distance: '1.8 miles',
          interests: ['Yoga', 'Herbalism', 'Dream work'],
          bio: 'Nurturing spirit with a love for lunar magic 🌙',
          image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'River Phoenix',
          sign: 'Aquarius',
          age: 30,
          compatibility: 82,
          distance: '6.2 miles',
          interests: ['Innovation', 'Humanitarian work', 'Future tech'],
          bio: 'Visionary seeking to change the world through love 💫',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ];
      
      setMatches(potentialMatches);
      setIsSearching(false);
    }, 2000);
  };

  const getCompatibilityColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    if (score >= 70) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSignColor = (sign) => {
    const colors = {
      'Aries': 'text-red-400', 'Taurus': 'text-green-400', 'Gemini': 'text-yellow-400',
      'Cancer': 'text-blue-400', 'Leo': 'text-orange-400', 'Virgo': 'text-green-500',
      'Libra': 'text-pink-400', 'Scorpio': 'text-red-600', 'Sagittarius': 'text-purple-400',
      'Capricorn': 'text-gray-400', 'Aquarius': 'text-cyan-400', 'Pisces': 'text-blue-500'
    };
    return colors[sign] || 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-yellow-400" />
            Instant Cosmic Match
          </h1>
          <p className="text-purple-200 text-lg">Find your perfect cosmic connection</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">What's Your Sign?</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign}
                onClick={() => setUserSign(sign)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  userSign === sign 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30 hover:scale-105'
                }`}
              >
                <div className="text-center">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <span className="text-sm font-medium">{sign}</span>
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={generateMatches}
            disabled={!userSign || isSearching}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSearching ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Searching the cosmos...
              </>
            ) : (
              <>
                <Heart className="w-5 h-5" />
                Find My Cosmic Matches
              </>
            )}
          </button>
        </div>

        {matches.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white text-center mb-6">Your Cosmic Matches</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {matches.map((match, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <img
                      src={match.image}
                      alt={match.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-purple-400/50"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{match.name}</h3>
                        <div className={`text-2xl font-bold ${getCompatibilityColor(match.compatibility)}`}>
                          {match.compatibility}%
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-purple-200 mb-3">
                        <span className={getSignColor(match.sign)}>{match.sign}</span>
                        <span>•</span>
                        <span>{match.age} years old</span>
                        <span>•</span>
                        <span>{match.distance} away</span>
                      </div>
                      <p className="text-purple-100 mb-3">{match.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.interests.map((interest, i) => (
                          <span key={i} className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded-full text-xs">
                            {interest}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300">
                          Connect
                        </button>
                        <button className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all duration-300">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {matches.length === 0 && !isSearching && (
          <div className="text-center text-purple-200 py-16">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select your zodiac sign to find your cosmic matches</p>
            <p className="text-sm mt-2 opacity-75">
              Our algorithm considers sun signs, elements, and cosmic compatibility
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstantMatch;