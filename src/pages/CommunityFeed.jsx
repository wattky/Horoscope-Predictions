import React, { useState, useEffect } from 'react';
import { MessageCircle, Heart, Share2, Star, Users, TrendingUp } from 'lucide-react';

const CommunityFeed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulated community posts
    setPosts([
      {
        id: 1,
        user: 'Luna_Mystic',
        sign: 'Pisces',
        content: 'Just had the most amazing tarot reading! The cards are really speaking to me today. Anyone else feeling the strong Scorpio energy? 🌙✨',
        type: 'experience',
        likes: 24,
        comments: 8,
        timeAgo: '2 hours ago',
        liked: false
      },
      {
        id: 2,
        user: 'StarGazer_Alex',
        sign: 'Sagittarius',
        content: 'Mercury retrograde is finally over! Time to send those important emails and make those big decisions. Who else is feeling the relief? 📧💫',
        type: 'astro-update',
        likes: 31,
        comments: 12,
        timeAgo: '4 hours ago',
        liked: true
      },
      {
        id: 3,
        user: 'CosmicHealer',
        sign: 'Virgo',
        content: 'Sharing my daily ritual: Morning meditation with rose quartz, followed by journaling my dreams. It\'s been transformative for my spiritual growth! 🌹📝',
        type: 'ritual',
        likes: 18,
        comments: 5,
        timeAgo: '6 hours ago',
        liked: false
      },
      {
        id: 4,
        user: 'MoonChild_Sarah',
        sign: 'Cancer',
        content: 'The new moon in Capricorn is perfect for setting career intentions. I\'m manifesting a promotion and new opportunities. What are you manifesting? 🎯🌟',
        type: 'manifestation',
        likes: 42,
        comments: 15,
        timeAgo: '8 hours ago',
        liked: true
      },
      {
        id: 5,
        user: 'FireSpirit_Jake',
        sign: 'Aries',
        content: 'Just discovered my Venus is in Gemini and it explains SO much about my communication style in relationships. Astrology never ceases to amaze me! 💕',
        type: 'discovery',
        likes: 27,
        comments: 9,
        timeAgo: '12 hours ago',
        liked: false
      }
    ]);
  }, []);

  const postTypes = [
    { value: 'all', label: 'All Posts', icon: Users },
    { value: 'experience', label: 'Experiences', icon: Star },
    { value: 'astro-update', label: 'Astro Updates', icon: TrendingUp },
    { value: 'ritual', label: 'Rituals', icon: MessageCircle },
    { value: 'manifestation', label: 'Manifestations', icon: Heart },
    { value: 'discovery', label: 'Discoveries', icon: Share2 }
  ];

  const toggleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            liked: !post.liked, 
            likes: post.liked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const createPost = () => {
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      user: 'You',
      sign: 'Leo', // This would come from user profile
      content: newPost,
      type: 'experience',
      likes: 0,
      comments: 0,
      timeAgo: 'Just now',
      liked: false
    };

    setPosts([post, ...posts]);
    setNewPost('');
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

  const filteredPosts = filter === 'all' ? posts : posts.filter(post => post.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Users className="w-8 h-8 text-blue-400" />
            Community Feed
          </h1>
          <p className="text-purple-200 text-lg">Connect with fellow cosmic souls</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Share Your Experience</h2>
          <div className="space-y-4">
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's happening in your cosmic journey?"
              className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-purple-300 border border-purple-400/30 resize-none h-24"
            />
            <button
              onClick={createPost}
              disabled={!newPost.trim()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50"
            >
              Share Post
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-2">
            {postTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setFilter(type.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  filter === type.value 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/20 text-purple-200 hover:bg-white/30'
                }`}
              >
                {React.createElement(type.icon, { className: 'w-4 h-4' })}
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/30">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {post.user.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{post.user}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className={getSignColor(post.sign)}>{post.sign}</span>
                      <span className="text-purple-300">•</span>
                      <span className="text-purple-300">{post.timeAgo}</span>
                    </div>
                  </div>
                </div>
                <span className="px-2 py-1 bg-purple-600/50 text-purple-200 rounded-full text-xs">
                  {post.type.replace('-', ' ')}
                </span>
              </div>

              <p className="text-purple-100 mb-4 leading-relaxed">{post.content}</p>

              <div className="flex items-center gap-6 text-sm">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    post.liked ? 'text-pink-400' : 'text-purple-300 hover:text-pink-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                  {post.likes}
                </button>
                <button className="flex items-center gap-2 text-purple-300 hover:text-blue-400 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-2 text-purple-300 hover:text-green-400 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center text-purple-200 py-16">
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>No posts found for this filter</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityFeed;