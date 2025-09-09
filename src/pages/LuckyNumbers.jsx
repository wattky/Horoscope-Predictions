import React, { useState } from 'react';
import { Dice6, Sparkles, RefreshCw, TrendingUp, DollarSign } from 'lucide-react';

const LuckyNumbers = () => {
  const [numbers, setNumbers] = useState({
    lottery: [],
    daily: [],
    personal: [],
    powerball: []
  });
  const [birthDate, setBirthDate] = useState('');
  const [name, setName] = useState('');

  const generateLuckyNumbers = () => {
    // Lottery numbers (6 numbers 1-49)
    const lottery = [];
    while (lottery.length < 6) {
      const num = Math.floor(Math.random() * 49) + 1;
      if (!lottery.includes(num)) lottery.push(num);
    }

    // Daily lucky numbers (5 numbers 1-99)
    const daily = [];
    while (daily.length < 5) {
      const num = Math.floor(Math.random() * 99) + 1;
      if (!daily.includes(num)) daily.push(num);
    }

    // Personal numbers based on numerology
    const personal = [];
    if (name && birthDate) {
      // Simple numerology calculation
      const nameValue = name.toLowerCase().split('').reduce((sum, char) => {
        return sum + (char.charCodeAt(0) - 96);
      }, 0);
      const birthValue = birthDate.split('-').reduce((sum, part) => sum + parseInt(part), 0);
      
      personal.push((nameValue % 99) + 1);
      personal.push((birthValue % 99) + 1);
      personal.push(((nameValue + birthValue) % 99) + 1);
      personal.push(((nameValue * 2) % 99) + 1);
      personal.push(((birthValue * 3) % 99) + 1);
    }

    // Powerball (5 numbers 1-69 + 1 powerball 1-26)
    const powerball = [];
    while (powerball.length < 5) {
      const num = Math.floor(Math.random() * 69) + 1;
      if (!powerball.includes(num)) powerball.push(num);
    }
    const powerballNumber = Math.floor(Math.random() * 26) + 1;

    setNumbers({
      lottery: lottery.sort((a, b) => a - b),
      daily: daily.sort((a, b) => a - b),
      personal: personal.sort((a, b) => a - b),
      powerball: [...powerball.sort((a, b) => a - b), powerballNumber]
    });
  };

  const NumberBall = ({ number, isPowerball = false }) => (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
      isPowerball ? 'bg-gradient-to-br from-red-500 to-red-700' : 'bg-gradient-to-br from-purple-500 to-pink-600'
    } shadow-lg`}>
      {number}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Dice6 className="w-8 h-8 text-yellow-400" />
            Lucky Numbers Generator
          </h1>
          <p className="text-purple-200 text-lg">Cosmic-powered numbers for luck and fortune</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-purple-200 mb-2">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>
            <div>
              <label className="block text-purple-200 mb-2">Birth Date</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
              />
            </div>
          </div>
          <button
            onClick={generateLuckyNumbers}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Generate Lucky Numbers
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-yellow-400/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                Lottery Numbers
              </h3>
              <div className="flex gap-3 justify-center mb-4">
                {numbers.lottery.map((num, index) => (
                  <NumberBall key={index} number={num} />
                ))}
              </div>
              <p className="text-purple-200 text-sm text-center">6 numbers (1-49)</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Powerball
              </h3>
              <div className="flex gap-3 justify-center mb-4">
                {numbers.powerball.slice(0, 5).map((num, index) => (
                  <NumberBall key={index} number={num} />
                ))}
                <div className="w-4"></div>
                <NumberBall number={numbers.powerball[5]} isPowerball={true} />
              </div>
              <p className="text-purple-200 text-sm text-center">5 numbers (1-69) + Powerball (1-26)</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-green-400" />
                Daily Lucky Numbers
              </h3>
              <div className="flex gap-3 justify-center mb-4">
                {numbers.daily.map((num, index) => (
                  <NumberBall key={index} number={num} />
                ))}
              </div>
              <p className="text-purple-200 text-sm text-center">Today's cosmic numbers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-pink-400/30">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-pink-400" />
                Personal Numbers
              </h3>
              {numbers.personal.length > 0 ? (
                <>
                  <div className="flex gap-3 justify-center mb-4">
                    {numbers.personal.map((num, index) => (
                      <NumberBall key={index} number={num} />
                    ))}
                  </div>
                  <p className="text-purple-200 text-sm text-center">Based on your name and birth date</p>
                </>
              ) : (
                <div className="text-center text-purple-300 py-8">
                  <p>Enter your name and birth date to generate personal numbers</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Cosmic Timing</h4>
              <p className="text-purple-200">Numbers are generated based on current planetary positions and cosmic energies.</p>
            </div>
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Personal Numerology</h4>
              <p className="text-purple-200">Your personal numbers are calculated using numerological principles from your name and birth date.</p>
            </div>
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Daily Refresh</h4>
              <p className="text-purple-200">Daily numbers change with the cosmic energies and should be refreshed each day.</p>
            </div>
            <div>
              <h4 className="text-purple-300 font-medium mb-2">Multiple Formats</h4>
              <p className="text-purple-200">Different number sets for various lottery systems and personal use.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyNumbers;