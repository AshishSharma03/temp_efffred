import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase, Zap, Heart, Users, Sparkles, Coffee, Laptop, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { icon: Zap, title: 'Remote First', description: 'Work from anywhere in the world' },
  { icon: Heart, title: 'Health Coverage', description: 'Comprehensive medical, dental & vision' },
  { icon: Coffee, title: 'Wellness Stipend', description: '$500/year for fitness & wellness' },
  { icon: Laptop, title: 'Home Office', description: '$2,000 setup budget + monthly stipend' },
  { icon: GraduationCap, title: 'Learning Budget', description: '$3,000/year for courses & conferences' },
  { icon: Users, title: 'Team Retreats', description: 'Quarterly offsites around the world' },
];

const openPositions = [
  {
    id: 1,
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build scalable systems that power AI-driven automation for enterprise clients.',
    requirements: ['5+ years experience', 'React/Node.js', 'Cloud platforms'],
  },
  {
    id: 2,
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design and deploy machine learning models for intelligent automation.',
    requirements: ['3+ years ML experience', 'Python/TensorFlow', 'NLP expertise'],
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
    requirements: ['4+ years DevOps', 'Kubernetes', 'AWS/GCP/Azure'],
  },
  {
    id: 4,
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create intuitive interfaces for complex enterprise products.',
    requirements: ['3+ years UX/UI', 'Figma expertise', 'B2B SaaS experience'],
  },
  {
    id: 5,
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help enterprise clients achieve their automation goals.',
    requirements: ['4+ years CSM', 'Enterprise SaaS', 'Technical background'],
  },
  {
    id: 6,
    title: 'Sales Engineer',
    department: 'Sales',
    location: 'Remote',
    type: 'Full-time',
    description: 'Technical pre-sales support for enterprise opportunities.',
    requirements: ['3+ years sales engineering', 'API knowledge', 'Presentation skills'],
  },
];

const values = [
  {
    title: 'Customer Obsession',
    description: 'We start with the customer and work backwards. Their success is our success.',
    color: '#98ABA4',
  },
  {
    title: 'Move Fast',
    description: 'Speed matters in business. We make decisions quickly and iterate rapidly.',
    color: '#C2D8CF',
  },
  {
    title: 'Think Big',
    description: 'We challenge the status quo and envision solutions that transform industries.',
    color: '#64C8FF',
  },
  {
    title: 'Earn Trust',
    description: 'We are vocally self-critical, even when doing so is awkward or embarrassing.',
    color: '#D4AF37',
  },
];

function JobCard({ job, index }: { job: typeof openPositions[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#98ABA4]/30 transition-all card-hover"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-[#98ABA4] transition-colors">
              {job.title}
            </h3>
            <span className="px-2 py-0.5 rounded-full bg-[#98ABA4]/10 text-[#98ABA4] text-xs">
              {job.department}
            </span>
          </div>
          <p className="text-white/50 text-sm mb-3">{job.description}</p>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((req) => (
              <span 
                key={req}
                className="px-2 py-1 rounded-lg bg-white/5 text-white/40 text-xs"
              >
                {req}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </span>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 bg-[#98ABA4] text-black text-sm font-medium rounded-lg hover:bg-[#C2D8CF] transition-colors"
          >
            Apply <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function CareersPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-20"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(152, 171, 164, 0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#98ABA4]" />
              <span className="text-sm text-white/70">Join Our Team</span>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Build the Future of
              <br />
              <span className="text-gradient">Enterprise AI</span>
            </h1>

            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12">
              Join a team of passionate engineers, designers, and problem-solvers 
              building the next generation of intelligent automation.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: '50+', label: 'Team Members' },
                { value: '15+', label: 'Countries' },
                { value: '4.9★', label: 'Employee Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#98ABA4]">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              The principles that guide how we work, collaborate, and build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: value.color }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/50">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 bg-white">
        <div className="absolute inset-0 grid-pattern-dense opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Benefits & Perks
            </h2>
            <p className="text-black/60 max-w-xl mx-auto">
              We take care of our team so they can do their best work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-black/[0.02] border border-black/5"
              >
                <benefit.icon className="w-8 h-8 text-[#6B8E7D] mb-4" />
                <h3 className="text-lg font-semibold text-black mb-1">{benefit.title}</h3>
                <p className="text-black/50 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Find your perfect role and help us build the future.
            </p>
          </motion.div>

          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151414] to-[#0a0a0a]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Don&apos;t See the Right Role?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your resume 
              and we&apos;ll reach out when a fitting position opens up.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all"
            >
              Send Your Resume <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
