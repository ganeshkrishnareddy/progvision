'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Globe, ArrowLeft, CheckCircle, Apple, Cpu, Target, Activity } from 'lucide-react'
import Link from 'next/link'

const ServiceDetailContent = ({ service }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <Link href="/services" className="flex items-center gap-2 text-slate-500 mb-12 hover:text-blue-500 transition-all font-mono text-[10px] uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-12"
                    >
                        <h1 className="text-6xl md:text-[6rem] font-bold mb-10 tracking-tighter italic">
                            {service.title.split(' ')[0]} <span className="text-blue-500 font-normal">{service.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-16">
                        <section className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> What this service is
                            </h3>
                            <p className="text-2xl text-slate-300 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> Common problems solved
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {service.problems.map(p => (
                                    <div key={p} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 items-center">
                                        <Activity className="text-blue-500 shrink-0" size={20} />
                                        <span className="text-sm font-medium text-slate-300">{p}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-slate-700" /> Technologies & Tools
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {service.tools.map(t => (
                                    <span key={t} className="px-4 py-2 bg-blue-600/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5">
                        <motion.aside
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="sticky top-32 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-10"
                        >
                            <div className="space-y-4">
                                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Target Audience</p>
                                <p className="text-lg font-bold">{service.target}</p>
                            </div>

                            <div className="space-y-6">
                                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Delivery Roadmap</p>
                                <div className="space-y-4">
                                    {service.delivery.map((d, i) => (
                                        <div key={i} className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-500 text-xs font-bold">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm text-slate-400">{d}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5">
                                <Link href="/contact">
                                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                                        Discuss Your Project
                                    </button>
                                </Link>
                            </div>
                        </motion.aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetailContent
