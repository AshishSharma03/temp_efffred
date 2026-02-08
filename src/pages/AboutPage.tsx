import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket } from 'lucide-react';

const values = [
  { icon: Target, title: 'Precision', description: 'We deliver solutions with meticulous attention to detail.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We stay at the forefront of technology.' },
  { icon: Users, title: 'Collaboration', description: 'We work as an extension of your team.' },
  { icon: Rocket, title: 'Execution', description: 'We deliver on time, every time.' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '1000+', label: 'Projects Delivered' },
  { value: '99.9%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0C0C0C] pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium text-[#98ABA4] tracking-[0.2em] uppercase mb-4">About Us</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              We Build the Future of<br /><span className="text-gradient">Enterprise Technology</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/60 text-lg mb-6">
                To empower enterprises with intelligent automation solutions that eliminate manual effort, 
                reduce operational costs, and accelerate business growth.
              </p>
              <p className="text-white/60 text-lg">
                Our team combines deep technical knowledge with industry experience to deliver solutions 
                that make a real difference—from saving 10,000 hours of manual work daily to achieving 99.9% uptime.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-[#98ABA4] mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#98ABA4]/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#98ABA4]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#98ABA4]" />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">{value.title}</h3>
                <p className="text-white/50 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-white/60 mb-8">Let&apos;s discuss how we can help transform your business.</p>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-medium rounded-lg hover:bg-[#C2D8CF] transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
