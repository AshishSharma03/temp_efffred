import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Database, Brain, Building2, Cpu, Cloud, Code2, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const productCategories = [
  {
    title: 'DATA PLATFORM',
    icon: Database,
    color: '#98ABA4',
    items: [
      { name: 'Effred Deepsync', desc: 'Centralized data management', href: '/products#deepsync' },
      { name: 'Effred Logger AI', desc: 'Intelligent log analysis', href: '/products#logger' },
    ]
  },
  {
    title: 'AI & AUTOMATION',
    icon: Brain,
    color: '#C2D8CF',
    items: [
      { name: 'Effred Computer', desc: 'AI-powered knowledge base', href: '/products#computer' },
      { name: 'Effred TMS AI', desc: 'Smart ticket management', href: '/products#tms' },
    ]
  },
  {
    title: 'ENTERPRISE',
    icon: Building2,
    color: '#D4AF37',
    items: [
      { name: 'Effred HRMS', desc: 'Complete HR management', href: '/products#hrms' },
      { name: 'Effred ERP', desc: 'Enterprise resource planning', href: '/products#erp' },
    ]
  },
];

const serviceCategories = [
  {
    title: 'AI & ML',
    icon: Cpu,
    color: '#98ABA4',
    items: [
      { name: 'AI Deployments', desc: 'Production-ready AI models', href: '/services#ai-deployment' },
      { name: 'AIOps', desc: 'AI-driven operations', href: '/services#aiops' },
    ]
  },
  {
    title: 'INFRASTRUCTURE',
    icon: Cloud,
    color: '#64C8FF',
    items: [
      { name: 'DevOps', desc: 'CI/CD & automation', href: '/services#devops' },
      { name: 'Cloud Infra', desc: 'Scalable cloud solutions', href: '/services#cloud' },
    ]
  },
  {
    title: 'DEVELOPMENT',
    icon: Code2,
    color: '#C2D8CF',
    items: [
      { name: 'Custom Solutions', desc: 'Tailored software dev', href: '/services#custom' },
    ]
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { 
    label: 'Products', 
    href: '/products',
    hasDropdown: true,
    categories: productCategories
  },
  { 
    label: 'Services', 
    href: '/services',
    hasDropdown: true,
    categories: serviceCategories
  },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative w-10 h-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <img 
                  src="/assets/logo.svg" 
                  alt="Effred" 
                  className="w-full h-full"
                />
              </motion.div>
              <span className="text-white font-semibold text-xl tracking-tight group-hover:text-[#98ABA4] transition-colors">
                Effred AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-all rounded-lg ${
                      location.pathname === link.href
                        ? 'text-[#98ABA4] bg-white/5'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </Link>

                  {/* Enhanced Mega Menu Dropdown */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-20 left-12 -translate-x-1/2 z-40"
                        style={{ width: '90vw', maxWidth: 'calc(100vw - 32px)' }}
                      >
                        <motion.div 
                          className="glass rounded-2xl overflow-hidden shadow-2xl p-8 background-color: rgba(3, 3, 3, 0.02); border: 5px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px);"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {link.categories?.map((category, idx) => (
                              <motion.div 
                                key={category.title} 
                                className="space-y-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                                  <div className="p-2 rounded-lg" style={{ backgroundColor: `${category.color}15` }}>
                                    <category.icon className="w-5 h-5" style={{ color: category.color }} />
                                  </div>
                                  <div>
                                    <span className="text-xs font-bold tracking-widest text-white/70 uppercase">
                                      {category.title}
                                    </span>
                                  </div>
                                </div>
                                <div className="space-y-3">
                                  {category.items.map((item, itemIdx) => (
                                    <motion.div
                                      key={item.name}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 + itemIdx * 0.05 }}
                                    >
                                      <Link
                                        to={item.href}
                                        className="group block p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <div className="flex items-center justify-between gap-2">
                                          <div className="flex-1">
                                            <span className="text-white font-semibold text-sm group-hover:text-[#98ABA4] transition-colors block">
                                              {item.name}
                                            </span>
                                            <span className="text-white/50 text-xs group-hover:text-white/70 transition-colors block">{item.desc}</span>
                                          </div>
                                          <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-[#98ABA4] transition-all transform group-hover:translate-x-1" />
                                        </div>
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Bottom Section with CTA */}
                          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                            <div>
                              <p className="text-white/60 text-sm font-medium">
                                Explore our complete {link.label.toLowerCase()} suite
                              </p>
                              <p className="text-white/40 text-xs mt-1">
                                See how businesses transform with Effred
                              </p>
                            </div>
                            <Link 
                              to="/contact" 
                              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#98ABA4] to-[#C2D8CF] text-black text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#98ABA4]/30 transition-all duration-300 whitespace-nowrap"
                              onClick={() => setActiveDropdown(null)}
                            >
                              Schedule Demo <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all"
              >
                Contact Sales
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 text-sm font-medium text-black bg-[#98ABA4] rounded-lg hover:bg-[#C2D8CF] transition-all btn-shine"
              >
                Book Demo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col pt-20 px-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className="block py-3 text-2xl font-medium text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.categories?.flatMap(c => c.items).map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block py-2 text-sm text-white/50 hover:text-[#98ABA4] transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto pb-8 space-y-3">
                <Link
                  to="/contact"
                  className="block w-full py-4 text-center text-white border border-white/20 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
                <Link
                  to="/contact"
                  className="block w-full py-4 text-center text-black bg-[#98ABA4] rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
