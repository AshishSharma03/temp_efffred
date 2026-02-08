import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, CheckCircle, MessageSquare, Zap, Building2 } from 'lucide-react';

interface WelcomePopupProps {
  onClose: () => void;
}

export default function WelcomePopup({ onClose }: WelcomePopupProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => onClose(), 2000);
  };

  const purposes = [
    { icon: Zap, label: 'Process Automation', desc: 'Streamline workflows' },
    { icon: Building2, label: 'Enterprise Solutions', desc: 'Scale operations' },
    { icon: MessageSquare, label: 'AI Integration', desc: 'Smart systems' },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Popup Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md glass rounded-3xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Gradient Header */}
          <div className="relative h-24 bg-gradient-to-br from-[#98ABA4]/20 via-[#6B8E7D]/10 to-transparent overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-50" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-[#98ABA4]/30"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Sparkles className="w-8 h-8 text-[#98ABA4]" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    Welcome to Effred
                  </h2>
                  <p className="text-white/60 text-sm">
                    Automate. Accelerate. Achieve.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Purpose Selection */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {purposes.map((p) => (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, purpose: p.label }))}
                        className={`p-3 rounded-xl border transition-all text-center ${
                          formData.purpose === p.label
                            ? 'border-[#98ABA4] bg-[#98ABA4]/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        <p.icon className={`w-5 h-5 mx-auto mb-1 ${
                          formData.purpose === p.label ? 'text-[#98ABA4]' : 'text-white/50'
                        }`} />
                        <span className={`text-[10px] block ${
                          formData.purpose === p.label ? 'text-white' : 'text-white/60'
                        }`}>{p.label}</span>
                      </button>
                    ))}
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50 transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50 transition-colors text-sm"
                      placeholder="Work email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#98ABA4] text-black font-medium rounded-xl hover:bg-[#C2D8CF] transition-colors flex items-center justify-center gap-2"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#98ABA4]/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#98ABA4]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/60 text-sm">We&apos;ll contact you within 24 hours.</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
