"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { workEngagements } from '@/data/siteData'
import { ArrowRight, BadgeCheck, Loader2 } from 'lucide-react'

const FeaturedWork = () => {
    const featuredSlugs = ['biograph', 'ak-hot-chips']
    const featuredProjects = workEngagements.filter(project => featuredSlugs.includes(project.slug))

    // Sort to ensure Biograph is first (Ongoing) then A K Hot Chips (Completed)
    featuredProjects.sort((a, b) => {
        return featuredSlugs.indexOf(a.slug) - featuredSlugs.indexOf(b.slug)
    })

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter italic">Featured <span className="text-blue-500">Work.</span></h2>
                    <p className="text-slate-400 max-w-xl">
                        Highlighting our latest ongoing and completed engineering engagements.
                    </p>
                </div>
                <Link href="/work" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b-2 border-blue-600 pb-1">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {featuredProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="group relative rounded-[2.5rem] bg-white/[0.03] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-10 md:p-12 relative z-10 flex flex-col h-full min-h-[400px]">
                            <div className="flex justify-between items-start mb-8">
                                <div className={`px-4 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${project.type === 'Ongoing'
                                        ? 'border-yellow-500/20 bg-yellow-500/10 text-yellow-500'
                                        : 'border-green-500/20 bg-green-500/10 text-green-500'
                                    }`}>
                                    {project.type === 'Ongoing' ? <Loader2 size={12} className="animate-spin" /> : <BadgeCheck size={14} />}
                                    {project.type}
                                </div>
                                <div className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                                    {project.service}
                                </div>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white group-hover:text-blue-500 transition-colors">
                                {project.client}
                            </h3>

                            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                                {project.description}
                            </p>

                            <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
                                <div className="flex gap-2">
                                    {project.technologies.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <Link href={`/work/${project.slug}`} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                                    <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedWork
