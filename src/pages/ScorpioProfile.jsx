import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScorpioProfile = () => {
  const scorpioData = {
    name: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    modality: 'Fixed',
    polarity: 'Negative',
    rulingPlanet: 'Pluto (Mars)',
    dates: 'October 23 - November 21',
    colors: ['Deep Red', 'Black', 'Maroon'],
    luckyNumbers: [8, 11, 18, 22, 29],
    gemstones: ['Topaz', 'Opal', 'Obsidian'],
    bodyParts: ['Reproductive System', 'Bladder', 'Rectum'],
    strengths: ['Passionate', 'Determined', 'Brave', 'Loyal', 'Honest', 'Ambitious'],
    challenges: ['Jealous', 'Secretive', 'Resentful', 'Controlling', 'Stubborn'],
    personality: 'Scorpio individuals are intense, passionate, and mysterious. They have incredible emotional depth and the ability to transform themselves and others. Their intuitive powers are unmatched.',
    loveStyle: 'Scorpio loves with incredible intensity and depth. They seek soul-deep connections and are fiercely loyal partners. They express love through emotional intimacy and unwavering devotion.',
    careerPath: 'Scorpio excels in careers involving investigation, transformation, and healing. They thrive in roles that require depth, research, and the ability to handle intense situations.',
    idealCareers: ['Detective', 'Psychologist', 'Surgeon', 'Researcher', 'Therapist', 'Investment Banker'],
    healthFocus: 'Scorpio should focus on reproductive health and emotional well-being. They benefit from activities that help them process intense emotions and transform negative energy.',
    compatibleSigns: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
    challengingSigns: ['Leo', 'Aquarius'],
    famousPeople: ['Leonardo DiCaprio', 'Ryan Gosling', 'Katy Perry', 'Pablo Picasso', 'Hillary Clinton']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-black to-purple-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{scorpioData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{scorpioData.name}</h1>
          <p className="text-red-200 text-xl">{scorpioData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-red-300">
            <span>{scorpioData.element} Sign</span>
            <span>•</span>
            <span>{scorpioData.modality}</span>
            <span>•</span>
            <span>Ruled by {scorpioData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Eye className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-red-300">{scorpioData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-purple-300">{scorpioData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-red-300">{scorpioData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-purple-300">{scorpioData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-red-400" />
                Scorpio Personality
              </h2>
              <p className="text-red-100 leading-relaxed mb-6">{scorpioData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {scorpioData.strengths.map((strength, index) => (
                      <li key={index} className="text-red-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {scorpioData.challenges.map((challenge, index) => (
                      <li key={index} className="text-red-200 flex items-center gap-2">
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
              <p className="text-red-100 leading-relaxed mb-6">{scorpioData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {scorpioData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-purple-600/20 rounded-lg border border-purple-400/30 text-purple-200 hover:bg-purple-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {scorpioData.challengingSigns.map((sign, index) => (
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
                <Briefcase className="w-6 h-6 text-green-400" />
                Career & Success
              </h2>
              <p className="text-red-100 leading-relaxed mb-6">{scorpioData.careerPath}</p>
              
              <h3 className="text-green-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {scorpioData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-green-600/20 rounded-lg text-green-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-purple-400" />
                Health & Wellness
              </h2>
              <p className="text-red-100 leading-relaxed mb-4">{scorpioData.healthFocus}</p>
              
              <div className="bg-purple-600/20 rounded-lg p-4 border border-purple-400/30">
                <h3 className="text-purple-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex flex-wrap gap-2">
                  {scorpioData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
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
                    {scorpioData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-red-600/50 text-red-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {scorpioData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-red-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {scorpioData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Scorpio */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Scorpio
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {scorpioData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Scorpio Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-red-600/20 rounded-lg text-center hover:bg-red-600/30 transition-colors">
              <div className="text-red-400 font-semibold">Daily Horoscope</div>
              <div className="text-red-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-purple-600/20 rounded-lg text-center hover:bg-purple-600/30 transition-colors">
              <div className="text-purple-400 font-semibold">Weekly Forecast</div>
              <div className="text-purple-200 text-sm">Week ahead</div>
            </Link>
            <Link to="/instant-match" className="p-4 bg-pink-600/20 rounded-lg text-center hover:bg-pink-600/30 transition-colors">
              <div className="text-pink-400 font-semibold">Find Matches</div>
              <div className="text-pink-200 text-sm">Compatibility</div>
            </Link>
            <Link to="/natal-chart" className="p-4 bg-black/20 rounded-lg text-center hover:bg-black/30 transition-colors">
              <div className="text-white font-semibold">Birth Chart</div>
              <div className="text-gray-200 text-sm">Full analysis</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorpioProfile;