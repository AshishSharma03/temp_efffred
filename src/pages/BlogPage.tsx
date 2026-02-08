import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Sparkles, TrendingUp, Zap, Cpu, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All Posts', icon: Sparkles },
  { id: 'ai', label: 'AI & ML', icon: Cpu },
  { id: 'devops', label: 'DevOps', icon: Cloud },
  { id: 'automation', label: 'Automation', icon: Zap },
];

const blogPosts = [
  {
    id: 1,
    title: 'How AI is Transforming Enterprise Ticket Management',
    excerpt: 'Discover how intelligent automation is reducing response times by 80% and improving customer satisfaction scores across Fortune 500 companies.',
    category: 'ai',
    author: 'Sarah Chen',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
    featured: true,
    tags: ['AI', 'Customer Support', 'Automation'],
  },
  {
    id: 2,
    title: 'Building Resilient CI/CD Pipelines at Scale',
    excerpt: 'Learn the best practices for designing deployment pipelines that handle millions of requests while maintaining 99.99% uptime.',
    category: 'devops',
    author: 'Marcus Johnson',
    date: 'Jan 12, 2026',
    readTime: '12 min read',
    featured: false,
    tags: ['DevOps', 'CI/CD', 'Kubernetes'],
  },
  {
    id: 3,
    title: 'The Future of Root Cause Analysis with LLMs',
    excerpt: 'Explore how large language models are revolutionizing incident response by analyzing logs, metrics, and traces in real-time.',
    category: 'ai',
    author: 'Dr. Emily Watson',
    date: 'Jan 8, 2026',
    readTime: '10 min read',
    featured: false,
    tags: ['LLM', 'AIOps', 'Observability'],
  },
  {
    id: 4,
    title: 'Automating Data Synchronization Across 50+ Platforms',
    excerpt: 'A deep dive into the architecture that powers real-time data sync between Jira, ServiceNow, Salesforce, and more.',
    category: 'automation',
    author: 'Alex Kumar',
    date: 'Jan 5, 2026',
    readTime: '15 min read',
    featured: false,
    tags: ['Data Integration', 'ETL', 'APIs'],
  },
  {
    id: 5,
    title: 'Reducing MTTR by 70% with Intelligent Alerting',
    excerpt: 'How one enterprise reduced their mean time to resolution using AI-powered anomaly detection and smart routing.',
    category: 'ai',
    author: 'Lisa Park',
    date: 'Dec 28, 2025',
    readTime: '7 min read',
    featured: false,
    tags: ['AIOps', 'Monitoring', 'SRE'],
  },
  {
    id: 6,
    title: 'Cloud Cost Optimization: A Practical Guide',
    excerpt: 'Strategies and tools for reducing cloud infrastructure costs by up to 40% without sacrificing performance.',
    category: 'devops',
    author: 'Raj Patel',
    date: 'Dec 22, 2025',
    readTime: '9 min read',
    featured: false,
    tags: ['Cloud', 'FinOps', 'AWS'],
  },
];

const featuredPost = blogPosts.find(p => p.featured);

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col h-full"
    >
      <div className="flex-1 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#98ABA4]/30 transition-all card-hover">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-[#98ABA4]/10 text-[#98ABA4] text-xs font-medium">
            {categories.find(c => c.id === post.category)?.label}
          </span>
          <span className="flex items-center gap-1.5 text-white/40 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-[#98ABA4] transition-colors mb-3 line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-white/50 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-0.5 rounded-lg bg-white/5 text-white/40 text-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Author & Read Time */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#98ABA4]/20 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-[#98ABA4]" />
            </div>
            <span className="text-white/60 text-xs">{post.author}</span>
          </div>
          <span className="flex items-center gap-1.5 text-white/40 text-xs">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts.filter(p => !p.featured)
    : blogPosts.filter(p => p.category === activeCategory && !p.featured);

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(152, 171, 164, 0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#98ABA4]" />
              <span className="text-sm text-white/70">Effred Blog</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Insights on AI &
              <br />
              <span className="text-gradient">Enterprise Automation</span>
            </h1>

            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Deep dives into the technologies and strategies shaping the future of 
              intelligent business operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative py-12">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#98ABA4] text-black text-xs font-medium">
                      Featured
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                      {categories.find(c => c.id === featuredPost.category)?.label}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/60 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#98ABA4]/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-[#98ABA4]" />
                      </div>
                      <span className="text-white/60 text-sm">{featuredPost.author}</span>
                    </div>
                    <span className="text-white/40 text-sm">{featuredPost.date}</span>
                    <span className="flex items-center gap-1 text-white/40 text-sm">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#98ABA4] text-black font-medium rounded-xl hover:bg-[#C2D8CF] transition-colors"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#98ABA4]/20 to-[#6B8E7D]/10 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-[#98ABA4] mx-auto mb-4" />
                      <span className="text-white/40 text-sm">Featured Article</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="relative py-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#98ABA4] text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative py-12 pb-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/40">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151414] to-[#0a0a0a]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Get the latest insights on AI, automation, and enterprise technology 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50 transition-colors"
              />
              <button className="px-6 py-3 bg-[#98ABA4] text-black font-medium rounded-xl hover:bg-[#C2D8CF] transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
