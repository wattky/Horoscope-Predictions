import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Sun, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeoProfile = () => {
  const leoData = {
    name: 'Leo',
    symbol: '♌',
    element: 'Fire',
    modality: 'Fixed',
    polarity: 'Positive',
    rulingPlanet: 'Sun',
    dates: 'July 23 - August 22',
    colors: ['Gold', 'Orange', 'Yellow'],
    luckyNumbers: [1, 3, 10, 19, 21],
    gemstones: ['Peridot', 'Citrine', 'Sunstone'],
    bodyParts: ['Heart', 'Spine', 'Back'],
    strengths: ['Confidence', 'Generosity', 'Leadership', 'Creativity', 'Warmth', 'Loyalty'],
    challenges: ['Arrogance', 'Stubbornness', 'Self-centeredness', 'Laziness', 'Inflexibility'],
    personality: 'Leo individuals are natural performers who love to be in the spotlight. They are generous, warm-hearted, and creative. Their confidence and charisma make them natural leaders who inspire others.',
    loveStyle: 'Leo loves with dramatic flair and grand gestures. They are generous lovers who enjoy romance and being adored. They need partners who appreciate their need for attention and admiration.',
    careerPath: 'Leo excels in creative fields and leadership positions. They thrive in careers that allow them to express themselves and be recognized for their talents.',
    idealCareers: ['Actor/Performer', 'CEO', 'Artist', 'Teacher', 'Event Planner', 'Fashion Designer'],
    healthFocus: 'Leo should focus on heart health and back care. They benefit from activities that keep them active and engaged, but need to avoid overexertion.',
    compatibleSigns: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
    challengingSigns: ['Taurus', 'Scorpio'],
    famousPeople: ['Madonna', 'Barack Obama', 'Jennifer Lopez', 'Andy Warhol', 'Mick Jagger']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{leoData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{leoData.name}</h1>
          <p className="text-yellow-200 text-xl">{leoData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-yellow-300">
            <span>{leoData.element} Sign</span>
            <span>•</span>
            <span>{leoData.modality}</span>
            <span>•</span>
            <span>Ruled by {leoData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Flame className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-orange-300">{leoData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-yellow-300">{leoData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Sun className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-yellow-300">{leoData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-orange-300">{leoData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                Leo Personality
              </h2>
              <p className="text-yellow-100 leading-relaxed mb-6">{leoData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-orange-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {leoData.strengths.map((strength, index) => (
                      <li key={index} className="text-yellow-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {leoData.challenges.map((challenge, index) => (
                      <li key={index} className="text-yellow-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
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
              <p className="text-yellow-100 leading-relaxed mb-6">{leoData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-orange-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {leoData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-orange-600/20 rounded-lg border border-orange-400/30 text-orange-200 hover:bg-orange-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {leoData.challengingSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-red-600/20 rounded-lg border border-red-400/30 text-red-200 hover:bg-red-600/30 transition-colors"
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
                <Briefcase className="w-6 h-6 text-blue-400" />
                Career & Success
              </h2>
              <p className="text-yellow-100 leading-relaxed mb-6">{leoData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {leoData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-blue-600/20 rounded-lg text-blue-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-orange-400" />
                Health & Wellness
              </h2>
              <p className="text-yellow-100 leading-relaxed mb-4">{leoData.healthFocus}</p>
              
              <div className="bg-orange-600/20 rounded-lg p-4 border border-orange-400/30">
                <h3 className="text-orange-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex gap-2">
                  {leoData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-600/50 text-orange-200 rounded-full text-sm">
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
                    {leoData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-600/50 text-yellow-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {leoData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {leoData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Leo */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Leo
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {leoData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Leo Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-yellow-600/20 rounded-lg text-center hover:bg-yellow-600/30 transition-colors">
              <div className="text-yellow-400 font-semibold">Daily Horoscope</div>
              <div className="text-yellow-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-orange-600/20 rounded-lg text-center hover:bg-orange-600/30 transition-colors">
              <div className="text-orange-400 font-semibold">Weekly Forecast</div>
              <div className="text-orange-200 text-sm">Week ahead</div>
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

export default LeoProfile;