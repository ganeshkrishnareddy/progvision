'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

const PrivacyPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-40 pb-24 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Data Protection</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter italic">Privacy <span className="text-blue-500 font-normal underline decoration-white/10">Policy.</span></h1>

                    <div className="space-y-16 text-slate-400 leading-relaxed font-light text-lg">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Shield className="text-blue-500" size={24} /> 1. Commitment to Privacy
                            </h2>
                            <p>
                                At ProgVision, we believe privacy is a fundamental right, not a luxury. As a digital engineering firm, we understand the technical complexities of data protection. This policy outlines how we handle your information with the same rigor we apply to our secure software development.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Eye className="text-blue-500" size={24} /> 2. Information Collection
                            </h2>
                            <p>
                                We only collect what is necessary to serve you. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-4">
                                <li><strong className="text-white">Direct Information:</strong> Name, organization, and contact details you provide via our inquiry forms.</li>
                                <li><strong className="text-white">Technical Metadata:</strong> IP addresses and browser configurations to ensure our delivery platforms remain secure and optimized for your device.</li>
                                <li><strong className="text-white">Engagement Data:</strong> Project requirements and technical documentation shared during our collaboration.</li>
                            </ul>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Lock className="text-blue-500" size={24} /> 3. Data Integrity & Security
                            </h2>
                            <p>
                                We don't just "store" data; we protect it using industry-standard encryption and zero-trust architectural principles. Access to client information is strictly limited to the engineering team members directly involved in your project delivery.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <FileText className="text-blue-500" size={24} /> 4. Your Rights
                            </h2>
                            <p>
                                You retain full ownership of your data. At any point, you may request to review, modify, or permanently delete your information from our systems. In the spirit of transparency, we provide clear logs of how your data has been handled upon request.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-white/5">
                            <p className="text-sm font-mono uppercase tracking-widest text-slate-500">
                                Last Updated: January 2026 // ProgVision Engineering Compliance
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default PrivacyPage
