'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Briefcase, MapPin, Clock, CheckCircle, Code2, ShieldCheck, Megaphone, TrendingUp, Send } from 'lucide-react'
import Link from 'next/link'
import ApplicationForm from './ApplicationForm' // Assuming ApplicationForm is in the same directory

const JobDetailContent = ({ job }) => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    // Helper to get icon based on category
    const getIcon = (category) => {
        switch (category) {
            case 'Engineering': return <Code2 size={24} />;
            case 'Security': return <ShieldCheck size={24} />;
            case 'Marketing': return <Megaphone size={24} />;
            case 'Business': return <TrendingUp size={24} />;
            default: return <Briefcase size={24} />;
        }
    }

    return (
        <div className="bg-black text-white min-h-screen selection:bg-blue-500/30">
            <ApplicationForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                jobTitle={job.title}
            />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <Link href="/careers" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 text-sm transition-colors group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Careers
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {job.category}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/5 text-slate-400 border border-white/5">
                            {job.type}
                        </span>
                        {job.isClosed && (
                            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-red-500/10 text-red-500 border border-red-500/20 animate-pulse">
                                Hiring Closed
                            </span>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">{job.title}</h1>

                    <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-mono">
                        <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            {job.experience}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            {job.location}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="px-6 max-w-7xl mx-auto py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left content - Job Details */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Role Overview */}
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Role Overview</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {job.description}
                            </p>
                        </section>

                        {/* Responsibilities */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8">Key Responsibilities</h2>
                            <div className="space-y-4">
                                {job.responsibilities.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                        <p className="text-slate-400 leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Requirements */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8">Requirements</h2>
                            <div className="space-y-4">
                                {job.requirements.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                                            <CheckCircle size={14} />
                                        </div>
                                        <p className="text-slate-400 leading-relaxed">{item}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Sidebar - Apply */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
                             <div className={`p-8 rounded-3xl relative overflow-hidden group ${job.isClosed ? 'bg-red-950/20 border border-red-900/50' : 'bg-blue-600 border border-blue-500'}`}>
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                                    {job.isClosed ? 'Hiring Closed' : 'Ready to Apply?'}
                                </h3>
                                <p className={`text-sm mb-8 relative z-10 ${job.isClosed ? 'text-red-400' : 'text-blue-100'}`}>
                                    {job.isClosed ? 'Applications are no longer accepted for this role.' : 'Start your journey with us today.'}
                                </p>

                                <button
                                    disabled={job.isClosed}
                                    onClick={() => !job.isClosed && setIsFormOpen(true)}
                                    className={`w-full inline-flex items-center justify-center gap-2 font-bold py-4 px-6 rounded-xl transition-all shadow-lg relative z-10 ${job.isClosed ? 'bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed' : 'bg-white text-blue-600 hover:bg-blue-50 active:scale-95'}`}
                                >
                                    {job.isClosed ? null : <Send size={18} />}
                                    {job.isClosed ? 'Hiring Closed' : 'Apply Now'}
                                </button>
                            </div>

                            {/* Process Timeline */}
                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Recruitment Process</h3>
                                <div className="space-y-6 relative">
                                    <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-white/5" />

                                    {[
                                        { step: 1, title: 'Application Review' },
                                        { step: 2, title: 'Technical Screening' },
                                        { step: 3, title: 'Technical Interview' },
                                        { step: 4, title: 'Culture Fit & Offer' }
                                    ].map((step) => (
                                        <div key={step.step} className="flex gap-4 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-mono text-slate-500">
                                                {step.step}
                                            </div>
                                            <p className="text-slate-400 text-sm pt-1.5">{step.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetailContent
