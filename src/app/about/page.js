'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Terminal, Zap, Globe, Cpu, User, Github, Linkedin, Mail, ExternalLink, BadgeCheck, Building2, Calendar } from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className="bg-black text-white min-h-screen selection:bg-blue-500/30">
            {/* Hero Section */}
            <div className="pt-24 md:pt-32 pb-12 md:pb-24 px-6 max-w-7xl mx-auto border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Company Foundation</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-bold mb-10 leading-[1.1] tracking-tighter italic text-balance">Engineering Beyond <span className="text-blue-500 font-normal">Boundaries.</span> Delivery Without Compromise.</h1>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                        At ProgVision, we don't just build software; we architect the digital future of our partners. Founded on the principles of technical integrity and collaborative success, we bridge the gap between complex visionary ideas and secure, production-ready reality.
                    </p>
                </motion.div>
            </div>

            {/* MSME Registration Section */}
            <div className="px-6 max-w-7xl mx-auto py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-green-500/10 via-blue-500/5 to-transparent border border-green-500/20 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                        <BadgeCheck size={24} className="text-green-500" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-500">Government Registered</p>
                                        <h3 className="text-2xl font-bold tracking-tight">MSME Certified Enterprise</h3>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed font-light max-w-2xl">
                                    ProgVision is officially registered under the Ministry of Micro, Small and Medium Enterprises, Government of India. This certification validates our commitment to quality, reliability, and professional service delivery.
                                </p>
                            </div>

                            <div className="shrink-0 p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Building2 size={16} className="text-blue-500" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-widest">Enterprise Type</p>
                                        <p className="text-sm font-bold text-white">Micro Enterprise</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <BadgeCheck size={16} className="text-blue-500" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-widest">UDYAM Number</p>
                                        <p className="text-sm font-mono font-bold text-green-400">UDYAM-AP-23-0076992</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar size={16} className="text-blue-500" />
                                    <div>
                                        <p className="text-[9px] text-slate-500 uppercase tracking-widest">Registered Since</p>
                                        <p className="text-sm font-bold text-white">February 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Philosophy & Approach */}
            <div className="px-6 max-w-7xl mx-auto py-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-12 mb-12">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 italic hover:text-blue-500 transition-colors">Our <span className="text-blue-500 font-normal underline decoration-white/10">Principles.</span></h2>
                    </div>

                    <div className="lg:col-span-7 space-y-16">
                        {[
                            {
                                title: "Reliability by Design",
                                desc: "We don't just build for today; we engineer for growth. Every line of code is written with long-term maintainability and performance in mind.",
                                icon: Zap
                            },
                            {
                                title: "Security-First Mentality",
                                desc: "Protection is integrated into our workflow from day one. We ensure your digital products are resilient against modern web vulnerabilities.",
                                icon: Shield
                            },
                            {
                                title: "Transparent Collaboration",
                                desc: "We operate with full technical clarity. Our clients are partners, and we provide honest guidance every step of the way.",
                                icon: Globe
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all shadow-xl">
                                    <item.icon size={28} className="text-blue-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 flex flex-col justify-center gap-10">
                            <div className="space-y-4">
                                <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest">Capabilities</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Web Dev', 'Mobile Apps', 'iOS Native', 'Web Security'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="prose prose-invert italic text-slate-500 text-sm border-l-2 border-blue-600 pl-6 text-balance">
                                &ldquo;Professional engineering means delivering products that work reliably in the real world, ensuring our clients can focus on growth while we handle the technical core.&rdquo;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Founder Section */}
            <div className="bg-white/[0.02] border-y border-white/5 py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group h-full"
                    >
                        <div className="h-full aspect-[4/5] bg-slate-900 rounded-[3rem] border border-white/10 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                            <Image
                                src="/images/founder.jpeg"
                                alt="P. Ganesh Krishna Reddy"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-12 left-12 right-12 space-y-2 z-20">
                                <div className="p-4 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-1">Founder & Technical Lead</p>
                                    <h3 className="text-2xl font-bold tracking-tight text-white">P. Ganesh Krishna Reddy</h3>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between"
                    >
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-4xl font-bold tracking-tight italic mb-6">Technical Leadership</h2>
                                <p className="text-xl text-slate-400 leading-relaxed font-light">
                                    Software Engineer & Cybersecurity Professional with a security-first development mindset. P. Ganesh Krishna leads hands-on delivery across all technical domains at ProgVision.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 ml-1">Key Credentials</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { title: "CompTIA Cybersecurity Professional", sub: "Network+, Security+, PenTest+, CySA+", date: "Aug 2025" },
                                        { title: "Digital Forensic Investigator", sub: "QuickHeal Certified", date: "Jan 2025" },
                                        { title: "Reliance Foundation Scholar", sub: "₹2,00,000 INR Academic Award", date: "Jan 2023" },
                                        { title: "Full-Stack Specialist", sub: "React / Next.js / Node.js", date: "Present" }
                                    ].map((cert, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-blue-500/30 transition-all group">
                                            <div className="flex justify-between items-start">
                                                <Award size={18} className="text-blue-500" />
                                                <span className="text-[9px] font-mono text-slate-600">{cert.date}</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm tracking-tight text-white">{cert.title}</p>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{cert.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 mt-12 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Connect</p>
                                <div className="flex flex-col gap-3 font-mono text-xs">
                                    <a href="https://linkedin.com/in/pganeshkrishnareddy" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
                                        <Linkedin size={14} /> /pganeshkrishnareddy
                                    </a>
                                    <a href="https://github.com/ganeshkrishnareddy" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
                                        <Github size={14} /> /ganeshkrishnareddy
                                    </a>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Contact</p>
                                <div className="flex flex-col gap-3 font-mono text-xs">
                                    <a href="mailto:pganeshkrishnareddy@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors">
                                        <Mail size={14} /> pganeshkrishnareddy@gmail.com
                                    </a>
                                    <span className="flex items-center gap-2 text-slate-400">
                                        <Globe size={14} /> progvision.in
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
