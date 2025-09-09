import React, { useState, useEffect } from 'react';
import { Smile, Frown, Meh, Heart, Brain, Zap, Calendar, TrendingUp } from 'lucide-react';

const MoodTracker = () => {
  const [currentMood, setCurrentMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [moodNote, setMoodNote] = useState('');

  const moods = [
    { id: 'amazing', label: 'Amazing', icon: Smile, color: 'text-green-400', bg: 'bg-green-400/20' },
    { id: 'good', label: 'Good', icon: Smile, color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { id: 'neutral', label: 'Neutral', icon: Meh, color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
    { id: 'low', label: 'Low', icon: Frown, color: 'text-orange-400', bg: 'bg-orange-400/20' },
    { id: 'difficult', label: 'Difficult', icon: Frown, color: 'text-red-400', bg: 'bg-red-400/20' }
  ];

  const influences = [
    { id: 'moon-phase', label: 'Moon Phase', icon: Calendar },
    { id: 'planetary', label: 'Planetary Transit', icon: Zap },
    { id: 'personal', label: 'Personal Growth', icon: Heart },
    { id: 'relationships', label: 'Relationships', icon: Heart },
    { id: 'career', label: 'Career/Work', icon: Brain },
    { id: 'health', label: 'Physical Health', icon: Zap }
  ];

  useEffect(() => {
    // Load mood history from localStorage
    const savedHistory = localStorage.getItem('moodHistory');
    if (savedHistory) {
      setMoodHistory(JSON.parse(savedHistory));
    }
  }, []);

  const saveMood = () => {
    if (!currentMood) return;

    const moodEntry = {
      id: Date.now(),
      date: selectedDate,
      mood: currentMood,
      note: moodNote,
      timestamp: new Date().toISOString()
    };

    const updatedHistory = [...moodHistory.filter(entry => entry.date !== selectedDate), moodEntry];
    setMoodHistory(updatedHistory);
    localStorage.setItem('moodHistory', JSON.stringify(updatedHistory));
    
    setCurrentMood(null);
    setMoodNote('');
  };

  const getMoodStats = () => {
    if (moodHistory.length === 0) return null;

    const last7Days = moodHistory
      .filter(entry => {
        const entryDate = new Date(entry.date);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return entryDate >= weekAgo;
      });

    const moodCounts = moods.reduce((acc, mood) => {
      acc[mood.id] = last7Days.filter(entry => entry.mood === mood.id).length;
      return acc;
    }, {});

    const totalEntries = last7Days.length;
    const averageMood = totalEntries > 0 ? 
      Object.entries(moodCounts).reduce((sum, [moodId, count]) => {
        const moodValue = moods.findIndex(m => m.id === moodId) + 1;
        return sum + (moodValue * count);
      }, 0) / totalEntries : 0;

    return {
      totalEntries,
      averageMood: Math.round(averageMood * 10) / 10,
      moodCounts,
      trend: totalEntries >= 2 ? (averageMood > 3 ? 'improving' : 'declining') : 'stable'
    };
  };

  const stats = getMoodStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-pink-400" />
            Cosmic Mood Tracker
          </h1>
          <p className="text-purple-200 text-lg">Track your emotional journey through the cosmos</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">How are you feeling today?</h2>
              
              <div className="mb-6">
                <label className="block text-purple-200 mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                />
              </div>

              <div className="grid grid-cols-5 gap-3 mb-6">
                {moods.map((mood) => (
                  <button
                    key={mood.id}
                    onClick={() => setCurrentMood(mood.id)}
                    className={`p-4 rounded-xl transition-all duration-300 ${
                      currentMood === mood.id 
                        ? `${mood.bg} border-2 border-current scale-105` 
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-center">
                      {React.createElement(mood.icon, {
                        className: `w-8 h-8 mx-auto mb-2 ${currentMood === mood.id ? mood.color : 'text-purple-300'}`
                      })}
                      <span className={`text-sm font-medium ${currentMood === mood.id ? mood.color : 'text-purple-300'}`}>
                        {mood.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-purple-200 mb-2">What's influencing your mood?</label>
                <textarea
                  value={moodNote}
                  onChange={(e) => setMoodNote(e.target.value)}
                  placeholder="Share what's affecting your energy today..."
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30 resize-none h-24"
                />
              </div>

              <button
                onClick={saveMood}
                disabled={!currentMood}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
              >
                Save Mood Entry
              </button>
            </div>

            {stats && (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  7-Day Mood Insights
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{stats.totalEntries}</div>
                    <div className="text-purple-200 text-sm">Entries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{stats.averageMood}/5</div>
                    <div className="text-purple-200 text-sm">Average</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {moods.map((mood) => (
                    <div key={mood.id} className="flex items-center justify-between">
                      <span className="text-purple-200 text-sm">{mood.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${mood.color.replace('text-', 'from-')} to-purple-500`}
                            style={{ width: `${(stats.moodCounts[mood.id] / stats.totalEntries) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm w-6">{stats.moodCounts[mood.id]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Entries</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {moodHistory
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .slice(0, 10)
                  .map((entry) => {
                    const mood = moods.find(m => m.id === entry.mood);
                    return (
                      <div key={entry.id} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            {React.createElement(mood.icon, {
                              className: `w-5 h-5 ${mood.color}`
                            })}
                            <span className="text-white font-medium">{mood.label}</span>
                          </div>
                          <span className="text-purple-300 text-sm">
                            {new Date(entry.date).toLocaleDateString()}
                          </span>
                        </div>
                        {entry.note && (
                          <p className="text-purple-200 text-sm">{entry.note}</p>
                        )}
                      </div>
                    );
                  })}
              </div>
              {moodHistory.length === 0 && (
                <div className="text-center text-purple-300 py-8">
                  <p>No mood entries yet. Start tracking your cosmic journey!</p>
                </div>
              )}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cosmic Influences</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Current Moon Phase</span>
                  <span className="text-white">Waxing Gibbous</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Mercury Status</span>
                  <span className="text-green-400">Direct</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Venus Transit</span>
                  <span className="text-pink-400">In Libra</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;