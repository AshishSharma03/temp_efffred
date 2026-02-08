'use client';

import { motion } from 'framer-motion';
import { Database, Brain, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export function WorkflowAnimation() {
  const workflows = [
    {
      stage: 'Data Ingestion',
      icon: Database,
      color: '#98ABA4',
      description: 'Deepsync collects and synchronizes data across all global client environments',
      examples: ['ERP Systems', 'Ticketing Platforms', 'Cloud Storage', 'APIs'],
    },
    {
      stage: 'Intelligence Layer',
      icon: Brain,
      color: '#C2D8CF',
      description: 'Computer AI processes queries through NLP engine with contextual understanding',
      examples: ['Knowledge Base', 'ML Models', 'Learning System', 'Semantic Search'],
    },
    {
      stage: 'Anomaly Detection',
      icon: AlertCircle,
      color: '#64C8FF',
      description: 'Logger AI identifies system issues within 5-10 minutes with root cause analysis',
      examples: ['Log Analysis', 'Pattern Recognition', 'Trend Detection', 'Alerts'],
    },
    {
      stage: 'Automated Action',
      icon: CheckCircle2,
      color: '#D4AF37',
      description: 'TMS AI routes tickets, executes remediation, and closes issues automatically',
      examples: ['Auto-Routing', 'Self-Service', 'Smart Resolution', 'Feedback Loop'],
    },
  ];

  return (
    <div className="w-full">
      {/* Full-width workflow timeline */}
      <div className="relative">
        {/* Animated background gradient line */}
        {/* <motion.div
          className="absolute top-24 left-0 h-1 bg-gradient-to-r from-[#98ABA4] via-[#C2D8CF] via-[#64C8FF] to-[#D4AF37]"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {workflows.map((workflow, idx) => (
            <motion.div
              key={workflow.stage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group"
            >
              {/* Main Card */}
              <div className="relative">
                {/* Step number with animation */}
                {/* <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.1 }}
                  className="absolute -top-12 left-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${workflow.color}40, ${workflow.color}20)`,
                    border: `2px solid ${workflow.color}`,
                    color: workflow.color,
                    boxShadow: `0 0 20px ${workflow.color}40`,
                  }}
                >
                  {idx + 1}
                </motion.div> */}

                {/* Card Body */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border transition-all duration-300 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${workflow.color}08, transparent)`,
                    borderColor: `${workflow.color}30`,
                  }}
                >
                  {/* Icon with pulse */}
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${workflow.color}20` }}
                  >
                    <workflow.icon className="w-7 h-7" style={{ color: workflow.color }} />
                  </motion.div>

                  {/* Stage Name */}
                  <h3 className="text-xl font-bold text-white mb-2">{workflow.stage}</h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{workflow.description}</p>

                  {/* Examples with stagger */}
                  <div className="space-y-2">
                    {workflow.examples.map((example, exIdx) => (
                      <motion.div
                        key={example}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + exIdx * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: workflow.color }}
                        />
                        <span className="text-white/60 text-xs">{example}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Connector Arrow - Only on desktop and not on last item */}
                {idx < 3 && (
                  <motion.div
                    className="hidden lg:block absolute -right-5 top-24"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                  >
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight
                        className="w-5 h-5"
                        style={{ color: workflow.color, opacity: 0.6 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Integration Summary */}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'End-to-End', value: 'Automation', icon: '🔄' },
            { label: 'Real-time', value: 'Processing', icon: '⚡' },
            { label: 'Enterprise', value: 'Scale', icon: '📈' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <p className="text-white/60 text-sm">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </div>
  );
}
