import React, { useState } from 'react';
import { Search, Filter, Star, Heart, Users, Zap, Target, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ZodiacTraits = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedElement, setSelectedElement] = useState('all');

  const traits = [
    // Aries
    { trait: 'Leadership', sign: 'Aries', category: 'personality', element: 'Fire', description: 'Natural ability to guide and inspire others' },
    { trait: 'Courage', sign: 'Aries', category: 'personality', element: 'Fire', description: 'Fearless in facing challenges and taking risks' },
    { trait: 'Initiative', sign: 'Aries', category: 'behavior', element: 'Fire', description: 'Always ready to start new projects and adventures' },
    { trait: 'Impatience', sign: 'Aries', category: 'challenge', element: 'Fire', description: 'Difficulty waiting for results or slow processes' },
    
    // Taurus
    { trait: 'Reliability', sign: 'Taurus', category: 'personality', element: 'Earth', description: 'Consistently dependable and trustworthy' },
    { trait: 'Sensuality', sign: 'Taurus', category: 'love', element: 'Earth', description: 'Appreciation for physical pleasures and beauty' },
    { trait: 'Stubbornness', sign: 'Taurus', category: 'challenge', element: 'Earth', description: 'Resistance to change and new ideas' },
    { trait: 'Patience', sign: 'Taurus', category: 'personality', element: 'Earth', description: 'Ability to wait and work steadily toward goals' },
    
    // Gemini
    { trait: 'Adaptability', sign: 'Gemini', category: 'personality', element: 'Air', description: 'Quick to adjust to new situations and environments' },
    { trait: 'Communication', sign: 'Gemini', category: 'behavior', element: 'Air', description: 'Excellent verbal and written expression skills' },
    { trait: 'Curiosity', sign: 'Gemini', category: 'personality', element: 'Air', description: 'Insatiable desire to learn and explore new topics' },
    { trait: 'Inconsistency', sign: 'Gemini', category: 'challenge', element: 'Air', description: 'Tendency to change direction frequently' },
    
    // Cancer
    { trait: 'Nurturing', sign: 'Cancer', category: 'love', element: 'Water', description: 'Natural caretaker who provides emotional support' },
    { trait: 'Intuition', sign: 'Cancer', category: 'personality', element: 'Water', description: 'Strong psychic abilities and emotional awareness' },
    { trait: 'Protectiveness', sign: 'Cancer', category: 'behavior', element: 'Water', description: 'Fierce defender of loved ones and home' },
    { trait: 'Moodiness', sign: 'Cancer', category: 'challenge', element: 'Water', description: 'Emotional ups and downs like lunar cycles' },
    
    // Leo
    { trait: 'Confidence', sign: 'Leo', category: 'personality', element: 'Fire', description: 'Natural self-assurance and belief in abilities' },
    { trait: 'Creativity', sign: 'Leo', category: 'talent', element: 'Fire', description: 'Artistic expression and innovative thinking' },
    { trait: 'Generosity', sign: 'Leo', category: 'personality', element: 'Fire', description: 'Big-hearted giving and sharing with others' },
    { trait: 'Pride', sign: 'Leo', category: 'challenge', element: 'Fire', description: 'Strong ego that can become arrogant' },
    
    // Virgo
    { trait: 'Perfectionism', sign: 'Virgo', category: 'personality', element: 'Earth', description: 'High standards and attention to detail' },
    { trait: 'Service', sign: 'Virgo', category: 'behavior', element: 'Earth', description: 'Desire to help and improve others\' lives' },
    { trait: 'Analysis', sign: 'Virgo', category: 'talent', element: 'Earth', description: 'Ability to break down complex problems' },
    { trait: 'Criticism', sign: 'Virgo', category: 'challenge', element: 'Earth', description: 'Tendency to focus on flaws and imperfections' },
    
    // Libra
    { trait: 'Diplomacy', sign: 'Libra', category: 'personality', element: 'Air', description: 'Skill in handling conflicts and negotiations' },
    { trait: 'Harmony', sign: 'Libra', category: 'behavior', element: 'Air', description: 'Seeks balance and peace in all situations' },
    { trait: 'Charm', sign: 'Libra', category: 'personality', element: 'Air', description: 'Natural ability to attract and please others' },
    { trait: 'Indecision', sign: 'Libra', category: 'challenge', element: 'Air', description: 'Difficulty making choices and commitments' },
    
    // Scorpio
    { trait: 'Intensity', sign: 'Scorpio', category: 'personality', element: 'Water', description: 'Deep, powerful emotional and mental focus' },
    { trait: 'Transformation', sign: 'Scorpio', category: 'talent', element: 'Water', description: 'Ability to reinvent self and help others change' },
    { trait: 'Loyalty', sign: 'Scorpio', category: 'love', element: 'Water', description: 'Unwavering devotion to chosen people' },
    { trait: 'Jealousy', sign: 'Scorpio', category: 'challenge', element: 'Water', description: 'Possessive tendencies in relationships' },
    
    // Sagittarius
    { trait: 'Adventure', sign: 'Sagittarius', category: 'behavior', element: 'Fire', description: 'Love for exploration and new experiences' },
    { trait: 'Philosophy', sign: 'Sagittarius', category: 'personality', element: 'Fire', description: 'Deep thinking about life\'s meaning and truth' },
    { trait: 'Optimism', sign: 'Sagittarius', category: 'personality', element: 'Fire', description: 'Positive outlook and faith in the future' },
    { trait: 'Restlessness', sign: 'Sagittarius', category: 'challenge', element: 'Fire', description: 'Difficulty staying in one place or situation' },
    
    // Capricorn
    { trait: 'Ambition', sign: 'Capricorn', category: 'personality', element: 'Earth', description: 'Strong drive to achieve goals and success' },
    { trait: 'Discipline', sign: 'Capricorn', category: 'behavior', element: 'Earth', description: 'Self-control and structured approach to life' },
    { trait: 'Responsibility', sign: 'Capricorn', category: 'personality', element: 'Earth', description: 'Takes duties and obligations seriously' },
    { trait: 'Pessimism', sign: 'Capricorn', category: 'challenge', element: 'Earth', description: 'Tendency to expect the worst outcomes' },
    
    // Aquarius
    { trait: 'Innovation', sign: 'Aquarius', category: 'talent', element: 'Air', description: 'Revolutionary thinking and unique solutions' },
    { trait: 'Independence', sign: 'Aquarius', category: 'personality', element: 'Air', description: 'Strong need for freedom and autonomy' },
    { trait: 'Humanitarianism', sign: 'Aquarius', category: 'behavior', element: 'Air', description: 'Concern for humanity and social causes' },
    { trait: 'Detachment', sign: 'Aquarius', category: 'challenge', element: 'Air', description: 'Emotional distance and aloofness' },
    
    // Pisces
    { trait: 'Compassion', sign: 'Pisces', category: 'love', element: 'Water', description: 'Deep empathy and understanding for others' },
    { trait: 'Intuition', sign: 'Pisces', category: 'talent', element: 'Water', description: 'Psychic abilities and spiritual awareness' },
    { trait: 'Creativity', sign: 'Pisces', category: 'talent', element: 'Water', description: 'Artistic expression and imaginative thinking' },
    { trait: 'Escapism', sign: 'Pisces', category: 'challenge', element: 'Water', description: 'Tendency to avoid reality through fantasy' }
  ];

  const categories = [
    { value: 'all', label: 'All Traits', icon: Star },
    { value: 'personality', label: 'Personality', icon: Users },
    { value: 'love', label: 'Love & Relationships', icon: Heart },
    { value: 'behavior', label: 'Behavior', icon: Zap },
    { value: 'talent', label: 'Talents & Gifts', icon: Crown },
    { value: 'challenge', label: 'Challenges', icon: Target }
  ];

  const elements = ['all', 'Fire', 'Earth', 'Air', 'Water'];

  const filteredTraits = traits.filter(trait => {
    const matchesSearch = trait.trait.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trait.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trait.sign.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || trait.category === selectedCategory;
    const matchesElement = selectedElement === 'all' || trait.element === selectedElement;
    return matchesSearch && matchesCategory && matchesElement;
  });

  const getCategoryColor = (category) => {
    const colors = {
      personality: 'text-blue-400',
      love: 'text-pink-400',
      behavior: 'text-green-400',
      talent: 'text-yellow-400',
      challenge: 'text-orange-400'
    };
    return colors[category] || 'text-purple-400';
  };

  const getCategoryBg = (category) => {
    const colors = {
      personality: 'bg-blue-600/20 border-blue-400/30',
      love: 'bg-pink-600/20 border-pink-400/30',
      behavior: 'bg-green-600/20 border-green-400/30',
      talent: 'bg-yellow-600/20 border-yellow-400/30',
      challenge: 'bg-orange-600/20 border-orange-400/30'
    };
    return colors[category] || 'bg-purple-600/20 border-purple-400/30';
  };

  const getSignColor = (sign) => {
    const colors = {
      'Aries': 'text-red-400', 'Taurus': 'text-green-400', 'Gemini': 'text-yellow-400',
      'Cancer': 'text-blue-400', 'Leo': 'text-orange-400', 'Virgo': 'text-green-500',
      'Libra': 'text-pink-400', 'Scorpio': 'text-red-600', 'Sagittarius': 'text-purple-400',
      'Capricorn': 'text-gray-400', 'Aquarius': 'text-cyan-400', 'Pisces': 'text-blue-500'
    };
    return colors[sign] || 'text-purple-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Star className="w-8 h-8 text-yellow-400" />
            Zodiac Traits Database
          </h1>
          <p className="text-purple-200 text-lg">Comprehensive guide to zodiac characteristics</p>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search traits, signs, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>

            {/* Category Filter */}
            <div>
              <h3 className="text-purple-300 font-semibold mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.value 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-200 hover:bg-white/30'
                    }`}
                  >
                    {React.createElement(category.icon, { className: 'w-4 h-4' })}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Element Filter */}
            <div>
              <h3 className="text-purple-300 font-semibold mb-3">Filter by Element</h3>
              <div className="flex flex-wrap gap-2">
                {elements.map((element) => (
                  <button
                    key={element}
                    onClick={() => setSelectedElement(element)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedElement === element 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-white/20 text-purple-200 hover:bg-white/30'
                    }`}
                  >
                    {element === 'all' ? 'All Elements' : element}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-purple-300 text-center">
            Showing {filteredTraits.length} trait{filteredTraits.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTraits.map((trait, index) => (
            <div key={index} className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${getCategoryBg(trait.category)}`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{trait.trait}</h3>
                <div className="flex flex-col items-end gap-2">
                  <Link 
                    to={`/zodiac/${trait.sign.toLowerCase()}`}
                    className={`font-semibold hover:underline ${getSignColor(trait.sign)}`}
                  >
                    {trait.sign}
                  </Link>
                  <span className="px-2 py-1 bg-white/20 text-purple-200 rounded-full text-xs">
                    {trait.element}
                  </span>
                </div>
              </div>
              
              <p className="text-purple-100 mb-4 leading-relaxed">{trait.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(trait.category)} bg-current/20`}>
                  {trait.category.charAt(0).toUpperCase() + trait.category.slice(1)}
                </span>
                <div className="flex items-center gap-1">
                  {React.createElement(categories.find(c => c.value === trait.category)?.icon || Star, {
                    className: `w-4 h-4 ${getCategoryColor(trait.category)}`
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTraits.length === 0 && (
          <div className="text-center text-purple-200 py-16">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No traits found matching your search criteria</p>
            <p className="text-sm mt-2 opacity-75">Try adjusting your filters or search terms</p>
          </div>
        )}

        {/* Trait Statistics */}
        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Trait Distribution</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.filter(c => c.value !== 'all').map((category) => {
              const count = traits.filter(t => t.category === category.value).length;
              return (
                <div key={category.value} className="text-center">
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3`}>
                    {React.createElement(category.icon, { className: `w-6 h-6 ${getCategoryColor(category.value)}` })}
                  </div>
                  <div className="text-2xl font-bold text-white">{count}</div>
                  <div className="text-purple-200 text-sm">{category.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacTraits;