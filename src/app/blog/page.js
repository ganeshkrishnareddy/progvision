'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Clock, Terminal, Shield, Cpu, Activity, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

const InsightCard = ({ post, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        className="group py-12 border-b border-white/5 last:border-0 flex flex-col md:flex-row gap-8 items-start md:items-center"
    >
        <div className="w-full md:w-1/4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                {post.category}
            </div>
            <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest space-y-2">
                <p className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</p>
            </div>
        </div>

        <div className="w-full md:w-3/4 space-y-4">
            <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight group-hover:text-blue-500 transition-colors cursor-pointer leading-tight text-balance">
                    {post.title}
                </h2>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                {post.excerpt}
            </p>
            <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] pt-4 group-hover:gap-3 transition-all">
                Read Analysis <ArrowRight size={14} />
            </Link>
        </div>
    </motion.div>
)

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = useMemo(() => {
        const counts = blogPosts.reduce((acc, post) => {
            acc[post.category] = (acc[post.category] || 0) + 1
            return acc
        }, {})
        return ['All', ...Object.keys(counts).sort()]
    }, [])

    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return blogPosts
        return blogPosts.filter(p => p.category === selectedCategory)
    }, [selectedCategory])

    const getPostCount = (category) => {
        if (category === 'All') return blogPosts.length
        return blogPosts.filter(p => p.category === category).length
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-32 md:pt-40 pb-20 md:pb-24 px-6 max-w-7xl mx-auto">
                <header className="mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold mb-8 tracking-tighter text-balance">Insights & <span className="text-blue-500 italic">Analysis</span></h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                            Opinionated engineering perspectives on systems security, architectural resilience, and the future of enterprise software.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
                    <div className="lg:col-span-8">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((p, i) => (
                                <InsightCard key={p.slug} post={p} index={i} />
                            ))
                        ) : (
                            <div className="py-20 text-center">
                                <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">No articles found in this category.</p>
                            </div>
                        )}
                    </div>

                    <div className="lg:col-span-4">
                        <aside className="sticky top-32 space-y-12">
                            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-8">Categories</h3>
                                <ul className="space-y-4">
                                    {categories.map(cat => (
                                        <li
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`flex items-center justify-between text-sm group cursor-pointer transition-all ${selectedCategory === cat ? 'text-blue-500' : 'text-slate-400 hover:text-white'
                                                }`}
                                        >
                                            <span className="uppercase tracking-tight font-bold">{cat}</span>
                                            <span className={`font-mono text-[10px] ${selectedCategory === cat ? 'text-blue-500' : 'text-slate-600'}`}>
                                                {String(getPostCount(cat)).padStart(2, '0')}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-10 rounded-3xl bg-blue-600/5 border border-blue-500/20">
                                <h3 className="text-xl font-bold mb-4 tracking-tight text-balance leading-tight">Professional Engineering Insights</h3>
                                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                                    Strategic analysis on technical architecture and security frameworks.
                                </p>
                                <div className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Business Email"
                                        className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-xs font-mono focus:border-blue-500 outline-none transition-all placeholder:text-slate-800"
                                    />
                                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-[10px]">
                                        Join Analysis List
                                    </button>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
