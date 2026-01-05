'use client'

import { motion } from 'framer-motion'
import { RefreshCcw, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react'

const RefundPage = () => {
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
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Service Assurance</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter italic">Refund <span className="text-blue-500 font-normal underline decoration-white/10">Policy.</span></h1>

                    <div className="space-y-16 text-slate-400 leading-relaxed font-light text-lg">
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <ShieldCheck className="text-blue-500" size={24} /> 1. Quality Guarantee
                            </h2>
                            <p>
                                At ProgVision, we sell expertise and delivery, not just products. Our "Refund Policy" is founded on a commitment to getting it right. We work through iterative milestones to ensure that you are satisfied with the technical direction at every stage of the build.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <CheckCircle className="text-blue-500" size={24} /> 2. Milestone-Based Payments
                            </h2>
                            <p>
                                To ensure fairness for both parties, we typically operate on a milestone-based payment structure. Payments made for successfully completed and approved milestones are non-refundable, as they represent the engineering hours and intellectual resources already deployed.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <AlertCircle className="text-blue-500" size={24} /> 3. Cancellation & Adjustments
                            </h2>
                            <p>
                                If a project is cancelled mid-milestone, you are only responsible for the work performed up to the point of cancellation. Any surplus funds held for future, un-started milestones will be returned within 10 business days.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                <RefreshCcw className="text-blue-500" size={24} /> 4. Dispute Resolution
                            </h2>
                            <p>
                                In the rare event of a technical deliverable failing to meet the agreed-upon criteria after multiple revision cycles, we will conduct a transparent audit. If the fault lies in our engineering execution, we will provide a partial or full refund for the affected component.
                            </p>
                        </section>

                        <div className="pt-12 border-t border-white/5">
                            <p className="text-sm font-mono uppercase tracking-widest text-slate-500">
                                Last Updated: January 2026 // ProgVision Client Satisfaction Framework
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default RefundPage
