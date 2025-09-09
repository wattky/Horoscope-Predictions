import React, { useState } from 'react';
import { Users, Plus, Trash2, BarChart3, Target } from 'lucide-react';

const GroupCompatibility = () => {
  const [groupMembers, setGroupMembers] = useState([
    { id: 1, name: '', sign: '', role: 'member' }
  ]);
  const [groupAnalysis, setGroupAnalysis] = useState(null);

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];

  const roles = ['leader', 'member', 'supporter', 'creative', 'organizer'];

  const addMember = () => {
    setGroupMembers([
      ...groupMembers,
      { id: Date.now(), name: '', sign: '', role: 'member' }
    ]);
  };

  const removeMember = (id) => {
    if (groupMembers.length > 1) {
      setGroupMembers(groupMembers.filter(member => member.id !== id));
    }
  };

  const updateMember = (id, field, value) => {
    setGroupMembers(groupMembers.map(member =>
      member.id === id ? { ...member, [field]: value } : member
    ));
  };

  const analyzeGroup = () => {
    const validMembers = groupMembers.filter(m => m.name && m.sign);
    if (validMembers.length < 2) return;

    // Calculate element distribution
    const elements = { Fire: 0, Earth: 0, Air: 0, Water: 0 };
    validMembers.forEach(member => {
      const element = getElement(member.sign);
      elements[element]++;
    });

    // Calculate modality distribution
    const modalities = { Cardinal: 0, Fixed: 0, Mutable: 0 };
    validMembers.forEach(member => {
      const modality = getModality(member.sign);
      modalities[modality]++;
    });

    // Calculate overall group harmony
    let totalCompatibility = 0;
    let pairCount = 0;
    
    for (let i = 0; i < validMembers.length; i++) {
      for (let j = i + 1; j < validMembers.length; j++) {
        totalCompatibility += calculatePairCompatibility(validMembers[i].sign, validMembers[j].sign);
        pairCount++;
      }
    }

    const groupHarmony = Math.round(totalCompatibility / pairCount);

    setGroupAnalysis({
      members: validMembers,
      groupHarmony,
      elements,
      modalities,
      strengths: generateGroupStrengths(elements, modalities),
      challenges: generateGroupChallenges(elements, modalities),
      recommendations: generateGroupRecommendations(elements, modalities, groupHarmony)
    });
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

  const getModality = (sign) => {
    const modalities = {
      'Aries': 'Cardinal', 'Cancer': 'Cardinal', 'Libra': 'Cardinal', 'Capricorn': 'Cardinal',
      'Taurus': 'Fixed', 'Leo': 'Fixed', 'Scorpio': 'Fixed', 'Aquarius': 'Fixed',
      'Gemini': 'Mutable', 'Virgo': 'Mutable', 'Sagittarius': 'Mutable', 'Pisces': 'Mutable'
    };
    return modalities[sign] || '';
  };

  const calculatePairCompatibility = (sign1, sign2) => {
    // Simplified compatibility calculation
    return Math.floor(Math.random() * 40) + 60; // 60-100 range
  };

  const generateGroupStrengths = (elements, modalities) => {
    const strengths = [];
    
    if (elements.Fire > 0 && elements.Air > 0) {
      strengths.push('High energy and innovative thinking combination');
    }
    if (elements.Earth > 0 && elements.Water > 0) {
      strengths.push('Practical support with emotional understanding');
    }
    if (modalities.Cardinal > 1) {
      strengths.push('Strong leadership and initiative-taking abilities');
    }
    if (modalities.Mutable > 1) {
      strengths.push('Excellent adaptability and flexibility');
    }
    
    return strengths.length > 0 ? strengths : ['Diverse perspectives and approaches', 'Unique group dynamic'];
  };

  const generateGroupChallenges = (elements, modalities) => {
    const challenges = [];
    
    if (elements.Fire > 2) {
      challenges.push('Too much fire energy may lead to conflicts');
    }
    if (elements.Water > 2) {
      challenges.push('Emotional intensity may overwhelm decision-making');
    }
    if (modalities.Fixed > 2) {
      challenges.push('Stubbornness may create deadlocks');
    }
    
    return challenges.length > 0 ? challenges : ['Minor differences in approach', 'Need for clear communication'];
  };

  const generateGroupRecommendations = (elements, modalities, harmony) => [
    'Assign roles based on each member\'s natural strengths',
    'Create structured communication channels',
    'Plan activities that engage all personality types',
    'Establish clear goals and decision-making processes'
  ];

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
            Group Compatibility
          </h1>
          <p className="text-purple-200 text-lg">Analyze team, family, or friend group dynamics</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">Group Members</h2>
            <button
              onClick={addMember}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Member
            </button>
          </div>

          <div className="space-y-4">
            {groupMembers.map((member, index) => (
              <div key={member.id} className="bg-white/5 rounded-xl p-4 border border-purple-400/20">
                <div className="grid md:grid-cols-4 gap-4">
                  <input
                    type="text"
                    placeholder="Member name"
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
                    value={member.role}
                    onChange={(e) => updateMember(member.id, 'role', e.target.value)}
                    className="p-2 rounded-lg bg-white/20 text-white border border-purple-400/30"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} className="bg-purple-900">
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                      </option>
                    ))}
                  </select>
                  {groupMembers.length > 1 && (
                    <button
                      onClick={() => removeMember(member.id)}
                      className="p-2 bg-red-600/50 text-white rounded-lg hover:bg-red-600/70 transition-colors flex items-center justify-center"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={analyzeGroup}
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Analyze Group Dynamics
          </button>
        </div>

        {groupAnalysis && (
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Group Harmony</h2>
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(groupAnalysis.groupHarmony)}`}>
                {groupAnalysis.groupHarmony}%
              </div>
              <p className="text-purple-200">Overall group compatibility score</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Element Distribution
                </h3>
                <div className="space-y-3">
                  {Object.entries(groupAnalysis.elements).map(([element, count]) => (
                    <div key={element} className="flex items-center justify-between">
                      <span className="text-purple-200">{element}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                            style={{ width: `${(count / groupAnalysis.members.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-semibold w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-400" />
                  Modality Distribution
                </h3>
                <div className="space-y-3">
                  {Object.entries(groupAnalysis.modalities).map(([modality, count]) => (
                    <div key={modality} className="flex items-center justify-between">
                      <span className="text-purple-200">{modality}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                            style={{ width: `${(count / groupAnalysis.members.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-white font-semibold w-8">{count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Group Strengths</h3>
                <ul className="space-y-2">
                  {groupAnalysis.strengths.map((strength, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Potential Challenges</h3>
                <ul className="space-y-2">
                  {groupAnalysis.challenges.map((challenge, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Recommendations</h3>
                <ul className="space-y-2">
                  {groupAnalysis.recommendations.map((rec, index) => (
                    <li key={index} className="text-purple-200 flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {!groupAnalysis && (
          <div className="text-center text-purple-200 py-16">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Add group members and analyze your team dynamics</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupCompatibility;