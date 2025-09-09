import React, { useState } from 'react';
import { Users, UserPlus, Star, MessageCircle } from 'lucide-react';

const FriendCompatibility = () => {
  const [friendData, setFriendData] = useState({
    yourSign: '',
    friendSign: '',
    yourElement: '',
    friendElement: ''
  });
  const [compatibility, setCompatibility] = useState(null);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const friendshipCompatibility = {
    'Fire-Fire': { score: 88, type: 'Adventure Buddies', description: 'High energy, exciting adventures, mutual inspiration' },
    'Fire-Air': { score: 85, type: 'Dynamic Duo', description: 'Stimulating conversations, shared enthusiasm, great teamwork' },
    'Fire-Earth': { score: 65, type: 'Grounding Force', description: 'Earth grounds Fire, Fire energizes Earth' },
    'Fire-Water': { score: 60, type: 'Steam Power', description: 'Passionate but potentially volatile friendship' },
    'Earth-Earth': { score: 82, type: 'Solid Foundation', description: 'Reliable, practical, long-lasting friendship' },
    'Earth-Air': { score: 70, type: 'Balanced Perspective', description: 'Earth provides stability, Air brings new ideas' },
    'Earth-Water': { score: 90, type: 'Nurturing Bond', description: 'Deeply supportive, emotionally satisfying friendship' },
    'Air-Air': { score: 86, type: 'Mental Connection', description: 'Intellectual stimulation, great communication, shared interests' },
    'Air-Water': { score: 72, type: 'Emotional Intelligence', description: 'Air helps Water communicate, Water adds depth' },
    'Water-Water': { score: 89, type: 'Soul Sisters/Brothers', description: 'Intuitive understanding, emotional support, deep empathy' }
  };

  const getElement = (sign) => {
    const elements = {
      'Aries': 'Fire', 'Leo': 'Fire', 'Sagittarius': 'Fire',
      'Taurus': 'Earth', 'Virgo': 'Earth', 'Capricorn': 'Earth',
      'Gemini': 'Air', 'Libra': 'Air', 'Aquarius': 'Air',
      'Cancer': 'Water', 'Scorpio': 'Water', 'Pisces': 'Water'
    };
    return elements[sign] || '';
  };

  const calculateFriendship = () => {
    if (!friendData.yourSign || !friendData.friendSign) return;

    const yourElement = getElement(friendData.yourSign);
    const friendElement = getElement(friendData.friendSign);
    const key = `${yourElement}-${friendElement}`;
    
    let result = friendshipCompatibility[key];
    if (!result) {
      // Fallback for same combination in reverse
      const reverseKey = `${friendElement}-${yourElement}`;
      result = friendshipCompatibility[reverseKey] || {
        score: 75,
        type: 'Unique Bond',
        description: 'A special friendship with its own dynamics'
      };
    }

    setCompatibility({
      ...result,
      yourSign: friendData.yourSign,
      friendSign: friendData.friendSign,
      yourElement,
      friendElement,
      activities: generateActivities(yourElement, friendElement),
      challenges: generateChallenges(yourElement, friendElement),
      tips: generateTips(yourElement, friendElement)
    });
  };

  const generateActivities = (element1, element2) => {
    const activities = {
      'Fire-Fire': ['Adventure sports', 'Travel planning', 'Competitive games', 'Outdoor activities'],
      'Fire-Air': ['Brainstorming sessions', 'Social events', 'Creative projects', 'Networking'],
      'Fire-Earth': ['Hiking', 'Gardening', 'Cooking together', 'Building projects'],
      'Fire-Water': ['Beach trips', 'Art galleries', 'Music festivals', 'Emotional movies'],
      'Earth-Earth': ['Crafting', 'Home improvement', 'Nature walks', 'Practical learning'],
      'Earth-Air': ['Museums', 'Book clubs', 'Planning trips', 'Learning new skills'],
      'Earth-Water': ['Spa days', 'Quiet dinners', 'Art creation', 'Meditation'],
      'Air-Air': ['Debates', 'Social gatherings', 'Technology exploration', 'Travel'],
      'Air-Water': ['Poetry readings', 'Deep conversations', 'Artistic pursuits', 'Spiritual exploration'],
      'Water-Water': ['Emotional support', 'Intuitive activities', 'Creative expression', 'Quiet bonding']
    };
    return activities[`${element1}-${element2}`] || activities[`${element2}-${element1}`] || ['Quality time together'];
  };

  const generateChallenges = (element1, element2) => {
    const challenges = {
      'Fire-Earth': ['Fire may find Earth too slow', 'Earth may find Fire too impulsive'],
      'Fire-Water': ['Fire may overwhelm Water', 'Water may dampen Fire\'s enthusiasm'],
      'Earth-Air': ['Earth may find Air unreliable', 'Air may find Earth too rigid'],
      'Air-Water': ['Air may seem detached to Water', 'Water may seem too emotional for Air']
    };
    return challenges[`${element1}-${element2}`] || challenges[`${element2}-${element1}`] || ['Minor differences in approach'];
  };

  const generateTips = (element1, element2) => {
    return [
      'Respect each other\'s different approaches to life',
      'Find activities that satisfy both of your needs',
      'Communicate openly about your expectations',
      'Appreciate what each person brings to the friendship',
      'Be patient with each other\'s natural tendencies'
    ];
  };

  const getScoreColor = (score) => {
    if (score >= 85) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    if (score >= 65) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-blue-400" />
            Friend Compatibility
          </h1>
          <p className="text-purple-200 text-lg">Explore the cosmic dynamics of friendship</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Compare Signs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-purple-200 mb-2">Your Sign</label>
              <select
                value={friendData.yourSign}
                onChange={(e) => setFriendData({...friendData, yourSign: e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
              >
                <option value="">Choose your sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign} className="bg-purple-900">{sign}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-purple-200 mb-2">Friend's Sign</label>
              <select
                value={friendData.friendSign}
                onChange={(e) => setFriendData({...friendData, friendSign: e.target.value})}
                className="w-full p-3 rounded-lg bg-white/20 text-white border border-purple-400/30"
              >
                <option value="">Choose friend's sign...</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign} className="bg-purple-900">{sign}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            onClick={calculateFriendship}
            disabled={!friendData.yourSign || !friendData.friendSign}
            className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50"
          >
            Analyze Friendship
          </button>
        </div>

        {compatibility && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-2xl font-bold text-white">{compatibility.yourSign}</span>
                <Users className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">{compatibility.friendSign}</span>
              </div>
              <div className={`text-5xl font-bold mb-4 ${getScoreColor(compatibility.score)}`}>
                {compatibility.score}%
              </div>
              <div className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600 inline-block">
                {compatibility.type}
              </div>
              <p className="text-purple-200 mt-4 max-w-2xl mx-auto">{compatibility.description}</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Best Activities
                </h3>
                <ul className="space-y-2">
                  {compatibility.activities.map((activity, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-400" />
                  Potential Challenges
                </h3>
                <ul className="space-y-2">
                  {compatibility.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <UserPlus className="w-5 h-5 text-green-400" />
                  Friendship Tips
                </h3>
                <ul className="space-y-2">
                  {compatibility.tips.map((tip, index) => (
                    <li key={index} className="text-purple-200 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!compatibility && (
          <div className="text-center text-purple-200 py-16">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Select both zodiac signs to analyze your friendship compatibility</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendCompatibility;