import React, { useState } from 'react';
import { Sun, Moon, ArrowUp, Calculator, Sparkles } from 'lucide-react';

const BigThree = () => {
  const [birthData, setBirthData] = useState({
    date: '',
    time: '',
    location: ''
  });
  const [results, setResults] = useState(null);

  const calculateBigThree = () => {
    // Simulated calculation - in real app would use ephemeris data
    const sunSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const moonSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    const risingSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
    
    setResults({
      sun: sunSigns[Math.floor(Math.random() * sunSigns.length)],
      moon: moonSigns[Math.floor(Math.random() * moonSigns.length)],
      rising: risingSigns[Math.floor(Math.random() * risingSigns.length)]
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            Your Big Three
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </h1>
          <p className="text-purple-200 text-lg">Discover your Sun, Moon, and Rising signs</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Birth Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-purple-200 mb-2">Birth Date</label>
              <input
                type="date"
                value={birthData.date}
                onChange={(e) => setBirthData({...birthData, date: e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2">Birth Time</label>
              <input
                type="time"
                value={birthData.time}
                onChange={(e) => setBirthData({...birthData, time: e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2">Birth Location</label>
              <input
                type="text"
                placeholder="City, Country"
                value={birthData.location}
                onChange={(e) => setBirthData({...birthData, location: e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>
          </div>
          <button
            onClick={calculateBigThree}
            className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Calculate Big Three
          </button>
        </div>

        {results && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30">
              <div className="text-center">
                <Sun className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Sun Sign</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-4">{results.sun}</p>
                <p className="text-purple-200 text-sm">Your core identity and ego</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-400/20 to-indigo-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
              <div className="text-center">
                <Moon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Moon Sign</h3>
                <p className="text-2xl font-bold text-blue-400 mb-4">{results.moon}</p>
                <p className="text-purple-200 text-sm">Your emotions and inner self</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30">
              <div className="text-center">
                <ArrowUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Rising Sign</h3>
                <p className="text-2xl font-bold text-green-400 mb-4">{results.rising}</p>
                <p className="text-purple-200 text-sm">How others perceive you</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BigThree;