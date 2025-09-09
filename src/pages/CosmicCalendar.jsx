import React, { useState, useEffect } from 'react';
import { 
  Calendar, Star, Moon, Sun, Zap, AlertTriangle, 
  Crown, Heart, TrendingUp, Clock, Eye, Sparkles,
  ChevronLeft, ChevronRight, Filter
} from 'lucide-react';

const CosmicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [cosmicEvents, setCosmicEvents] = useState({});
  const [eventFilter, setEventFilter] = useState('all');

  useEffect(() => {
    generateCosmicEvents();
  }, [currentDate]);

  const generateCosmicEvents = () => {
    const events = {};
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Generate events for the current month
    for (let day = 1; day <= new Date(year, month + 1, 0).getDate(); day++) {
      const date = new Date(year, month, day);
      const dateKey = date.toDateString();
      
      const dayEvents = [];
      
      // Random cosmic events
      if (Math.random() < 0.3) {
        const moonPhases = ['New Moon', 'First Quarter', 'Full Moon', 'Last Quarter'];
        dayEvents.push({
          type: 'moon',
          title: moonPhases[Math.floor(Math.random() * moonPhases.length)],
          description: 'Powerful lunar energy for manifestation',
          intensity: 'high',
          icon: Moon,
          color: 'text-blue-400'
        });
      }
      
      if (Math.random() < 0.2) {
        const retrogrades = ['Mercury Retrograde', 'Venus Retrograde', 'Mars Retrograde'];
        dayEvents.push({
          type: 'retrograde',
          title: retrogrades[Math.floor(Math.random() * retrogrades.length)],
          description: 'Time for reflection and review',
          intensity: 'medium',
          icon: AlertTriangle,
          color: 'text-orange-400'
        });
      }
      
      if (Math.random() < 0.25) {
        const aspects = ['Venus Trine Jupiter', 'Mars Square Saturn', 'Sun Conjunct Mercury', 'Moon Sextile Venus'];
        dayEvents.push({
          type: 'aspect',
          title: aspects[Math.floor(Math.random() * aspects.length)],
          description: 'Significant planetary alignment',
          intensity: 'medium',
          icon: Star,
          color: 'text-purple-400'
        });
      }
      
      if (Math.random() < 0.15) {
        const eclipses = ['Solar Eclipse', 'Lunar Eclipse'];
        dayEvents.push({
          type: 'eclipse',
          title: eclipses[Math.floor(Math.random() * eclipses.length)],
          description: 'Major transformation portal',
          intensity: 'high',
          icon: Crown,
          color: 'text-yellow-400'
        });
      }
      
      if (Math.random() < 0.4) {
        const dailyEvents = ['High Energy Day', 'Love Focus', 'Career Boost', 'Spiritual Awakening', 'Creative Flow'];
        dayEvents.push({
          type: 'daily',
          title: dailyEvents[Math.floor(Math.random() * dailyEvents.length)],
          description: 'Special cosmic energy for the day',
          intensity: 'low',
          icon: Sparkles,
          color: 'text-green-400'
        });
      }
      
      if (dayEvents.length > 0) {
        events[dateKey] = dayEvents;
      }
    }
    
    setCosmicEvents(events);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
    setSelectedDate(null);
  };

  const getEventsByType = (events, type) => {
    if (type === 'all') return events;
    return events.filter(event => event.type === type);
  };

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'high': return 'bg-red-500/20 border-red-400/50';
      case 'medium': return 'bg-yellow-500/20 border-yellow-400/50';
      case 'low': return 'bg-green-500/20 border-green-400/50';
      default: return 'bg-purple-500/20 border-purple-400/50';
    }
  };

  const eventTypes = [
    { value: 'all', label: 'All Events', icon: Calendar },
    { value: 'moon', label: 'Moon Phases', icon: Moon },
    { value: 'retrograde', label: 'Retrogrades', icon: AlertTriangle },
    { value: 'aspect', label: 'Aspects', icon: Star },
    { value: 'eclipse', label: 'Eclipses', icon: Crown },
    { value: 'daily', label: 'Daily Energy', icon: Sparkles }
  ];

  const days = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-purple-400" />
            Cosmic Calendar
          </h1>
          <p className="text-purple-200 text-lg">Track cosmic events and plan your spiritual journey</p>
        </div>

        <div className="grid xl:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="xl:col-span-3">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigateMonth(-1)}
                  className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-bold text-white">{monthName}</h2>
                <button
                  onClick={() => navigateMonth(1)}
                  className="p-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Event Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                {eventTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setEventFilter(type.value)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                      eventFilter === type.value 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-200 hover:bg-white/30'
                    }`}
                  >
                    {React.createElement(type.icon, { className: 'w-4 h-4' })}
                    {type.label}
                  </button>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {/* Day headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-purple-300 font-semibold py-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {days.map((day, index) => {
                  if (!day) {
                    return <div key={index} className="h-24"></div>;
                  }
                  
                  const dateKey = day.toDateString();
                  const dayEvents = cosmicEvents[dateKey] || [];
                  const filteredEvents = getEventsByType(dayEvents, eventFilter);
                  const isToday = day.toDateString() === new Date().toDateString();
                  const isSelected = selectedDate?.toDateString() === dateKey;
                  
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedDate(day)}
                      className={`h-24 p-2 rounded-lg cursor-pointer transition-all duration-300 border ${
                        isSelected 
                          ? 'bg-purple-600/30 border-purple-400' 
                          : isToday 
                            ? 'bg-yellow-500/20 border-yellow-400/50' 
                            : 'bg-white/5 border-purple-400/20 hover:bg-white/10'
                      }`}
                    >
                      <div className={`text-sm font-semibold mb-1 ${
                        isToday ? 'text-yellow-400' : 'text-white'
                      }`}>
                        {day.getDate()}
                      </div>
                      <div className="space-y-1">
                        {filteredEvents.slice(0, 2).map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className={`w-full h-1.5 rounded-full ${
                              event.intensity === 'high' ? 'bg-red-400' :
                              event.intensity === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                            }`}
                          ></div>
                        ))}
                        {filteredEvents.length > 2 && (
                          <div className="text-xs text-purple-300">+{filteredEvents.length - 2}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Event Details Sidebar */}
          <div className="space-y-6">
            {selectedDate ? (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                
                {cosmicEvents[selectedDate.toDateString()] ? (
                  <div className="space-y-4">
                    {getEventsByType(cosmicEvents[selectedDate.toDateString()], eventFilter).map((event, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${getIntensityColor(event.intensity)}`}>
                        <div className="flex items-center gap-3 mb-2">
                          {React.createElement(event.icon, {
                            className: `w-5 h-5 ${event.color}`
                          })}
                          <span className="text-white font-semibold">{event.title}</span>
                        </div>
                        <p className="text-purple-200 text-sm">{event.description}</p>
                        <div className="mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            event.intensity === 'high' ? 'bg-red-600/50 text-red-200' :
                            event.intensity === 'medium' ? 'bg-yellow-600/50 text-yellow-200' :
                            'bg-green-600/50 text-green-200'
                          }`}>
                            {event.intensity.toUpperCase()} INTENSITY
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-purple-300 py-8">
                    <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No cosmic events for this date</p>
                    <p className="text-sm mt-1">A peaceful day for routine activities</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <div className="text-center text-purple-300 py-8">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Select a date to see cosmic events</p>
                </div>
              </div>
            )}

            {/* Upcoming Major Events */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Upcoming Major Events
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-600/20 rounded-lg border border-red-400/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Crown className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-semibold text-sm">Solar Eclipse</span>
                  </div>
                  <div className="text-red-200 text-xs">March 29 - Major life changes</div>
                </div>
                <div className="p-3 bg-orange-600/20 rounded-lg border border-orange-400/30">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-4 h-4 text-orange-400" />
                    <span className="text-white font-semibold text-sm">Mercury Retrograde</span>
                  </div>
                  <div className="text-orange-200 text-xs">April 1-25 - Communication caution</div>
                </div>
                <div className="p-3 bg-blue-600/20 rounded-lg border border-blue-400/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Moon className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-semibold text-sm">Super Full Moon</span>
                  </div>
                  <div className="text-blue-200 text-xs">April 13 - Emotional intensity</div>
                </div>
              </div>
            </div>

            {/* Event Legend */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4">Event Intensity</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">High - Major cosmic events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">Medium - Notable influences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-purple-200 text-sm">Low - Daily energy shifts</span>
                </div>
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <h3 className="text-lg font-bold text-white mb-4">Monthly Cosmic Summary</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-purple-200">Total Events:</span>
                  <span className="text-white font-semibold">
                    {Object.values(cosmicEvents).reduce((sum, events) => sum + events.length, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">High Intensity Days:</span>
                  <span className="text-red-400 font-semibold">
                    {Object.values(cosmicEvents).filter(events => 
                      events.some(e => e.intensity === 'high')
                    ).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Moon Events:</span>
                  <span className="text-blue-400 font-semibold">
                    {Object.values(cosmicEvents).reduce((sum, events) => 
                      sum + events.filter(e => e.type === 'moon').length, 0
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-200">Best Energy Days:</span>
                  <span className="text-green-400 font-semibold">
                    {Object.values(cosmicEvents).filter(events => 
                      events.some(e => e.title.includes('High Energy') || e.title.includes('Creative Flow'))
                    ).length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmicCalendar;