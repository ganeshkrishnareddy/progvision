'use client'

import { motion } from 'framer-motion'
import { Gavel, Scale, Hammer, Zap } from 'lucide-react'

const TermsPage = () => {
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
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Service Agreement</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter italic">Terms & <span className="text-blue-500 font-normal underline decoration-white/10">Conditions.</span></h1>

                    <div className="space-y-16 text-slate-400 leading-relaxed font-light text-lg">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Scale className="text-blue-500" size={24} /> 1. Operational Framework
                            </h2>
                            <p>
                                By engaging with ProgVision, you are entering into a partnership built on technical excellence and professional integrity. These terms govern the use of our digital platforms and the baseline requirements for our engineering engagements.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Zap className="text-blue-500" size={24} /> 2. Project Delivery & Scope
                            </h2>
                            <p>
                                Every engagement is defined by a clear technical scope. We commit to delivering production-grade software that adheres to the specifications agreed upon during the consultation phase. Modifications to initial requirements may impact delivery timelines and resource allocation.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Hammer className="text-blue-500" size={24} /> 3. Intellectual Property
                            </h2>
                            <p>
                                Upon fulfillment of all professional obligations, the specific code and digital assets developed for your project are your property. However, ProgVision retains the rights to general-purpose engineering methodologies, internal libraries, and architectural patterns utilized during the build process.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Gavel className="text-blue-500" size={24} /> 4. Professional Liability
                            </h2>
                            <p>
                                While we maintain the highest standards of security and performance, software operates in a dynamic environment. ProgVision is not liable for issues arising from third-party service failures, legacy infrastructure incompatibilities, or security breaches resulting from client-managed access points.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-white/5">
                            <p className="text-sm font-mono uppercase tracking-widest text-slate-500">
                                Last Updated: January 2026 // ProgVision Legal Architecture
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TermsPage
