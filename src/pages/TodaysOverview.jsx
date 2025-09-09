import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Star, Zap, TrendingUp, Heart, Brain, 
  Target, Clock, Sparkles, Eye, Crown, Calendar,
  ArrowRight, RefreshCw, Flame, Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TodaysOverview = () => {
  const [cosmicSnapshot, setCosmicSnapshot] = useState(null);
  const [personalizedInsights, setPersonalizedInsights] = useState(null);
  const [dailyMissions, setDailyMissions] = useState([]);
  const [completedMissions, setCompletedMissions] = useState([]);
  const [cosmicScore, setCosmicScore] = useState(0);

  useEffect(() => {
    generateTodaysData();
    loadCompletedMissions();
  }, []);

  const generateTodaysData = () => {
    // Cosmic Snapshot
    setCosmicSnapshot({
      dominantPlanet: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn'][Math.floor(Math.random() * 5)],
      moonPhase: 'Waxing Crescent',
      cosmicTheme: ['Transformation', 'Manifestation', 'Communication', 'Love', 'Growth'][Math.floor(Math.random() * 5)],
      energyLevel: Math.floor(Math.random() * 40) + 60, // 60-100
      retrogradeCount: Math.floor(Math.random() * 3),
      majorAspect: 'Venus Trine Jupiter',
      cosmicWeather: ['Stormy', 'Clear', 'Intense', 'Harmonious', 'Electric'][Math.floor(Math.random() * 5)]
    });

    // Personalized Insights
    setPersonalizedInsights({
      morningRitual: 'Start with 5 minutes of gratitude meditation facing east',
      keyFocus: ['Relationships', 'Career', 'Health', 'Creativity', 'Spirituality'][Math.floor(Math.random() * 5)],
      avoidToday: 'Making major financial decisions before 3 PM',
      embraceToday: 'Spontaneous conversations and creative expression',
      luckyTimeWindow: '2:00 PM - 4:00 PM',
      cosmicMessage: 'The universe is aligning to support your highest good. Trust the process.',
      actionStep: 'Send that important message you\'ve been putting off'
    });

    // Daily Missions
    setDailyMissions([
      { id: 'gratitude', title: 'Express Gratitude', description: 'Write down 3 things you\'re grateful for', points: 10, icon: Heart },
      { id: 'intention', title: 'Set Daily Intention', description: 'Choose one meaningful goal for today', points: 15, icon: Target },
      { id: 'mindful', title: 'Mindful Moment', description: 'Take 5 deep breaths and center yourself', points: 10, icon: Brain },
      { id: 'connect', title: 'Cosmic Connection', description: 'Reach out to someone you care about', points: 20, icon: Heart },
      { id: 'create', title: 'Creative Expression', description: 'Do something creative for 10 minutes', points: 15, icon: Sparkles }
    ]);

    // Calculate cosmic score
    const today = new Date().toDateString();
    const completed = JSON.parse(localStorage.getItem(`missions_${today}`) || '[]');
    const score = completed.reduce((sum, missionId) => {
      const mission = dailyMissions.find(m => m.id === missionId);
      return sum + (mission?.points || 0);
    }, 0);
    setCosmicScore(score);
  };

  const loadCompletedMissions = () => {
    const today = new Date().toDateString();
    const completed = JSON.parse(localStorage.getItem(`missions_${today}`) || '[]');
    setCompletedMissions(completed);
  };

  const completeMission = (missionId) => {
    if (completedMissions.includes(missionId)) return;
    
    const newCompleted = [...completedMissions, missionId];
    setCompletedMissions(newCompleted);
    
    const today = new Date().toDateString();
    localStorage.setItem(`missions_${today}`, JSON.stringify(newCompleted));
    
    const mission = dailyMissions.find(m => m.id === missionId);
    setCosmicScore(prev => prev + (mission?.points || 0));
  };

  const saveMood = (moodId) => {
    setSelectedMood(moodId);
    // In real app, would save to database
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`mood_${today}`, moodId);
  };

  const getEnergyColor = (level) => {
    if (level >= 90) return 'text-red-400';
    if (level >= 80) return 'text-orange-400';
    if (level >= 70) return 'text-yellow-400';
    if (level >= 60) return 'text-green-400';
    return 'text-blue-400';
  };

  const getEnergyGradient = (level) => {
    if (level >= 90) return 'from-red-500 to-pink-600';
    if (level >= 80) return 'from-orange-500 to-red-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    if (level >= 60) return 'from-green-500 to-yellow-500';
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

  const moods = [
    { id: 'amazing', icon: Smile, color: 'text-green-400', label: 'Amazing' },
    { id: 'good', icon: Smile, color: 'text-blue-400', label: 'Good' },
    { id: 'neutral', icon: Meh, color: 'text-yellow-400', label: 'Neutral' },
    { id: 'low', icon: Frown, color: 'text-orange-400', label: 'Low' },
    { id: 'difficult', icon: Frown, color: 'text-red-400', label: 'Difficult' }
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  const getScoreLevel = (score) => {
    if (score >= 60) return { level: 'Cosmic Master', color: 'text-yellow-400', bg: 'from-yellow-400 to-orange-500' };
    if (score >= 40) return { level: 'Star Seeker', color: 'text-blue-400', bg: 'from-blue-400 to-purple-500' };
    if (score >= 20) return { level: 'Moon Walker', color: 'text-green-400', bg: 'from-green-400 to-blue-500' };
    return { level: 'Cosmic Beginner', color: 'text-purple-400', bg: 'from-purple-400 to-pink-500' };
  };

  const scoreLevel = getScoreLevel(cosmicScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with Cosmic Score */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            Today's Cosmic Overview ✨
          </h1>
          <p className="text-purple-200 text-xl mb-6">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          
          {/* Cosmic Score Display */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="text-3xl font-bold text-white">{cosmicScore}</div>
                <div className="text-yellow-200 text-sm">Cosmic Points</div>
              </div>
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <div className={`px-4 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${scoreLevel.bg} inline-block`}>
              {scoreLevel.level}
            </div>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="xl:col-span-2 space-y-8">
            {/* Cosmic Weather Report */}
            {cosmicSnapshot && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                  Live Cosmic Weather Report
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{cosmicSnapshot.dominantPlanet}</div>
                    <div className="text-purple-200 text-sm">Dominant Planet</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Moon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{cosmicSnapshot.moonPhase}</div>
                    <div className="text-purple-200 text-sm">Moon Phase</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{cosmicSnapshot.cosmicTheme}</div>
                    <div className="text-purple-200 text-sm">Today's Theme</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{cosmicSnapshot.cosmicWeather}</div>
                    <div className="text-purple-200 text-sm">Cosmic Weather</div>
                  </div>
                </div>

                {/* Energy Level Meter */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-200 font-medium">Cosmic Energy Level</span>
                    <span className={`text-2xl font-bold ${getEnergyColor(cosmicSnapshot.energyLevel)}`}>
                      {cosmicSnapshot.energyLevel}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-4 rounded-full bg-gradient-to-r ${getEnergyGradient(cosmicSnapshot.energyLevel)} transition-all duration-2000 animate-pulse`}
                      style={{ width: `${cosmicSnapshot.energyLevel}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Major Cosmic Event</h3>
                  <p className="text-purple-100 text-lg">{cosmicSnapshot.majorAspect}</p>
                  <p className="text-purple-200 text-sm mt-2">
                    This aspect brings harmony between love and expansion, perfect for relationship growth and abundance.
                  </p>
                </div>
              </div>
            )}

            {/* Personalized Daily Insights */}
            {personalizedInsights && (
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  Your Personal Cosmic Insights
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                        <Sun className="w-4 h-4" />
                        Morning Ritual
                      </h3>
                      <p className="text-purple-100">{personalizedInsights.morningRitual}</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Key Focus Area
                      </h3>
                      <p className="text-purple-100">{personalizedInsights.keyFocus}</p>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4">
                      <h3 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Lucky Time Window
                      </h3>
                      <p className="text-purple-100">{personalizedInsights.luckyTimeWindow}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-600/20 rounded-xl p-4 border border-green-400/30">
                      <h3 className="text-green-300 font-semibold mb-2">✅ Embrace Today</h3>
                      <p className="text-green-100">{personalizedInsights.embraceToday}</p>
                    </div>
                    
                    <div className="bg-red-600/20 rounded-xl p-4 border border-red-400/30">
                      <h3 className="text-red-300 font-semibold mb-2">⚠️ Avoid Today</h3>
                      <p className="text-red-100">{personalizedInsights.avoidToday}</p>
                    </div>
                    
                    <div className="bg-yellow-600/20 rounded-xl p-4 border border-yellow-400/30">
                      <h3 className="text-yellow-300 font-semibold mb-2">💫 Cosmic Action</h3>
                      <p className="text-yellow-100">{personalizedInsights.actionStep}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-gradient-to-r from-purple-700/30 to-pink-700/30 rounded-xl p-6 text-center">
                  <h3 className="text-white font-semibold mb-3">Today's Cosmic Message</h3>
                  <p className="text-purple-100 text-lg italic">"{personalizedInsights.cosmicMessage}"</p>
                </div>
              </div>
            )}

            {/* Daily Cosmic Missions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-green-400" />
                Daily Cosmic Missions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {dailyMissions.map((mission) => (
                  <div
                    key={mission.id}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      completedMissions.includes(mission.id)
                        ? 'bg-green-600/20 border-green-400/50'
                        : 'bg-white/5 border-purple-400/30 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {React.createElement(mission.icon, {
                          className: `w-6 h-6 ${completedMissions.includes(mission.id) ? 'text-green-400' : 'text-purple-400'}`
                        })}
                        <h3 className="text-white font-semibold">{mission.title}</h3>
                      </div>
                      <span className="text-yellow-400 font-bold">+{mission.points}</span>
                    </div>
                    <p className="text-purple-200 text-sm mb-3">{mission.description}</p>
                    <button
                      onClick={() => completeMission(mission.id)}
                      disabled={completedMissions.includes(mission.id)}
                      className={`w-full py-2 rounded-lg font-semibold transition-all duration-300 ${
                        completedMissions.includes(mission.id)
                          ? 'bg-green-600 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      }`}
                    >
                      {completedMissions.includes(mission.id) ? 'Completed ✓' : 'Complete Mission'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Cosmic Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4">Quick Cosmic Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.path}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-600/20 hover:from-yellow-500/30 hover:to-orange-600/30 transition-all duration-300 group border border-yellow-400/30"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      {React.createElement(action.icon, { className: 'w-4 h-4 text-white' })}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold">{action.name}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-yellow-400" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Cosmic Stats */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4">Your Cosmic Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Missions Completed Today</span>
                  <span className="text-white font-bold">{completedMissions.length}/{dailyMissions.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Current Streak</span>
                  <span className="text-orange-400 font-bold flex items-center gap-1">
                    <Flame className="w-4 h-4" />
                    12 days
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Total Readings</span>
                  <span className="text-blue-400 font-bold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Cosmic Level</span>
                  <span className={`font-bold ${scoreLevel.color}`}>{scoreLevel.level}</span>
                </div>
              </div>
            </div>

            {/* Today's Cosmic Events */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Cosmic Events Today
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">Venus enters Libra - Enhanced relationships</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">Moon sextile Mercury - Clear communication</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">Jupiter trine Sun - Expansion opportunities</span>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <div className="text-center">
              <button
                onClick={generateTodaysData}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Cosmic Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysOverview;