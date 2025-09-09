import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Leaf, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirgoProfile = () => {
  const virgoData = {
    name: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    modality: 'Mutable',
    polarity: 'Negative',
    rulingPlanet: 'Mercury',
    dates: 'August 23 - September 22',
    colors: ['Navy Blue', 'Grey', 'Brown'],
    luckyNumbers: [3, 6, 15, 20, 27],
    gemstones: ['Sapphire', 'Carnelian', 'Peridot'],
    bodyParts: ['Digestive System', 'Intestines', 'Spleen'],
    strengths: ['Analytical', 'Practical', 'Reliable', 'Hardworking', 'Kind', 'Perfectionist'],
    challenges: ['Overcritical', 'Worry', 'Shyness', 'Overly demanding', 'Conservative'],
    personality: 'Virgo individuals are analytical perfectionists who pay attention to detail. They are practical, reliable, and have a strong desire to help others. Their methodical approach ensures high-quality results.',
    loveStyle: 'Virgo shows love through acts of service and practical care. They are devoted partners who express affection by taking care of their loved ones\' needs and creating order.',
    careerPath: 'Virgo excels in detail-oriented careers that require precision and analysis. They thrive in service-oriented roles where they can help others and make improvements.',
    idealCareers: ['Doctor', 'Accountant', 'Editor', 'Researcher', 'Nutritionist', 'Quality Control Manager'],
    healthFocus: 'Virgo should focus on digestive health and stress management. They benefit from regular routines and need to avoid overthinking and perfectionism.',
    compatibleSigns: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
    challengingSigns: ['Gemini', 'Sagittarius'],
    famousPeople: ['Beyoncé', 'Michael Jackson', 'Warren Buffett', 'Mother Teresa', 'Keanu Reeves']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{virgoData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{virgoData.name}</h1>
          <p className="text-green-200 text-xl">{virgoData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-green-300">
            <span>{virgoData.element} Sign</span>
            <span>•</span>
            <span>{virgoData.modality}</span>
            <span>•</span>
            <span>Ruled by {virgoData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Leaf className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-green-300">{virgoData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-blue-300">{virgoData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-gray-300">{virgoData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-green-300">{virgoData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-green-400" />
                Virgo Personality
              </h2>
              <p className="text-green-100 leading-relaxed mb-6">{virgoData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {virgoData.strengths.map((strength, index) => (
                      <li key={index} className="text-green-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-gray-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {virgoData.challenges.map((challenge, index) => (
                      <li key={index} className="text-green-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
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
              <p className="text-green-100 leading-relaxed mb-6">{virgoData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-blue-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {virgoData.compatibleSigns.map((sign, index) => (
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
                  <h3 className="text-gray-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {virgoData.challengingSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-gray-600/20 rounded-lg border border-gray-400/30 text-gray-200 hover:bg-gray-600/30 transition-colors"
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
              <p className="text-green-100 leading-relaxed mb-6">{virgoData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {virgoData.idealCareers.map((career, index) => (
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
              <p className="text-green-100 leading-relaxed mb-4">{virgoData.healthFocus}</p>
              
              <div className="bg-green-600/20 rounded-lg p-4 border border-green-400/30">
                <h3 className="text-green-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex flex-wrap gap-2">
                  {virgoData.bodyParts.map((part, index) => (
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
                    {virgoData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-600/50 text-blue-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {virgoData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {virgoData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Virgo */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Virgo
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {virgoData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Virgo Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-green-600/20 rounded-lg text-center hover:bg-green-600/30 transition-colors">
              <div className="text-green-400 font-semibold">Daily Horoscope</div>
              <div className="text-green-200 text-sm">Today's reading</div>
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

export default VirgoProfile;