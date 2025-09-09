import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Waves, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AquariusProfile = () => {
  const aquariusData = {
    name: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    modality: 'Fixed',
    polarity: 'Positive',
    rulingPlanet: 'Uranus (Saturn)',
    dates: 'January 20 - February 18',
    colors: ['Electric Blue', 'Silver', 'Aqua'],
    luckyNumbers: [4, 7, 11, 22, 29],
    gemstones: ['Amethyst', 'Garnet', 'Silver'],
    bodyParts: ['Circulatory System', 'Ankles', 'Shins'],
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian', 'Inventive', 'Idealistic'],
    challenges: ['Runs from emotional expression', 'Temperamental', 'Uncompromising', 'Aloof', 'Rebellious'],
    personality: 'Aquarius individuals are innovative visionaries who think outside the box. They are humanitarian, independent, and always looking toward the future. Their unique perspective makes them natural revolutionaries.',
    loveStyle: 'Aquarius needs intellectual connection and freedom in love. They express love through friendship, shared ideals, and giving their partner space to be themselves.',
    careerPath: 'Aquarius excels in innovative fields and humanitarian work. They thrive in careers that allow them to make a difference and work with cutting-edge ideas or technology.',
    idealCareers: ['Scientist', 'Inventor', 'Social Worker', 'Tech Developer', 'Activist', 'Astrologer'],
    healthFocus: 'Aquarius should focus on circulatory health and ankle care. They benefit from activities that stimulate their mind and need to avoid isolation.',
    compatibleSigns: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
    challengingSigns: ['Taurus', 'Scorpio'],
    famousPeople: ['Oprah Winfrey', 'Ellen DeGeneres', 'Abraham Lincoln', 'Bob Marley', 'Jennifer Aniston']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{aquariusData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{aquariusData.name}</h1>
          <p className="text-cyan-200 text-xl">{aquariusData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-cyan-300">
            <span>{aquariusData.element} Sign</span>
            <span>•</span>
            <span>{aquariusData.modality}</span>
            <span>•</span>
            <span>Ruled by {aquariusData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Waves className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-cyan-300">{aquariusData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-blue-300">{aquariusData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-indigo-300">{aquariusData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-cyan-300">{aquariusData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-cyan-400" />
                Aquarius Personality
              </h2>
              <p className="text-cyan-100 leading-relaxed mb-6">{aquariusData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {aquariusData.strengths.map((strength, index) => (
                      <li key={index} className="text-cyan-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {aquariusData.challenges.map((challenge, index) => (
                      <li key={index} className="text-cyan-200 flex items-center gap-2">
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
              <p className="text-cyan-100 leading-relaxed mb-6">{aquariusData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {aquariusData.compatibleSigns.map((sign, index) => (
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
                    {aquariusData.challengingSigns.map((sign, index) => (
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
              <p className="text-cyan-100 leading-relaxed mb-6">{aquariusData.careerPath}</p>
              
              <h3 className="text-green-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {aquariusData.idealCareers.map((career, index) => (
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
              <p className="text-cyan-100 leading-relaxed mb-4">{aquariusData.healthFocus}</p>
              
              <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-400/30">
                <h3 className="text-blue-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex flex-wrap gap-2">
                  {aquariusData.bodyParts.map((part, index) => (
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
                    {aquariusData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-600/50 text-cyan-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {aquariusData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {aquariusData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Aquarius */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Aquarius
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {aquariusData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Aquarius Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-cyan-600/20 rounded-lg text-center hover:bg-cyan-600/30 transition-colors">
              <div className="text-cyan-400 font-semibold">Daily Horoscope</div>
              <div className="text-cyan-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-blue-600/20 rounded-lg text-center hover:bg-blue-600/30 transition-colors">
              <div className="text-blue-400 font-semibold">Weekly Forecast</div>
              <div className="text-blue-200 text-sm">Week ahead</div>
            </Link>
            <Link to="/instant-match" className="p-4 bg-pink-600/20 rounded-lg text-center hover:bg-pink-600/30 transition-colors">
              <div className="text-pink-400 font-semibold">Find Matches</div>
              <div className="text-pink-200 text-sm">Compatibility</div>
            </Link>
            <Link to="/natal-chart" className="p-4 bg-purple-600/20 rounded-lg text-center hover:bg-purple-600/30 transition-colors">
              <div className="text-purple-400 font-semibold">Birth Chart</div>
              <div className="text-purple-200 text-sm">Full analysis</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquariusProfile;