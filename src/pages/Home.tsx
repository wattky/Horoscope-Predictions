import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, Moon, Sun, Sparkles, Users, Eye, Hand } from 'lucide-react';

const Home = () => {
  const features = [
    {
      title: 'Daily Horoscope',
      description: 'Get personalized daily insights based on your zodiac sign',
      icon: Sun,
      path: '/daily-horoscope',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Compatibility Match',
      description: 'Discover your cosmic connection with others',
      icon: Heart,
      path: '/instant-match',
      color: 'from-pink-400 to-rose-500'
    },
    {
      title: 'Tarot Reading',
      description: 'Unlock the mysteries of your future with tarot cards',
      icon: Eye,
      path: '/tarot',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Natal Chart',
      description: 'Explore your complete astrological blueprint',
      icon: Star,
      path: '/natal-chart',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Hand Reading',
      description: 'Discover your destiny through palmistry',
      icon: Hand,
      path: '/hand-reading',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Lucky Numbers',
      description: 'Generate your cosmic lucky numbers',
      icon: Sparkles,
      path: '/lucky-numbers',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      sign: 'Pisces',
      text: 'The daily horoscopes are incredibly accurate! I check them every morning.',
      rating: 5
    },
    {
      name: 'Alex K.',
      sign: 'Leo',
      text: 'Found my soulmate through the compatibility matching. Amazing!',
      rating: 5
    },
    {
      name: 'Maya R.',
      sign: 'Scorpio',
      text: 'The tarot readings have guided me through difficult decisions.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Discover Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent block">
              Cosmic Destiny
            </span>
          </h1>
          <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Unlock the secrets of the universe with personalized astrology, tarot readings, 
            and cosmic guidance tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/daily-horoscope"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
            >
              Get Your Reading
            </Link>
            <Link
              to="/instant-match"
              className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-purple-400/30"
            >
              Find Your Match
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Explore Your Cosmic Journey</h2>
            <p className="text-purple-200 text-lg">Discover the tools that will guide you to your destiny</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/30 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(feature.icon, { className: 'w-8 h-8 text-white' })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Cosmic Community Says</h2>
            <p className="text-purple-200 text-lg">Join thousands who've found guidance in the stars</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-purple-100 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-300 text-sm">{testimonial.sign}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-400/30">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-purple-200 text-lg mb-8">
              Join our cosmic community and unlock the secrets of your destiny
            </p>
            <Link
              to="/premium"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              Start Your Cosmic Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;