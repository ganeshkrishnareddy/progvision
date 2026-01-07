'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MessageSquare, CheckCircle, Shield, Terminal, Globe } from 'lucide-react'
import { siteData } from '@/data/siteData'

const ContactPage = () => {
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xojvdgbl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            console.error("Error submitting inquiry:", error)
            setStatus('error')
        }
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 md:pt-32 pb-12 md:pb-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: Content */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-12 h-[1px] bg-blue-500" />
                                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Project Inquiry</span>
                            </div>
                            <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter italic text-balance">Let&apos;s Build Your <span className="text-blue-500">Digital Product.</span></h1>
                            <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                                We partner with businesses and startups to build and secure high-performance websites and applications.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-1">Direct Email</p>
                                        <p className="font-bold text-sm tracking-tight">{siteData.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-1">Contact Lines</p>
                                        <p className="font-bold text-sm tracking-tight">{siteData.phones[0]}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-1">Service Availability</p>
                                        <p className="font-bold text-sm tracking-tight">USA / Europe / Asia / Japan</p>
                                    </div>
                                </div>
                                <a href={siteData.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="flex gap-6 items-center group cursor-pointer">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest mb-1">Quick Chat</p>
                                        <p className="font-bold text-sm tracking-tight group-hover:text-blue-500 transition-colors">WhatsApp Direct</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-10 lg:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <Terminal size={200} />
                            </div>

                            {status === 'success' ? (
                                <div className="py-20 text-center space-y-8">
                                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white shadow-2xl shadow-blue-500/20">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold tracking-tight">Inquiry Received</h3>
                                    <p className="text-slate-400 max-w-sm mx-auto leading-relaxed">
                                        Thank you for reaching out. We will review your project requirements and respond within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="text-blue-500 font-bold uppercase tracking-widest text-xs border-b-2 border-blue-500 pb-1"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                required
                                                name="name"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Work Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all"
                                                placeholder="email@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Organization</label>
                                            <input
                                                required
                                                name="organization"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all"
                                                placeholder="Company Name"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Required</label>
                                            <select
                                                name="topic"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
                                                defaultValue="Website Development"
                                            >
                                                <option>Website Development</option>
                                                <option>App Development</option>
                                                <option>iOS Development</option>
                                                <option>Web Security Audit</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Project Description</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows={5}
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Expected Timeline</label>
                                            <select
                                                name="timeline"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all appearance-none"
                                                defaultValue="Immediate"
                                            >
                                                <option>Immediate</option>
                                                <option>1-3 Months</option>
                                                <option>3-6 Months</option>
                                                <option>Long-term</option>
                                            </select>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Budget Range (Optional)</label>
                                            <select
                                                name="budget"
                                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500 outline-none transition-all appearance-none"
                                                defaultValue="Undisclosed"
                                            >
                                                <option>Undisclosed</option>
                                                <option>$5k - $15k</option>
                                                <option>$15k - $30k</option>
                                                <option>$30k - $50k</option>
                                                <option>$50k+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        disabled={status === 'sending'}
                                        className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        {status === 'sending' ? 'Transmitting...' : 'Request Consultation'} <Send size={16} />
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContactPage
