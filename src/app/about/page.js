'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Terminal, Zap, Globe, Cpu, User, Github, Linkedin, Mail, ExternalLink, BadgeCheck, Building2, Calendar, ArrowUpRight, GraduationCap, Workflow, Sparkles, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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

            {/* Technical Team Section */}
            <div className="py-32 px-6 max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 italic">Technical <span className="text-blue-500 font-normal underline decoration-white/10">Team.</span></h2>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                        Driving innovation through specialized expertise in client management, data intelligence, and emerging technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {[
                        {
                            name: "Pavan Adireddy",
                            role: "Associate & Client Manager",
                            photo: "/images/pavan-adireddy.jpeg",
                            description: "Strategic lead for client acquisition and operational testing. Pavan ensures our engineering solutions align perfectly with client business goals through rigorous quality assurance and relationship management.",
                            focus: ["Client Success", "System Testing", "Growth Strategy"],
                            linkedin: "https://www.linkedin.com/in/adireddypavan/"
                        },
                        {
                            name: "Venkat Veerendra Cheepuri",
                            role: "AI Integration Specialist",
                            photo: "/images/venkat-cheepuri.jpeg",
                            description: "Focused on bridging the gap between core engineering and artificial intelligence. Venkat leads our research into AI tools and specializes in integrating conversational interfaces into complex systems.",
                            focus: ["AI Research", "Chatbot Integration", "Automated Workflows"],
                            linkedin: "https://www.linkedin.com/in/venkatveerendracheepuri/"
                        },
                        {
                            name: "Daulat Singh",
                            role: "AI Accelerator",
                            photo: "/images/daulat-singh.jpeg",
                            description: "Data Analyst and AI practitioner focused on turning product ideas into running applications. Daulat uses modern AI tools to accelerate how concepts become working products, backed by clear data-driven insight.",
                            focus: ["Data Analytics", "Data Visualization", "AI-Powered Apps"],
                            linkedin: "https://www.linkedin.com/in/daulat-singh-9a76791b1/"
                        }
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="p-8 md:p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-all group flex flex-col items-center text-center"
                        >
                            <div className="relative w-32 h-32 mb-8 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-blue-600/10 group-hover:text-blue-500 transition-all duration-500 shadow-xl shadow-black/50">
                                {member.photo ? (
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                ) : (
                                    <User size={48} strokeWidth={1.5} />
                                )}
                            </div>
                            
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold tracking-tight text-white mb-2">{member.name}</h3>
                                <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">{member.role}</p>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md font-light">
                                {member.description}
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-10">
                                {member.focus.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a 
                                href={member.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="mt-auto flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors font-mono text-[10px] uppercase tracking-widest"
                            >
                                <Linkedin size={14} /> View Professional Profile <ExternalLink size={12} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Product Portfolio Section */}
            <div className="bg-white/[0.02] border-t border-white/5 py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 italic tracking-tighter">Beyond the Team. <span className="text-blue-500 font-normal">Our Products.</span></h2>
                            <p className="text-xl text-slate-400 font-light leading-relaxed">
                                The same engineering team also builds and operates our own products — from student careers to automation and AI tooling.
                            </p>
                        </div>
                        <Link href="/products" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b-2 border-blue-600 pb-1 hover:text-white hover:border-white transition-colors shrink-0">
                            All Products
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "PixoPDF",
                                tagline: "Privacy-First PDF Tools",
                                description: "Merge, split, compress, edit, sign and convert PDFs in-browser — no uploads, no signup.",
                                url: "https://pixopdf.online/",
                                icon: FileText
                            },
                            {
                                name: "LaunchWise",
                                tagline: "Student Careers & Perks Platform",
                                description: "Verified jobs, internships, student discounts, AI tools & cloud credits for 50,000+ students.",
                                url: "https://launchwise.tech/",
                                icon: GraduationCap
                            },
                            {
                                name: "FlowMatch",
                                tagline: "Workflow Discovery Engine",
                                description: "Searches 5,000+ n8n workflows to find the perfect automation template for your tools.",
                                url: "https://flowmatch.tech/",
                                icon: Workflow
                            },
                            {
                                name: "InstaDemoX",
                                tagline: "AI Website Builder",
                                description: "Tell it your business name and get a complete, personalized website instantly with AI.",
                                url: "https://instademox.space/",
                                icon: Sparkles
                            }
                        ].map((product, i) => (
                            <motion.a
                                key={product.name}
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="group p-8 rounded-[2rem] bg-black/40 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                                        <product.icon size={22} />
                                    </div>
                                    <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-blue-500 transition-colors">{product.name}</h3>
                                <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-4">{product.tagline}</p>
                                <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
