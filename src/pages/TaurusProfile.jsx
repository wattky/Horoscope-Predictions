import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Leaf, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const TaurusProfile = () => {
  const taurusData = {
    name: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    modality: 'Fixed',
    polarity: 'Negative',
    rulingPlanet: 'Venus',
    dates: 'April 20 - May 20',
    colors: ['Green', 'Pink', 'Earth Tones'],
    luckyNumbers: [2, 6, 9, 12, 24],
    gemstones: ['Emerald', 'Rose Quartz', 'Sapphire'],
    bodyParts: ['Neck', 'Throat', 'Thyroid'],
    strengths: ['Reliability', 'Patience', 'Practicality', 'Devotion', 'Stability', 'Sensuality'],
    challenges: ['Stubbornness', 'Possessiveness', 'Materialism', 'Laziness', 'Resistance to change'],
    personality: 'Taurus individuals are known for their reliability and practical approach to life. They value stability, comfort, and beauty. Their patient nature and determination help them achieve long-term goals.',
    loveStyle: 'Taurus loves deeply and loyally. They express love through physical affection and creating comfortable, beautiful environments. They seek stable, long-term relationships.',
    careerPath: 'Taurus excels in careers that offer stability and allow them to work with their hands or create beauty. They prefer steady growth over quick changes.',
    idealCareers: ['Chef/Baker', 'Interior Designer', 'Banker', 'Real Estate Agent', 'Artist', 'Gardener'],
    healthFocus: 'Taurus should focus on neck and throat health. They benefit from regular, gentle exercise and need to watch their diet as they love good food.',
    compatibleSigns: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
    challengingSigns: ['Leo', 'Aquarius'],
    famousPeople: ['Adele', 'Queen Elizabeth II', 'George Clooney', 'Audrey Hepburn', 'David Beckham']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{taurusData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{taurusData.name}</h1>
          <p className="text-green-200 text-xl">{taurusData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-green-300">
            <span>{taurusData.element} Sign</span>
            <span>•</span>
            <span>{taurusData.modality}</span>
            <span>•</span>
            <span>Ruled by {taurusData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Mountain className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-green-300">{taurusData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-emerald-300">{taurusData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-pink-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-pink-300">{taurusData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Leaf className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-green-300">{taurusData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-green-400" />
                Taurus Personality
              </h2>
              <p className="text-green-100 leading-relaxed mb-6">{taurusData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {taurusData.strengths.map((strength, index) => (
                      <li key={index} className="text-green-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {taurusData.challenges.map((challenge, index) => (
                      <li key={index} className="text-green-200 flex items-center gap-2">
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
              <p className="text-green-100 leading-relaxed mb-6">{taurusData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-emerald-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {taurusData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-emerald-600/20 rounded-lg border border-emerald-400/30 text-emerald-200 hover:bg-emerald-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-yellow-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {taurusData.challengingSigns.map((sign, index) => (
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
              <p className="text-green-100 leading-relaxed mb-6">{taurusData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {taurusData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-blue-600/20 rounded-lg text-blue-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-emerald-400" />
                Health & Wellness
              </h2>
              <p className="text-green-100 leading-relaxed mb-4">{taurusData.healthFocus}</p>
              
              <div className="bg-emerald-600/20 rounded-lg p-4 border border-emerald-400/30">
                <h3 className="text-emerald-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex gap-2">
                  {taurusData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-emerald-600/50 text-emerald-200 rounded-full text-sm">
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
                    {taurusData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-green-600/50 text-green-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {taurusData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {taurusData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Taurus */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Taurus
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {taurusData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Taurus Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-green-600/20 rounded-lg text-center hover:bg-green-600/30 transition-colors">
              <div className="text-green-400 font-semibold">Daily Horoscope</div>
              <div className="text-green-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-emerald-600/20 rounded-lg text-center hover:bg-emerald-600/30 transition-colors">
              <div className="text-emerald-400 font-semibold">Weekly Forecast</div>
              <div className="text-emerald-200 text-sm">Week ahead</div>
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

export default TaurusProfile;