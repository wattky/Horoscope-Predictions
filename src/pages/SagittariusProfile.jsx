import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Compass, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const SagittariusProfile = () => {
  const sagittariusData = {
    name: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    modality: 'Mutable',
    polarity: 'Positive',
    rulingPlanet: 'Jupiter',
    dates: 'November 22 - December 21',
    colors: ['Purple', 'Turquoise', 'Light Blue'],
    luckyNumbers: [3, 9, 15, 21, 33],
    gemstones: ['Turquoise', 'Tanzanite', 'Blue Topaz'],
    bodyParts: ['Hips', 'Thighs', 'Liver'],
    strengths: ['Generous', 'Idealistic', 'Great sense of humor', 'Adventurous', 'Philosophical', 'Optimistic'],
    challenges: ['Promises more than can deliver', 'Impatient', 'Undiplomatic', 'Inconsistent'],
    personality: 'Sagittarius individuals are adventurous philosophers who love exploring new horizons. They are optimistic, freedom-loving, and always seeking truth and meaning in life.',
    loveStyle: 'Sagittarius needs freedom and adventure in love. They are honest, direct partners who express love through shared adventures and philosophical discussions.',
    careerPath: 'Sagittarius excels in careers involving travel, education, and exploration. They thrive in roles that offer variety, learning opportunities, and the chance to inspire others.',
    idealCareers: ['Travel Writer', 'Professor', 'Photographer', 'Tour Guide', 'Philosopher', 'International Business'],
    healthFocus: 'Sagittarius should focus on hip and thigh health. They benefit from outdoor activities and need to avoid overindulgence in food and drink.',
    compatibleSigns: ['Aries', 'Leo', 'Libra', 'Aquarius'],
    challengingSigns: ['Virgo', 'Pisces'],
    famousPeople: ['Taylor Swift', 'Brad Pitt', 'Jay-Z', 'Winston Churchill', 'Walt Disney']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{sagittariusData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{sagittariusData.name}</h1>
          <p className="text-purple-200 text-xl">{sagittariusData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-purple-300">
            <span>{sagittariusData.element} Sign</span>
            <span>•</span>
            <span>{sagittariusData.modality}</span>
            <span>•</span>
            <span>Ruled by {sagittariusData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-purple-300">{sagittariusData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-blue-300">{sagittariusData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-indigo-300">{sagittariusData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Compass className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-purple-300">{sagittariusData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-purple-400" />
                Sagittarius Personality
              </h2>
              <p className="text-purple-100 leading-relaxed mb-6">{sagittariusData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {sagittariusData.strengths.map((strength, index) => (
                      <li key={index} className="text-purple-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {sagittariusData.challenges.map((challenge, index) => (
                      <li key={index} className="text-purple-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Love & Relationships */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-400" />
                Love & Relationships
              </h2>
              <p className="text-purple-100 leading-relaxed mb-6">{sagittariusData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {sagittariusData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-blue-600/20 rounded-lg border border-blue-400/30 text-blue-200 hover:bg-blue-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {sagittariusData.challengingSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-indigo-600/20 rounded-lg border border-indigo-400/30 text-indigo-200 hover:bg-indigo-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Career & Success */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-green-400" />
                Career & Success
              </h2>
              <p className="text-purple-100 leading-relaxed mb-6">{sagittariusData.careerPath}</p>
              
              <h3 className="text-green-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {sagittariusData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-green-600/20 rounded-lg text-green-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-blue-400" />
                Health & Wellness
              </h2>
              <p className="text-purple-100 leading-relaxed mb-4">{sagittariusData.healthFocus}</p>
              
              <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-400/30">
                <h3 className="text-blue-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex gap-2">
                  {sagittariusData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-600/50 text-blue-200 rounded-full text-sm">
                      {part}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Lucky Elements */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Lucky Elements</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Colors</h3>
                  <div className="flex gap-2">
                    {sagittariusData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {sagittariusData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {sagittariusData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Sagittarius */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Sagittarius
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {sagittariusData.famousPeople.map((person, index) => (
                  <div key={index} className="p-3 bg-yellow-600/20 rounded-lg text-yellow-200 text-center text-sm">
                    {person}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Sagittarius Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-purple-600/20 rounded-lg text-center hover:bg-purple-600/30 transition-colors">
              <div className="text-purple-400 font-semibold">Daily Horoscope</div>
              <div className="text-purple-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-blue-600/20 rounded-lg text-center hover:bg-blue-600/30 transition-colors">
              <div className="text-blue-400 font-semibold">Weekly Forecast</div>
              <div className="text-blue-200 text-sm">Week ahead</div>
            </Link>
            <Link to="/instant-match" className="p-4 bg-pink-600/20 rounded-lg text-center hover:bg-pink-600/30 transition-colors">
              <div className="text-pink-400 font-semibold">Find Matches</div>
              <div className="text-pink-200 text-sm">Compatibility</div>
            </Link>
            <Link to="/natal-chart" className="p-4 bg-indigo-600/20 rounded-lg text-center hover:bg-indigo-600/30 transition-colors">
              <div className="text-indigo-400 font-semibold">Birth Chart</div>
              <div className="text-indigo-200 text-sm">Full analysis</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SagittariusProfile;