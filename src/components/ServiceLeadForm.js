import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ServiceLeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    service: 'Website Development',
    budget: '',
    timeline: 'Immediate'
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Submit to the lead system
      const response = await fetch('/api/service-leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'progvision',
          created_at: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Custom Solution
          </h2>
          <p className="text-slate-400 text-lg">
            Tell us about your project and we'll build it for you
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
        >
          {status === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-slate-400">We'll contact you within 24 hours to discuss your project.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Full Name</label>
                  <input
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Business/Organization</label>
                  <input
                    required
                    value={formData.business}
                    onChange={e => setFormData({...formData, business: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Phone (WhatsApp)</label>
                  <input
                    required
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                    placeholder="+1234567890"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                  >
                    <option>Website Development</option>
                    <option>App Development</option>
                    <option>Custom Software</option>
                    <option>E-commerce Platform</option>
                    <option>Web Security Audit</option>
                    <option>API Integration</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-slate-500 uppercase mb-2 block">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                  >
                    <option value="">Select Budget</option>
                    <option>$5k - $15k</option>
                    <option>$15k - $30k</option>
                    <option>$30k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 uppercase mb-2 block">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={e => setFormData({...formData, timeline: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white"
                >
                  <option>Immediate</option>
                  <option>1-3 Months</option>
                  <option>3-6 Months</option>
                  <option>Long-term</option>
                </select>
              </div>

              <button
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : 'Get Free Consultation'} <Send className="w-4 h-4" />
              </button>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" /> Something went wrong. Please try again.
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}