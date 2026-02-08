'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, GitBranch, LineChart, Check, Zap, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 'ai-deployment',
    title: 'AI Deployments',
    subtitle: 'Turning AI Models into Real-World Impact',
    description: 'Deploy production-ready AI and machine learning models with enterprise-grade scalability and performance. Our experts handle everything from model optimization to monitoring.',
    icon: Cpu,
    color: '#98ABA4',
    metrics: [
      { value: '99.9%', label: 'Uptime', icon: Shield },
      { value: '<100ms', label: 'Latency', icon: Zap },
      { value: '1M+', label: 'Requests/day', icon: TrendingUp },
    ],
    features: ['AI/ML Model Deployment', 'API-based AI Services', 'Multi-Environment Deployment', 'Model Versioning & Rollback', 'Real-time Performance Monitoring', 'Auto-scaling'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Faster Releases. Stable Systems. Zero Downtime.',
    description: 'Transform your software delivery with fully automated CI/CD pipelines, infrastructure orchestration, and continuous monitoring for maximum reliability.',
    icon: GitBranch,
    color: '#C2D8CF',
    metrics: [
      { value: '10x', label: 'Faster Deploys', icon: Zap },
      { value: '0', label: 'Downtime', icon: Shield },
      { value: '24/7', label: 'Monitoring', icon: TrendingUp },
    ],
    features: ['CI/CD Pipeline Design', 'Kubernetes Orchestration', 'Infrastructure as Code', 'Zero-Downtime Deploys', 'Automated Rollback', 'Security Scanning'],
  },
  {
    id: 'aiops',
    title: 'AIOps',
    subtitle: 'AI-Driven IT Operations That Predict & Prevent Issues',
    description: 'Leverage AI to detect system anomalies before they become problems, predict failures, and automatically remediate issues with self-healing systems.',
    icon: LineChart,
    color: '#707070',
    metrics: [
      { value: '5-10m', label: 'Issue Detection', icon: Zap },
      { value: '85%', label: 'MTTR Reduction', icon: TrendingUp },
      { value: '90%', label: 'Auto-Healing', icon: Shield },
    ],
    features: ['Anomaly Detection', 'Predictive Alerts', 'Self-Healing Systems', 'Operational Intelligence', 'Log Analysis', 'Incident Automation'],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0C0C0C] to-[#0a0a0a]">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#98ABA4] animate-pulse" />
            <span className="text-sm text-white/70">Our Services</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Expertise That Drives<br /><span className="text-gradient">Digital Transformation</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From AI deployments to enterprise operations, we provide comprehensive services to scale your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          {services.map((service, serviceIdx) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: serviceIdx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`text-left p-8 rounded-2xl transition-all duration-300 border backdrop-blur-sm ${
                activeService.id === service.id
                  ? 'border-white/30 shadow-2xl'
                  : 'border-white/10 hover:border-white/20'
              }`}
              style={{
                backgroundColor: activeService.id === service.id ? `${service.color}15` : 'rgba(255,255,255,0.03)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-xs text-white/50 mt-1">{service.subtitle.split('.')[0]}</p>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-6 line-clamp-2">{service.description}</p>

              {/* Metrics Preview */}
              <div className="grid grid-cols-3 gap-2">
                {service.metrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    className="p-3 rounded-lg bg-white/5 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeService.id === service.id ? 1 : 0.6 }}
                  >
                    <div className="text-sm font-bold" style={{ color: service.color }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-white/40">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="mt-12"
          >
            <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left: Description */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-3">{activeService.title}</h3>
                  <p className="text-lg mb-2" style={{ color: activeService.color }}>
                    {activeService.subtitle}
                  </p>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {activeService.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">Key Metrics</p>
                    {activeService.metrics.map((metric, idx) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${activeService.color}15` }}
                        >
                          <metric.icon className="w-4 h-4" style={{ color: activeService.color }} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{metric.value}</div>
                          <div className="text-xs text-white/50">{metric.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Features */}
                <div>
                  <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-6">What You Get</p>
                  <div className="grid grid-cols-1 gap-3">
                    {activeService.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className="p-4 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: activeService.color }} />
                          <span className="text-white/80 group-hover:text-white transition-colors">{feature}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
