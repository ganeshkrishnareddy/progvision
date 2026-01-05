'use client'

import { motion } from 'framer-motion'
import { Shield, Smartphone, Globe, ArrowRight, CheckCircle, Apple } from 'lucide-react'
import Link from 'next/link'
import { servicesData } from '@/data/siteData'

const ServiceSection = ({ service, index }) => {
    const isEven = index % 2 === 0
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 mb-32 items-start`}
        >
            <div className="w-full lg:w-1/2 space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-2xl shadow-blue-500/10">
                    {service.slug === 'website-development' && <Globe size={40} />}
                    {service.slug === 'app-development' && <Smartphone size={40} />}
                    {service.slug === 'ios-development' && <Apple size={40} />}
                    {service.slug === 'web-security-audit' && <Shield size={40} />}
                </div>
                <div>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">{service.title}</h2>
                    <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-6">Expert technical delivery</p>
                    <div className="h-[1px] w-24 bg-white/10" />
                </div>

                <div className="space-y-4">
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Who it's for</p>
                    <p className="text-slate-300 text-lg leading-relaxed">{service.target}</p>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Core Focus</p>
                    <ul className="space-y-2">
                        {service.focus.map(f => (
                            <li key={f} className="text-slate-400 text-sm flex gap-3 items-start">
                                <span className="text-blue-500 font-bold">•</span> {f}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full lg:w-1/2 bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 lg:p-16 space-y-10">
                <h3 className="text-xl font-bold uppercase tracking-tight">Delivery Process</h3>
                <div className="space-y-6">
                    {service.delivery.map(d => (
                        <div key={d} className="flex gap-4 items-center p-4 rounded-2xl bg-black/40 border border-white/5">
                            <CheckCircle size={20} className="text-blue-500 shrink-0" />
                            <span className="text-slate-300 text-sm font-medium">{d}</span>
                        </div>
                    ))}
                </div>
                <div className="pt-8 border-t border-white/5">
                    <Link href={`/services/${service.slug}`} className="group">
                        <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] py-1 border-b-2 border-blue-600 group-hover:border-white transition-all">
                            View Detailed Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

const ServicesPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto">
                <header className="pt-20 md:pt-16 pb-12 md:pb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-blue-500" />
                            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Technical Services</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold mb-8 tracking-tighter italic text-balance leading-none">What We <span className="text-blue-500">Deliver.</span></h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
                            Bespoke digital products engineered for performance, reliability, and security.
                        </p>
                    </motion.div>
                </header>

                <div>
                    {servicesData.map((s, i) => (
                        <ServiceSection key={i} service={s} index={i} />
                    ))}
                </div>

                <div className="mt-20 pt-20 border-t border-white/5 text-center">
                    <h2 className="text-3xl font-bold mb-8 italic">Interested in a partnership?</h2>
                    <Link href="/contact">
                        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                            Discuss Your Project
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
