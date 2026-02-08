'use client';

import { motion } from 'framer-motion';
import { Database, Server, Cpu, ArrowRight, Check, Globe, Lock, Zap, Users } from 'lucide-react';

// Deepsync Architecture Component
export function DeepsyncArchitecture() {
  const sources = [
    { name: 'UK Client', icon: Globe, color: '#98ABA4' },
    { name: 'USA Client', icon: Globe, color: '#C2D8CF' },
    { name: 'APAC Client', icon: Globe, color: '#64C8FF' },
  ];

  const integrations = ['Jira', 'ServiceNow', 'BMC', 'Zendesk'];

  return (
    <div className="relative w-full">
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Deepsync Architecture</h3>
        <p className="text-white/50 text-sm">Unified data platform connecting global environments</p>
      </div>

      {/* Architecture Diagram */}
      <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10">
        {/* Data Sources */}
        <div className="flex justify-center gap-6 mb-8">
          {sources.map((source, i) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div 
                className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-2"
                style={{ 
                  background: `linear-gradient(135deg, ${source.color}20, ${source.color}10)`,
                  border: `1px solid ${source.color}40`
                }}
              >
                <source.icon className="w-6 h-6" style={{ color: source.color }} />
                <span className="text-white/80 text-xs font-medium">{source.name}</span>
              </div>
              {/* Connection Line */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-0.5 h-8 -translate-x-1/2"
                style={{ background: `linear-gradient(to bottom, ${source.color}60, transparent)` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* VPN-Less Connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative px-6 py-3 rounded-full bg-[#98ABA4]/10 border border-[#98ABA4]/30">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#98ABA4]" />
              <span className="text-[#98ABA4] text-sm font-medium">VPN-Less Secure Connection</span>
            </div>
            {/* Animated dots */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-[#98ABA4]"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Deepsync Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-64 h-32 rounded-2xl bg-gradient-to-br from-[#98ABA4]/20 to-[#6B8E7D]/10 border border-[#98ABA4]/30 flex flex-col items-center justify-center">
              <Database className="w-8 h-8 text-[#98ABA4] mb-2" />
              <span className="text-white font-semibold">Deepsync Engine</span>
              <span className="text-white/50 text-xs">Data Processing & Normalization</span>
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-[#98ABA4]/20 blur-xl -z-10" />
          </div>
        </motion.div>

        {/* Integrations */}
        <div className="flex justify-center gap-4 mb-8">
          {integrations.map((integration, i) => (
            <motion.div
              key={integration}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm"
            >
              {integration}
            </motion.div>
          ))}
        </div>

        {/* Output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <div className="w-48 h-20 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center gap-3">
            <Check className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="text-white font-medium text-sm">Unified Data</span>
              <span className="text-white/50 text-xs block">Single Source of Truth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Computer AI Architecture - Real Interface Import
import { ComputerAIInterface } from './ComputerAIInterface';

// Computer AI Architecture
export function ComputerArchitecture() {
  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Effred Computer AI</h3>
        <p className="text-white/50 text-sm">Intelligent knowledge base with natural language processing</p>
      </div>
      
      {/* Real Interface */}
      <ComputerAIInterface />

      {/* AI Engine */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-center mb-6"
      >
        <div className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C2D8CF]/20 to-[#98ABA4]/10 border border-[#C2D8CF]/30">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#C2D8CF]" />
            <span className="text-white font-medium">Fine-tuned LLM Engine</span>
          </div>
        </div>
      </motion.div>

      {/* Chat Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="max-w-sm mx-auto"
      >
        <div className="bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#98ABA4]" />
            <span className="text-white/50 text-xs">AI Assistant</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white/5 rounded-lg p-3 text-white/70 text-sm">
              "Show me all critical tickets from last week"
            </div>
            <div className="bg-[#98ABA4]/10 rounded-lg p-3 text-[#98ABA4] text-sm border border-[#98ABA4]/20">
              Found 23 critical tickets. Here's the summary...
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Logger AI Architecture
export function LoggerArchitecture() {
  const servers = [
    { name: 'Server 1', status: 'healthy', logs: '2.4M' },
    { name: 'Server 2', status: 'warning', logs: '1.8M' },
    { name: 'Server 3', status: 'healthy', logs: '3.1M' },
    { name: 'Microservice A', status: 'healthy', logs: '890K' },
  ];

  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">Logger AI Architecture</h3>
        <p className="text-white/50 text-sm">Intelligent log analysis across all systems</p>
      </div>

      <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10">
        {/* Servers Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {servers.map((server, i) => (
            <motion.div
              key={server.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm font-medium">{server.name}</span>
                <div 
                  className={`w-2 h-2 rounded-full ${
                    server.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                />
              </div>
              <div className="text-white/50 text-xs">{server.logs} logs/hour</div>
              {/* Log Stream Animation */}
              <div className="mt-2 h-8 overflow-hidden">
                {[...Array(3)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="h-1 bg-white/10 rounded mb-1"
                    initial={{ width: '20%' }}
                    animate={{ width: ['20%', '80%', '40%', '60%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: j * 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Analysis Engine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-br from-[#707070]/30 to-[#505050]/10 border border-[#707070]/40">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Cpu className="w-8 h-8 text-[#707070]" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#707070]/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <span className="text-white font-semibold block">Logger AI Engine</span>
                <span className="text-white/50 text-xs">Pattern Recognition & Anomaly Detection</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Detection Result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-md mx-auto"
        >
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <span className="text-red-400 font-medium text-sm block">Anomaly Detected</span>
                <span className="text-white/60 text-xs">High error rate in Microservice A - 5:23 PM</span>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white/40 text-xs">Detected in:</span>
                  <span className="text-[#98ABA4] text-xs font-mono">4m 32s</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// TMS AI Architecture
export function TmsArchitecture() {
  const metrics = [
    { label: 'CSAT', value: '94%', color: '#98ABA4' },
    { label: 'FCR', value: '87%', color: '#C2D8CF' },
    { label: 'NPS', value: '72', color: '#64C8FF' },
    { label: 'FRT', value: '2m', color: '#D4AF37' },
  ];

  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">TMS AI Architecture</h3>
        <p className="text-white/50 text-sm">Intelligent ticket management with AI-powered routing</p>
      </div>

      <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10">
        {/* Ticket Flow */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {['Incoming', 'AI Analysis', 'Routing', 'Resolution'].map((step, i) => (
            <div key={step} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-white/80 text-sm">{step}</span>
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <ArrowRight className="w-4 h-4 text-white/30 mx-2" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* AI Decision Engine */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#98ABA4]/20 to-[#6B8E7D]/10 border border-[#98ABA4]/30">
            <div className="text-center">
              <Cpu className="w-8 h-8 text-[#98ABA4] mx-auto mb-2" />
              <span className="text-white font-medium block">AI Decision Engine</span>
              <span className="text-white/50 text-xs">Smart Classification & Routing</span>
            </div>
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-2xl border border-[#98ABA4]/20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-4 gap-3"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="p-3 rounded-xl text-center"
              style={{ 
                background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}05)`,
                border: `1px solid ${metric.color}30`
              }}
            >
              <span className="text-2xl font-bold block" style={{ color: metric.color }}>{metric.value}</span>
              <span className="text-white/50 text-xs">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// HRMS Architecture
export function HrmsArchitecture() {
  const stages = [
    { name: 'Job Posting', icon: Globe, color: '#98ABA4' },
    { name: 'AI Screening', icon: Cpu, color: '#C2D8CF' },
    { name: 'Interview', icon: Users, color: '#64C8FF' },
    { name: 'Onboarding', icon: Check, color: '#D4AF37' },
  ];

  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">HRMS Architecture</h3>
        <p className="text-white/50 text-sm">End-to-end HR automation with AI-powered recruitment</p>
      </div>

      <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10">
        {/* Pipeline */}
        <div className="flex items-center justify-between mb-8">
          {stages.map((stage, i) => (
            <div key={stage.name} className="flex items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                  style={{ 
                    background: `linear-gradient(135deg, ${stage.color}20, ${stage.color}10)`,
                    border: `1px solid ${stage.color}40`
                  }}
                >
                  <stage.icon className="w-6 h-6" style={{ color: stage.color }} />
                </div>
                <span className="text-white/70 text-xs text-center">{stage.name}</span>
              </motion.div>
              {i < stages.length - 1 && (
                <motion.div
                  className="flex-1 h-0.5 mx-2"
                  style={{ background: `linear-gradient(90deg, ${stage.color}40, ${stages[i+1].color}40)` }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* AI Matching */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-4 rounded-xl bg-[#C2D8CF]/10 border border-[#C2D8CF]/30 mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[#C2D8CF]" />
              <span className="text-white/80 text-sm">AI Resume-JD Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#C2D8CF] text-sm font-medium">94%</span>
              <span className="text-white/40 text-xs">accuracy</span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C2D8CF] to-[#98ABA4]"
              initial={{ width: 0 }}
              animate={{ width: '94%' }}
              transition={{ delay: 1, duration: 1 }}
            />
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Time Saved', value: '80%', color: '#98ABA4' },
            { label: 'Candidates', value: '10K+', color: '#C2D8CF' },
            { label: 'Success Rate', value: '92%', color: '#D4AF37' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <span className="text-xl font-bold block" style={{ color: stat.color }}>{stat.value}</span>
              <span className="text-white/50 text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ERP Architecture
export function ErpArchitecture() {
  const modules = [
    { name: 'Finance', icon: Database, color: '#98ABA4' },
    { name: 'HR', icon: Users, color: '#C2D8CF' },
    { name: 'Inventory', icon: Server, color: '#64C8FF' },
    { name: 'Sales', icon: Globe, color: '#D4AF37' },
    { name: 'Procurement', icon: Check, color: '#98ABA4' },
    { name: 'Analytics', icon: Cpu, color: '#C2D8CF' },
  ];

  return (
    <div className="relative w-full">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">ERP Architecture</h3>
        <p className="text-white/50 text-sm">Unified enterprise resource planning with role-based access</p>
      </div>

      <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent rounded-3xl p-8 border border-white/10">
        {/* Central Hub */}
        <div className="relative flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-32 h-32"
          >
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#D4AF37]/30 to-[#B8860B]/10 border border-[#D4AF37]/40 flex items-center justify-center">
              <Database className="w-10 h-10 text-[#D4AF37]" />
            </div>
            {/* Orbiting modules */}
            {modules.slice(0, 4).map((module, i) => {
              const angle = (i * 90) * (Math.PI / 180);
              const x = Math.cos(angle) * 70;
              const y = Math.sin(angle) * 70;
              return (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute left-1/2 top-1/2"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${module.color}30, ${module.color}10)`,
                      border: `1px solid ${module.color}50`
                    }}
                  >
                    <module.icon className="w-4 h-4" style={{ color: module.color }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {modules.map((module, i) => (
            <motion.div
              key={module.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.05 }}
              className="p-3 rounded-xl flex items-center gap-3"
              style={{ 
                background: `linear-gradient(135deg, ${module.color}10, transparent)`,
                border: `1px solid ${module.color}20`
              }}
            >
              <module.icon className="w-4 h-4" style={{ color: module.color }} />
              <span className="text-white/70 text-sm">{module.name}</span>
            </motion.div>
          ))}
        </div>

        {/* RBAC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/80 text-sm font-medium">Role-Based Access Control</span>
            <Lock className="w-4 h-4 text-[#98ABA4]" />
          </div>
          <div className="flex gap-2">
            {['Admin', 'Manager', 'Employee', 'Customer'].map((role) => (
              <span key={role} className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                {role}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
