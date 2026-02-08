'use client';

import React from "react"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@effred.com', href: 'mailto:info@effred.com' },
  { icon: Phone, label: 'Phone', value: '(415) 780-9400', href: 'tel:+14157809400' },
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
];

const services = ['AI Deployments', 'DevOps', 'AIOps', 'Cloud Infrastructure', 'Custom Development', 'Product Inquiry'];

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Validate required fields
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error('Please fill in all required fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xgolenql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || '',
          company: formData.company?.trim() || '',
          service: formData.service || '',
          message: formData.message.trim(),
          _replyto: formData.email.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Formspree error:', errorData);
        throw new Error('Failed to submit form. Please try again or contact info@effred.com directly.');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' });
      }, 4000);
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Failed to submit form. Please try again.';
      setErrorMessage(errorMsg);
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-[#0C0C0C] pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium text-[#98ABA4] tracking-[0.2em] uppercase mb-4">Get in Touch</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something<br /><span className="text-gradient">Amazing Together</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.a key={item.label} href={item.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + idx * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#98ABA4]/30 transition-colors group">
                    <div className="w-12 h-12 rounded-lg bg-[#98ABA4]/10 flex items-center justify-center group-hover:bg-[#98ABA4]/20 transition-colors">
                      <item.icon className="w-5 h-5 text-[#98ABA4]" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{item.label}</p>
                      <p className="text-white group-hover:text-[#98ABA4] transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                {isSubmitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#98ABA4]/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[#98ABA4]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-white/60 mb-2">Thank you for contacting Effred.</p>
                    <p className="text-white/50 text-sm">Check your email for confirmation. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                      >
                        {errorMessage}
                      </motion.div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">First Name *</label>
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Last Name *</label>
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50" placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Company</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50" placeholder="Your Company" />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">Service Interest</label>
                        <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#98ABA4]/50 appearance-none cursor-pointer">
                          <option value="" className="bg-[#151414]">Select a service</option>
                          {services.map((service) => <option key={service} value={service} className="bg-[#151414]">{service}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#98ABA4]/50 resize-none" placeholder="Tell us about your project..." />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#98ABA4] text-black font-medium rounded-lg hover:bg-[#C2D8CF] transition-colors disabled:opacity-50">
                      {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <><>Send Message</> <Send className="w-5 h-5" /></>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
