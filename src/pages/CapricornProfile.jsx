import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Mountain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CapricornProfile = () => {
  const capricornData = {
    name: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    polarity: 'Negative',
    rulingPlanet: 'Saturn',
    dates: 'December 22 - January 19',
    colors: ['Black', 'Brown', 'Dark Green'],
    luckyNumbers: [4, 8, 13, 22, 26],
    gemstones: ['Garnet', 'Black Onyx', 'Jet'],
    bodyParts: ['Knees', 'Bones', 'Teeth', 'Skin'],
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers', 'Ambitious', 'Practical'],
    challenges: ['Know-it-all', 'Unforgiving', 'Condescending', 'Expecting the worst', 'Pessimistic'],
    personality: 'Capricorn individuals are ambitious achievers who value tradition and hard work. They are practical, disciplined, and have a natural ability to manage and organize.',
    loveStyle: 'Capricorn approaches love seriously and seeks long-term commitment. They express love through loyalty, providing security, and building a stable future together.',
    careerPath: 'Capricorn excels in leadership and management roles. They thrive in structured environments and prefer careers that offer clear advancement paths and recognition.',
    idealCareers: ['CEO', 'Government Official', 'Architect', 'Engineer', 'Financial Advisor', 'Project Manager'],
    healthFocus: 'Capricorn should focus on bone and joint health. They benefit from regular exercise and need to manage stress and avoid overworking.',
    compatibleSigns: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
    challengingSigns: ['Aries', 'Cancer'],
    famousPeople: ['Michelle Obama', 'Denzel Washington', 'Kate Middleton', 'Martin Luther King Jr.', 'Stephen Hawking']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-gray-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{capricornData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{capricornData.name}</h1>
          <p className="text-gray-200 text-xl">{capricornData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-gray-300">
            <span>{capricornData.element} Sign</span>
            <span>•</span>
            <span>{capricornData.modality}</span>
            <span>•</span>
            <span>Ruled by {capricornData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Mountain className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-green-300">{capricornData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-gray-300">{capricornData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-yellow-300">{capricornData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-green-300">{capricornData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-green-400" />
                Capricorn Personality
              </h2>
              <p className="text-gray-100 leading-relaxed mb-6">{capricornData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {capricornData.strengths.map((strength, index) => (
                      <li key={index} className="text-gray-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {capricornData.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
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
              <p className="text-gray-100 leading-relaxed mb-6">{capricornData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {capricornData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-green-600/20 rounded-lg border border-green-400/30 text-green-200 hover:bg-green-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {capricornData.challengingSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-yellow-600/20 rounded-lg border border-yellow-400/30 text-yellow-200 hover:bg-yellow-600/30 transition-colors"
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
              <p className="text-gray-100 leading-relaxed mb-6">{capricornData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {capricornData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-blue-600/20 rounded-lg text-blue-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-green-400" />
                Health & Wellness
              </h2>
              <p className="text-gray-100 leading-relaxed mb-4">{capricornData.healthFocus}</p>
              
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                <h3 className="text-green-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex flex-wrap gap-2">
                  {capricornData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-green-600/50 text-green-200 rounded-full text-sm">
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
                    {capricornData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-600/50 text-gray-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {capricornData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-gray-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {capricornData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Capricorn */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Capricorn
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {capricornData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Capricorn Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-gray-600/20 rounded-lg text-center hover:bg-gray-600/30 transition-colors">
              <div className="text-gray-400 font-semibold">Daily Horoscope</div>
              <div className="text-gray-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-green-600/20 rounded-lg text-center hover:bg-green-600/30 transition-colors">
              <div className="text-green-400 font-semibold">Weekly Forecast</div>
              <div className="text-green-200 text-sm">Week ahead</div>
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

export default CapricornProfile;