import React, { useState } from 'react';
import { Crown, Star, Check, Zap, Heart, Eye } from 'lucide-react';

const Premium = () => {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const plans = [
    {
      id: 'monthly',
      name: 'Cosmic Explorer',
      price: 9.99,
      period: 'month',
      popular: false,
      features: [
        'Unlimited daily horoscopes',
        'Advanced compatibility analysis',
        'Personal natal chart',
        'Weekly tarot readings',
        'Mood tracking & insights',
        'Basic ritual guides'
      ]
    },
    {
      id: 'yearly',
      name: 'Stellar Master',
      price: 79.99,
      period: 'year',
      popular: true,
      savings: '33% off',
      features: [
        'Everything in Cosmic Explorer',
        'Detailed transit predictions',
        'Professional astrology reports',
        'Unlimited tarot spreads',
        'Personal astrologer chat',
        'Advanced ritual library',
        'Astro-cartography maps',
        'Lucky number generator',
        'Dream interpretation AI'
      ]
    },
    {
      id: 'lifetime',
      name: 'Cosmic Sage',
      price: 199.99,
      period: 'lifetime',
      popular: false,
      features: [
        'Everything in Stellar Master',
        'Lifetime access to all features',
        'Priority customer support',
        'Exclusive cosmic events',
        'Advanced AI predictions',
        'Custom ritual creation',
        'Astrology course library',
        'VIP community access'
      ]
    }
  ];

  const premiumFeatures = [
    {
      icon: Star,
      title: 'Advanced Predictions',
      description: 'Get detailed insights into your future with professional-grade astrological analysis',
      color: 'text-yellow-400'
    },
    {
      icon: Heart,
      title: 'Relationship Insights',
      description: 'Deep compatibility analysis for romantic, friendship, and family relationships',
      color: 'text-pink-400'
    },
    {
      icon: Eye,
      title: 'Personal Astrologer',
      description: 'Chat with certified astrologers for personalized guidance and answers',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Get alerts for important cosmic events, retrogrades, and personal transits',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Crown className="w-10 h-10 text-yellow-400" />
            Unlock Your Cosmic Potential
          </h1>
          <p className="text-purple-200 text-xl max-w-2xl mx-auto">
            Access advanced astrology features and connect deeper with the universe
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-4 ${feature.color}`}>
                {React.createElement(feature.icon, { className: 'w-full h-full' })}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-purple-200 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id 
                  ? 'border-yellow-400/50 bg-white/15 scale-105' 
                  : 'border-purple-400/30 hover:border-purple-400/50'
              } ${plan.popular ? 'ring-2 ring-yellow-400/50' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-purple-200">/{plan.period}</span>
                </div>
                {plan.savings && (
                  <span className="inline-block mt-2 bg-green-600/50 text-green-200 px-3 py-1 rounded-full text-sm">
                    {plan.savings}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-purple-200">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg">
            Start Your Cosmic Journey
          </button>
          <p className="text-purple-300 text-sm mt-4">
            30-day money-back guarantee • Cancel anytime • Secure payment
          </p>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Premium?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Unlock Advanced Features</h3>
              <ul className="space-y-2 text-purple-200">
                <li>• Professional-grade astrological calculations</li>
                <li>• Personalized predictions based on your exact birth data</li>
                <li>• Access to certified astrologers for guidance</li>
                <li>• Advanced compatibility algorithms</li>
                <li>• Detailed transit timing and interpretations</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-300 mb-4">Join Our Community</h3>
              <ul className="space-y-2 text-purple-200">
                <li>• Connect with like-minded cosmic souls</li>
                <li>• Share experiences and learn from others</li>
                <li>• Participate in group rituals and events</li>
                <li>• Access exclusive content and workshops</li>
                <li>• Get priority support from our team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;