import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';


// const Item = () => 
// <div className="absolute inset-0 w-full h-full">
//         <model-viewer
//           src="/assets/ballsW.glb"
//           autoplay
//           loop
//           exposure="1.0"
//           shadow-intensity="0.8"
//           shadow-softness="0.4"
//           background-blur="0.3"
//           camera-target="0.5m 0.1m 1m"
//           min-camera-orbit="90deg 40deg 4.5m"
//           max-camera-orbit="98deg 50deg 4.5m"
//           style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.5',  }}
//         />
//         <model-viewer
//           src="/assets/eff.glb"
//           autoplay
//           loop
//           exposure="1.0"
//           shadow-intensity="0.8"
//           shadow-softness="0.4"
//           background-blur="0.3"
//           camera-target="-1.3m 2m 0.3m"
//           min-camera-orbit="0deg 0deg 4.5m"
//           max-camera-orbit="0deg 0deg 4.5m"
//           style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.2', }}
//         />
//       </div>

// const ItemMobile = () => 
// <div className="absolute inset-0 w-full h-full">
//         <model-viewer
//           src="/assets/ballsW.glb"
//           autoplay
//           loop
//           exposure="1.0"
//           shadow-intensity="0.8"
//           shadow-softness="0.4"
//           background-blur="0.3"
//           camera-target="0m 0m 0m"
//           min-camera-orbit="90deg 40deg 4.5m"
//           max-camera-orbit="98deg 50deg 4.5m"
//           style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.5',  }}
//         />
//         <model-viewer
//           src="/assets/eff.glb"
//           autoplay
//           loop
//           exposure="1.0"
//           shadow-intensity="0.8"
//           shadow-softness="0.4"
//           background-blur="0.3"
//           camera-target="0m 2m 0m"
//           min-camera-orbit="0deg 0deg 4.5m"
//           max-camera-orbit="0deg 0deg 4.5m"
//           style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.2', }}
//         />
//       </div>

const Item = ({ className = "hidden lg:block" }) => (
  <div className={`absolute inset-0 w-full h-full ${className}`}>
    <model-viewer
      src="/assets/ballsW.glb"
      autoplay
      loop
      exposure="1.0"
      shadow-intensity="0.8"
      shadow-softness="0.4"
      background-blur="0.3"
      camera-target="0.1m 0.1m 1m"
      min-camera-orbit="90deg 40deg 4.5m"
      max-camera-orbit="98deg 50deg 4.5m"
      style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.5' }}
    />
    <model-viewer
      src="/assets/eff.glb"
      autoplay
      loop
      exposure="1.0"
      shadow-intensity="0.8"
      shadow-softness="0.4"
      background-blur="0.3"
      camera-target="-1.4m 2m 0.01m"
      min-camera-orbit="0deg 0deg 4.5m"
      max-camera-orbit="0deg 0deg 4.5m"
      style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.2' }}
    />
  </div>
);

const ItemMobile = ({ className = "block lg:hidden" }) => (
  <div className={`absolute inset-0 w-full h-full ${className}`}>
    <model-viewer
      src="/assets/ballsW.glb"
      autoplay
      loop
      exposure="1.0"
      shadow-intensity="0.8"
      shadow-softness="0.4"
      background-blur="0.3"
      camera-target="0m 0m 0m"
      min-camera-orbit="90deg 40deg 4.5m"
      max-camera-orbit="98deg 50deg 4.5m"
      style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.5' }}
    />
    <model-viewer
      src="/assets/eff.glb"
      autoplay
      loop
      exposure="1.0"
      shadow-intensity="0.8"
      shadow-softness="0.4"
      background-blur="0.3"
      camera-target="0m 2m 0m"
      min-camera-orbit="0deg 0deg 4.5m"
      max-camera-orbit="0deg 0deg 4.5m"
      style={{ height: '100vh', width: '100%', position: 'absolute', opacity: '0.2' }}
    />
  </div>
);



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
      
     {/* Hide ItemMobile on desktop (lg+), show on mobile/tab */}
    <ItemMobile />

    {/* Hide Item on mobile/tab (lg+), show on desktop */}
    <Item  />


          
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-full"
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
        className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-full"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10"
            >
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#98ABA4]" />
              <span className="text-xs sm:text-sm text-white/70">Process Enhancement & AI Automation</span>
            </motion.div>

            <motion.div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                Enterprise AI
                <br />
                <span className="text-gradient">That Actually Works</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-[#98ABA4] font-semibold"
              >
                From knowledge to action. From chaos to clarity.
              </motion.p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Stop searching for answers across fragmented systems. Effred Computer understands your entire operation through natural language. 
              Deepsync keeps your data synchronized across global teams. Logger AI detects problems before they become catastrophes. 
              <span className="text-white font-semibold"> Together, they transform how enterprises operate.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/products"
                style={{zIndex:100}}
                className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#98ABA4] text-black font-semibold text-sm sm:text-base rounded-xl hover:bg-[#C2D8CF] transition-all btn-shine"
              >
                Explore Products
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                    style={{zIndex:100}}
                className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-medium text-sm sm:text-base rounded-xl hover:bg-white/5 transition-all"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5" />
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






