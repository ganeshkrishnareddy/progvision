'use client'

import { motion } from 'framer-motion'
import { Workflow, Sparkles, Bot, GraduationCap, FileText, ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { productsData } from '@/data/siteData'

const icons = { workflow: Workflow, sparkles: Sparkles, bot: Bot, graduation: GraduationCap, file: FileText }

const ProductCard = ({ product, index }) => {
    const Icon = icons[product.icon] || Bot
    const external = product.url.startsWith('http')
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative rounded-[2.5rem] bg-white/[0.03] border border-white/5 overflow-hidden hover:border-blue-500/40 transition-all duration-500 p-10 md:p-14"
        >
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Icon size={30} />
                    </div>
                    <span className="px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest">
                        {product.status}
                    </span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight group-hover:text-blue-500 transition-colors">
                    {product.name}
                </h3>
                <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-8">
                    {product.tagline}
                </p>

                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
                    {product.description}
                </p>

                <ul className="space-y-3 mb-12">
                    {product.features.map(f => (
                        <li key={f} className="flex gap-3 items-start text-slate-300 text-sm">
                            <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                            {f}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                        {external ? 'Visit Product' : 'Talk To Us'}
                    </span>
                    {external ? (
                        <a href={product.url} target="_blank" rel="noreferrer"
                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                            <ArrowUpRight size={20} />
                        </a>
                    ) : (
                        <Link href={product.url}
                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                            <ArrowRight size={20} />
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

const ProductsPage = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-24 pb-12 md:pt-32 md:pb-24 px-6 max-w-7xl mx-auto">
                <header className="pt-20 md:pt-16 pb-12 md:pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-blue-500" />
                            <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px]">Our Products</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-[5rem] font-bold mb-8 tracking-tighter italic text-balance leading-none">
                            Built By <span className="text-blue-500">ProgVision.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light">
                            From workflow automation to AI website generation — products we have engineered, and the automation we build for your business.
                        </p>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-32">
                    {productsData.filter(p => p.slug !== 'automation').map((p, i) => (
                        <ProductCard key={p.slug} product={p} index={i} />
                    ))}
                </div>

                <section className="rounded-[3rem] bg-white/[0.02] border border-white/5 p-10 md:p-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                                <Bot size={26} />
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight italic">
                                    We Also <span className="text-blue-500">Develop Automation.</span>
                                </h2>
                                <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mt-2">
                                    Custom workflows, AI agents & integrations
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {productsData.find(p => p.slug === 'automation').features.map(f => (
                                <div key={f} className="flex gap-3 items-start p-5 rounded-2xl bg-black/40 border border-white/5">
                                    <CheckCircle size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-slate-300 text-sm font-medium">{f}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-10">
                            {productsData.find(p => p.slug === 'automation').description}
                        </p>

                        <Link href="/contact">
                            <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-[10px] py-1 border-b-2 border-blue-600 hover:border-white transition-all">
                                Discuss Your Automation <ArrowRight size={14} />
                            </button>
                        </Link>
                    </motion.div>
                </section>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-8 italic">Want a product built like these?</h2>
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

export default ProductsPage
