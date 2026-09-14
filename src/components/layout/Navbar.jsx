'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/siteData'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5 h-16 md:h-20' : 'bg-transparent h-20 md:h-24'
            }`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
                    <img
                        src="/images/logo.jpeg"
                        alt="ProgVision Logo"
                        className="h-10 w-auto rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <span className="text-xl font-bold tracking-tighter italic hidden sm:block">
                        Prog<span className="text-blue-500">Vision.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-blue-500 ${pathname === link.path ? 'text-blue-500' : 'text-slate-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-full transition-all shadow-lg shadow-blue-500/20">
                            Discuss a Project
                        </button>
                    </Link>
                </div>

                <button className="md:hidden text-white group" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-black border-b border-white/5 p-8 flex flex-col gap-10 md:hidden overflow-hidden"
                    >
                        <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-bold tracking-tight uppercase ${pathname === link.path ? 'text-blue-500' : 'text-slate-200'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all">Discuss a Project</button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
