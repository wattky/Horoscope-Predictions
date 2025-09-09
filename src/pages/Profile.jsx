import React, { useState } from 'react';
import { User, Star, Calendar, MapPin, Edit3, Save, Camera } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Luna Starweaver',
    email: 'luna@cosmic.app',
    birthDate: '1990-07-15',
    birthTime: '14:30',
    birthLocation: 'San Francisco, CA',
    sunSign: 'Cancer',
    moonSign: 'Pisces',
    risingSign: 'Scorpio',
    bio: 'Passionate about astrology, tarot, and connecting with cosmic energies. Always learning and growing on my spiritual journey.',
    joinDate: '2023-01-15',
    readingsCompleted: 247,
    favoriteReading: 'Daily Horoscope',
    streakDays: 45
  });

  const handleSave = () => {
    setIsEditing(false);
    // In real app, would save to database
  };

  const achievements = [
    { name: 'Cosmic Beginner', description: 'Completed first reading', earned: true },
    { name: 'Daily Devotee', description: '30-day reading streak', earned: true },
    { name: 'Tarot Master', description: '100 tarot readings', earned: true },
    { name: 'Community Star', description: '50 community posts', earned: false },
    { name: 'Ritual Keeper', description: 'Completed 25 rituals', earned: false },
    { name: 'Cosmic Sage', description: '1 year membership', earned: true }
  ];

  const stats = [
    { label: 'Readings Completed', value: profile.readingsCompleted, icon: Star },
    { label: 'Current Streak', value: `${profile.streakDays} days`, icon: Calendar },
    { label: 'Member Since', value: new Date(profile.joinDate).getFullYear(), icon: User },
    { label: 'Favorite Reading', value: profile.favoriteReading, icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-purple-400" />
            Your Cosmic Profile
          </h1>
          <p className="text-purple-200 text-lg">Your personal astrological journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Personal Information</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-700 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="text-2xl font-bold text-white bg-white/20 rounded-lg px-3 py-2 w-full border border-purple-400/30"
                    />
                  ) : (
                    <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                  )}
                  <p className="text-purple-200">{profile.email}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-200 mb-2">Birth Date</label>
                  {isEditing ? (
                    <input
                      type="date"
                      value={profile.birthDate}
                      onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                    />
                  ) : (
                    <p className="text-white">{new Date(profile.birthDate).toLocaleDateString()}</p>
                  )}
                </div>
                <div>
                  <label className="block text-purple-200 mb-2">Birth Time</label>
                  {isEditing ? (
                    <input
                      type="time"
                      value={profile.birthTime}
                      onChange={(e) => setProfile({...profile, birthTime: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                    />
                  ) : (
                    <p className="text-white">{profile.birthTime}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-purple-200 mb-2">Birth Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.birthLocation}
                      onChange={(e) => setProfile({...profile, birthLocation: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
                    />
                  ) : (
                    <p className="text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {profile.birthLocation}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-purple-200 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30 resize-none h-24"
                    />
                  ) : (
                    <p className="text-white">{profile.bio}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Your Big Three</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Sun Sign</h3>
                  <p className="text-yellow-400 text-xl font-bold">{profile.sunSign}</p>
                  <p className="text-purple-200 text-sm">Your core identity</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Moon Sign</h3>
                  <p className="text-blue-400 text-xl font-bold">{profile.moonSign}</p>
                  <p className="text-purple-200 text-sm">Your emotions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">Rising Sign</h3>
                  <p className="text-green-400 text-xl font-bold">{profile.risingSign}</p>
                  <p className="text-purple-200 text-sm">How others see you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Your Stats</h2>
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {React.createElement(stat.icon, { className: 'w-5 h-5 text-purple-400' })}
                      <span className="text-purple-200">{stat.label}</span>
                    </div>
                    <span className="text-white font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.earned 
                        ? 'bg-green-600/20 border border-green-400/30' 
                        : 'bg-gray-600/20 border border-gray-400/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-green-600' : 'bg-gray-600'
                    }`}>
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${achievement.earned ? 'text-white' : 'text-gray-400'}`}>
                        {achievement.name}
                      </h4>
                      <p className={`text-sm ${achievement.earned ? 'text-green-200' : 'text-gray-500'}`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;