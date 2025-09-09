import React, { useState } from 'react';
import { Book, Search, Star, Filter } from 'lucide-react';

const AstroGlossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const glossaryTerms = [
    {
      term: 'Ascendant',
      category: 'houses',
      definition: 'The zodiac sign that was rising on the eastern horizon at the time of birth. Also known as the Rising Sign.',
      example: 'If you have Leo Ascendant, you appear confident and dramatic to others.'
    },
    {
      term: 'Conjunction',
      category: 'aspects',
      definition: 'When two planets are in the same sign and close in degrees, creating a powerful blended energy.',
      example: 'Sun conjunct Venus enhances charm and artistic abilities.'
    },
    {
      term: 'Retrograde',
      category: 'movement',
      definition: 'When a planet appears to move backward in the sky from Earth\'s perspective.',
      example: 'Mercury retrograde is famous for communication and technology issues.'
    },
    {
      term: 'Grand Trine',
      category: 'aspects',
      definition: 'A harmonious aspect pattern formed by three planets 120 degrees apart, creating a triangle.',
      example: 'A Grand Trine in fire signs brings natural leadership and enthusiasm.'
    },
    {
      term: 'Midheaven',
      category: 'houses',
      definition: 'The highest point in the chart, representing career, reputation, and life direction.',
      example: 'Midheaven in Capricorn suggests success in traditional, structured careers.'
    },
    {
      term: 'Stellium',
      category: 'patterns',
      definition: 'Three or more planets clustered in the same sign or house.',
      example: 'A stellium in Scorpio intensifies transformative and mysterious qualities.'
    },
    {
      term: 'Node',
      category: 'points',
      definition: 'Mathematical points where the Moon\'s orbit crosses the ecliptic, representing karmic lessons.',
      example: 'North Node in Gemini suggests learning communication and adaptability.'
    },
    {
      term: 'Chiron',
      category: 'asteroids',
      definition: 'The "wounded healer" asteroid representing our deepest wounds and healing abilities.',
      example: 'Chiron in Aries indicates healing issues around identity and self-assertion.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Terms' },
    { value: 'houses', label: 'Houses & Points' },
    { value: 'aspects', label: 'Aspects' },
    { value: 'movement', label: 'Planetary Movement' },
    { value: 'patterns', label: 'Chart Patterns' },
    { value: 'points', label: 'Special Points' },
    { value: 'asteroids', label: 'Asteroids' }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Book className="w-8 h-8 text-purple-400" />
            Astrology Glossary
          </h1>
          <p className="text-purple-200 text-lg">Learn the language of the stars</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 rounded-lg bg-white/20 text-white border border-purple-400/30 appearance-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value} className="bg-purple-900">
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredTerms.map((term, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{term.term}</h3>
                <span className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm">
                  {categories.find(cat => cat.value === term.category)?.label}
                </span>
              </div>
              
              <p className="text-purple-100 mb-4 leading-relaxed">{term.definition}</p>
              
              <div className="bg-purple-900/30 rounded-lg p-4">
                <h4 className="text-purple-300 font-medium mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Example:
                </h4>
                <p className="text-purple-200 italic">{term.example}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center text-purple-200 py-16">
            <Book className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No terms found matching your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstroGlossary;