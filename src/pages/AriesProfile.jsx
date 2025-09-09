import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Flame, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const AriesProfile = () => {
  const ariesData = {
    name: 'Aries',
    symbol: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    polarity: 'Positive',
    rulingPlanet: 'Mars',
    dates: 'March 21 - April 19',
    colors: ['Red', 'Orange', 'Bright Yellow'],
    luckyNumbers: [1, 8, 17, 21, 25],
    gemstones: ['Diamond', 'Ruby', 'Bloodstone'],
    bodyParts: ['Head', 'Face', 'Brain'],
    strengths: ['Leadership', 'Courage', 'Initiative', 'Independence', 'Enthusiasm', 'Confidence'],
    challenges: ['Impatience', 'Impulsiveness', 'Aggression', 'Selfishness', 'Short temper'],
    personality: 'Aries are natural-born leaders with an infectious enthusiasm for life. They are pioneers who love to be first in everything they do. Their courage and determination make them excellent at starting new projects and inspiring others.',
    loveStyle: 'Passionate and direct in love, Aries pursue their romantic interests with intensity. They love the chase and excitement of new relationships. They need partners who can match their energy and independence.',
    careerPath: 'Aries excel in leadership roles, entrepreneurship, and careers that require quick decision-making. They thrive in competitive environments and prefer jobs with variety and challenge.',
    idealCareers: ['CEO/Executive', 'Entrepreneur', 'Military Officer', 'Surgeon', 'Sales Manager', 'Professional Athlete'],
    healthFocus: 'Aries should focus on head and brain health. They benefit from regular exercise to channel their high energy. Stress management is crucial to prevent headaches and burnout.',
    compatibleSigns: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
    challengingSigns: ['Cancer', 'Capricorn'],
    famousPeople: ['Lady Gaga', 'Robert Downey Jr.', 'Mariah Carey', 'Leonardo da Vinci', 'Maya Angelou']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{ariesData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{ariesData.name}</h1>
          <p className="text-orange-200 text-xl">{ariesData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-orange-300">
            <span>{ariesData.element} Sign</span>
            <span>•</span>
            <span>{ariesData.modality}</span>
            <span>•</span>
            <span>Ruled by {ariesData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Flame className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-red-300">{ariesData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-yellow-300">{ariesData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-orange-300">{ariesData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Target className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-red-300">{ariesData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-red-400" />
                Aries Personality
              </h2>
              <p className="text-orange-100 leading-relaxed mb-6">{ariesData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {ariesData.strengths.map((strength, index) => (
                      <li key={index} className="text-orange-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {ariesData.challenges.map((challenge, index) => (
                      <li key={index} className="text-orange-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
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
              <p className="text-orange-100 leading-relaxed mb-6">{ariesData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-green-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {ariesData.compatibleSigns.map((sign, index) => (
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
                  <h3 className="text-orange-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {ariesData.challengingSigns.map((sign, index) => (
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
              <p className="text-orange-100 leading-relaxed mb-6">{ariesData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {ariesData.idealCareers.map((career, index) => (
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
              <p className="text-orange-100 leading-relaxed mb-4">{ariesData.healthFocus}</p>
              
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                <h3 className="text-green-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex gap-2">
                  {ariesData.bodyParts.map((part, index) => (
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
                    {ariesData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-red-600/50 text-red-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {ariesData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {ariesData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Aries */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Aries
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {ariesData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Aries Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-red-600/20 rounded-lg text-center hover:bg-red-600/30 transition-colors">
              <div className="text-red-400 font-semibold">Daily Horoscope</div>
              <div className="text-red-200 text-sm">Today's reading</div>
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

export default AriesProfile;