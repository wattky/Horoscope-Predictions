import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Waves, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CancerProfile = () => {
  const cancerData = {
    name: 'Cancer',
    symbol: '♋',
    element: 'Water',
    modality: 'Cardinal',
    polarity: 'Negative',
    rulingPlanet: 'Moon',
    dates: 'June 21 - July 22',
    colors: ['Silver', 'Sea Green', 'White'],
    luckyNumbers: [2, 7, 11, 16, 20],
    gemstones: ['Moonstone', 'Pearl', 'Ruby'],
    bodyParts: ['Chest', 'Breasts', 'Stomach'],
    strengths: ['Empathy', 'Intuition', 'Loyalty', 'Nurturing', 'Protective', 'Emotional Intelligence'],
    challenges: ['Moodiness', 'Oversensitivity', 'Clinginess', 'Pessimism', 'Manipulation'],
    personality: 'Cancer individuals are deeply intuitive and emotional. They are natural nurturers who create safe, comfortable environments for their loved ones. Their strong connection to family and home is central to their identity.',
    loveStyle: 'Cancer loves with their whole heart and seeks deep emotional connections. They are devoted partners who express love through care and creating a beautiful home together.',
    careerPath: 'Cancer excels in caring professions and roles that allow them to help others. They prefer stable work environments and value job security over high risk ventures.',
    idealCareers: ['Nurse', 'Teacher', 'Social Worker', 'Chef', 'Real Estate Agent', 'Therapist'],
    healthFocus: 'Cancer should focus on digestive health and emotional well-being. They benefit from stress management techniques and need to process emotions healthily.',
    compatibleSigns: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
    challengingSigns: ['Aries', 'Libra'],
    famousPeople: ['Princess Diana', 'Tom Hanks', 'Meryl Streep', 'Robin Williams', 'Selena Gomez']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{cancerData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{cancerData.name}</h1>
          <p className="text-blue-200 text-xl">{cancerData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-blue-300">
            <span>{cancerData.element} Sign</span>
            <span>•</span>
            <span>{cancerData.modality}</span>
            <span>•</span>
            <span>Ruled by {cancerData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Waves className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-blue-300">{cancerData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-indigo-300">{cancerData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-purple-300">{cancerData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-blue-300">{cancerData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-blue-400" />
                Cancer Personality
              </h2>
              <p className="text-blue-100 leading-relaxed mb-6">{cancerData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {cancerData.strengths.map((strength, index) => (
                      <li key={index} className="text-blue-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {cancerData.challenges.map((challenge, index) => (
                      <li key={index} className="text-blue-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
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
              <p className="text-blue-100 leading-relaxed mb-6">{cancerData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-indigo-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {cancerData.compatibleSigns.map((sign, index) => (
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
                <div>
                  <h3 className="text-purple-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {cancerData.challengingSigns.map((sign, index) => (
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
              <p className="text-blue-100 leading-relaxed mb-6">{cancerData.careerPath}</p>
              
              <h3 className="text-green-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {cancerData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-green-600/20 rounded-lg text-green-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-indigo-400" />
                Health & Wellness
              </h2>
              <p className="text-blue-100 leading-relaxed mb-4">{cancerData.healthFocus}</p>
              
              <div className="bg-indigo-600/20 rounded-lg p-4 border border-indigo-400/30">
                <h3 className="text-indigo-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex gap-2">
                  {cancerData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-indigo-600/50 text-indigo-200 rounded-full text-sm">
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
                    {cancerData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/50 text-blue-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {cancerData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {cancerData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Cancer */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Cancer
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {cancerData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Cancer Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-blue-600/20 rounded-lg text-center hover:bg-blue-600/30 transition-colors">
              <div className="text-blue-400 font-semibold">Daily Horoscope</div>
              <div className="text-blue-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-indigo-600/20 rounded-lg text-center hover:bg-indigo-600/30 transition-colors">
              <div className="text-indigo-400 font-semibold">Weekly Forecast</div>
              <div className="text-indigo-200 text-sm">Week ahead</div>
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

export default CancerProfile;