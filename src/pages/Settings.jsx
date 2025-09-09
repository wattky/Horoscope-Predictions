import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Moon, Globe, Shield, Smartphone } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      dailyHoroscope: true,
      weeklyForecast: true,
      retrogradeAlerts: true,
      fullMoonReminders: true,
      newMoonReminders: false,
      transitAlerts: true,
      communityUpdates: false
    },
    privacy: {
      profileVisibility: 'friends',
      showBirthChart: true,
      allowMatching: true,
      shareReadings: false
    },
    preferences: {
      theme: 'cosmic',
      language: 'en',
      timezone: 'America/Los_Angeles',
      temperatureUnit: 'fahrenheit',
      dateFormat: 'MM/DD/YYYY'
    },
    account: {
      emailUpdates: true,
      marketingEmails: false,
      twoFactorAuth: false,
      dataBackup: true
    }
  });

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const ToggleSwitch = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-purple-600' : 'bg-gray-600'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <SettingsIcon className="w-8 h-8 text-purple-400" />
            Settings
          </h1>
          <p className="text-purple-200 text-lg">Customize your cosmic experience</p>
        </div>

        <div className="space-y-8">
          {/* Notifications */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Bell className="w-6 h-6 text-yellow-400" />
              Notifications
            </h2>
            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <div>
                    <h3 className="text-white font-medium">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <p className="text-purple-200 text-sm">
                      {key === 'dailyHoroscope' && 'Get your daily horoscope every morning'}
                      {key === 'weeklyForecast' && 'Weekly cosmic forecast and predictions'}
                      {key === 'retrogradeAlerts' && 'Alerts when planets go retrograde'}
                      {key === 'fullMoonReminders' && 'Reminders for full moon rituals'}
                      {key === 'newMoonReminders' && 'Reminders for new moon intentions'}
                      {key === 'transitAlerts' && 'Important planetary transit notifications'}
                      {key === 'communityUpdates' && 'Updates from the cosmic community'}
                    </p>
                  </div>
                  <ToggleSwitch
                    enabled={value}
                    onChange={(newValue) => updateSetting('notifications', key, newValue)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              Privacy & Security
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Profile Visibility</label>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => updateSetting('privacy', 'profileVisibility', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                >
                  <option value="public" className="bg-purple-900">Public</option>
                  <option value="friends" className="bg-purple-900">Friends Only</option>
                  <option value="private" className="bg-purple-900">Private</option>
                </select>
              </div>
              
              {Object.entries(settings.privacy).filter(([key]) => key !== 'profileVisibility').map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <div>
                    <h3 className="text-white font-medium">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <p className="text-purple-200 text-sm">
                      {key === 'showBirthChart' && 'Allow others to see your birth chart'}
                      {key === 'allowMatching' && 'Enable compatibility matching with other users'}
                      {key === 'shareReadings' && 'Share your readings with the community'}
                    </p>
                  </div>
                  <ToggleSwitch
                    enabled={value}
                    onChange={(newValue) => updateSetting('privacy', key, newValue)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Moon className="w-6 h-6 text-blue-400" />
              Preferences
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Theme</label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => updateSetting('preferences', 'theme', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                >
                  <option value="cosmic" className="bg-purple-900">Cosmic (Default)</option>
                  <option value="dark" className="bg-purple-900">Dark Mode</option>
                  <option value="light" className="bg-purple-900">Light Mode</option>
                  <option value="auto" className="bg-purple-900">Auto (System)</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => updateSetting('preferences', 'language', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                >
                  <option value="en" className="bg-purple-900">English</option>
                  <option value="es" className="bg-purple-900">Español</option>
                  <option value="fr" className="bg-purple-900">Français</option>
                  <option value="de" className="bg-purple-900">Deutsch</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Timezone</label>
                <select
                  value={settings.preferences.timezone}
                  onChange={(e) => updateSetting('preferences', 'timezone', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                >
                  <option value="America/Los_Angeles" className="bg-purple-900">Pacific Time</option>
                  <option value="America/New_York" className="bg-purple-900">Eastern Time</option>
                  <option value="Europe/London" className="bg-purple-900">GMT</option>
                  <option value="Asia/Tokyo" className="bg-purple-900">JST</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Date Format</label>
                <select
                  value={settings.preferences.dateFormat}
                  onChange={(e) => updateSetting('preferences', 'dateFormat', e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
                >
                  <option value="MM/DD/YYYY" className="bg-purple-900">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY" className="bg-purple-900">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD" className="bg-purple-900">YYYY-MM-DD</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-pink-400" />
              Account Settings
            </h2>
            <div className="space-y-4">
              {Object.entries(settings.account).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2">
                  <div>
                    <h3 className="text-white font-medium">
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </h3>
                    <p className="text-purple-200 text-sm">
                      {key === 'emailUpdates' && 'Receive important account updates via email'}
                      {key === 'marketingEmails' && 'Receive promotional emails and offers'}
                      {key === 'twoFactorAuth' && 'Add extra security to your account'}
                      {key === 'dataBackup' && 'Automatically backup your readings and data'}
                    </p>
                  </div>
                  <ToggleSwitch
                    enabled={value}
                    onChange={(newValue) => updateSetting('account', key, newValue)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-900/20 backdrop-blur-lg rounded-2xl p-8 border border-red-400/30">
            <h2 className="text-2xl font-semibold text-white mb-6">Danger Zone</h2>
            <div className="space-y-4">
              <button className="w-full bg-red-600/50 text-white py-3 rounded-lg font-semibold hover:bg-red-600/70 transition-colors border border-red-400/50">
                Export My Data
              </button>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;