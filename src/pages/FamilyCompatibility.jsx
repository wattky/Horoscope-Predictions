import React, { useState } from 'react';
import { Home, Users, Heart, Baby, UserCheck } from 'lucide-react';

const FamilyCompatibility = () => {
  const [familyMembers, setFamilyMembers] = useState([
    { id: 1, name: '', sign: '', relationship: 'parent' }
  ]);
  const [analysis, setAnalysis] = useState(null);

  const relationships = [
    'parent', 'child', 'sibling', 'spouse', 'grandparent', 'aunt/uncle', 'cousin'
  ];

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      { id: Date.now(), name: '', sign: '', relationship: 'sibling' }
    ]);
  };

  const removeFamilyMember = (id) => {
    setFamilyMembers(familyMembers.filter(member => member.id !== id));
  };

  const updateMember = (id, field, value) => {
    setFamilyMembers(familyMembers.map(member =>
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const analyzeFamilyDynamics = () => {
    const validMembers = familyMembers.filter(m => m.name && m.sign);
    if (validMembers.length < 2) return;

    const dynamics = validMembers.map((member, index) => {
      const otherMembers = validMembers.filter((_, i) => i !== index);
      const avgCompatibility = otherMembers.reduce((sum, other) => {
        return sum + calculateCompatibility(member.sign, other.sign);
      }, 0) / otherMembers.length;

      return {
        ...member,
        compatibility: Math.round(avgCompatibility),
        role: getFamilyRole(member.sign, member.relationship)
      };
    });

    const overallHarmony = Math.round(
      dynamics.reduce((sum, member) => sum + member.compatibility, 0) / dynamics.length
    );

    setAnalysis({
      members: dynamics,
      overallHarmony,
      familyStrengths: generateFamilyStrengths(dynamics),
      growthAreas: generateGrowthAreas(dynamics),
      recommendations: generateRecommendations(dynamics)
    });
  };

  const calculateCompatibility = (sign1, sign2) => {
    // Simplified compatibility calculation
    const compatibilityScores = {
      'Fire-Fire': 85, 'Fire-Air': 80, 'Fire-Earth': 65, 'Fire-Water': 60,
      'Earth-Earth': 82, 'Earth-Air': 70, 'Earth-Water': 88,
      'Air-Air': 86, 'Air-Water': 72,
      'Water-Water': 89
    };
    
    const element1 = getElement(sign1);
    const element2 = getElement(sign2);
    const key = `${element1}-${element2}`;
    
    return compatibilityScores[key] || compatibilityScores[`${element2}-${element1}`] || 75;
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

  const getFamilyRole = (sign, relationship) => {
    const roles = {
      'Aries': 'The Leader', 'Taurus': 'The Provider', 'Gemini': 'The Communicator',
      'Cancer': 'The Nurturer', 'Leo': 'The Entertainer', 'Virgo': 'The Helper',
      'Libra': 'The Peacemaker', 'Scorpio': 'The Protector', 'Sagittarius': 'The Adventurer',
      'Capricorn': 'The Organizer', 'Aquarius': 'The Innovator', 'Pisces': 'The Empath'
    };
    return roles[sign] || 'The Unique One';
  };

  const generateFamilyStrengths = (members) => [
    'Strong emotional bonds between family members',
    'Diverse perspectives that enrich family discussions',
    'Natural support system with complementary strengths',
    'Ability to handle different types of challenges together'
  ];

  const generateGrowthAreas = (members) => [
    'Practice patience with different communication styles',
    'Create space for individual expression and needs',
    'Develop understanding of each member\'s unique traits',
    'Work on conflict resolution strategies'
  ];

  const generateRecommendations = (members) => [
    'Schedule regular family meetings to discuss important matters',
    'Plan activities that appeal to different personality types',
    'Celebrate each member\'s unique contributions to the family',
    'Create traditions that honor your family\'s diverse strengths'
  ];

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Home className="w-8 h-8 text-purple-400" />
            Family Compatibility
          </h1>
          <p className="text-purple-200 text-lg">Understand your family's cosmic dynamics</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Family Members</h2>
            <button
              onClick={addFamilyMember}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              Add Member
            </button>
          </div>

          <div className="space-y-4">
            {familyMembers.map((member, index) => (
              <div key={member.id} className="bg-white/5 rounded-xl p-4 border border-purple-400/20">
                <div className="grid md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => updateMember(member.id, 'name', e.target.value)}
                    className="p-2 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
                  />
                  <select
                    value={member.sign}
                    onChange={(e) => updateMember(member.id, 'sign', e.target.value)}
                    className="p-2 rounded-lg bg-white/20 text-white border border-purple-400/30"
                  >
                    <option value="">Zodiac sign...</option>
                    {zodiacSigns.map((sign) => (
                      <option key={sign} value={sign} className="bg-purple-900">{sign}</option>
                    ))}
                  </select>
                  <select
                    value={member.relationship}
                    onChange={(e) => updateMember(member.id, 'relationship', e.target.value)}
                    className="p-2 rounded-lg bg-white/20 text-white border border-purple-400/30"
                  >
                    {relationships.map((rel) => (
                      <option key={rel} value={rel} className="bg-purple-900">
                        {rel.charAt(0).toUpperCase() + rel.slice(1)}
                      </option>
                    ))}
                  </select>
                  {familyMembers.length > 1 && (
                    <button
                      onClick={() => removeFamilyMember(member.id)}
                      className="p-2 bg-red-600/50 text-white rounded-lg hover:bg-red-600/70 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={analyzeFamilyDynamics}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Analyze Family Dynamics
          </button>
        </div>

        {analysis && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Family Harmony Score</h2>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(analysis.overallHarmony)}`}>
                {analysis.overallHarmony}%
              </div>
              <p className="text-purple-200">Overall family compatibility and harmony</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Family Members</h3>
                <div className="space-y-4">
                  {analysis.members.map((member, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{member.name}</span>
                        <span className={`font-bold ${getScoreColor(member.compatibility)}`}>
                          {member.compatibility}%
                        </span>
                      </div>
                      <div className="text-sm text-purple-200">
                        <span>{member.sign} • {member.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-green-400" />
                    Family Strengths
                  </h3>
                  <ul className="space-y-2">
                    {analysis.familyStrengths.map((strength, index) => (
                      <li key={index} className="text-purple-200 flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Baby className="w-5 h-5 text-yellow-400" />
                    Growth Areas
                  </h3>
                  <ul className="space-y-2">
                    {analysis.growthAreas.map((area, index) => (
                      <li key={index} className="text-purple-200 flex items-start gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyCompatibility;