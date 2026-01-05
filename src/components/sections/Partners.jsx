'use client'

import { motion } from 'framer-motion'
import { workEngagements } from '@/data/siteData'
import { Globe, ArrowRight, CheckCircle, ExternalLink, Zap } from 'lucide-react'
import Link from 'next/link'

const Partners = () => {
    // Exclude Aditya Law Firm from the scrolling marquee/partner list if it's more of a client than a 'global partner'
    // but the user's list had 8 partners. siteData has 9 engagements.
    const partners = workEngagements.filter(w => w.url !== "#")

    return (
        <section className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Trusted Collaborations</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter italic leading-none">
                        Our <span className="text-blue-500 font-normal">Partners.</span><br />
                        <span className="text-2xl md:text-3xl text-slate-400 block mt-4 not-italic font-light">Trusted Collaborations Across Global Markets</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                        At ProgVision, we collaborate with organizations across multiple regions to deliver secure, scalable, and high-performance digital solutions.
                        Each partnership reflects real delivery, professional trust, and long-term collaboration.
                    </p>
                </div>

                {/* Auto-scrolling Marquee */}
                <div className="relative flex overflow-x-hidden border-y border-white/5 py-12 mb-32 bg-white/[0.01]">
                    <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
                        {[...partners, ...partners].map((partner, i) => (
                            <div key={i} className="flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group cursor-default">
                                <Globe size={20} className="text-blue-500 group-hover:scale-110 transition-transform" />
                                <span className="text-lg font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors uppercase">{partner.client}</span>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smooth fade */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Detailed List */}
                    <div className="lg:col-span-8 space-y-12">
                        <h3 className="text-2xl font-bold tracking-tight mb-12 flex items-center gap-4 italic underline decoration-blue-500/30">
                            🌍 Global Partners
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {partners.slice(0, 4).map((partner, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <Zap size={20} />
                                        </div>
                                        <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-500 transition-colors">
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>

                                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{partner.client}</h4>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Region:</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{partner.region}</span>
                                    </div>

                                    <p className="text-xs text-slate-500 leading-relaxed font-light">
                                        <span className="text-white/40 block mb-1">Focus:</span>
                                        {partner.description.split(' focus on ')[1] || partner.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-start">
                            <Link href="/work">
                                <button className="px-10 py-4 border border-white/10 hover:border-blue-500/50 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-[10px] flex items-center gap-2">
                                    View All Partners <ArrowRight size={14} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Representation & CTA */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 space-y-10">
                            <h3 className="text-xl font-bold tracking-tight italic">What These <span className="text-blue-500">Partnerships Represent</span></h3>

                            <ul className="space-y-6">
                                {[
                                    "Global presence across USA, Europe, Asia, Japan & Australia",
                                    "Trusted delivery relationships",
                                    "Cross-border technical collaboration",
                                    "Production-ready engineering standards",
                                    "Long-term professional engagement"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-sm text-slate-400 leading-relaxed font-light">
                                        <CheckCircle size={18} className="text-blue-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-8 border-t border-white/5">
                                <h4 className="text-lg font-bold mb-6 italic">Interested in Partnering?</h4>
                                <p className="text-xs text-slate-500 mb-8 leading-relaxed">
                                    We work with organizations that value engineering excellence, security, and reliability.
                                </p>
                                <Link href="/contact" className="block">
                                    <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                                        Discuss a Partnership <ArrowRight size={14} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
