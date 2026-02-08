import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, Brain, FileText, Ticket, Users, Building2, ArrowRight, Check, ExternalLink, Play, Zap, Shield, Globe, Lock, Cpu, Cloud, Server, Activity, BarChart3, MessageSquare, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Product Data with Detailed Information
const products = [
  {
    id: 'deepsync',
    name: 'Effred Deepsync',
    tagline: 'Centralized Data Management Platform',
    description: 'The only platform that controls and manages data according to your needs. Connect multiple client environments without VPN juggling. Synchronize data across Jira, BMC, ServiceNow, Zendesk, and more.',
    icon: Database,
    color: '#98ABA4',
    secondaryColor: '#6B8E7D',
    stats: [
      { value: '10x', label: 'Faster Data Sync' },
      { value: '99.9%', label: 'Uptime' },
      { value: '50+', label: 'Integrations' },
    ],
    features: [
      'Multi-environment data synchronization',
      'Jira, BMC, ServiceNow, Zendesk integrations',
      'VPN-less secure data access',
      'Real-time data pipeline monitoring',
      'Automated conflict resolution',
      'Audit trail & compliance',
    ],
    benefits: [
      { title: 'No VPN Required', desc: 'Secure access without complex VPN configurations', icon: Lock },
      { title: 'Real-time Sync', desc: 'Data updates across all systems instantly', icon: Zap },
      { title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption', icon: Shield },
    ],
  },
  {
    id: 'computer',
    name: 'Effred Computer',
    tagline: 'AI-Powered Knowledge Base',
    description: 'Centralized knowledge base with fine-tuned AI that thinks and grabs data from your organization through natural language prompts. Self-learning system that improves with every interaction.',
    icon: Brain,
    color: '#C2D8CF',
    secondaryColor: '#98ABA4',
    stats: [
      { value: '95%', label: 'Query Accuracy' },
      { value: '3s', label: 'Response Time' },
      { value: '∞', label: 'Data Sources' },
    ],
    features: [
      'Natural language data queries',
      'Integration with ticketing systems, ERP, portals',
      'Document and cloud source connectivity',
      'Self-learning from responses',
      'Role-based access control',
      'Conversational memory',
    ],
    benefits: [
      { title: 'Natural Language', desc: 'Ask questions in plain English', icon: MessageSquare },
      { title: 'Self-Learning', desc: 'AI improves with every interaction', icon: Brain },
      { title: 'Universal Connect', desc: 'Connect to any data source', icon: Globe },
    ],
  },
  {
    id: 'logger',
    name: 'Effred Logger AI',
    tagline: 'Intelligent Log Analysis',
    description: 'Identify system issues within 5-10 minutes instead of hours. Analyze logs across all servers, microservices, and services automatically with AI-powered pattern recognition.',
    icon: FileText,
    color: '#707070',
    secondaryColor: '#98ABA4',
    stats: [
      { value: '5min', label: 'Issue Detection' },
      { value: '10M+', label: 'Logs/Hour' },
      { value: '99%', label: 'Accuracy' },
    ],
    features: [
      'Cross-server log correlation',
      'Microservice anomaly detection',
      '5-10 minute issue identification',
      'Natural language log queries',
      'Predictive alerting',
      'Root cause analysis',
    ],
    benefits: [
      { title: 'Fast Detection', desc: 'Find issues in minutes, not hours', icon: Zap },
      { title: 'Smart Analysis', desc: 'AI identifies patterns automatically', icon: Brain },
      { title: 'Proactive Alerts', desc: 'Get notified before issues escalate', icon: Activity },
    ],
  },
  {
    id: 'tms',
    name: 'Effred TMS AI',
    tagline: 'AI Ticket Management System',
    description: 'Intelligent ticket routing, automated self-service, smart summarization, and predictive analytics for customer support. Transform your support operations with AI.',
    icon: Ticket,
    color: '#98ABA4',
    secondaryColor: '#C2D8CF',
    stats: [
      { value: '87%', label: 'First Contact Resolution' },
      { value: '94%', label: 'CSAT Score' },
      { value: '2min', label: 'Avg Response' },
    ],
    features: [
      'Intelligent ticket routing',
      'Automated self-service responses',
      'Smart summarization',
      'SLA & compliance tracking',
      'Sentiment analysis',
      'Agent coaching insights',
    ],
    benefits: [
      { title: 'Smart Routing', desc: 'Tickets go to the right agent instantly', icon: Zap },
      { title: 'Auto-Responses', desc: 'AI handles common queries automatically', icon: MessageSquare },
      { title: 'SLA Tracking', desc: 'Never miss a deadline again', icon: Calendar },
    ],
  },
  {
    id: 'hrms',
    name: 'Effred HRMS',
    tagline: 'Complete HR Management',
    description: 'End-to-end HR solution with AI-powered candidate screening, automated interview scheduling, and comprehensive employee management from hire to retire.',
    icon: Users,
    color: '#C2D8CF',
    secondaryColor: '#98ABA4',
    stats: [
      { value: '94%', label: 'Match Accuracy' },
      { value: '80%', label: 'Time Saved' },
      { value: '10K+', label: 'Candidates' },
    ],
    features: [
      'AI resume screening & JD matching',
      'Auto interview scheduling',
      'Multi-platform job posting',
      'Reward & salary management',
      'Performance tracking',
      'Employee self-service',
    ],
    benefits: [
      { title: 'AI Screening', desc: 'Find perfect candidates automatically', icon: Brain },
      { title: 'Auto Scheduling', desc: 'No more back-and-forth emails', icon: Calendar },
      { title: 'Performance Tracking', desc: 'Monitor and improve team performance', icon: TrendingUp },
    ],
  },
  {
    id: 'erp',
    name: 'Effred ERP',
    tagline: 'Enterprise Resource Planning',
    description: 'Whole company management system with role-based access, performance management, and comprehensive visualization. One platform for your entire business.',
    icon: Building2,
    color: '#D4AF37',
    secondaryColor: '#B8860B',
    stats: [
      { value: '6', label: 'Core Modules' },
      { value: '100%', label: 'Visibility' },
      { value: '24/7', label: 'Access' },
    ],
    features: [
      'Role-based access control',
      'Performance management',
      'Customer & vendor portals',
      'Financial analytics & reporting',
      'Inventory management',
      'Business intelligence dashboards',
    ],
    benefits: [
      { title: 'Unified Platform', desc: 'All business data in one place', icon: Database },
      { title: 'Role-Based Access', desc: 'Secure access for every role', icon: Lock },
      { title: 'Real-time Analytics', desc: 'Make decisions with live data', icon: BarChart3 },
    ],
  },
];

// Architecture Visualization Component
function ArchitectureViz({ product, isInView }: { product: typeof products[0]; isInView: boolean }) {
  const renderArchitecture = () => {
    switch (product.id) {
      case 'deepsync':
        return <DeepsyncViz color={product.color} isInView={isInView} />;
      case 'computer':
        return <ComputerViz color={product.color} isInView={isInView} />;
      case 'logger':
        return <LoggerViz color={product.color} isInView={isInView} />;
      case 'tms':
        return <TmsViz color={product.color} isInView={isInView} />;
      case 'hrms':
        return <HrmsViz color={product.color} isInView={isInView} />;
      case 'erp':
        return <ErpViz color={product.color} isInView={isInView} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-6 border border-white/10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      {renderArchitecture()}
    </div>
  );
}

// Deepsync Architecture Visualization
function DeepsyncViz({ color, isInView }: { color: string; isInView: boolean }) {
  const sources = [
    { name: 'Jira', icon: Activity },
    { name: 'ServiceNow', icon: Cloud },
    { name: 'BMC', icon: Server },
    { name: 'Zendesk', icon: MessageSquare },
  ];

  return (
    <div className="relative py-8">
      {/* Data Sources */}
      <div className="flex justify-center gap-4 mb-8">
        {sources.map((source, i) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            <div 
              className="w-20 h-20 rounded-xl flex flex-col items-center justify-center gap-1"
              style={{ 
                background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                border: `1px solid ${color}40`
              }}
            >
              <source.icon className="w-6 h-6" style={{ color }} />
              <span className="text-white/70 text-[10px]">{source.name}</span>
            </div>
            <motion.div
              className="absolute -bottom-4 left-1/2 w-0.5 h-4 -translate-x-1/2"
              style={{ background: `linear-gradient(to bottom, ${color}60, transparent)` }}
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Connector */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="flex justify-center mb-6"
      >
        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
          <Lock className="w-4 h-4" style={{ color }} />
          <span className="text-white/60 text-xs">Secure Connection</span>
        </div>
      </motion.div>

      {/* Deepsync Engine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1 }}
        className="flex justify-center mb-6"
      >
        <div 
          className="w-48 h-24 rounded-2xl flex flex-col items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
            border: `1px solid ${color}50`
          }}
        >
          <Database className="w-8 h-8 mb-1" style={{ color }} />
          <span className="text-white font-semibold text-sm">Deepsync Engine</span>
          <span className="text-white/50 text-[10px]">Sync & Transform</span>
        </div>
      </motion.div>

      {/* Output */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.3 }}
        className="flex justify-center"
      >
        <div className="flex items-center gap-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10">
          <Check className="w-5 h-5" style={{ color }} />
          <span className="text-white/80 text-sm">Unified Data View</span>
        </div>
      </motion.div>
    </div>
  );
}

// Computer AI Architecture Visualization - Enhanced with Ticket/RCA Q&A Demo
function ComputerViz({ color, isInView }: { color: string; isInView: boolean }) {
  const [activeTab, setActiveTab] = useState<'ticket' | 'rca'>('ticket');
  const [typingIndex, setTypingIndex] = useState(0);

  const ticketConversation = [
    { type: 'user', text: 'Ticket #2847 - Login failure for user john.doe@company.com' },
    { type: 'ai', text: 'Analyzing ticket... Found related incidents in the past 30 days.', highlight: '3 similar tickets found' },
    { type: 'ai', text: 'Root Cause: SSO token expiration after password reset. Affects 47 users.', highlight: 'SSO token expiration' },
    { type: 'ai', text: 'Recommended Fix: Clear auth cache and reissue tokens. ETA: 5 mins.', highlight: 'Clear auth cache' },
  ];

  const rcaConversation = [
    { type: 'user', text: 'Why did API response time spike at 2:30 PM?' },
    { type: 'ai', text: 'Analyzing logs from 2:00-3:00 PM across 12 services...', highlight: '12 services analyzed' },
    { type: 'ai', text: 'Found: Database connection pool exhausted in payment-service.', highlight: 'DB connection pool' },
    { type: 'ai', text: 'Trigger: Batch job "daily-reconciliation" started at 2:28 PM.', highlight: 'daily-reconciliation job' },
    { type: 'ai', text: 'Impact: 2,847 requests affected, avg latency increased 450%', highlight: '2,847 requests' },
  ];

  const currentConversation = activeTab === 'ticket' ? ticketConversation : rcaConversation;

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setTypingIndex((prev) => (prev + 1) % (currentConversation.length + 1));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isInView, currentConversation.length]);

  return (
    <div className="relative py-4">
      {/* Main Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
        className="bg-[#0d0d0d] rounded-2xl border border-white/10 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)` }}
            >
              <Brain className="w-4 h-4" style={{ color }} />
            </div>
            <span className="text-white font-medium text-sm">Effred Computer AI</span>
          </div>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/40 text-xs">Online</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10">
          {[
            { id: 'ticket', label: 'Ticket Analysis', icon: Ticket },
            { id: 'rca', label: 'Root Cause Analysis', icon: Activity },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id as 'ticket' | 'rca'); setTypingIndex(0); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-medium transition-all ${
                activeTab === tab.id 
                  ? 'text-white bg-white/5 border-b-2' 
                  : 'text-white/40 hover:text-white/60'
              }`}
              style={{ borderColor: activeTab === tab.id ? color : 'transparent' }}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="p-4 space-y-3 min-h-[200px] max-h-[240px] overflow-hidden">
          {currentConversation.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
              animate={isInView && i <= typingIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: msg.type === 'user' ? 20 : -20 }}
              transition={{ delay: i * 0.3 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-xl p-3 text-xs ${
                  msg.type === 'user' 
                    ? 'bg-white/10 text-white' 
                    : 'border'
                }`}
                style={msg.type === 'ai' ? { 
                  backgroundColor: `${color}10`,
                  borderColor: `${color}30`
                } : {}}
              >
                {msg.type === 'ai' && (
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Brain className="w-3 h-3" style={{ color }} />
                    <span className="text-[10px] font-medium" style={{ color }}>AI Assistant</span>
                  </div>
                )}
                <p className="text-white/80 leading-relaxed">{msg.text}</p>
                {msg.highlight && (
                  <span 
                    className="inline-block mt-1.5 px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ 
                      backgroundColor: `${color}20`,
                      color
                    }}
                  >
                    {msg.highlight}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
          
          {/* Typing Indicator */}
          {isInView && typingIndex < currentConversation.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div 
                className="rounded-xl p-2 border"
                style={{ borderColor: `${color}30` }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: color }}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Input Area */}
        <div className="px-4 py-3 border-t border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white/30 text-xs">Ask about tickets, logs, or system issues...</span>
            </div>
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: color }}
            >
              <ArrowRight className="w-4 h-4 text-black" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Data Sources Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="flex justify-center mt-4"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
          <span className="text-white/40 text-xs">Connected to:</span>
          {['Jira', 'ServiceNow', 'Datadog', 'Splunk'].map((source) => (
            <span 
              key={source}
              className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/60"
            >
              {source}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Logger AI Architecture Visualization
function LoggerViz({ color, isInView }: { color: string; isInView: boolean }) {
  const servers = [
    { name: 'API-01', status: 'healthy', logs: '2.4M' },
    { name: 'API-02', status: 'warning', logs: '1.8M' },
    { name: 'DB-01', status: 'healthy', logs: '890K' },
    { name: 'Cache', status: 'healthy', logs: '3.1M' },
  ];

  return (
    <div className="relative py-8">
      {/* Servers Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {servers.map((server, i) => (
          <motion.div
            key={server.name}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-white/70 text-xs font-medium">{server.name}</span>
              <div 
                className={`w-2 h-2 rounded-full ${
                  server.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                }`}
              />
            </div>
            <div className="text-white/40 text-[10px]">{server.logs} logs/hr</div>
            <div className="mt-2 h-6 overflow-hidden">
              {[...Array(3)].map((_, j) => (
                <motion.div
                  key={j}
                  className="h-0.5 bg-white/10 rounded mb-0.5"
                  initial={{ width: '20%' }}
                  animate={isInView ? { width: ['20%', '80%', '40%', '60%'] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Analysis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="flex justify-center mb-4"
      >
        <div 
          className="px-6 py-3 rounded-xl flex items-center gap-3"
          style={{ 
            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
            border: `1px solid ${color}40`
          }}
        >
          <Cpu className="w-5 h-5" style={{ color }} />
          <span className="text-white text-sm font-medium">Logger AI Engine</span>
        </div>
      </motion.div>

      {/* Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="max-w-xs mx-auto"
      >
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-xs font-medium">Anomaly Detected</span>
          </div>
          <span className="text-white/50 text-[10px] block mt-1">High error rate in API-02</span>
        </div>
      </motion.div>
    </div>
  );
}

// TMS AI Architecture Visualization
function TmsViz({ color, isInView }: { color: string; isInView: boolean }) {
  const steps = ['Incoming', 'AI Analysis', 'Routing', 'Resolution'];
  const metrics = [
    { label: 'CSAT', value: '94%' },
    { label: 'FCR', value: '87%' },
    { label: 'NPS', value: '72' },
  ];

  return (
    <div className="relative py-8">
      {/* Ticket Flow */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
            >
              <span className="text-white/70 text-xs">{step}</span>
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-3 h-3 text-white/20 mx-1" />
            )}
          </div>
        ))}
      </div>

      {/* AI Engine */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="flex justify-center mb-6"
      >
        <div 
          className="relative p-4 rounded-xl"
          style={{ 
            background: `linear-gradient(135deg, ${color}20, ${color}05)`,
            border: `1px solid ${color}40`
          }}
        >
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6" style={{ color }} />
            <div>
              <span className="text-white text-sm font-medium block">AI Decision Engine</span>
              <span className="text-white/50 text-[10px]">Smart Classification</span>
            </div>
          </div>
          <motion.div
            className="absolute inset-0 rounded-xl border"
            style={{ borderColor: `${color}30` }}
            animate={isInView ? { scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.9 }}
        className="flex justify-center gap-3"
      >
        {metrics.map((metric) => (
          <div 
            key={metric.label}
            className="px-3 py-2 rounded-lg text-center"
            style={{ 
              background: `linear-gradient(135deg, ${color}15, ${color}05)`,
              border: `1px solid ${color}30`
            }}
          >
            <span className="text-lg font-bold block" style={{ color }}>{metric.value}</span>
            <span className="text-white/50 text-[10px]">{metric.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// HRMS Architecture Visualization
function HrmsViz({ color, isInView }: { color: string; isInView: boolean }) {
  const stages = [
    { name: 'Post', icon: Globe },
    { name: 'Screen', icon: Brain },
    { name: 'Interview', icon: Users },
    { name: 'Hire', icon: Check },
  ];

  return (
    <div className="relative py-8">
      {/* Pipeline */}
      <div className="flex items-center justify-between mb-6 px-4">
        {stages.map((stage, i) => (
          <div key={stage.name} className="flex items-center flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-1"
                style={{ 
                  background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                  border: `1px solid ${color}40`
                }}
              >
                <stage.icon className="w-5 h-5" style={{ color }} />
              </div>
              <span className="text-white/60 text-[10px]">{stage.name}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div
                className="flex-1 h-0.5 mx-2"
                style={{ background: `linear-gradient(90deg, ${color}40, ${color}20)` }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>

      {/* AI Matching */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="p-3 rounded-xl mb-4"
        style={{ 
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
          border: `1px solid ${color}30`
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4" style={{ color }} />
            <span className="text-white/70 text-xs">AI Resume-JD Matching</span>
          </div>
          <span className="text-sm font-medium" style={{ color }}>94%</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
            initial={{ width: 0 }}
            animate={isInView ? { width: '94%' } : {}}
            transition={{ delay: 1, duration: 1 }}
          />
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2 }}
        className="flex justify-center gap-4"
      >
        {[
          { label: 'Time Saved', value: '80%' },
          { label: 'Success Rate', value: '92%' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-lg font-bold block" style={{ color }}>{stat.value}</span>
            <span className="text-white/50 text-[10px]">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ERP Architecture Visualization
function ErpViz({ color, isInView }: { color: string; isInView: boolean }) {
  const modules = ['Finance', 'HR', 'Inventory', 'Sales', 'Procurement', 'Analytics'];

  return (
    <div className="relative py-8">
      {/* Central Hub */}
      <div className="relative flex justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          className="relative w-24 h-24"
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed"
            style={{ borderColor: `${color}30` }}
            animate={isInView ? { rotate: 360 } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <div 
            className="absolute inset-2 rounded-full flex items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${color}40, ${color}20)`,
              border: `2px solid ${color}60`
            }}
          >
            <Database className="w-8 h-8" style={{ color }} />
          </div>
        </motion.div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {modules.map((module, i) => (
          <motion.div
            key={module}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + i * 0.05 }}
            className="p-2 rounded-lg text-center"
            style={{ 
              background: `linear-gradient(135deg, ${color}10, transparent)`,
              border: `1px solid ${color}20`
            }}
          >
            <span className="text-white/60 text-[10px]">{module}</span>
          </motion.div>
        ))}
      </div>

      {/* RBAC */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="p-3 rounded-xl bg-white/5 border border-white/10"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70 text-xs">Role-Based Access</span>
          <Lock className="w-3 h-3" style={{ color }} />
        </div>
        <div className="flex gap-1">
          {['Admin', 'Manager', 'Employee'].map((role) => (
            <span key={role} className="px-2 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px]">
              {role}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Product Section Component
function ProductSection({ product, index }: { product: typeof products[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref}
      id={product.id}
      className="relative py-24 scroll-mt-20"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          background: `radial-gradient(circle at ${isEven ? 'right' : 'left'} center, ${product.color}40, transparent 60%)` 
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isEven ? '' : 'lg:order-2'}
          >
            {/* Product Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${product.color}15`, border: `1px solid ${product.color}30` }}
            >
              <product.icon className="w-4 h-4" style={{ color: product.color }} />
              <span className="text-sm font-medium" style={{ color: product.color }}>Product {index + 1}</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-2"
            >
              {product.name}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl mb-4"
              style={{ color: product.color }}
            >
              {product.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-white/60 mb-8 leading-relaxed"
            >
              {product.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mb-8"
            >
              {product.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="text-2xl font-bold block" style={{ color: product.color }}>{stat.value}</span>
                  <span className="text-white/40 text-xs">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              {product.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${product.color}30` }}
                  >
                    <Check className="w-3 h-3" style={{ color: product.color }} />
                  </div>
                  <span className="text-white/70 text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
                style={{ backgroundColor: product.color, color: '#000' }}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-all">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isEven ? '' : 'lg:order-1'}
          >
            <ArchitectureViz product={product} isInView={isInView} />

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-3 mt-6"
            >
              {product.benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center"
                >
                  <benefit.icon className="w-5 h-5 mx-auto mb-2" style={{ color: product.color }} />
                  <span className="text-white/80 text-xs font-medium block mb-1">{benefit.title}</span>
                  <span className="text-white/40 text-[10px]">{benefit.desc}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Hero Section for Products Page
function ProductsHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(152, 171, 164, 0.08) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#98ABA4]" />
            <span className="text-sm text-white/70">Our Products</span>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Intelligent Solutions for
            <br />
            <span className="text-gradient">Modern Enterprises</span>
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
            From data synchronization to AI-powered insights, our suite of products 
            helps you automate, optimize, and scale your business operations.
          </p>

          {/* Product Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#98ABA4]/50 hover:bg-white/[0.08] transition-all"
              >
                <product.icon className="w-4 h-4" style={{ color: product.color }} />
                <span className="text-white/70 text-sm">{product.name.replace('Effred ', '')}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Integration Section
function IntegrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Seamless Product Integration
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our products work together to create a complete automation ecosystem. 
            Start with one and expand as your needs grow.
          </p>
        </motion.div>

        {/* Integration Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="relative"
              >
                <div 
                  className="p-4 rounded-xl text-center h-full"
                  style={{ 
                    background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
                    border: `1px solid ${product.color}30`
                  }}
                >
                  <product.icon className="w-8 h-8 mx-auto mb-2" style={{ color: product.color }} />
                  <span className="text-white/80 text-xs font-medium block">{product.name.replace('Effred ', '')}</span>
                </div>
                
                {/* Connection Lines */}
                {i < products.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5"
                    style={{ background: `linear-gradient(90deg, ${product.color}40, ${products[i + 1]?.color || product.color}40)` }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Central Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#98ABA4]/30 to-[#6B8E7D]/20 border border-[#98ABA4]/40 flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#98ABA4]" />
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all"
          >
            Discuss Your Needs <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Main Products Page Component
export default function ProductsPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-20"
    >
      <ProductsHero />
      
      {products.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}

      <IntegrationSection />

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151414] to-[#0a0a0a]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss how Effred can help transform your business 
              with our intelligent automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all"
              >
                Schedule a Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
