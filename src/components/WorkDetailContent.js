'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Globe, CheckCircle, Smartphone, Shield, Monitor, Zap, Target, Cpu, Layers } from 'lucide-react'
import Link from 'next/link'

const WorkDetailContent = ({ work }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <Link href="/work" className="flex items-center gap-2 text-slate-500 mb-12 hover:text-blue-500 transition-all font-mono text-[10px] uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Our Work
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12"
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-500 text-[9px] font-bold uppercase tracking-widest">{work.region} Market Delivery</span>
                            <span className="px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2">
                                <CheckCircle size={10} /> {work.type}
                            </span>
                        </div>
                        <h1 className="text-6xl md:text-[6rem] font-bold mb-10 tracking-tighter italic leading-[0.9]">
                            {work.client}
                        </h1>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-20">
                        <section className="space-y-6">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> Executive Overview
                            </h3>
                            <p className="text-2xl text-slate-300 leading-relaxed font-light italic text-balance">
                                "{work.description}"
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> What We Delivered
                            </h3>
                            <div className="grid grid-cols-1 gap-4">
                                {work.deliverables.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-blue-500/30 transition-all">
                                        <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 shrink-0">
                                            <Zap size={18} />
                                        </div>
                                        <div>
                                            <p className="text-slate-200 font-medium">{item}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> Capabilities Demonstrated
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {work.capabilities.map((cap, i) => (
                                    <div key={i} className="flex gap-4 items-center p-5 rounded-xl bg-black/40 border border-white/5">
                                        <Target size={18} className="text-blue-500 shrink-0" />
                                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{cap}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5">
                        <motion.aside
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="sticky top-32 space-y-8"
                        >
                            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-10">
                                <h3 className="text-xl font-bold tracking-tight">Technical Profile</h3>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2">
                                            <Cpu size={12} /> Technologies
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {work.technologies.map(tech => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-300 font-bold uppercase tracking-widest">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2">
                                            <Layers size={12} /> Delivery Stages
                                        </p>
                                        <div className="space-y-3">
                                            {work.stages.map((stage, i) => (
                                                <div key={i} className="flex items-center gap-3 text-xs font-mono text-slate-400">
                                                    <span className="text-blue-600 font-bold">{String(i + 1).padStart(2, '0')}.</span>
                                                    {stage}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="flex justify-between items-center py-3 border-b border-white/5 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                                        <span>Status</span>
                                        <span className="text-green-500 font-bold">Fulfilled</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/5 font-mono text-[9px] uppercase tracking-widest text-slate-500">
                                        <span>Region</span>
                                        <span className="text-white font-bold">{work.region}</span>
                                    </div>
                                </div>

                                <Link href="/contact" className="block">
                                    <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px]">
                                        Discuss Similar Project
                                    </button>
                                </Link>
                            </div>

                            <div className="px-10 py-6 font-mono text-[9px] text-slate-500 leading-normal uppercase tracking-widest border-l-2 border-blue-600 bg-white/[0.01]">
                                Engineering delivered with strict confidentiality and production-ready excellence.
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkDetailContent
