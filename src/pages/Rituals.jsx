import React, { useState } from 'react';
import { Flame, Moon, Sun, Star, Sparkles } from 'lucide-react';

const Rituals = () => {
  const [selectedRitual, setSelectedRitual] = useState(null);
  const [completedRituals, setCompletedRituals] = useState([]);

  const rituals = [
    {
      id: 'new-moon',
      title: 'New Moon Manifestation',
      type: 'Monthly',
      duration: '30 minutes',
      difficulty: 'Beginner',
      icon: Moon,
      color: 'from-blue-400 to-indigo-600',
      description: 'Set intentions and manifest your desires with the new moon energy',
      materials: ['White candle', 'Paper and pen', 'Crystals (optional)', 'Quiet space'],
      steps: [
        'Find a quiet, comfortable space where you won\'t be disturbed',
        'Light a white candle to represent new beginnings',
        'Take several deep breaths to center yourself',
        'Write down your intentions and goals for the coming month',
        'Visualize your intentions coming to fruition',
        'Fold the paper and keep it in a special place',
        'Blow out the candle with gratitude'
      ],
      benefits: ['Clarity of purpose', 'Increased manifestation power', 'Emotional reset']
    },
    {
      id: 'full-moon',
      title: 'Full Moon Release',
      type: 'Monthly',
      duration: '45 minutes',
      difficulty: 'Beginner',
      icon: Moon,
      color: 'from-yellow-400 to-orange-600',
      description: 'Release what no longer serves you under the full moon',
      materials: ['Black candle', 'Paper and pen', 'Fire-safe bowl', 'Water'],
      steps: [
        'Prepare your space with the black candle and fire-safe bowl',
        'Light the candle and take time to reflect',
        'Write down what you want to release or let go of',
        'Read your list aloud with intention',
        'Safely burn the paper in the bowl',
        'Pour water over the ashes to complete the release',
        'Express gratitude for the lessons learned'
      ],
      benefits: ['Emotional cleansing', 'Breaking negative patterns', 'Spiritual renewal']
    },
    {
      id: 'sun-salutation',
      title: 'Solar Energy Activation',
      type: 'Daily',
      duration: '15 minutes',
      difficulty: 'Beginner',
      icon: Sun,
      color: 'from-yellow-400 to-red-500',
      description: 'Connect with solar energy to boost confidence and vitality',
      materials: ['Yellow candle', 'Citrine crystal (optional)', 'Comfortable clothing'],
      steps: [
        'Face east (direction of sunrise) if possible',
        'Light a yellow candle to honor the sun',
        'Stand with feet hip-width apart, arms at sides',
        'Raise your arms overhead while taking a deep breath',
        'Visualize golden light filling your entire body',
        'Speak affirmations of confidence and strength',
        'Lower your arms and bow in gratitude to the sun'
      ],
      benefits: ['Increased confidence', 'Enhanced vitality', 'Positive energy boost']
    },
    {
      id: 'protection',
      title: 'Protective Shield Ritual',
      type: 'As Needed',
      duration: '20 minutes',
      difficulty: 'Intermediate',
      icon: Star,
      color: 'from-purple-400 to-blue-600',
      description: 'Create an energetic shield of protection around yourself',
      materials: ['Black tourmaline', 'White sage or palo santo', 'Salt', 'Visualization'],
      steps: [
        'Cleanse your space with sage or palo santo',
        'Create a circle of salt around your sitting area',
        'Hold the black tourmaline in your hands',
        'Visualize a bright white light surrounding you',
        'See this light forming an impenetrable shield',
        'Set the intention for protection from negative energy',
        'Carry the crystal with you for continued protection'
      ],
      benefits: ['Energetic protection', 'Increased confidence', 'Negative energy deflection']
    },
    {
      id: 'abundance',
      title: 'Abundance Attraction',
      type: 'Weekly',
      duration: '25 minutes',
      difficulty: 'Intermediate',
      icon: Sparkles,
      color: 'from-green-400 to-emerald-600',
      description: 'Attract prosperity and abundance into your life',
      materials: ['Green candle', 'Cinnamon', 'Bay leaves', 'Coins or bills'],
      steps: [
        'Set up your altar with green candle and money symbols',
        'Sprinkle cinnamon around the candle for prosperity',
        'Write your financial goals on bay leaves',
        'Light the candle while focusing on abundance',
        'Visualize money flowing to you easily and ethically',
        'Burn the bay leaves safely in a fire-proof dish',
        'Keep the candle burning for at least 30 minutes'
      ],
      benefits: ['Attracts prosperity', 'Shifts money mindset', 'Opens abundance channels']
    },
    {
      id: 'love-attraction',
      title: 'Love Attraction Ritual',
      type: 'Weekly',
      duration: '35 minutes',
      difficulty: 'Intermediate',
      icon: Flame,
      color: 'from-pink-400 to-red-600',
      description: 'Open your heart to attract loving relationships',
      materials: ['Pink candle', 'Rose petals', 'Rose quartz', 'Mirror'],
      steps: [
        'Create a beautiful space with rose petals',
        'Light the pink candle and hold the rose quartz',
        'Look into the mirror and practice self-love affirmations',
        'Visualize yourself in a loving, healthy relationship',
        'Send love to your future partner, wherever they are',
        'Write a letter to your future love describing your ideal relationship',
        'Keep the letter and rose quartz under your pillow'
      ],
      benefits: ['Attracts love', 'Increases self-love', 'Opens heart chakra']
    }
  ];

  const markCompleted = (ritualId) => {
    if (!completedRituals.includes(ritualId)) {
      setCompletedRituals([...completedRituals, ritualId]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-purple-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Flame className="w-8 h-8 text-orange-400" />
            Sacred Rituals
          </h1>
          <p className="text-purple-200 text-lg">Connect with cosmic energies through ancient practices</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white mb-4">Available Rituals</h2>
            {rituals.map((ritual) => (
              <div
                key={ritual.id}
                onClick={() => setSelectedRitual(ritual)}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-4 border cursor-pointer transition-all duration-300 hover:bg-white/15 ${
                  selectedRitual?.id === ritual.id ? 'border-purple-400/50 bg-white/15' : 'border-purple-400/30'
                } ${completedRituals.includes(ritual.id) ? 'ring-2 ring-green-400/50' : ''}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${ritual.color} flex items-center justify-center`}>
                      {React.createElement(ritual.icon, { className: 'w-5 h-5 text-white' })}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{ritual.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-purple-200">
                        <span>{ritual.type}</span>
                        <span>•</span>
                        <span>{ritual.duration}</span>
                        <span>•</span>
                        <span className={getDifficultyColor(ritual.difficulty)}>{ritual.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  {completedRituals.includes(ritual.id) && (
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <p className="text-purple-200 text-sm">{ritual.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            {selectedRitual ? (
              <div>
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedRitual.color} mx-auto mb-4 flex items-center justify-center`}>
                    {React.createElement(selectedRitual.icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{selectedRitual.title}</h3>
                  <div className="flex items-center justify-center gap-4 text-sm text-purple-200">
                    <span>{selectedRitual.type}</span>
                    <span>•</span>
                    <span>{selectedRitual.duration}</span>
                    <span>•</span>
                    <span className={getDifficultyColor(selectedRitual.difficulty)}>{selectedRitual.difficulty}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">Materials Needed</h4>
                    <ul className="space-y-1">
                      {selectedRitual.materials.map((material, index) => (
                        <li key={index} className="text-purple-200 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          {material}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">Steps</h4>
                    <ol className="space-y-3">
                      {selectedRitual.steps.map((step, index) => (
                        <li key={index} className="text-purple-200 flex gap-3">
                          <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h4 className="text-purple-300 font-medium mb-3">Benefits</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedRitual.benefits.map((benefit, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-600/50 text-purple-200 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => markCompleted(selectedRitual.id)}
                    disabled={completedRituals.includes(selectedRitual.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      completedRituals.includes(selectedRitual.id)
                        ? 'bg-green-600 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                    }`}
                  >
                    {completedRituals.includes(selectedRitual.id) ? 'Completed ✓' : 'Mark as Completed'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center text-purple-200 py-16">
                <Flame className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Select a ritual to see detailed instructions</p>
                <p className="text-sm mt-2 opacity-75">
                  Each ritual is designed to connect you with specific cosmic energies
                </p>
              </div>
            )}
          </div>
        </div>

        {completedRituals.length > 0 && (
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Your Ritual Journey</h3>
            <div className="flex items-center gap-2 text-green-400">
              <Star className="w-5 h-5" />
              <span>Completed {completedRituals.length} ritual{completedRituals.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rituals;