import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const footerLinks = {
  products: [
    { label: 'Deepsync', href: '/products#deepsync' },
    { label: 'Computer', href: '/products#computer' },
    { label: 'Logger AI', href: '/products#logger' },
    { label: 'TMS AI', href: '/products#tms' },
    { label: 'HRMS', href: '/products#hrms' },
    { label: 'ERP', href: '/products#erp' },
  ],
  services: [
    { label: 'AI Deployments', href: '/services#ai-deployment' },
    { label: 'DevOps', href: '/services#devops' },
    { label: 'AIOps', href: '/services#aiops' },
    { label: 'Cloud Infra', href: '/services#cloud' },
    { label: 'Custom Solutions', href: '/services#custom' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/career' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative bg-[#0C0C0C] border-t border-white/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#98ABA4]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
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
              <span className="text-white font-semibold text-xl">Effred AI</span>
            </Link>
            <p className="text-white/50 text-sm mb-6 max-w-xs">
              Automate. Accelerate. Achieve. Enterprise automation, cloud integration, 
              software development, and consulting services.
            </p>

            <div className="space-y-3">
              <a href="mailto:info@effred.com" className="flex items-center gap-2 text-white/50 hover:text-[#98ABA4] transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@effred.com
              </a>
              <a href="tel:+14157809400" className="flex items-center gap-2 text-white/50 hover:text-[#98ABA4] transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +91 8853814531
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4" />
                Suncity, Gurugram, Haryana, India - 122018
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 hover:text-[#98ABA4] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 hover:text-[#98ABA4] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/50 hover:text-[#98ABA4] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-medium mb-4">Stay Updated</h4>
            <p className="text-white/50 text-sm mb-4">
              Get the latest insights on AI and automation.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#98ABA4]">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {isSubscribed && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#98ABA4] text-xs">
                  Thanks for subscribing!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Effred Technology. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[Linkedin, Twitter, Github].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-[#98ABA4]/20 hover:text-[#98ABA4] transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
