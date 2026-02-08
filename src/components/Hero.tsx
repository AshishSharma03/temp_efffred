import React from "react";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Cube Component
function Cube3D({ size = 60, color = '#98ABA4', delay = 0 }) {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size, perspective: '600px' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: 'spring' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: 360, rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[
          { transform: `translateZ(${size/2}px)`, bg: color },
          { transform: `rotateY(180deg) translateZ(${size/2}px)`, bg: color, opacity: 0.7 },
          { transform: `rotateY(90deg) translateZ(${size/2}px)`, bg: color, opacity: 0.5 },
          { transform: `rotateY(-90deg) translateZ(${size/2}px)`, bg: color, opacity: 0.5 },
          { transform: `rotateX(90deg) translateZ(${size/2}px)`, bg: color, opacity: 0.6 },
          { transform: `rotateX(-90deg) translateZ(${size/2}px)`, bg: color, opacity: 0.6 },
        ].map((face, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-white/20"
            style={{
              transform: face.transform,
              background: `linear-gradient(135deg, ${face.bg}40, ${face.bg}20)`,
              opacity: face.opacity || 1,
              backfaceVisibility: 'visible',
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// Neural Network Background
// function NeuralBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);

//     const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
//     for (let i = 0; i < 50; i++) {
//       nodes.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         vx: (Math.random() - 0.5) * 0.3,
//         vy: (Math.random() - 0.5) * 0.3,
//         radius: Math.random() * 2 + 1,
//       });
//     }

//     let animationId: number;
//     const animate = () => {
//       ctx.fillStyle = 'rgba(10, 10, 10, 0.03)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       nodes.forEach((node, i) => {
//         node.x += node.vx;
//         node.y += node.vy;
//         if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
//         if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

//         nodes.forEach((other, j) => {
//           if (i === j) return;
//           const dx = node.x - other.x;
//           const dy = node.y - other.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 150) {
//             ctx.beginPath();
//             ctx.moveTo(node.x, node.y);
//             ctx.lineTo(other.x, other.y);
//             const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
//             gradient.addColorStop(0, 'rgba(152, 171, 164, 0.1)');
//             gradient.addColorStop(0.5, 'rgba(152, 171, 164, 0.2)');
//             gradient.addColorStop(1, 'rgba(152, 171, 164, 0.1)');
//             ctx.strokeStyle = gradient;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         });

//         ctx.beginPath();
//         ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(152, 171, 164, 0.4)';
//         ctx.fill();
//       });

//       animationId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       window.removeEventListener('resize', resize);
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
// }

// Architecture Flow Component
// function ArchitectureFlow() {
//   const steps = [
//     { icon: Database, label: 'Data Sources', color: '#98ABA4' },
//     { icon: Cpu, label: 'Processing', color: '#C2D8CF' },
//     { icon: Brain, label: 'AI Engine', color: '#64C8FF' },
//     { icon: BarChart3, label: 'Insights', color: '#D4AF37' },
//   ];

//   return (
//     <div className="relative flex items-center justify-center gap-4 py-8">
//       {steps.map((step, i) => (
//         <div key={i} className="flex items-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 + i * 0.2 }}
//             className="relative"
//           >
//             <motion.div
//               className="w-14 h-14 rounded-2xl flex items-center justify-center"
//               style={{ 
//                 background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
//                 border: `1px solid ${step.color}40`,
//                 boxShadow: `0 0 30px ${step.color}20`
//               }}
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
//             >
//               <step.icon className="w-6 h-6" style={{ color: step.color }} />
//             </motion.div>
//             <p className="text-center text-white/60 text-xs mt-2">{step.label}</p>
//           </motion.div>
//           {i < steps.length - 1 && (
//             <motion.div
//               className="w-12 h-0.5 mx-2"
//               style={{ background: 'linear-gradient(90deg, #98ABA440, #C2D8CF40)' }}
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 30,
      y: (e.clientY / window.innerHeight - 0.5) * 30,
    });
  };

  const stats: never[] = [];

  return (
    <section 
      className=" min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
       <div style={{height:"100%",width:"100%",position:"absolute"}}> 
        <div  style={{height:"100%",width:"100%",position:"relative"}}>
          <model-viewer
            src="/assets/ballsW.glb"
            // camera-controls 
            // auto-rotate
            autoplay
            loop         
            // disable-zoom
            exposure="1.0"
            shadow-intensity="0.8"
            shadow-softness="0.4"
            background-blur="0.3"
            camera-target="0.5m 0.1m 1m"
           min-camera-orbit="90deg 40deg 4.5m"
          max-camera-orbit="98deg 50deg 4.5m"
            style={{height:"100vh",width:"100%",position:"absolute",opacity:"0.5 ",zIndex:99}}
          />
           <model-viewer
            src="/assets/eff.glb"
            // camera-controls 
            // auto-rotate
            autoplay
            loop         
            // disable-zoom
            exposure="1.0"
            shadow-intensity="0.8"
            shadow-softness="0.4"
            background-blur="0.3"
            camera-target="-1.3m 2m 0.3m"
           min-camera-orbit="0deg 0deg 4.5m"
          max-camera-orbit="0deg 0deg 4.5m"
            style={{height:"100vh",width:"100%",position:"absolute",opacity:"0.2 ",zIndex:99}}
          />
          </div>
         
        </div>


      {/* Neural Network Background
      <NeuralBackground /> */}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
          
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

            {/* Architecture Flow */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 block"
            >
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">How It Works</p>
              <ArchitectureFlow />
            </motion.div> */}

            {/* Stats - Hidden */}
            {stats.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10"
              >
                {stats.map((stat, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + idx * 0.1 }} className="text-center">
                    <span className="text-2xl font-bold text-white">{stat}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: 3D Visual */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          > */}
            {/* Central Hub */}
            {/* <div className="relative w-[400px] h-[400px]"> */}



              {/* Orbiting Cubes */}
              {/* {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15 + i * 5, repeat: Infinity, ease: 'linear', delay: i * 2 }}
                >
                  <div
                    className="absolute"
                    style={{
                      top: `${15 + i * 10}%`,
                      left: `${10 + i * 15}%`,
                    }}
                  >
                    <Cube3D size={30 + i * 10} color={['#98ABA4', '#C2D8CF', '#64C8FF', '#D4AF37'][i]} delay={i * 0.3} />
                  </div>
                </motion.div>
              ))} */}

              {/* Floating Labels */}
              {/* {[
                { label: 'AI', x: '55%', y: '50%', color: '#98ABA4' },
                { label: 'Data', x: '15%', y: '50%', color: '#C2D8CF' },
                { label: 'Cloud', x: '120%', y: '50%', color: '#64C8FF' },
                { label: 'Automation', x: '140%', y: '50%', color: '#D4AF37' },
                { label: 'Process Enhancement', x: '-60%', y: '50%', color: '#47d437' },
                { label: 'Productivity', x: '-15%', y: '50%', color: '#6e37d4' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="absolute px-3 py-1.5 glass rounded-lg text-xs font-medium"
                  style={{ 
                    left: item.x, 
                    top: item.y,
                    color: item.color,
                    borderColor: `${item.color}40`
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div> */}
      
      
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
