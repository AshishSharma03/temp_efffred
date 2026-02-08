import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Cpu, Cloud, Code2, GitBranch, LineChart, Check, ArrowRight, ExternalLink, Zap, Database, Workflow, Settings, Container, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service Data with Detailed Information
const services = [
  {
    id: 'ai-deployment',
    title: 'AI Deployments',
    subtitle: 'Turning AI Models into Real-World Impact',
    description: 'Deploy AI and machine learning models into production environments where performance, scalability, and reliability matter. We handle the entire MLOps lifecycle.',
    icon: Cpu,
    color: '#98ABA4',
    secondaryColor: '#6B8E7D',
    stats: [
      { value: '99.9%', label: 'Uptime' },
      { value: '<100ms', label: 'Latency' },
      { value: '10x', label: 'Scale' },
    ],
    offerings: [
      { title: 'AI/ML Model Deployment', desc: 'Production-ready model serving with auto-scaling' },
      { title: 'API-based AI Services', desc: 'RESTful and gRPC APIs for model inference' },
      { title: 'Multi-Environment Deployment', desc: 'Dev, staging, and production pipelines' },
      { title: 'Model Versioning', desc: 'A/B testing and canary deployments' },
    ],
    technologies: ['TensorFlow', 'PyTorch', 'ONNX', 'Kubernetes', 'MLflow', 'Kubeflow'],
    process: ['Model Packaging', 'Containerization', 'Deployment', 'Monitoring', 'Optimization'],
  },
  {
    id: 'devops',
    title: 'DevOps',
    subtitle: 'Faster Releases. Stable Systems. Zero Downtime.',
    description: 'Streamline your software delivery lifecycle by automating builds, testing, deployment, and monitoring. Achieve continuous delivery with confidence.',
    icon: GitBranch,
    color: '#C2D8CF',
    secondaryColor: '#98ABA4',
    stats: [
      { value: '10x', label: 'Faster Deploys' },
      { value: '99.9%', label: 'Success Rate' },
      { value: '0', label: 'Downtime' },
    ],
    offerings: [
      { title: 'CI/CD Pipeline Design', desc: 'Automated build, test, and deployment workflows' },
      { title: 'Kubernetes Orchestration', desc: 'Container management at enterprise scale' },
      { title: 'Infrastructure as Code', desc: 'Terraform, CloudFormation, Pulumi' },
      { title: 'Zero-Downtime Deploys', desc: 'Blue-green and rolling update strategies' },
    ],
    technologies: ['Jenkins', 'GitLab CI', 'ArgoCD', 'Terraform', 'Ansible', 'Helm'],
    process: ['Code Commit', 'Build & Test', 'Deploy', 'Verify', 'Monitor'],
  },
  {
    id: 'aiops',
    title: 'AIOps',
    subtitle: 'AI-Driven IT Operations That Predict & Prevent Issues',
    description: 'Apply AI to IT operations to detect anomalies, predict failures, and automate responses. Transform reactive operations into proactive intelligence.',
    icon: LineChart,
    color: '#707070',
    secondaryColor: '#98ABA4',
    stats: [
      { value: '5min', label: 'MTTR' },
      { value: '95%', label: 'Prediction Acc' },
      { value: '80%', label: 'Noise Reduction' },
    ],
    offerings: [
      { title: 'Anomaly Detection', desc: 'ML-powered pattern recognition in metrics' },
      { title: 'Predictive Alerts', desc: 'Get notified before issues impact users' },
      { title: 'Self-Healing Systems', desc: 'Automated remediation and recovery' },
      { title: 'Operational Intelligence', desc: 'Insights from logs, metrics, and traces' },
    ],
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'PagerDuty', 'Datadog', 'New Relic'],
    process: ['Collect Data', 'Analyze Patterns', 'Detect Anomalies', 'Alert/Remediate', 'Learn'],
  },
  {
    id: 'cloud',
    title: 'Cloud Infrastructure',
    subtitle: 'Secure, Scalable & Cost-Optimized Cloud Environments',
    description: 'Design and manage cloud infrastructure that grows with your business while maintaining security, compliance, and cost efficiency.',
    icon: Cloud,
    color: '#64C8FF',
    secondaryColor: '#4A90E2',
    stats: [
      { value: '40%', label: 'Cost Savings' },
      { value: '99.99%', label: 'Availability' },
      { value: '3', label: 'Cloud Providers' },
    ],
    offerings: [
      { title: 'Multi-Cloud Architecture', desc: 'AWS, GCP, Azure expertise' },
      { title: 'Cloud Migration', desc: 'Lift-and-shift to cloud-native' },
      { title: 'Container Platforms', desc: 'EKS, GKE, AKS management' },
      { title: 'Cost Optimization', desc: 'Right-sizing and reserved capacity' },
    ],
    technologies: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'OpenShift'],
    process: ['Assess', 'Design', 'Migrate', 'Optimize', 'Manage'],
  },
  {
    id: 'custom',
    title: 'Custom Solutions',
    subtitle: 'Built for Your Business—Not Off-the-Shelf',
    description: 'Every business is unique. We deliver custom-built solutions designed around your workflows, users, and goals using modern tech stacks.',
    icon: Code2,
    color: '#D4AF37',
    secondaryColor: '#B8860B',
    stats: [
      { value: '100%', label: 'Custom Fit' },
      { value: '50+', label: 'Projects' },
      { value: '4.9', label: 'Rating' },
    ],
    offerings: [
      { title: 'Solution Consulting', desc: 'Architecture and technology guidance' },
      { title: 'Custom Applications', desc: 'Web, mobile, and desktop apps' },
      { title: 'Legacy Modernization', desc: 'Migrate from monoliths to microservices' },
      { title: 'API Integrations', desc: 'Connect disparate systems seamlessly' },
    ],
    technologies: ['React', 'Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis'],
    process: ['Discover', 'Design', 'Develop', 'Test', 'Deploy'],
  },
];

// Architecture Visualization Components
function AIDeploymentViz({ isInView, color }: { isInView: boolean; color: string }) {
  return (
    <div className="relative py-6">
      {/* Model Registry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="flex justify-center mb-4"
      >
        <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
          <Database className="w-5 h-5" style={{ color }} />
          <span className="text-white/70 text-sm">Model Registry</span>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <motion.div
          animate={isInView ? { y: [0, 5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
        </motion.div>
      </div>

      {/* Containerization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="flex justify-center mb-4"
      >
        <div className="flex gap-4">
          {['TensorFlow', 'PyTorch', 'ONNX'].map((tech) => (
            <div key={tech} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-white/60 text-xs">{tech}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <motion.div
          animate={isInView ? { y: [0, 5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        >
          <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
        </motion.div>
      </div>

      {/* Kubernetes Cluster */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="flex justify-center mb-4"
      >
        <div 
          className="p-4 rounded-xl flex items-center gap-4"
          style={{ background: `linear-gradient(135deg, ${color}20, ${color}05)`, border: `1px solid ${color}40` }}
        >
          <Container className="w-8 h-8" style={{ color }} />
          <div>
            <span className="text-white font-medium text-sm block">Kubernetes Cluster</span>
            <span className="text-white/50 text-xs">Auto-scaling Inference</span>
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <motion.div
          animate={isInView ? { y: [0, 5, 0] } : {}}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        >
          <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
        </motion.div>
      </div>

      {/* API Gateway */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
      >
        <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
          <Globe className="w-5 h-5" style={{ color }} />
          <span className="text-white/70 text-sm">API Gateway</span>
        </div>
      </motion.div>
    </div>
  );
}

function DevOpsViz({ isInView, color }: { isInView: boolean; color: string }) {
  const stages = ['Code', 'Build', 'Test', 'Deploy', 'Monitor'];
  
  return (
    <div className="relative py-6">
      {/* Pipeline Flow */}
      <div className="flex items-center justify-center gap-2 mb-6">
        {stages.map((stage, i) => (
          <div key={stage} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 }}
              className="px-3 py-2 rounded-lg"
              style={{ 
                background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                border: `1px solid ${color}40`
              }}
            >
              <span className="text-white/80 text-xs">{stage}</span>
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <ArrowRight className="w-4 h-4 text-white/30 mx-1" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Git to K8s */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="flex justify-center items-center gap-6"
      >
        <div className="text-center">
          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <GitBranch className="w-6 h-6" style={{ color }} />
          </div>
          <span className="text-white/50 text-xs">Git Repo</span>
        </div>
        
        <motion.div
          animate={isInView ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <ArrowRight className="w-5 h-5" style={{ color }} />
        </motion.div>
        
        <div className="text-center">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
            style={{ background: `linear-gradient(135deg, ${color}20, ${color}05)`, border: `1px solid ${color}40` }}
          >
            <Workflow className="w-6 h-6" style={{ color }} />
          </div>
          <span className="text-white/50 text-xs">CI/CD</span>
        </div>
        
        <motion.div
          animate={isInView ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
        >
          <ArrowRight className="w-5 h-5" style={{ color }} />
        </motion.div>
        
        <div className="text-center">
          <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <Container className="w-6 h-6" style={{ color }} />
          </div>
          <span className="text-white/50 text-xs">Kubernetes</span>
        </div>
      </motion.div>
    </div>
  );
}

function AIOpsViz({ isInView, color }: { isInView: boolean; color: string }) {
  return (
    <div className="relative py-6">
      {/* Data Sources */}
      <div className="flex justify-center gap-3 mb-6">
        {['Logs', 'Metrics', 'Traces'].map((source, i) => (
          <motion.div
            key={source}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
          >
            <span className="text-white/60 text-xs">{source}</span>
          </motion.div>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
      </div>

      {/* AI Engine */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="flex justify-center mb-4"
      >
        <div 
          className="p-4 rounded-xl flex items-center gap-4"
          style={{ background: `linear-gradient(135deg, ${color}20, ${color}05)`, border: `1px solid ${color}40` }}
        >
          <Cpu className="w-8 h-8" style={{ color }} />
          <div>
            <span className="text-white font-medium text-sm block">AI Analysis Engine</span>
            <span className="text-white/50 text-xs">Pattern Recognition</span>
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <div className="flex justify-center mb-4">
        <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
      </div>

      {/* Outputs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="flex justify-center gap-3"
      >
        {['Anomaly Alert', 'Prediction', 'Auto-Remediate'].map((output, i) => (
          <div 
            key={output}
            className="px-3 py-2 rounded-lg text-center"
            style={{ 
              background: i === 0 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${i === 0 ? 'rgba(239, 68, 68, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <span className={`text-xs ${i === 0 ? 'text-red-400' : 'text-white/60'}`}>{output}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function CloudViz({ isInView, color }: { isInView: boolean; color: string }) {
  const providers = ['AWS', 'GCP', 'Azure'];
  
  return (
    <div className="relative py-6">
      {/* Cloud Providers */}
      <div className="flex justify-center gap-4 mb-6">
        {providers.map((provider, i) => (
          <motion.div
            key={provider}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.15 }}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center"
          >
            <Cloud className="w-6 h-6 mx-auto mb-1" style={{ color }} />
            <span className="text-white/60 text-xs">{provider}</span>
          </motion.div>
        ))}
      </div>

      {/* Management Layer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="flex justify-center mb-6"
      >
        <div 
          className="p-4 rounded-xl flex items-center gap-4"
          style={{ background: `linear-gradient(135deg, ${color}20, ${color}05)`, border: `1px solid ${color}40` }}
        >
          <Settings className="w-6 h-6" style={{ color }} />
          <span className="text-white/80 text-sm">Multi-Cloud Management</span>
        </div>
      </motion.div>

      {/* Resources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7 }}
        className="flex justify-center gap-3"
      >
        {['Compute', 'Storage', 'Network', 'Security'].map((resource) => (
          <div key={resource} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <span className="text-white/50 text-xs">{resource}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function CustomViz({ isInView, color }: { isInView: boolean; color: string }) {
  const stack = [
    { layer: 'Frontend', techs: ['React', 'Vue', 'Next.js'] },
    { layer: 'Backend', techs: ['Node.js', 'Python', 'Go'] },
    { layer: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis'] },
  ];

  return (
    <div className="relative py-6">
      {/* Tech Stack */}
      <div className="space-y-3">
        {stack.map((item, i) => (
          <motion.div
            key={item.layer}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-4"
          >
            <span className="text-white/50 text-xs w-16">{item.layer}</span>
            <div className="flex gap-2">
              {item.techs.map((tech) => (
                <div 
                  key={tech}
                  className="px-3 py-1.5 rounded-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${color}15, ${color}05)`,
                    border: `1px solid ${color}30`
                  }}
                >
                  <span className="text-white/70 text-xs">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-6 pt-6 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          {['Discover', 'Design', 'Develop', 'Deploy'].map((step, i) => (
            <div key={step} className="flex items-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                  border: `1px solid ${color}40`
                }}
              >
                <span className="text-white/80 text-xs">{i + 1}</span>
              </div>
              <span className="text-white/50 text-xs ml-2">{step}</span>
              {i < 3 && (
                <div className="w-8 h-0.5 bg-white/10 mx-2" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Service Detail Component
function ServiceDetail({ service }: { service: typeof services[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const renderViz = () => {
    switch (service.id) {
      case 'ai-deployment':
        return <AIDeploymentViz isInView={isInView} color={service.color} />;
      case 'devops':
        return <DevOpsViz isInView={isInView} color={service.color} />;
      case 'aiops':
        return <AIOpsViz isInView={isInView} color={service.color} />;
      case 'cloud':
        return <CloudViz isInView={isInView} color={service.color} />;
      case 'custom':
        return <CustomViz isInView={isInView} color={service.color} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      ref={ref}
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${service.color}20` }}
        >
          <service.icon className="w-8 h-8" style={{ color: service.color }} />
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{service.title}</h2>
        <p className="text-xl mb-4" style={{ color: service.color }}>{service.subtitle}</p>
        <p className="text-white/60 text-lg">{service.description}</p>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex gap-8 mb-8"
      >
        {service.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <span className="text-2xl font-bold block" style={{ color: service.color }}>{stat.value}</span>
            <span className="text-white/40 text-xs">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Architecture Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl p-6 border border-white/10 mb-8"
      >
        <h3 className="text-white/80 text-sm font-medium mb-4">How It Works</h3>
        {renderViz()}
      </motion.div>

      {/* Offerings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-white font-medium mb-4">What We Offer</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {service.offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-3">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${service.color}30` }}
                >
                  <Check className="w-3 h-3" style={{ color: service.color }} />
                </div>
                <div>
                  <span className="text-white/80 text-sm font-medium block">{offering.title}</span>
                  <span className="text-white/50 text-xs">{offering.desc}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-white font-medium mb-4">Technologies We Use</h3>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.05 }}
              className="px-4 py-2 rounded-lg text-sm"
              style={{ 
                background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                border: `1px solid ${service.color}30`,
                color: service.color
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all"
          style={{ backgroundColor: service.color, color: '#000' }}
        >
          Discuss Your Project <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
        >
          View Related Products <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

// Hero Section
function ServicesHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Animated Background */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Zap className="w-4 h-4 text-[#98ABA4]" />
            <span className="text-sm text-white/70">Our Services</span>
          </motion.div>

          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Expertise That Drives
            <br />
            <span className="text-gradient">Digital Transformation</span>
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From AI deployment to cloud infrastructure, we provide end-to-end services 
            that help you build, deploy, and scale modern applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Main Services Page
export default function ServicesPage() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0a0a0a] pt-20"
    >
      <ServicesHero />

      <section className="relative py-12">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 space-y-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeService.id === service.id 
                        ? 'bg-white/10 border border-white/20' 
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <service.icon 
                        className="w-5 h-5" 
                        style={{ color: activeService.id === service.id ? service.color : '#ffffff60' }} 
                      />
                      <span className={`font-medium ${activeService.id === service.id ? 'text-white' : 'text-white/60'}`}>
                        {service.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <ServiceDetail service={activeService} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151414] to-[#0a0a0a]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your challenges and goals. We&apos;ll help you find the right 
              solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-semibold rounded-xl hover:bg-[#C2D8CF] transition-all"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
              >
                Explore Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
