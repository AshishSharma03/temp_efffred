'use client';

import { motion } from 'framer-motion';

const techStack = [
  { name: 'Kubernetes', src: '/assets/kubarnate.png' },
  { name: 'AWS', src: '/assets/aws.png' },
  { name: 'Google Cloud', src: '/assets/googlecloud.png' },
  { name: 'Azure', src: '/assets/azure.png' },
  { name: 'Databricks', src: '/assets/dbrx.png' },
];

export default function   TrustedBy() {
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="relative py-16 overflow-hidden bg-[#0C0C0C]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <p className="text-sm font-medium text-white/40 tracking-[0.2em] uppercase">Trusted by Industry Leaders</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

        <motion.div className="flex gap-16 items-center" animate={{ x: ['0%', '-33.33%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
          {duplicatedStack.map((tech, idx) => (
            <div key={`${tech.name}-${idx}`} className="flex items-center gap-4 flex-shrink-0 group cursor-pointer">
              <div className="w-16 h-12 rounded-lg bg-white/5 flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors border border-white/5">
                <img 
                  src={tech.src || "/placeholder.svg"} 
                  alt={tech.name} 
                  className="w-auto h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-white/40 font-medium whitespace-nowrap group-hover:text-white/70 transition-colors">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
