'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, CheckCircle, ExternalLink, Zap, Shield, Target, Terminal } from 'lucide-react'
import Link from 'next/link'
import { workEngagements } from '@/data/siteData'

const EngagementCard = ({ work, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.05 }}
        className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
            <Zap size={120} />
        </div>

        <div>
            <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-2xl shadow-blue-500/10">
                    <Globe size={24} />
                </div>
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-[10px] font-bold uppercase tracking-widest">
                    <CheckCircle size={10} /> Completed
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <p className="text-slate-500 text-[9px] font-bold uppercase tracking-[0.3em]">{work.region} Market</p>
                <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-blue-500 transition-colors">{work.client}</h3>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {work.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
                {work.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

        <Link href={`/work/${work.slug}`} className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-[0.2em] text-[10px] py-2 border-b-2 border-blue-600 group-hover:border-white transition-all w-fit">
            Review Engagement <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
    </motion.div>
)

const WorkPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto">
                <header className="pt-20 md:pt-16 pb-12 md:pb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-blue-500" />
                            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Project Portfolio</span>
                        </div>
                        <h1 className="text-3xl sm:text-5xl md:text-[5.5rem] font-bold mb-8 tracking-tighter italic leading-[0.9] text-balance">Real Work. <br /><span className="text-blue-500 font-normal underline decoration-white/10">Completed Deliveries.</span></h1>
                        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                            A track record of high-performance delivery for startups and enterprises globally. We build secure, production-ready digital products that work from day one.
                        </p>
                    </motion.div>

                    <div className="flex gap-4">
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px]">
                                Discuss a New Project
                            </button>
                        </Link>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {workEngagements.map((w, i) => (
                        <EngagementCard key={i} work={w} index={i} />
                    ))}
                </div>

                <section className="mt-20 md:mt-32 p-8 md:p-12 lg:p-24 rounded-[3rem] md:rounded-[4rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-50" />
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-6xl font-bold mb-8 md:mb-12 tracking-tighter italic">Portfolio <span className="text-blue-500 font-normal">Evidence.</span></h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left mt-20">
                            {[
                                { title: "Global Reach", sub: "Deliveries across 5+ Regions", icon: Globe },
                                { title: "Fulfillment", sub: "100% Completed Engagements", icon: CheckCircle },
                                { title: "Engineering", sub: "Production-Grade Standards", icon: Terminal },
                                { title: "Strategic", sub: "Cross-Border Coordination", icon: Target }
                            ].map((item, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                                        <item.icon size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white font-bold text-sm tracking-tight">{item.title}</p>
                                        <p className="text-slate-500 text-[11px] leading-relaxed uppercase tracking-wider">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="mt-24 pt-24 border-t border-white/5 text-center">
                    <h2 className="text-4xl font-bold mb-10 italic">Ready to build something reliable?</h2>
                    <p className="text-slate-400 mb-12 max-w-xl mx-auto">We partner with organizations to deliver secure, scalable digital products that work in the real world.</p>
                    <Link href="/contact">
                        <button className="px-12 py-5 bg-white text-black hover:bg-blue-600 hover:text-white font-bold rounded-full transition-all uppercase tracking-widest text-[11px] shadow-2xl">
                            Start a Consultation
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WorkPage
