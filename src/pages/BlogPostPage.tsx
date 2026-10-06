import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/agencyData';

interface BlogPostPageProps {
  onOpenContactModal: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenContactModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-selestia-white text-selestia-black pt-28 pb-20">
      
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gray-500 hover:text-selestia-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Journal</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-xs font-mono text-selestia-gold">
            <span className="bg-selestia-gold-light text-selestia-black px-3 py-1 rounded-full uppercase tracking-wider font-bold">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-selestia-black leading-tight">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center space-x-4 pt-4 border-t border-selestia-gray-border">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover border border-selestia-gold"
            />
            <div>
              <div className="text-sm font-bold font-display text-selestia-black">{post.author.name}</div>
              <div className="text-xs text-gray-500">{post.author.role}</div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-selestia-black border border-selestia-gray-border">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6 pt-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg leading-relaxed font-sans text-gray-700">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Callout Box */}
        <div className="my-12 bg-selestia-black text-white p-8 sm:p-10 rounded-3xl border border-selestia-gold/30 gold-glow space-y-4">
          <div className="flex items-center space-x-2 text-selestia-gold text-xs font-mono uppercase tracking-widest font-bold">
            <Sparkles className="w-4 h-4" />
            <span>Key Takeaway For Brand Leaders</span>
          </div>
          <p className="text-lg font-editorial italic text-selestia-gold-light leading-relaxed">
            "Digital excellence requires pairing high-end aesthetic precision with empirical performance analytics."
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContactModal}
              className="bg-selestia-gold text-selestia-black font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-selestia-gold-dark transition-colors inline-flex items-center space-x-2"
            >
              <span>Consult Our Strategy Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Related Posts */}
        <div className="pt-12 border-t border-selestia-gray-border space-y-8">
          <h3 className="text-2xl font-bold font-display text-selestia-black">RELATED ARTICLES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map(rel => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="group bg-selestia-gray-light border border-selestia-gray-border p-6 rounded-2xl hover:border-selestia-gold transition-colors block space-y-3"
              >
                <div className="text-xs text-selestia-gold font-bold uppercase">{rel.category}</div>
                <h4 className="text-lg font-bold font-display text-selestia-black group-hover:text-selestia-gold transition-colors">{rel.title}</h4>
                <div className="text-xs text-gray-500">{rel.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
