import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Star, Zap, Clock, Gem, Palette, Hash, 
  TrendingUp, Heart, Smile, Meh, Frown, Target,
  Calendar, Award, Flame, Eye, Crown, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DailyDashboard = () => {
  const [userSign, setUserSign] = useState('Leo'); // Would come from user profile
  const [currentStreak, setCurrentStreak] = useState(12);
  const [selectedMood, setSelectedMood] = useState(null);
  const [cosmicWeather, setCosmicWeather] = useState(null);
  const [dailyInsight, setDailyInsight] = useState(null);
  const [powerHour, setPowerHour] = useState(null);
  const [luckyElements, setLuckyElements] = useState(null);

  useEffect(() => {
    generateDailyData();
  }, []);

  const generateDailyData = () => {
    // Cosmic Weather
    const weatherTypes = ['Intense', 'Harmonious', 'Transformative', 'Energetic', 'Reflective', 'Creative'];
    const dominantPlanets = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Moon'];
    const energyLevels = ['High', 'Medium-High', 'Balanced', 'Gentle', 'Deep'];
    
    setCosmicWeather({
      type: weatherTypes[Math.floor(Math.random() * weatherTypes.length)],
      dominantPlanet: dominantPlanets[Math.floor(Math.random() * dominantPlanets.length)],
      energyLevel: energyLevels[Math.floor(Math.random() * energyLevels.length)],
      intensity: Math.floor(Math.random() * 40) + 60, // 60-100
      description: 'Strong planetary alignments create powerful manifestation energy today.'
    });

    // Daily Insight
    const insights = [
      'The universe is aligning to support your creative endeavors. Trust your artistic instincts today.',
      'Communication flows easily today. Important conversations will lead to breakthrough moments.',
      'Your intuition is heightened. Pay attention to subtle signs and synchronicities around you.',
      'Financial opportunities are highlighted. Review your resources and make strategic decisions.',
      'Relationships take center stage. Express your feelings openly and authentically.',
      'Your leadership qualities shine bright today. Step into your power with confidence.'
    ];
    
    setDailyInsight({
      message: insights[Math.floor(Math.random() * insights.length)],
      focus: ['Love', 'Career', 'Health', 'Spirituality', 'Creativity'][Math.floor(Math.random() * 5)],
      action: 'Take one bold step toward your dreams today'
    });

    // Power Hour
    const hours = Array.from({length: 24}, (_, i) => i);
    const powerHourTime = hours[Math.floor(Math.random() * hours.length)];
    setPowerHour({
      time: powerHourTime,
      activity: ['Manifestation', 'Important Decisions', 'Creative Work', 'Communication', 'Self-Care'][Math.floor(Math.random() * 5)],
      description: 'Planetary energies are most favorable for your goals during this time.'
    });

    // Lucky Elements
    const colors = ['Deep Purple', 'Golden Yellow', 'Emerald Green', 'Royal Blue', 'Rose Gold', 'Silver'];
    const crystals = ['Amethyst', 'Citrine', 'Rose Quartz', 'Clear Quartz', 'Labradorite', 'Moonstone'];
    const numbers = Array.from({length: 5}, () => Math.floor(Math.random() * 99) + 1);
    
    setLuckyElements({
      color: colors[Math.floor(Math.random() * colors.length)],
      crystal: crystals[Math.floor(Math.random() * crystals.length)],
      numbers: numbers.sort((a, b) => a - b),
      affirmation: 'I am aligned with the cosmic flow and open to infinite possibilities.'
    });
  };

  const moods = [
    { id: 'amazing', icon: Smile, color: 'text-green-400', label: 'Amazing' },
    { id: 'good', icon: Smile, color: 'text-blue-400', label: 'Good' },
    { id: 'neutral', icon: Meh, color: 'text-yellow-400', label: 'Neutral' },
    { id: 'low', icon: Frown, color: 'text-orange-400', label: 'Low' },
    { id: 'difficult', icon: Frown, color: 'text-red-400', label: 'Difficult' }
  ];

  const saveMood = (moodId) => {
    setSelectedMood(moodId);
    // In real app, would save to database
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`mood_${today}`, moodId);
  };

  const getEnergyColor = (level) => {
    switch (level) {
      case 'High': return 'text-red-400';
      case 'Medium-High': return 'text-orange-400';
      case 'Balanced': return 'text-yellow-400';
      case 'Gentle': return 'text-green-400';
      case 'Deep': return 'text-blue-400';
      default: return 'text-purple-400';
    }
  };

  const getIntensityGradient = (intensity) => {
    if (intensity >= 90) return 'from-red-500 to-pink-600';
    if (intensity >= 80) return 'from-orange-500 to-red-500';
    if (intensity >= 70) return 'from-yellow-500 to-orange-500';
    if (intensity >= 60) return 'from-green-500 to-yellow-500';
    return 'from-blue-500 to-green-500';
  };

  const formatPowerHour = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  const quickActions = [
    { name: 'Daily Horoscope', path: '/daily-horoscope', icon: Sun, color: 'from-yellow-400 to-orange-500' },
    { name: 'Tarot Reading', path: '/tarot', icon: Eye, color: 'from-purple-400 to-indigo-500' },
    { name: 'Compatibility', path: '/instant-match', icon: Heart, color: 'from-pink-400 to-rose-500' },
    { name: 'Lucky Numbers', path: '/lucky-numbers', icon: Target, color: 'from-green-400 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Good Morning, Cosmic Soul ✨
          </h1>
          <p className="text-purple-200 text-lg">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Streak Counter */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-yellow-400/30">
          <div className="flex items-center justify-center gap-4">
            <Flame className="w-8 h-8 text-orange-400" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{currentStreak}</div>
              <div className="text-yellow-200">Day Streak</div>
            </div>
            <Award className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-center text-yellow-200 mt-2">
            You're on fire! Keep your cosmic connection strong 🔥
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cosmic Weather Report */}
            {cosmicWeather && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Today's Cosmic Weather
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{cosmicWeather.type}</div>
                    <div className="text-purple-200 text-sm">Weather Type</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-2 ${getEnergyColor(cosmicWeather.energyLevel)}`}>
                      {cosmicWeather.energyLevel}
                    </div>
                    <div className="text-purple-200 text-sm">Energy Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-300 mb-2">{cosmicWeather.dominantPlanet}</div>
                    <div className="text-purple-200 text-sm">Dominant Planet</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-200">Cosmic Intensity</span>
                    <span className="text-white font-bold">{cosmicWeather.intensity}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${getIntensityGradient(cosmicWeather.intensity)} transition-all duration-1000`}
                      style={{ width: `${cosmicWeather.intensity}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-purple-100 text-center">{cosmicWeather.description}</p>
              </div>
            )}

            {/* Personalized Daily Insight */}
            {dailyInsight && (
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Crown className="w-6 h-6 text-yellow-400" />
                  Your {userSign} Daily Insight
                </h2>
                
                <div className="bg-white/10 rounded-xl p-6 mb-4">
                  <p className="text-purple-100 text-lg leading-relaxed mb-4">
                    {dailyInsight.message}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-purple-200">Focus: {dailyInsight.focus}</span>
                    </div>
                    <div className="px-3 py-1 bg-yellow-600/50 text-yellow-200 rounded-full text-sm">
                      Daily Action
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-600/20 rounded-lg p-4 border border-yellow-400/30">
                  <p className="text-yellow-100 font-medium text-center">
                    💫 {dailyInsight.action}
                  </p>
                </div>
              </div>
            )}

            {/* Quick Mood Check-in */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-400" />
                Quick Mood Check-in
              </h2>
              
              <div className="flex justify-center gap-4 mb-4">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => saveMood(mood.id)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      selectedMood === mood.id 
                        ? 'bg-purple-600 scale-110' 
                        : 'bg-white/20 hover:bg-white/30 hover:scale-105'
                    }`}
                  >
                    {React.createElement(mood.icon, {
                      className: `w-6 h-6 ${selectedMood === mood.id ? 'text-white' : mood.color}`
                    })}
                  </button>
                ))}
              </div>
              
              {selectedMood && (
                <div className="text-center">
                  <p className="text-green-200">✓ Mood logged for today</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Power Hour */}
            {powerHour && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  Your Power Hour
                </h3>
                
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {formatPowerHour(powerHour.time)}
                  </div>
                  <div className="text-purple-200 text-sm">Best time for:</div>
                  <div className="text-white font-semibold">{powerHour.activity}</div>
                </div>
                
                <p className="text-purple-200 text-sm text-center">
                  {powerHour.description}
                </p>
              </div>
            )}

            {/* Lucky Elements */}
            {luckyElements && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  Today's Lucky Elements
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-purple-300" />
                      <span className="text-purple-200">Color:</span>
                    </div>
                    <span className="text-white font-semibold">{luckyElements.color}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Gem className="w-4 h-4 text-purple-300" />
                      <span className="text-purple-200">Crystal:</span>
                    </div>
                    <span className="text-white font-semibold">{luckyElements.crystal}</span>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Hash className="w-4 h-4 text-purple-300" />
                      <span className="text-purple-200">Numbers:</span>
                    </div>
                    <div className="flex gap-2 justify-center">
                      {luckyElements.numbers.map((number, index) => (
                        <div key={index} className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {number}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Daily Affirmation */}
            {luckyElements && (
              <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/30">
                <h3 className="text-lg font-bold text-white mb-4 text-center">Daily Affirmation</h3>
                <p className="text-pink-100 text-center italic leading-relaxed">
                  "{luckyElements.affirmation}"
                </p>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4">Quick Cosmic Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.path}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {React.createElement(action.icon, { className: 'w-4 h-4 text-white' })}
                    </div>
                    <span className="text-purple-200 group-hover:text-white transition-colors">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Today's Cosmic Events */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-purple-400" />
            Today's Cosmic Events
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-purple-300 font-medium mb-2">Moon Phase</h4>
              <div className="flex items-center gap-2">
                <Moon className="w-5 h-5 text-blue-400" />
                <span className="text-white">Waxing Gibbous</span>
              </div>
              <p className="text-purple-200 text-sm mt-2">Perfect for building and growing</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-purple-300 font-medium mb-2">Planetary Transit</h4>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-white">Venus in Libra</span>
              </div>
              <p className="text-purple-200 text-sm mt-2">Harmony in relationships</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-4">
              <h4 className="text-purple-300 font-medium mb-2">Cosmic Tip</h4>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-white">Meditate at sunset</span>
              </div>
              <p className="text-purple-200 text-sm mt-2">Enhanced spiritual connection</p>
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="text-center mt-8">
          <button
            onClick={generateDailyData}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <TrendingUp className="w-5 h-5" />
            Refresh Cosmic Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyDashboard;