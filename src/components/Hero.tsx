import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
    });
  }, []);

  return (
    <section 
      className="min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 3D Model Viewers */}
      <div className="absolute inset-0 w-full h-full">
        <model-viewer
          src="/assets/ballsW.glb"
          autoplay
          loop
          exposure="1.0"
          shadow-intensity="0.8"
          shadow-softness="0.4"
          background-blur="0.3"
          camera-target="0.5m 0.1m 1m"
          min-camera-orbit="90deg 40deg 4.5m"
          max-camera-orbit="98deg 50deg 4.5m"
          style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.5', zIndex: 99 }}
        />
        <model-viewer
          src="/assets/eff.glb"
          autoplay
          loop
          exposure="1.0"
          shadow-intensity="0.8"
          shadow-softness="0.4"
          background-blur="0.3"
          camera-target="-1.3m 2m 0.3m"
          min-camera-orbit="0deg 0deg 4.5m"
          max-camera-orbit="0deg 0deg 4.5m"
          style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.2', zIndex: 99 }}
        />
      </div>
      

          
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(152, 171, 164, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: mousePos.x * 2,
          y: mousePos.y * 2,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(194, 216, 207, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          x: -mousePos.x * 2,
          y: -mousePos.y * 2,
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#98ABA4]" />
              <span className="text-sm text-white/70">Process Enhancement & AI Automation</span>
            </motion.div>

            <motion.div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              >
                Enterprise AI
                <br />
                <span className="text-gradient">That Actually Works</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-[#98ABA4] font-semibold mb-8"
              >
                From knowledge to action. From chaos to clarity.
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Stop searching for answers across fragmented systems. Effred Computer understands your entire operation through natural language. 
              Deepsync keeps your data synchronized across global teams. Logger AI detects problems before they become catastrophes. 
              <span className="text-white font-semibold"> Together, they transform how enterprises operate.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/products"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all btn-shine"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Link>
            </motion.div>


          </div>

        
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
