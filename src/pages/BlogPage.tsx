import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Sparkles, Calendar, Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'SEO & GEO', 'Appointment Generation', 'Web Design', 'E-Commerce', 'Production', 'Social Media', 'Branding'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center space-x-2 text-selestia-gold font-bold text-xs uppercase tracking-widest bg-selestia-gold-light/60 px-3 py-1 rounded-full border border-selestia-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Journal &amp; Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            INSIGHTS THAT MOVE <span className="text-selestia-gold">BUSINESS FORWARD.</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Perspectives on luxury web design, high-frequency e-commerce scaling, performance marketing, and creative direction from the Selestia team.
          </p>
        </div>
      </section>

      {/* Featured Article Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <Link
          to={`/blog/${featuredPost.slug}`}
          className="group block bg-selestia-black text-white rounded-3xl overflow-hidden border border-selestia-gold/30 shadow-2xl hover:border-selestia-gold transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-selestia-black">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs font-mono text-selestia-gold">
                  <span className="bg-selestia-gold/20 px-3 py-1 rounded-full uppercase tracking-wider font-bold border border-selestia-gold/30">
                    FEATURED · {featuredPost.category}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-display text-white group-hover:text-selestia-gold transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-3">
                  <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-8 h-8 rounded-full object-cover border border-selestia-gold" />
                  <span>{featuredPost.author.name}</span>
                </div>
                <span className="font-bold text-selestia-gold uppercase tracking-wider flex items-center">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Search & Category Filter Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-selestia-gray-border">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? 'bg-selestia-black text-selestia-gold'
                    : 'bg-selestia-gray-light text-gray-600 hover:text-selestia-black hover:bg-selestia-gray-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-selestia-gray-light border border-selestia-gray-border rounded-full pl-10 pr-4 py-2 text-xs font-medium focus:outline-none focus:border-selestia-gold transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white border border-selestia-gray-border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-selestia-black relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-selestia-black/80 text-selestia-gold text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-selestia-black group-hover:text-selestia-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-selestia-black group-hover:text-selestia-gold">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
