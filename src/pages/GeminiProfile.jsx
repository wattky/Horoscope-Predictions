import React from 'react';
import { Star, Heart, Briefcase, Activity, Users, Crown, Wind, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeminiProfile = () => {
  const geminiData = {
    name: 'Gemini',
    symbol: '♊',
    element: 'Air',
    modality: 'Mutable',
    polarity: 'Positive',
    rulingPlanet: 'Mercury',
    dates: 'May 21 - June 20',
    colors: ['Yellow', 'Silver', 'Light Blue'],
    luckyNumbers: [5, 7, 14, 23, 32],
    gemstones: ['Agate', 'Citrine', 'Tiger\'s Eye'],
    bodyParts: ['Arms', 'Hands', 'Lungs', 'Nervous System'],
    strengths: ['Adaptability', 'Intelligence', 'Communication', 'Wit', 'Curiosity', 'Versatility'],
    challenges: ['Inconsistency', 'Superficiality', 'Restlessness', 'Indecisiveness', 'Nervousness'],
    personality: 'Gemini individuals are quick-witted, adaptable, and endlessly curious. They love learning new things and sharing information. Their dual nature allows them to see multiple perspectives.',
    loveStyle: 'Gemini needs mental stimulation in relationships. They love witty conversation, variety, and partners who can keep up with their quick minds and changing interests.',
    careerPath: 'Gemini excels in careers involving communication, learning, and variety. They need mental stimulation and prefer jobs that don\'t tie them down to routine.',
    idealCareers: ['Journalist', 'Teacher', 'Sales Representative', 'Writer', 'Translator', 'Social Media Manager'],
    healthFocus: 'Gemini should focus on respiratory health and nervous system. They benefit from activities that calm their busy minds and need variety in their exercise routine.',
    compatibleSigns: ['Libra', 'Aquarius', 'Aries', 'Leo'],
    challengingSigns: ['Virgo', 'Pisces'],
    famousPeople: ['Marilyn Monroe', 'Johnny Depp', 'Angelina Jolie', 'Kanye West', 'Donald Trump']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900 via-blue-900 to-cyan-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">{geminiData.symbol}</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">{geminiData.name}</h1>
          <p className="text-yellow-200 text-xl">{geminiData.dates}</p>
          <div className="flex items-center justify-center gap-6 mt-4 text-yellow-300">
            <span>{geminiData.element} Sign</span>
            <span>•</span>
            <span>{geminiData.modality}</span>
            <span>•</span>
            <span>Ruled by {geminiData.rulingPlanet}</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Wind className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Element</div>
            <div className="text-cyan-300">{geminiData.element}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Modality</div>
            <div className="text-yellow-300">{geminiData.modality}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <Star className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Ruling Planet</div>
            <div className="text-blue-300">{geminiData.rulingPlanet}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center">
            <MessageCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-white font-semibold">Polarity</div>
            <div className="text-cyan-300">{geminiData.polarity}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personality */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                Gemini Personality
              </h2>
              <p className="text-yellow-100 leading-relaxed mb-6">{geminiData.personality}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">Strengths</h3>
                  <ul className="space-y-2">
                    {geminiData.strengths.map((strength, index) => (
                      <li key={index} className="text-yellow-200 flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-3">Growth Areas</h3>
                  <ul className="space-y-2">
                    {geminiData.challenges.map((challenge, index) => (
                      <li key={index} className="text-yellow-200 flex items-center gap-2">
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
              <p className="text-yellow-100 leading-relaxed mb-6">{geminiData.loveStyle}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-cyan-400 font-semibold mb-3">Most Compatible</h3>
                  <div className="space-y-2">
                    {geminiData.compatibleSigns.map((sign, index) => (
                      <Link
                        key={index}
                        to={`/zodiac/${sign.toLowerCase()}`}
                        className="block p-3 bg-cyan-600/20 rounded-lg border border-cyan-400/30 text-cyan-200 hover:bg-cyan-600/30 transition-colors"
                      >
                        {sign}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-orange-400 font-semibold mb-3">Challenging Matches</h3>
                  <div className="space-y-2">
                    {geminiData.challengingSigns.map((sign, index) => (
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
              <p className="text-yellow-100 leading-relaxed mb-6">{geminiData.careerPath}</p>
              
              <h3 className="text-blue-400 font-semibold mb-3">Ideal Careers</h3>
              <div className="grid grid-cols-2 gap-2">
                {geminiData.idealCareers.map((career, index) => (
                  <div key={index} className="p-2 bg-blue-600/20 rounded-lg text-blue-200 text-sm text-center">
                    {career}
                  </div>
                ))}
              </div>
            </div>

            {/* Health & Wellness */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Activity className="w-6 h-6 text-cyan-400" />
                Health & Wellness
              </h2>
              <p className="text-yellow-100 leading-relaxed mb-4">{geminiData.healthFocus}</p>
              
              <div className="bg-cyan-600/20 rounded-lg p-4 border border-cyan-400/30">
                <h3 className="text-cyan-400 font-semibold mb-2">Body Parts Ruled</h3>
                <div className="flex flex-wrap gap-2">
                  {geminiData.bodyParts.map((part, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-600/50 text-cyan-200 rounded-full text-sm">
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
                    {geminiData.colors.map((color, index) => (
                      <span key={index} className="px-3 py-1 bg-yellow-600/50 text-yellow-200 rounded-full text-sm">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Lucky Numbers</h3>
                  <div className="flex gap-2">
                    {geminiData.luckyNumbers.map((number, index) => (
                      <div key={index} className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {number}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-purple-300 font-semibold mb-2">Gemstones</h3>
                  <div className="flex gap-2">
                    {geminiData.gemstones.map((gem, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                        {gem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Famous Gemini */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-yellow-400" />
                Famous Gemini
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {geminiData.famousPeople.map((person, index) => (
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
          <h3 className="text-xl font-bold text-white mb-4 text-center">Explore More Gemini Content</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link to="/daily-horoscope" className="p-4 bg-yellow-600/20 rounded-lg text-center hover:bg-yellow-600/30 transition-colors">
              <div className="text-yellow-400 font-semibold">Daily Horoscope</div>
              <div className="text-yellow-200 text-sm">Today's reading</div>
            </Link>
            <Link to="/weekly-horoscope" className="p-4 bg-cyan-600/20 rounded-lg text-center hover:bg-cyan-600/30 transition-colors">
              <div className="text-cyan-400 font-semibold">Weekly Forecast</div>
              <div className="text-cyan-200 text-sm">Week ahead</div>
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

export default GeminiProfile;