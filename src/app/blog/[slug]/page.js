import { motion } from 'framer-motion'
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react'
import Link from 'next/link'
import { blogPosts } from '@/data/blogData'

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

const BlogDetailContent = ({ post }) => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
                <Link href="/blog" className="flex items-center gap-2 text-slate-500 mb-12 hover:text-blue-500 transition-all font-mono text-[10px] uppercase tracking-widest group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tighter">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-8 text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] py-8 border-y border-white/5">
                            <div className="flex items-center gap-2"><Clock size={14} className="text-blue-500" /> {post.readTime}</div>
                            <div className="flex items-center gap-2"><User size={14} className="text-blue-500" /> P. Ganesh Krishna</div>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="text-slate-300 leading-[1.8] text-lg space-y-8 whitespace-pre-wrap font-light">
                            {post.content}
                        </div>
                    </div>

                    <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-500">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest">P. Ganesh Krishna</p>
                                <p className="text-[10px] text-slate-500 font-mono">Principal Engineer @ ProgVision</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600 transition-colors">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </motion.article>
            </div>

            {/* CTA */}
            <section className="py-32 bg-white/[0.02] border-t border-white/5 mt-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8 tracking-tight">Requirement for deep technical analysis?</h2>
                    <Link href="/contact">
                        <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                            Start a Consultation
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

const BlogDetailPage = ({ params }) => {
    const { slug } = params
    const post = blogPosts.find(p => p.slug === slug)

    if (!post) return (
        <div className="pt-40 text-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-8 tracking-tighter">Analysis Not Found</h1>
            <Link href="/blog" className="text-blue-500 hover:underline">Return to Insights</Link>
        </div>
    )

    return <BlogDetailContent post={post} />
}

export default BlogDetailPage
