'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Brain, BarChart3, Lock, Cpu, Database } from 'lucide-react';

const streamingItems = [
  {
    icon: Database,
    title: 'Real-time Data Sync',
    description: 'Synchronized data across all systems without delays',
    color: '#98ABA4',
  },
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Machine learning models that learn from your operations',
    color: '#C2D8CF',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Processing',
    description: 'Sub-second latency for mission-critical operations',
    color: '#64C8FF',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards',
    color: '#D4AF37',
  },
  {
    icon: Cpu,
    title: 'Scalable Infrastructure',
    description: 'Grows with your business without performance degradation',
    color: '#98ABA4',
  },
  {
    icon: BarChart3,
    title: 'Actionable Insights',
    description: 'Transform data into strategic business decisions',
    color: '#C2D8CF',
  },
];

export default function StreamingContent() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    streamingItems.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 200);
      return () => clearTimeout(timer);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {streamingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20, x: -20 }}
          animate={
            visibleItems.includes(index)
              ? { opacity: 1, y: 0, x: 0 }
              : { opacity: 0, y: 20, x: -20 }
          }
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg group"
          style={{
            backgroundColor: `${item.color}08`,
            borderColor: `${item.color}30`,
          }}
          whileHover={{ y: -8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ backgroundColor: `${item.color}20` }}
          >
            <item.icon className="w-6 h-6" style={{ color: item.color }} />
          </motion.div>

          <h3 className="text-white font-semibold mb-2 group-hover:text-[#98ABA4] transition-colors">
            {item.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

          {/* Animated line below */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={visibleItems.includes(index) ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-0.5 mt-4 origin-left"
            style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }}
          />
        </motion.div>
      ))}
    </div>
  );
}
