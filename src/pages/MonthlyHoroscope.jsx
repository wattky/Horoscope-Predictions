import React, { useState } from 'react';
import { Calendar, Star, Moon, Sun, TrendingUp } from 'lucide-react';

const MonthlyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [monthlyReading, setMonthlyReading] = useState(null);
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const generateMonthlyReading = () => {
    if (!selectedSign) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const reading = {
        overview: "This month marks a significant turning point in your cosmic journey. The planetary alignments are creating powerful opportunities for transformation and growth across all areas of your life.",
        keyWeeks: [
          { week: 'Week 1', focus: 'New Beginnings', description: 'Fresh starts and new opportunities emerge' },
          { week: 'Week 2', focus: 'Building Momentum', description: 'Progress accelerates on important projects' },
          { week: 'Week 3', focus: 'Challenges & Growth', description: 'Navigate obstacles with wisdom' },
          { week: 'Week 4', focus: 'Integration', description: 'Consolidate gains and plan ahead' }
        ],
        moonPhases: [
          { phase: 'New Moon', date: '5th', influence: 'Perfect for setting intentions and starting fresh' },
          { phase: 'Full Moon', date: '19th', influence: 'Emotional revelations and completion of cycles' }
        ],
        planetaryEvents: [
          'Mercury enters your communication sector mid-month',
          'Venus brings harmony to relationships after the 15th',
          'Mars energizes your career zone in the final week'
        ],
        loveLife: "Romance takes center stage this month with Venus blessing your relationships. Single? Expect meaningful connections. Coupled? Deepen your bond through shared experiences.",
        careerMoney: "Professional opportunities multiply, especially after the full moon. Financial planning becomes crucial as new income streams may emerge.",
        healthWellness: "Focus on balance and moderation. Your energy levels fluctuate, so listen to your body's needs and prioritize rest when necessary.",
        spiritualGrowth: "A powerful month for spiritual development. Meditation, journaling, and connecting with nature will provide profound insights.",
        luckyDates: [7, 14, 21, 28],
        challengingDates: [12, 25],
        overallRating: Math.floor(Math.random() * 3) + 8 // 8-10
      };
      
      setMonthlyReading(reading);
      setLoading(false);
    }, 2500);
  };

  const getCurrentMonth = () => {
    return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
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
            <Calendar className="w-8 h-8 text-purple-400" />
            Monthly Horoscope
          </h1>
          <p className="text-purple-200 text-lg">Your complete cosmic guide for {getCurrentMonth()}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Select Your Zodiac Sign</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign}
                onClick={() => setSelectedSign(sign)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedSign === sign 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white scale-105' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30 hover:scale-105'
                }`}
              >
                <Star className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{sign}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={generateMonthlyReading}
            disabled={!selectedSign || loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Channeling cosmic wisdom...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                Get Monthly Forecast
              </>
            )}
          </button>
        </div>

        {monthlyReading && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedSign} - {getCurrentMonth()}
              </h2>
              <div className={`text-4xl font-bold mb-4 ${getRatingColor(monthlyReading.overallRating)}`}>
                {monthlyReading.overallRating}/10
              </div>
              <p className="text-purple-200">Overall Month Rating</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4 text-center">Monthly Overview</h3>
              <p className="text-purple-100 text-lg leading-relaxed text-center">
                {monthlyReading.overview}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    Weekly Breakdown
                  </h3>
                  <div className="space-y-4">
                    {monthlyReading.keyWeeks.map((week, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">{week.week}</span>
                          <span className="text-blue-400 text-sm">{week.focus}</span>
                        </div>
                        <p className="text-purple-200 text-sm">{week.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Moon className="w-5 h-5 text-cyan-400" />
                    Moon Phases
                  </h3>
                  <div className="space-y-3">
                    {monthlyReading.moonPhases.map((moon, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-semibold">{moon.phase}</span>
                          <span className="text-cyan-400 text-sm">{moon.date}</span>
                        </div>
                        <p className="text-purple-200 text-sm">{moon.influence}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Key Areas of Focus
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Love & Relationships</h4>
                      <p className="text-purple-100 text-sm">{monthlyReading.loveLife}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Career & Money</h4>
                      <p className="text-purple-100 text-sm">{monthlyReading.careerMoney}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Health & Wellness</h4>
                      <p className="text-purple-100 text-sm">{monthlyReading.healthWellness}</p>
                    </div>
                    <div>
                      <h4 className="text-purple-300 font-medium mb-2">Spiritual Growth</h4>
                      <p className="text-purple-100 text-sm">{monthlyReading.spiritualGrowth}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Important Dates</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-green-400 font-medium mb-2">Lucky Dates</h4>
                      <div className="flex gap-2">
                        {monthlyReading.luckyDates.map((date, index) => (
                          <span key={index} className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Challenging Dates</h4>
                      <div className="flex gap-2">
                        {monthlyReading.challengingDates.map((date, index) => (
                          <span key={index} className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Planetary Events This Month</h3>
              <ul className="space-y-2">
                {monthlyReading.planetaryEvents.map((event, index) => (
                  <li key={index} className="text-purple-200 flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!monthlyReading && !loading && (
          <div className="text-center text-purple-200 py-16">
            <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select your zodiac sign to receive your detailed monthly forecast</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyHoroscope;