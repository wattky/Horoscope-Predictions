import React, { useState } from 'react';
import { Sun, Star, Heart, DollarSign, Activity, Sparkles } from 'lucide-react';

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    { name: 'Aries', dates: 'Mar 21 - Apr 19', element: 'Fire', color: 'from-red-400 to-red-600' },
    { name: 'Taurus', dates: 'Apr 20 - May 20', element: 'Earth', color: 'from-green-400 to-green-600' },
    { name: 'Gemini', dates: 'May 21 - Jun 20', element: 'Air', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Cancer', dates: 'Jun 21 - Jul 22', element: 'Water', color: 'from-blue-400 to-blue-600' },
    { name: 'Leo', dates: 'Jul 23 - Aug 22', element: 'Fire', color: 'from-orange-400 to-orange-600' },
    { name: 'Virgo', dates: 'Aug 23 - Sep 22', element: 'Earth', color: 'from-green-500 to-green-700' },
    { name: 'Libra', dates: 'Sep 23 - Oct 22', element: 'Air', color: 'from-pink-400 to-pink-600' },
    { name: 'Scorpio', dates: 'Oct 23 - Nov 21', element: 'Water', color: 'from-red-600 to-red-800' },
    { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', element: 'Fire', color: 'from-purple-400 to-purple-600' },
    { name: 'Capricorn', dates: 'Dec 22 - Jan 19', element: 'Earth', color: 'from-gray-400 to-gray-600' },
    { name: 'Aquarius', dates: 'Jan 20 - Feb 18', element: 'Air', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Pisces', dates: 'Feb 19 - Mar 20', element: 'Water', color: 'from-blue-500 to-blue-700' }
  ];

  const generateHoroscope = async () => {
    if (!selectedSign) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const horoscopeData = {
        general: "Today brings powerful cosmic energy that aligns perfectly with your natural strengths. The universe is conspiring to help you achieve your goals, but you'll need to take decisive action to make the most of these opportunities.",
        love: "Venus is highlighting your romantic sector, bringing unexpected encounters and deepening existing connections. Single? Keep your heart open to new possibilities. Coupled? Express your feelings more openly.",
        career: "Your professional life is about to take an exciting turn. A project you've been working on may finally gain recognition. Trust your instincts when making important decisions.",
        money: "Financial opportunities are flowing your way, but careful planning is essential. Avoid impulsive purchases and focus on long-term investments that align with your values.",
        health: "Your energy levels are high, making this an excellent time for physical activities. Pay attention to your body's signals and maintain a balanced approach to wellness.",
        luckyNumbers: [7, 14, 23, 31, 42],
        luckyColor: 'Deep Purple',
        mood: 'Optimistic and Energetic',
        compatibility: zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)].name
      };
      
      setHoroscope(horoscopeData);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sun className="w-8 h-8 text-yellow-400" />
            Daily Horoscope
          </h1>
          <p className="text-purple-200 text-lg">Discover what the stars have in store for you today</p>
          <p className="text-purple-300 text-sm mt-2">{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Select Your Zodiac Sign</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setSelectedSign(sign.name)}
                className={`p-4 rounded-xl transition-all duration-300 border ${
                  selectedSign === sign.name 
                    ? `bg-gradient-to-r ${sign.color} text-white border-white/50 scale-105` 
                    : 'bg-white/10 text-purple-200 border-purple-400/30 hover:bg-white/20 hover:scale-105'
                }`}
              >
                <div className="text-center">
                  <Star className="w-6 h-6 mx-auto mb-2" />
                  <h3 className="font-semibold">{sign.name}</h3>
                  <p className="text-xs opacity-80">{sign.dates}</p>
                  <p className="text-xs opacity-60">{sign.element}</p>
                </div>
              </button>
            ))}
          </div>
          
          <button
            onClick={generateHoroscope}
            disabled={!selectedSign || loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Reading the stars...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Get My Daily Reading
              </>
            )}
          </button>
        </div>

        {horoscope && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Your {selectedSign} Daily Reading
              </h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <p className="text-purple-200 text-sm">Lucky Color</p>
                  <p className="text-white font-semibold">{horoscope.luckyColor}</p>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <p className="text-purple-200 text-sm">Mood</p>
                  <p className="text-white font-semibold">{horoscope.mood}</p>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <p className="text-purple-200 text-sm">Best Match Today</p>
                  <p className="text-white font-semibold">{horoscope.compatibility}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    General Forecast
                  </h3>
                  <p className="text-purple-100 leading-relaxed">{horoscope.general}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" />
                    Love & Relationships
                  </h3>
                  <p className="text-purple-100 leading-relaxed">{horoscope.love}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-400" />
                    Health & Wellness
                  </h3>
                  <p className="text-purple-100 leading-relaxed">{horoscope.health}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-blue-400" />
                    Career & Work
                  </h3>
                  <p className="text-purple-100 leading-relaxed">{horoscope.career}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    Money & Finance
                  </h3>
                  <p className="text-purple-100 leading-relaxed">{horoscope.money}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Lucky Numbers
                  </h3>
                  <div className="flex gap-3 justify-center">
                    {horoscope.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!horoscope && !loading && (
          <div className="text-center text-purple-200 py-16">
            <Sun className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select your zodiac sign to receive your personalized daily horoscope</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyHoroscope;