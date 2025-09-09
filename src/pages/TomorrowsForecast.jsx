import React, { useState, useEffect } from 'react';
import { Sunrise, Star, Italic as Crystal, Zap, Clock, Target, TrendingUp, AlertTriangle, CheckCircle, Calendar, Moon, Sun, Heart, Brain, Sparkles } from 'lucide-react';

const TomorrowsForecast = () => {
  const [tomorrowsData, setTomorrowsData] = useState(null);
  const [preparations, setPreparations] = useState([]);
  const [completedPreps, setCompletedPreps] = useState([]);

  useEffect(() => {
    generateTomorrowsData();
    loadCompletedPreparations();
  }, []);

  const generateTomorrowsData = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    setTomorrowsData({
      date: tomorrow,
      cosmicTheme: ['Breakthrough', 'Harmony', 'Transformation', 'Manifestation', 'Revelation'][Math.floor(Math.random() * 5)],
      energyForecast: Math.floor(Math.random() * 40) + 60, // 60-100
      dominantPlanet: ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Moon'][Math.floor(Math.random() * 5)],
      moonPhase: 'First Quarter',
      majorAspect: 'Mars Conjunct Jupiter',
      opportunities: [
        'Perfect timing for important conversations',
        'Creative projects gain momentum',
        'Financial decisions are favored',
        'Relationship breakthroughs possible'
      ],
      challenges: [
        'Avoid rushing into decisions before noon',
        'Communication may be intense - stay calm',
        'Energy levels fluctuate - pace yourself'
      ],
      bestTimes: {
        morning: '8:00 AM - 10:00 AM',
        afternoon: '2:00 PM - 4:00 PM',
        evening: '7:00 PM - 9:00 PM'
      },
      avoidTimes: ['11:00 AM - 1:00 PM', '5:00 PM - 6:00 PM'],
      luckyElements: {
        color: 'Emerald Green',
        crystal: 'Clear Quartz',
        number: Math.floor(Math.random() * 99) + 1,
        direction: 'Southeast',
        element: 'Earth'
      },
      cosmicAdvice: 'Tomorrow\'s energy supports bold moves and authentic expression. Trust your instincts and take calculated risks.',
      weatherDescription: 'High-energy cosmic storm bringing transformation and breakthrough opportunities'
    });

    // Generate preparation tasks
    setPreparations([
      { id: 'intention', title: 'Set Tomorrow\'s Intention', description: 'Write down your main goal for tomorrow', icon: Target },
      { id: 'energy', title: 'Prepare Your Energy', description: 'Get good sleep and hydrate well tonight', icon: Zap },
      { id: 'space', title: 'Clear Your Space', description: 'Organize your environment for tomorrow\'s energy', icon: Sparkles },
      { id: 'mindset', title: 'Prime Your Mindset', description: 'Visualize tomorrow\'s success before bed', icon: Brain },
      { id: 'tools', title: 'Gather Your Tools', description: 'Prepare items you\'ll need for tomorrow\'s opportunities', icon: Crystal }
    ]);
  };

  const loadCompletedPreparations = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateKey = tomorrow.toDateString();
    const completed = JSON.parse(localStorage.getItem(`prep_${dateKey}`) || '[]');
    setCompletedPreps(completed);
  };

  const completePreparation = (prepId) => {
    if (completedPreps.includes(prepId)) return;
    
    const newCompleted = [...completedPreps, prepId];
    setCompletedPreps(newCompleted);
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateKey = tomorrow.toDateString();
    localStorage.setItem(`prep_${dateKey}`, JSON.stringify(newCompleted));
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

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'high': return 'bg-red-500/20 border-red-400/50';
      case 'medium': return 'bg-yellow-500/20 border-yellow-400/50';
      case 'low': return 'bg-green-500/20 border-green-400/50';
      default: return 'bg-purple-500/20 border-purple-400/50';
    }
  };

  if (!tomorrowsData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sunrise className="w-10 h-10 text-orange-400" />
            Tomorrow's Cosmic Forecast
          </h1>
          <p className="text-purple-200 text-xl">
            {tomorrowsData.date.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <div className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-full inline-block border border-orange-400/30">
            <span className="text-orange-200 font-semibold">Theme: {tomorrowsData.cosmicTheme}</span>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 gap-8">
          {/* Main Forecast */}
          <div className="xl:col-span-2 space-y-8">
            {/* Energy Forecast */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                Tomorrow's Energy Forecast
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{tomorrowsData.dominantPlanet}</div>
                  <div className="text-purple-200 text-sm">Ruling Planet</div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Moon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{tomorrowsData.moonPhase}</div>
                  <div className="text-purple-200 text-sm">Moon Phase</div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-xl font-bold text-white mb-1">{tomorrowsData.majorAspect}</div>
                  <div className="text-purple-200 text-sm">Major Aspect</div>
                </div>
              </div>

              {/* Energy Level */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-200 font-medium text-lg">Cosmic Energy Level</span>
                  <span className={`text-3xl font-bold ${getEnergyColor(tomorrowsData.energyForecast)}`}>
                    {tomorrowsData.energyForecast}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-6 overflow-hidden">
                  <div
                    className={`h-6 rounded-full bg-gradient-to-r ${getEnergyGradient(tomorrowsData.energyForecast)} transition-all duration-2000`}
                    style={{ width: `${tomorrowsData.energyForecast}%` }}
                  ></div>
                </div>
                <p className="text-purple-200 text-center mt-3">{tomorrowsData.weatherDescription}</p>
              </div>

              <div className="bg-gradient-to-r from-purple-700/30 to-pink-700/30 rounded-xl p-6 text-center">
                <h3 className="text-white font-semibold mb-3">Tomorrow's Cosmic Advice</h3>
                <p className="text-purple-100 text-lg italic">"{tomorrowsData.cosmicAdvice}"</p>
              </div>
            </div>

            {/* Opportunities & Challenges */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  Tomorrow's Opportunities
                </h3>
                <ul className="space-y-3">
                  {tomorrowsData.opportunities.map((opportunity, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-3">
                      <Star className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-orange-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  Potential Challenges
                </h3>
                <ul className="space-y-3">
                  {tomorrowsData.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-orange-400 mt-1 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Optimal Timing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7 text-blue-400" />
                Tomorrow's Optimal Timing
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Best Times for Action
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                      <div className="font-semibold text-white mb-1">Morning Power</div>
                      <div className="text-green-200">{tomorrowsData.bestTimes.morning}</div>
                      <div className="text-green-300 text-sm mt-1">Ideal for: Important decisions, new projects</div>
                    </div>
                    <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                      <div className="font-semibold text-white mb-1">Afternoon Flow</div>
                      <div className="text-green-200">{tomorrowsData.bestTimes.afternoon}</div>
                      <div className="text-green-300 text-sm mt-1">Ideal for: Communication, collaboration</div>
                    </div>
                    <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                      <div className="font-semibold text-white mb-1">Evening Magic</div>
                      <div className="text-green-200">{tomorrowsData.bestTimes.evening}</div>
                      <div className="text-green-300 text-sm mt-1">Ideal for: Reflection, planning, relationships</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Times to Avoid
                  </h3>
                  <div className="space-y-3">
                    {tomorrowsData.avoidTimes.map((time, index) => (
                      <div key={index} className="bg-red-600/20 rounded-lg p-4 border border-red-400/30">
                        <div className="font-semibold text-white mb-1">Caution Period</div>
                        <div className="text-red-200">{time}</div>
                        <div className="text-red-300 text-sm mt-1">Avoid: Major decisions, confrontations</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-yellow-600/20 rounded-lg p-4 border border-yellow-400/30">
                    <h4 className="text-yellow-300 font-semibold mb-2">Pro Tip</h4>
                    <p className="text-yellow-200 text-sm">
                      Use challenging times for routine tasks, planning, or self-reflection instead of important actions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Lucky Elements */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                Tomorrow's Lucky Elements
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Lucky Color</span>
                  <span className="text-white font-semibold">{tomorrowsData.luckyElements.color}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Power Crystal</span>
                  <span className="text-white font-semibold">{tomorrowsData.luckyElements.crystal}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Lucky Number</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{tomorrowsData.luckyElements.number}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Power Direction</span>
                  <span className="text-white font-semibold">{tomorrowsData.luckyElements.direction}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Dominant Element</span>
                  <span className="text-white font-semibold">{tomorrowsData.luckyElements.element}</span>
                </div>
              </div>
            </div>

            {/* Preparation Checklist */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-400" />
                Prepare for Tomorrow
              </h3>
              
              <div className="space-y-3">
                {preparations.map((prep) => (
                  <div
                    key={prep.id}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      completedPreps.includes(prep.id)
                        ? 'bg-green-600/20 border-green-400/50'
                        : 'bg-white/5 border-purple-400/30'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {React.createElement(prep.icon, {
                        className: `w-5 h-5 ${completedPreps.includes(prep.id) ? 'text-green-400' : 'text-purple-400'}`
                      })}
                      <span className="text-white font-semibold text-sm">{prep.title}</span>
                    </div>
                    <p className="text-purple-200 text-xs mb-3">{prep.description}</p>
                    <button
                      onClick={() => completePreparation(prep.id)}
                      disabled={completedPreps.includes(prep.id)}
                      className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        completedPreps.includes(prep.id)
                          ? 'bg-green-600 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      }`}
                    >
                      {completedPreps.includes(prep.id) ? 'Prepared ✓' : 'Mark Complete'}
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-4">
                <div className="text-sm text-purple-300">
                  Preparation Score: {completedPreps.length}/{preparations.length}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                    style={{ width: `${(completedPreps.length / preparations.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Cosmic Weather Details */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-indigo-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">Detailed Cosmic Weather</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-purple-300 font-semibold">Planetary Influences</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Mercury:</span>
                      <span className="text-white">Communication flows</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Venus:</span>
                      <span className="text-white">Love energy strong</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Mars:</span>
                      <span className="text-white">Action-oriented</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Jupiter:</span>
                      <span className="text-white">Expansion favored</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-purple-300 font-semibold">Cosmic Conditions</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-200">Retrograde Planets:</span>
                      <span className="text-white">{tomorrowsData.retrogradeCount || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Void of Course Moon:</span>
                      <span className="text-white">No</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Eclipse Season:</span>
                      <span className="text-white">No</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">Mercury Status:</span>
                      <span className="text-green-400">Direct</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Reference */}
          <div className="space-y-6">
            {/* Tomorrow's Snapshot */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4">Quick Snapshot</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Overall Vibe:</span>
                  <span className="text-white font-semibold">{tomorrowsData.cosmicTheme}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Energy Level:</span>
                  <span className={`font-semibold ${getEnergyColor(tomorrowsData.energyForecast)}`}>
                    {tomorrowsData.energyForecast >= 80 ? 'High' : tomorrowsData.energyForecast >= 60 ? 'Medium' : 'Low'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Best For:</span>
                  <span className="text-white font-semibold">New Ventures</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-purple-200">Avoid:</span>
                  <span className="text-white font-semibold">Hasty Decisions</span>
                </div>
              </div>
            </div>

            {/* Tomorrow's Affirmation */}
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Tomorrow's Affirmation</h3>
              <p className="text-pink-100 text-center italic leading-relaxed">
                "I am ready to embrace tomorrow's opportunities with confidence and grace. The universe supports my highest good."
              </p>
            </div>

            {/* Cosmic Preparation Score */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Preparation Readiness</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {Math.round((completedPreps.length / preparations.length) * 100)}%
                </div>
                <div className="text-purple-200 text-sm mb-4">Ready for Tomorrow</div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500"
                    style={{ width: `${(completedPreps.length / preparations.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4">Related Readings</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-purple-200 hover:text-white">
                  Tomorrow's Detailed Horoscope
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-purple-200 hover:text-white">
                  Weekly Forecast Preview
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-purple-200 hover:text-white">
                  Planetary Transit Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowsForecast;