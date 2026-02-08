'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Cpu, Database, Brain, Zap } from 'lucide-react';

export function ComputerAIInterface() {
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: 'user' | 'ai'; loading?: boolean }>>([
    { id: '1', text: 'Show me critical incidents from last 7 days', sender: 'user' },
    { id: '2', text: 'Retrieving incident data from your knowledge base...', sender: 'ai', loading: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages(prev => {
        const updated = [...prev];
        if (updated[1] && updated[1].loading) {
          updated[1] = {
            ...updated[1],
            text: 'Found 12 critical incidents. Top 3: Database connection timeout (3 instances), API rate limit exceeded (5 instances), Memory leak in service-v2 (4 instances). Would you like more details?',
            loading: false,
          };
        }
        return updated;
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMessage = { id: String(messages.length + 1), text: inputValue, sender: 'user' as const };
    setMessages([...messages, newMessage]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: String(prev.length + 1),
        text: 'Processing your query with NLP engine...',
        sender: 'ai',
        loading: true,
      }]);
    }, 300);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#C2D8CF]/10 to-[#98ABA4]/10 border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[#C2D8CF]/20">
              <Brain className="w-5 h-5 text-[#C2D8CF]" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Effred Computer AI</h3>
              <p className="text-white/50 text-xs">Intelligent Knowledge Base</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              { icon: Cpu, label: 'Real-time Analysis' },
              { icon: Database, label: 'Multi-source' },
              { icon: Zap, label: 'Instant Answers' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                <item.icon className="w-3 h-3 text-[#C2D8CF]" />
                <span className="text-xs text-white/60">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="h-80 overflow-y-auto p-6 space-y-4 bg-black/20">
          {messages.map((msg, idx) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  msg.sender === 'user'
                    ? 'bg-[#98ABA4]/20 border border-[#98ABA4]/40'
                    : 'bg-white/[0.05] border border-white/10'
                }`}
              >
                <p className={`${msg.sender === 'user' ? 'text-white' : 'text-white/80'} text-sm leading-relaxed`}>
                  {msg.text}
                </p>
                {msg.loading && (
                  <div className="flex gap-1 mt-2">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-[#C2D8CF]"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-white/10 p-4 bg-black/20">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about your systems..."
              className="flex-1 bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#C2D8CF]/30 focus:bg-white/[0.08] transition-all"
            />
            <motion.button
              onClick={handleSend}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-[#C2D8CF] text-black hover:bg-[#98ABA4] transition-colors"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
          <div className="mt-3 flex gap-2 flex-wrap">
            {['System Health', 'Incident Trends', 'Knowledge Gaps'].map((tag, idx) => (
              <motion.button
                key={tag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all"
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-3 gap-4 mt-8"
      >
        {[
          { icon: Brain, label: 'NLP Engine', desc: 'Natural Language Processing' },
          { icon: Database, label: 'Knowledge Base', desc: 'Unified Data Access' },
          { icon: Zap, label: 'Real-time', desc: 'Instant Responses' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + idx * 0.1 }}
            className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-center hover:border-[#C2D8CF]/30 transition-all"
          >
            <item.icon className="w-6 h-6 mx-auto mb-2 text-[#C2D8CF]" />
            <h4 className="text-white text-sm font-semibold">{item.label}</h4>
            <p className="text-white/50 text-xs mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
