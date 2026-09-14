'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, Upload, AlertCircle } from 'lucide-react'

const ApplicationForm = ({ isOpen, onClose, jobTitle = "General Application" }) => {
    const [status, setStatus] = useState('idle')
    const [role, setRole] = useState(jobTitle)

    useEffect(() => {
        setRole(jobTitle)
    }, [jobTitle])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const form = e.target
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xeezwbnz', {
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
            console.error("Error submitting application:", error)
            setStatus('error')
        }
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 max-h-[85vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div>
                                <h3 className="text-xl font-bold text-white">Job Application</h3>
                                <p className="text-sm text-slate-400">Join the ProgVision Team</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 min-h-0">
                            {status === 'success' ? (
                                <div className="py-12 text-center space-y-6">
                                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto ring-1 ring-green-500/40">
                                        <CheckCircle size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                                        <p className="text-slate-400">Thank you for applying. Our HR team will review your profile.</p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
                                    >
                                        Close Window
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Role Selection */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Applying For</label>
                                        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold">
                                            {role}
                                            <input type="hidden" name="role" value={role} />
                                        </div>
                                    </div>

                                    {/* Experience Level */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Current Status <span className="text-red-500">*</span></label>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            {['Fresher (No Exp)', 'Final Year Student', 'Experienced'].map((level) => (
                                                <label key={level} className="relative cursor-pointer group">
                                                    <input type="radio" name="experience_level" value={level} required className="peer sr-only" />
                                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center text-sm font-medium text-slate-400 transition-all peer-checked:bg-blue-600 peer-checked:text-white peer-checked:border-blue-500 hover:bg-white/10">
                                                        {level}
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Personal Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Full Name <span className="text-red-500">*</span></label>
                                            <input
                                                required
                                                name="name"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Mobile Number <span className="text-red-500">*</span></label>
                                            <input
                                                required
                                                type="tel"
                                                name="mobile"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Email Structure <span className="text-red-500">*</span></label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Resume Link */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Resume / CV Link <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input
                                                required
                                                type="url"
                                                name="resume_link"
                                                className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-700"
                                                placeholder="https://drive.google.com/..."
                                            />
                                            <Upload size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600" />
                                        </div>
                                        <p className="text-[10px] text-slate-500 pl-1">Please provide a public Google Drive, Dropbox, or LinkedIn URL.</p>
                                    </div>

                                    {/* Projects */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Key Projects <span className="text-red-500">*</span></label>
                                        <textarea
                                            required
                                            name="projects"
                                            rows={3}
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-700 resize-none"
                                            placeholder="Briefly describe 1-2 key projects you have worked on..."
                                        />
                                    </div>

                                    {/* Undertaking */}
                                    <label className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 cursor-pointer">
                                        <input type="checkbox" required name="undertaking" className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-black border-white/20" />
                                        <span className="text-xs text-slate-400 leading-relaxed">
                                            I hereby declare that the information provided above is true to the best of my knowledge. I understand that any false information may lead to rejection of my application.
                                        </span>
                                    </label>

                                    {/* Submit Button */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {status === 'sending' ? (
                                                <span className="flex items-center gap-2">Processing...</span>
                                            ) : (
                                                <>Submit Application <Send size={18} /></>
                                            )}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-xs text-center mt-3 flex items-center justify-center gap-1">
                                                <AlertCircle size={12} /> Submission failed. Please try again.
                                            </p>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default ApplicationForm
