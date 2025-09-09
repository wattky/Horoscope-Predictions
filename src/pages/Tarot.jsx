import React, { useState } from 'react';
import { Eye, Shuffle, Star, Heart, Coins, Swords } from 'lucide-react';

const Tarot = () => {
  const [selectedSpread, setSelectedSpread] = useState('three-card');
  const [drawnCards, setDrawnCards] = useState([]);
  const [isReading, setIsReading] = useState(false);

  const spreads = [
    {
      id: 'three-card',
      name: 'Three Card Spread',
      description: 'Past, Present, Future',
      positions: ['Past', 'Present', 'Future'],
      cards: 3
    },
    {
      id: 'love',
      name: 'Love Reading',
      description: 'Relationship insights',
      positions: ['Your feelings', 'Their feelings', 'Relationship outcome'],
      cards: 3
    },
    {
      id: 'celtic-cross',
      name: 'Celtic Cross',
      description: 'Comprehensive life reading',
      positions: ['Present situation', 'Challenge', 'Past', 'Future', 'Crown', 'Foundation', 'Your approach', 'External influences', 'Hopes/fears', 'Outcome'],
      cards: 10
    },
    {
      id: 'career',
      name: 'Career Path',
      description: 'Professional guidance',
      positions: ['Current situation', 'Hidden influences', 'Guidance', 'Outcome'],
      cards: 4
    }
  ];

  const tarotCards = [
    { name: 'The Fool', suit: 'Major Arcana', meaning: 'New beginnings, innocence, spontaneity', reversed: 'Recklessness, taken advantage of, inconsideration' },
    { name: 'The Magician', suit: 'Major Arcana', meaning: 'Manifestation, resourcefulness, power', reversed: 'Manipulation, poor planning, untapped talents' },
    { name: 'The High Priestess', suit: 'Major Arcana', meaning: 'Intuition, sacred knowledge, divine feminine', reversed: 'Secrets, disconnected from intuition, withdrawal' },
    { name: 'The Empress', suit: 'Major Arcana', meaning: 'Femininity, beauty, nature, abundance', reversed: 'Creative block, dependence on others' },
    { name: 'The Emperor', suit: 'Major Arcana', meaning: 'Authority, establishment, structure, father figure', reversed: 'Tyranny, rigidity, coldness' },
    { name: 'The Hierophant', suit: 'Major Arcana', meaning: 'Spiritual wisdom, religious beliefs, conformity', reversed: 'Personal beliefs, freedom, challenging the status quo' },
    { name: 'The Lovers', suit: 'Major Arcana', meaning: 'Love, harmony, relationships, values alignment', reversed: 'Disharmony, imbalance, misalignment of values' },
    { name: 'The Chariot', suit: 'Major Arcana', meaning: 'Control, willpower, success, determination', reversed: 'Lack of control, lack of direction, aggression' },
    { name: 'Strength', suit: 'Major Arcana', meaning: 'Strength, courage, persuasion, influence', reversed: 'Weakness, self-doubt, lack of confidence' },
    { name: 'The Hermit', suit: 'Major Arcana', meaning: 'Soul searching, introspection, inner guidance', reversed: 'Isolation, loneliness, withdrawal' },
    { name: 'Ace of Cups', suit: 'Cups', meaning: 'Love, new relationships, compassion, creativity', reversed: 'Self-love, intuition, repressed emotions' },
    { name: 'Two of Cups', suit: 'Cups', meaning: 'Unified love, partnership, mutual attraction', reversed: 'Self-love, break-ups, disharmony' },
    { name: 'Three of Cups', suit: 'Cups', meaning: 'Celebration, friendship, creativity, community', reversed: 'Independence, alone time, hardcore partying' },
    { name: 'Ace of Pentacles', suit: 'Pentacles', meaning: 'New financial opportunity, manifestation', reversed: 'Lost opportunity, lack of planning' },
    { name: 'Two of Pentacles', suit: 'Pentacles', meaning: 'Multiple priorities, time management, adaptability', reversed: 'Over-committed, disorganization, reprioritization' },
    { name: 'Ace of Swords', suit: 'Swords', meaning: 'New ideas, mental clarity, breakthrough', reversed: 'Inner clarity, re-thinking an idea, clouded judgement' },
    { name: 'Two of Swords', suit: 'Swords', meaning: 'Difficult decisions, weighing options, indecision', reversed: 'Indecision, confusion, information overload' },
    { name: 'Ace of Wands', suit: 'Wands', meaning: 'Inspiration, new opportunities, growth', reversed: 'An emerging idea, lack of direction, distractions' },
    { name: 'Two of Wands', suit: 'Wands', meaning: 'Future planning, making decisions, leaving comfort zone', reversed: 'Personal goals, inner alignment, fear of unknown' }
  ];

  const drawCards = () => {
    setIsReading(true);
    const spread = spreads.find(s => s.id === selectedSpread);
    const shuffledCards = [...tarotCards].sort(() => Math.random() - 0.5);
    const drawn = shuffledCards.slice(0, spread.cards).map((card, index) => ({
      ...card,
      position: spread.positions[index],
      reversed: Math.random() < 0.3
    }));
    
    setTimeout(() => {
      setDrawnCards(drawn);
      setIsReading(false);
    }, 2000);
  };

  const getSuitIcon = (suit) => {
    switch (suit) {
      case 'Cups': return Heart;
      case 'Pentacles': return Coins;
      case 'Swords': return Swords;
      case 'Wands': return Star;
      default: return Eye;
    }
  };

  const getSuitColor = (suit) => {
    switch (suit) {
      case 'Cups': return 'text-blue-400';
      case 'Pentacles': return 'text-yellow-400';
      case 'Swords': return 'text-gray-400';
      case 'Wands': return 'text-red-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Eye className="w-8 h-8 text-purple-400" />
            Tarot Reading
          </h1>
          <p className="text-purple-200 text-lg">Unveil the mysteries of your path</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Choose Your Spread</h2>
            <div className="space-y-3">
              {spreads.map((spread) => (
                <button
                  key={spread.id}
                  onClick={() => setSelectedSpread(spread.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedSpread === spread.id 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white/20 text-purple-200 hover:bg-white/30'
                  }`}
                >
                  <h3 className="font-semibold mb-1">{spread.name}</h3>
                  <p className="text-sm opacity-80">{spread.description}</p>
                  <p className="text-xs mt-1 opacity-60">{spread.cards} cards</p>
                </button>
              ))}
            </div>
            
            <button
              onClick={drawCards}
              disabled={isReading}
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isReading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Drawing Cards...
                </>
              ) : (
                <>
                  <Shuffle className="w-5 h-5" />
                  Draw Cards
                </>
              )}
            </button>
          </div>

          <div className="lg:col-span-2">
            {drawnCards.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Your Reading</h2>
                <div className={`grid gap-6 ${
                  drawnCards.length <= 3 ? 'md:grid-cols-3' : 
                  drawnCards.length <= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 
                  'md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {drawnCards.map((card, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-purple-400/30">
                      <div className="text-center mb-4">
                        <div className={`w-16 h-24 mx-auto bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center mb-3 ${
                          card.reversed ? 'transform rotate-180' : ''
                        }`}>
                          {React.createElement(getSuitIcon(card.suit), {
                            className: `w-8 h-8 text-white`
                          })}
                        </div>
                        <h3 className="text-white font-semibold">{card.name}</h3>
                        <p className="text-purple-300 text-sm">{card.position}</p>
                        {card.reversed && (
                          <span className="inline-block mt-1 px-2 py-1 bg-red-600/50 text-red-200 rounded-full text-xs">
                            Reversed
                          </span>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div>
                          <h4 className="text-purple-300 text-sm font-medium">Meaning:</h4>
                          <p className="text-purple-100 text-sm">
                            {card.reversed ? card.reversed : card.meaning}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center">
                <Eye className="w-16 h-16 mx-auto mb-4 text-purple-400 opacity-50" />
                <h3 className="text-xl font-semibold text-white mb-2">Ready for Your Reading?</h3>
                <p className="text-purple-200">Choose a spread and draw your cards to reveal what the universe has in store for you.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarot;