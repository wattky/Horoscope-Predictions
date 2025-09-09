import React, { useState } from 'react';
import { Calendar, Star, TrendingUp, Target, Crown } from 'lucide-react';

const YearlyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [yearlyReading, setYearlyReading] = useState(null);
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const generateYearlyReading = () => {
    if (!selectedSign) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const reading = {
        yearTheme: "The Year of Cosmic Transformation",
        overview: "2025 promises to be a year of profound transformation and growth for you. The cosmic energies are aligning to support your highest aspirations and deepest desires for change.",
        keyMonths: [
          { month: 'March', theme: 'New Beginnings', description: 'Major life changes begin to unfold' },
          { month: 'June', theme: 'Expansion', description: 'Opportunities for growth and advancement' },
          { month: 'September', theme: 'Harvest', description: 'Reap the rewards of your hard work' },
          { month: 'December', theme: 'Reflection', description: 'Integration and planning for the future' }
        ],
        majorTransits: [
          'Jupiter brings expansion to your career sector (May-October)',
          'Saturn teaches valuable lessons about responsibility (All year)',
          'Uranus shakes up your routine in surprising ways (August-November)'
        ],
        challenges: [
          'Learning to balance ambition with personal relationships',
          'Navigating unexpected changes with grace and flexibility',
          'Managing increased responsibilities and opportunities'
        ],
        opportunities: [
          'Significant career advancement or new professional direction',
          'Deepening of important relationships and partnerships',
          'Spiritual awakening and personal transformation',
          'Financial growth through wise investments and planning'
        ],
        loveYear: "Love takes on new meaning this year. Whether single or partnered, you'll discover deeper levels of intimacy and connection. The second half of the year is especially favorable for commitments.",
        careerYear: "Your professional life undergoes a major evolution. New skills, responsibilities, or even career changes are likely. Trust your instincts and embrace leadership opportunities.",
        healthYear: "Focus on building sustainable wellness habits. The first quarter emphasizes physical health, while the latter half highlights mental and emotional well-being.",
        spiritualYear: "A profound spiritual awakening awaits. Ancient wisdom and modern insights combine to guide your path. Meditation and introspection become powerful tools for growth.",
        overallRating: Math.floor(Math.random() * 2) + 9, // 9-10
        luckyColors: ['Deep Purple', 'Golden Yellow', 'Emerald Green'],
        powerNumbers: [3, 7, 11, 21, 33]
      };
      
      setYearlyReading(reading);
      setLoading(false);
    }, 3000);
  };

  const getRatingColor = (rating) => {
    if (rating >= 9) return 'text-green-400';
    if (rating >= 8) return 'text-yellow-400';
    return 'text-orange-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Crown className="w-8 h-8 text-yellow-400" />
            2025 Yearly Horoscope
          </h1>
          <p className="text-purple-200 text-lg">Your complete cosmic blueprint for the year ahead</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Choose Your Zodiac Sign</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign}
                onClick={() => setSelectedSign(sign)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedSign === sign 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white scale-105' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30 hover:scale-105'
                }`}
              >
                <Star className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{sign}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={generateYearlyReading}
            disabled={!selectedSign || loading}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Consulting the cosmic archives...
              </>
            ) : (
              <>
                <Crown className="w-5 h-5" />
                Reveal My 2025 Destiny
              </>
            )}
          </button>
        </div>

        {yearlyReading && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-8 border border-yellow-400/30">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedSign} 2025: {yearlyReading.yearTheme}
                </h2>
                <div className={`text-5xl font-bold mb-4 ${getRatingColor(yearlyReading.overallRating)}`}>
                  {yearlyReading.overallRating}/10
                </div>
                <p className="text-yellow-200">Cosmic Potential Rating</p>
              </div>
              <p className="text-purple-100 text-lg leading-relaxed text-center">
                {yearlyReading.overview}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    Key Months of 2025
                  </h3>
                  <div className="space-y-4">
                    {yearlyReading.keyMonths.map((month, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">{month.month}</span>
                          <span className="text-blue-400 text-sm">{month.theme}</span>
                        </div>
                        <p className="text-purple-200 text-sm">{month.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-red-400" />
                    Challenges to Overcome
                  </h3>
                  <ul className="space-y-2">
                    {yearlyReading.challenges.map((challenge, index) => (
                      <li key={index} className="text-purple-200 flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Major Opportunities
                  </h3>
                  <ul className="space-y-2">
                    {yearlyReading.opportunities.map((opportunity, index) => (
                      <li key={index} className="text-purple-200 flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Power Elements</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Lucky Colors</h4>
                      <div className="flex gap-2">
                        {yearlyReading.luckyColors.map((color, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Power Numbers</h4>
                      <div className="flex gap-2">
                        {yearlyReading.powerNumbers.map((number, index) => (
                          <span key={index} className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {number}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Major Planetary Transits</h3>
                <ul className="space-y-2">
                  {yearlyReading.majorTransits.map((transit, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5" />
                      {transit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Love & Relationships 2025</h4>
                  <p className="text-purple-200 text-sm">{yearlyReading.loveYear}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Career & Success 2025</h4>
                  <p className="text-purple-200 text-sm">{yearlyReading.careerYear}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!yearlyReading && !loading && (
          <div className="text-center text-purple-200 py-16">
            <Crown className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select your zodiac sign to unlock your complete 2025 cosmic forecast</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YearlyHoroscope;