import React, { useState } from 'react';
import { Calendar, Star, TrendingUp, Moon } from 'lucide-react';

const WeeklyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [weeklyReading, setWeeklyReading] = useState(null);
  const [loading, setLoading] = useState(false);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const generateWeeklyReading = () => {
    if (!selectedSign) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const reading = {
        overview: "This week brings a powerful shift in cosmic energy that will influence your personal growth and relationships. The stars are aligning to support your ambitions, but patience and strategic thinking will be your greatest allies.",
        keyDays: [
          { day: 'Monday', energy: 'New beginnings', advice: 'Start important projects' },
          { day: 'Wednesday', energy: 'Communication', advice: 'Have important conversations' },
          { day: 'Friday', energy: 'Love & creativity', advice: 'Express your feelings' },
          { day: 'Sunday', energy: 'Reflection', advice: 'Plan for next week' }
        ],
        themes: ['Personal Growth', 'Relationship Harmony', 'Career Advancement', 'Spiritual Awakening'],
        challenges: 'Mid-week may bring communication challenges. Stay patient and listen carefully.',
        opportunities: 'Weekend presents excellent opportunities for romance and creative expression.',
        moonPhase: 'Waxing Gibbous',
        planetaryHighlight: 'Venus in your favor'
      };
      
      setWeeklyReading(reading);
      setLoading(false);
    }, 2000);
  };

  const getWeekDates = () => {
    const today = new Date();
    const monday = new Date(today);
    monday.setDate(today.getDate() - today.getDay() + 1);
    
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    
    return {
      start: monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      end: sunday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    };
  };

  const weekDates = getWeekDates();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-blue-400" />
            Weekly Horoscope
          </h1>
          <p className="text-purple-200 text-lg">Your cosmic forecast for the week</p>
          <p className="text-purple-300 text-sm mt-2">{weekDates.start} - {weekDates.end}</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Choose Your Sign</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            {zodiacSigns.map((sign) => (
              <button
                key={sign}
                onClick={() => setSelectedSign(sign)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedSign === sign 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-105' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30 hover:scale-105'
                }`}
              >
                <Star className="w-6 h-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{sign}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={generateWeeklyReading}
            disabled={!selectedSign || loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Consulting the cosmos...
              </>
            ) : (
              <>
                <Calendar className="w-5 h-5" />
                Get Weekly Forecast
              </>
            )}
          </button>
        </div>

        {weeklyReading && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                {selectedSign} Weekly Overview
              </h2>
              <p className="text-purple-100 text-lg leading-relaxed text-center mb-6">
                {weeklyReading.overview}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <h4 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    Moon Phase
                  </h4>
                  <p className="text-white">{weeklyReading.moonPhase}</p>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <h4 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Planetary Highlight
                  </h4>
                  <p className="text-white">{weeklyReading.planetaryHighlight}</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Key Days This Week
                </h3>
                <div className="space-y-4">
                  {weeklyReading.keyDays.map((day, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{day.day}</span>
                        <span className="text-blue-400 text-sm">{day.energy}</span>
                      </div>
                      <p className="text-purple-200 text-sm">{day.advice}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Weekly Themes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {weeklyReading.themes.map((theme, index) => (
                      <span key={index} className="px-3 py-1 bg-green-600/50 text-green-200 rounded-full text-sm">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Challenges to Navigate</h3>
                  <p className="text-orange-200 text-sm">{weeklyReading.challenges}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Opportunities to Embrace</h3>
                  <p className="text-green-200 text-sm">{weeklyReading.opportunities}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {!weeklyReading && !loading && (
          <div className="text-center text-purple-200 py-16">
            <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select your zodiac sign to receive your weekly cosmic forecast</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklyHoroscope;