'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Cpu, Database, Cloud, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Products from '../components/Products';

// Process Step Component
function ProcessStep({ number, title, description, icon: Icon, delay }: { number: string; title: string; description: string; icon: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative group"
    >
      <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#98ABA4]/30 transition-all duration-500 card-hover h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#98ABA4]/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-[#98ABA4]" />
          </div>
          <span className="text-5xl font-bold text-white/5 group-hover:text-[#98ABA4]/10 transition-colors">{number}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, color }: { icon: any; title: string; description: string; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all card-hover"
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-6 h-6" style={{ color }} />
      </div>
      <h4 className="text-white font-semibold mb-2">{title}</h4>
      <p className="text-white/50 text-sm">{description}</p>
    </motion.div>
  );
}

// Stats Section - Refined
function StatsSection() {
  const stats = [
    { value: '500+', label: 'Fortune Companies', sublabel: 'Tata, Reliance, Infosys, Wipro, HCL' },
    { value: '132+', label: 'Startups Scaled', sublabel: 'YC-backed, investor-ready' },
    { value: '99.9%', label: 'Uptime Guarantee', sublabel: 'Enterprise SLA' },
    { value: '50+', label: 'Integrations', sublabel: 'Pre-built connectors' },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern-dense opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#98ABA4]" />
            <span className="text-sm text-black/60">By The Numbers</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Trusted by Enterprise Leaders
            <br />
            <span style={{ color: '#98ABA4' }}>Globally</span>
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto">
            Our platform powers mission-critical operations for the world&apos;s most demanding enterprises
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white to-white/50 border border-black/5 hover:border-[#98ABA4]/20 transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-black/80 mb-2">{stat.label}</div>
                <div className="text-sm text-black/60">{stat.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
function ProcessSection() {
  const steps = [
    { 
      number: '01', 
      title: 'Discovery & Analysis', 
      description: 'Deep dive into your business requirements, technical challenges, and scalability needs to create a comprehensive strategy.',
      icon: Database 
    },
    { 
      number: '02', 
      title: 'Architecture Design', 
      description: 'Design enterprise-grade, scalable architectures with modern tech stacks optimized for your use case.',
      icon: Cpu 
    },
    { 
      number: '03', 
      title: 'Implementation', 
      description: 'Build production-ready solutions with rigorous testing, security audits, and quality assurance.',
      icon: Code2 
    },
    { 
      number: '04', 
      title: 'Deploy & Support', 
      description: 'Seamless deployment with continuous monitoring, optimization, and dedicated 24/7 enterprise support.',
      icon: Cloud 
    },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#98ABA4]" />
            <span className="text-sm text-white/70">How We Work</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            A Process Designed for
            <br />
            <span className="text-gradient">Outcomes</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our proven methodology ensures successful delivery of complex enterprise solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <ProcessStep key={step.number} {...step} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    { icon: Zap, title: 'High Performance', description: 'Sub-second latency with optimized infrastructure and caching', color: '#98ABA4' },
    { icon: Shield, title: 'Enterprise Security', description: 'SOC 2 Type II compliant with end-to-end encryption', color: '#C2D8CF' },
    { icon: TrendingUp, title: '99.9% Uptime SLA', description: 'High availability with auto-failover and disaster recovery', color: '#64C8FF' },
    { icon: Cpu, title: 'AI-Powered', description: 'Intelligent automation with advanced machine learning models', color: '#D4AF37' },
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Built for Enterprise Scale
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Every feature designed with performance, security, and reliability in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#151414] to-[#0a0a0a]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(152, 171, 164, 0.1) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(194, 216, 207, 0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#98ABA4] animate-pulse" />
            <span className="text-sm text-white/70">Get Started</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <br />
            Business?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Effred can help you automate processes, 
            reduce costs, and accelerate growth with AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all btn-shine"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
            >
              Explore Products
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
   <TrustedBy />
      <Products />
        <StatsSection />
      <ProcessSection />
      <FeaturesSection />
      <CTASection /> 
    </motion.main>
  );
}
