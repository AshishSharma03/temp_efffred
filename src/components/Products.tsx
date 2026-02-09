'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Database, Brain, FileText, Ticket, Users, Building2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DeepsyncArchitecture, ComputerArchitecture, LoggerArchitecture, TmsArchitecture, HrmsArchitecture, ErpArchitecture } from './ProductArchitecture';
import { WorkflowAnimation } from './WorkflowAnimation';

const products = [
  {
    id: 'deepsync',
    name: 'Effred Deepsync',
    tagline: 'Centralized Data Management Platform',
    description: 'The only platform that controls and manages data according to your needs. Connect multiple client environments without VPN juggling—Deepsync synchronizes data from global client systems into your centralized environment.',
    icon: Database,
    color: '#98ABA4',
    features: [
      'Multi-environment data synchronization across regions',
      'Seamless integration with Jira, BMC, ServiceNow, Zendesk',
      'VPN-less secure data access from any location',
      'Real-time data pipeline monitoring and alerting',
      'Automated data transformation and cleansing',
      'Role-based access control for data security',
    ],
    benefits: [
      { value: '10x', label: 'Faster Data Access' },
      { value: '99.9%', label: 'Uptime Guaranteed' },
      { value: '50+', label: 'Integrations' },
    ],
    architecture: DeepsyncArchitecture,
  },
  {
    id: 'computer',
    name: 'Effred Computer',
    tagline: 'AI-Powered Knowledge Base',
    description: 'Centralized knowledge base with fine-tuned AI that thinks and grabs data from your organization through natural language prompts. Computer learns from every interaction to provide increasingly accurate answers.',
    icon: Brain,
    color: '#C2D8CF',
    features: [
      'Natural language queries across all data sources',
      'Integration with ticketing systems, ERP, and portals',
      'Document and cloud source connectivity',
      'Self-learning from user responses and feedback',
      'High accuracy contextual answers',
      'Custom AI agent deployment',
    ],
    benefits: [
      { value: '85%', label: 'Time Saved' },
      { value: '94%', label: 'Accuracy Rate' },
      { value: '24/7', label: 'Availability' },
    ],
    architecture: ComputerArchitecture,
  },
  {
    id: 'logger',
    name: 'Effred Logger AI',
    tagline: 'Intelligent Log Analysis',
    description: 'Identify system issues within 5-10 minutes instead of hours. Logger AI analyzes logs across all servers, microservices, and services automatically, detecting anomalies and providing root cause analysis.',
    icon: FileText,
    color: '#707070',
    features: [
      'Cross-server log correlation and analysis',
      'Microservice anomaly detection',
      '5-10 minute issue identification',
      'Natural language log queries',
      'Automated incident reporting',
      'Integration with monitoring tools',
    ],
    benefits: [
      { value: '5-10m', label: 'Issue Detection' },
      { value: '90%', label: 'MTTR Reduction' },
      { value: '100+', label: 'Log Sources' },
    ],
    architecture: LoggerArchitecture,
  },
  {
    id: 'tms',
    name: 'Effred TMS AI',
    tagline: 'AI Ticket Management System',
    description: 'Intelligent ticket routing, automated self-service, smart summarization, and predictive analytics for customer support. TMS AI evaluates tickets using SQUID, CSAT, NPS, FCR, FRT metrics and more.',
    icon: Ticket,
    color: '#98ABA4',
    features: [
      'Intelligent ticket routing to right teams',
      'Automated self-service responses',
      'Smart ticket summarization',
      'Predictive analytics for ticket volume',
      'SLA & compliance tracking',
      'Auto customer reply system',
    ],
    benefits: [
      { value: '94%', label: 'CSAT Score' },
      { value: '87%', label: 'FCR Rate' },
      { value: '60%', label: 'Cost Reduction' },
    ],
    architecture: TmsArchitecture,
  },
  {
    id: 'hrms',
    name: 'Effred HRMS',
    tagline: 'Complete HR Management',
    description: 'End-to-end HR solution with AI-powered candidate screening, automated interview scheduling, and comprehensive employee management. Post jobs to LinkedIn, Naukri, and more with one click.',
    icon: Users,
    color: '#C2D8CF',
    features: [
      'AI resume screening & JD matching',
      'Auto interview scheduling with candidates',
      'Multi-platform job posting',
      'Reward & salary management',
      'Referral management system',
      'RBAC for admin, recruiter, employee, candidate',
    ],
    benefits: [
      { value: '80%', label: 'Time Saved' },
      { value: '10K+', label: 'Candidates' },
      { value: '92%', label: 'Success Rate' },
    ],
    architecture: HrmsArchitecture,
  },
  {
    id: 'erp',
    name: 'Effred ERP',
    tagline: 'Enterprise Resource Planning',
    description: 'Whole company management system with role-based access, performance management, and comprehensive visualization. Customer portals, vendor management, financial analytics, and real-time dashboards.',
    icon: Building2,
    color: '#D4AF37',
    features: [
      'Role-based access control',
      'Performance management',
      'Customer & vendor portals',
      'Financial analytics & reporting',
      'Inventory management',
      'Real-time executive dashboards',
    ],
    benefits: [
      { value: '6', label: 'Core Modules' },
      { value: '99.9%', label: 'Uptime' },
      { value: '360°', label: 'Visibility' },
    ],
    architecture: ErpArchitecture,
  },
];

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const ArchitectureComponent = activeProduct.architecture;

  return (
    <section className="relative py-24 bg-[#0a0a0a]">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#98ABA4] animate-pulse" />
            <span className="text-xs sm:text-sm text-white/70">Our Products</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Intelligent Solutions for
            <br />
            <span className="text-gradient">Modern Enterprises</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed px-2">
            From data synchronization to AI-powered operations, our product suite 
            transforms how businesses operate in the digital age.
          </p>
        </motion.div>

        {/* Product Navigation - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {products.map((product) => (
            <motion.button
              key={product.id}
              onClick={() => setActiveProduct(product)}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeProduct.id === product.id
                  ? 'bg-gradient-to-r from-[#98ABA4] to-[#C2D8CF] text-black shadow-lg shadow-[#98ABA4]/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {product.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start"
          >
            {/* Left: Content */}
            <div className="space-y-6">
              <div 
                className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${activeProduct.color}15` }}
              >
                <activeProduct.icon 
                  className="w-6 sm:w-8 h-6 sm:h-8" 
                  style={{ color: activeProduct.color }}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-base sm:text-lg md:text-xl" style={{ color: activeProduct.color }}>
                  {activeProduct.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {activeProduct.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-lg sm:text-2xl font-bold" style={{ color: activeProduct.color }}>
                      {benefit.value}
                    </div>
                    <div className="text-white/50 text-xs">{benefit.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3">
                {activeProduct.features.slice(0, 4).map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${activeProduct.color}25` }}
                    >
                      <Check className="w-3 h-3" style={{ color: activeProduct.color }} />
                    </div>
                    <span className="text-white/70 text-xs sm:text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to={`/products#${activeProduct.id}`}
                className="inline-flex items-center gap-2 text-[#98ABA4] font-medium text-sm sm:text-base hover:text-[#C2D8CF] transition-colors group"
              >
                View Full Details
                <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Architecture Visualization */}
            <motion.div 
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#98ABA4]/5 to-transparent rounded-3xl blur-2xl -z-10" />
              <ArchitectureComponent />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Complete Automation Ecosystem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 md:mt-32"
        >
          <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#98ABA4] animate-pulse" />
              <span className="text-xs sm:text-sm text-white/70">Complete Automation Ecosystem</span>
            </motion.div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              From Data to <span className="text-gradient">Intelligent Action</span>
            </h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
              A seamless pipeline that transforms raw data into actionable intelligence and automated resolutions across your enterprise
            </p>
          </div>

          <WorkflowAnimation />
        </motion.div>
      </div>
    </section>
  );
}
