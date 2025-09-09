import React, { useState } from 'react';
import { Menu, X, Star, Moon, Sun, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      category: 'Horoscopes',
      items: [
        { name: 'Daily', path: '/daily-horoscope', icon: Sun },
        { name: 'Weekly', path: '/weekly-horoscope', icon: Moon },
        { name: 'Monthly', path: '/monthly-horoscope', icon: Star },
        { name: 'Yearly', path: '/yearly-horoscope', icon: Star }
      ]
    },
    {
      category: 'Charts & Analysis',
      items: [
        { name: 'Big Three', path: '/big-three', icon: Star },
        { name: 'Natal Chart', path: '/natal-chart', icon: Star },
        { name: 'Transits', path: '/transits', icon: Star },
        { name: 'Progressions', path: '/progressions', icon: Star }
      ]
    },
    {
      category: 'Divination',
      items: [
        { name: 'Tarot Reading', path: '/tarot', icon: Star },
        { name: 'Hand Reading', path: '/hand-reading', icon: Star },
        { name: 'Lucky Numbers', path: '/lucky-numbers', icon: Star }
      ]
    },
    {
      category: 'Compatibility',
      items: [
        { name: 'Instant Match', path: '/instant-match', icon: Heart },
        { name: 'Compatibility Matrix', path: '/compatibility-matrix', icon: Heart },
        { name: 'Friend Compatibility', path: '/friend-compatibility', icon: Heart },
        { name: 'Family Compatibility', path: '/family-compatibility', icon: Heart }
      ]
    },
    {
      category: 'Tools & Resources',
      items: [
        { name: 'Astro Glossary', path: '/astro-glossary', icon: Star },
        { name: 'Fixed Stars', path: '/fixed-stars', icon: Star },
        { name: 'Astro-Cartography', path: '/astro-cartography', icon: Star },
        { name: 'Rituals', path: '/rituals', icon: Star }
      ]
    },
    {
      category: 'Community',
      items: [
        { name: 'Community Feed', path: '/community', icon: Star },
        { name: 'Mood Tracker', path: '/mood-tracker', icon: Star },
        { name: 'Premium', path: '/premium', icon: Star },
        { name: 'Profile', path: '/profile', icon: Star }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-purple-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">Cosmic Love</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-purple-200 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/todays-overview" className="text-purple-200 hover:text-white transition-colors">
                Today
              </Link>
              <Link to="/ai-insights" className="text-purple-200 hover:text-white transition-colors">
                AI Insights
              </Link>
              <Link to="/dashboard" className="text-purple-200 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/todays-overview" className="text-purple-200 hover:text-white transition-colors">
                Today
              </Link>
              <Link to="/ai-insights" className="text-purple-200 hover:text-white transition-colors">
                AI Insights
              </Link>
              <Link to="/daily-horoscope" className="text-purple-200 hover:text-white transition-colors">
                Horoscopes
              </Link>
              <Link to="/tarot" className="text-purple-200 hover:text-white transition-colors">
                Tarot
              </Link>
              <Link to="/instant-match" className="text-purple-200 hover:text-white transition-colors">
                Compatibility
              </Link>
              <Link to="/community" className="text-purple-200 hover:text-white transition-colors">
                Community
              </Link>
              <Link to="/premium" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                Premium
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-lg border-t border-purple-400/30">
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((category) => (
                <div key={category.category}>
                  <h3 className="text-purple-300 font-semibold text-sm mb-2">{category.category}</h3>
                  {category.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-purple-200 hover:text-white py-2 px-2 rounded transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg border-t border-purple-400/30 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-purple-200">© 2025 Cosmic Love. Connecting souls through the stars.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;