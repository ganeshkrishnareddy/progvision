'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, MapPin, Clock, Code2, ShieldCheck, TrendingUp, Megaphone, Send } from 'lucide-react'
import Link from 'next/link'
import { careersData } from '@/data/siteData'
import ApplicationForm from '@/components/careers/ApplicationForm'

const CareersPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    // Filter data for different sections
    const internships = careersData.filter(job => job.type === 'Internship' && !job.isClosed)
    const experienced = careersData.filter(job => job.type === 'Full-time' && !job.isClosed)

    // Helper to get icon based on category
    const getIcon = (category) => {
        switch (category) {
            case 'Engineering': return <Code2 size={20} />;
            case 'Security': return <ShieldCheck size={20} />;
            case 'Marketing': return <Megaphone size={20} />;
            case 'Business': return <TrendingUp size={20} />;
            default: return <Briefcase size={20} />;
        }
    }

    return (
        <div className="bg-black text-white min-h-screen selection:bg-blue-500/30">
            <ApplicationForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                jobTitle="General Application"
            />

            {/* Hero Section */}
            <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-blue-500" />
                        <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Join Our Team</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-balance">
                        Build the <span className="text-blue-500 italic">Future</span> with Us.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
                        At ProgVision, we are always looking for passionate individuals to join our mission of engineering elite digital products. Whether you are starting your journey or looking to lead, there is a place for you here.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-12"
                >
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg shadow-white/10"
                    >
                        Apply for any Role <Send size={18} />
                    </button>
                    <p className="mt-4 text-xs text-slate-500 max-w-sm leading-relaxed ml-2">
                        Don't see a fitting role? Submit a general application and we'll contact you when an opportunity arises.
                    </p>
                </motion.div>
            </div>

            {/* Internships Section */}
            <div className="px-6 max-w-7xl mx-auto py-20 border-b border-white/5">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Internships</h2>
                        <p className="text-slate-500 text-sm">For Fresh Graduates & Students</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {internships.map((job, index) => (
                        <JobCard key={job.slug} job={job} index={index} getIcon={getIcon} />
                    ))}
                </div>
            </div>

            {/* Experienced Professionals Section */}
            <div className="px-6 max-w-7xl mx-auto py-20 pb-32">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold">Full Time Roles</h2>
                        <p className="text-slate-500 text-sm">Freshers & Final Year Students (Zero Experience Required)</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {experienced.map((job, index) => (
                        <JobCard key={job.slug} job={job} index={index} getIcon={getIcon} />
                    ))}
                </div>
            </div>
        </div >
    )
}

const JobCard = ({ job, index, getIcon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <Link href={`/careers/${job.slug}`} className="block h-full">
            <div className="group h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRight className="text-blue-500" />
                </div>

                <div className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-colors">
                            {getIcon(job.category)}
                        </div>
                        <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold bg-white/5 text-slate-400 border border-white/5 group-hover:bg-blue-500/10 group-hover:text-blue-400 transition-colors">
                            {job.type}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                            {job.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <MapPin size={12} />
                            {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={12} />
                            {job.experience}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
)

export default CareersPage
