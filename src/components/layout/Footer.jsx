import Link from 'next/link'
import { navLinks, siteData } from '@/data/siteData'
import { Terminal, Mail, Phone, MapPin, Linkedin, Github, MessageSquare, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/5 py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
                {/* Brand Section */}
                <div className="lg:col-span-5 space-y-8">
                    <Link href="/" className="flex items-center gap-3 group group">
                        <img
                            src="/images/logo.jpeg"
                            alt="ProgVision Logo"
                            className="h-12 w-auto rounded-xl"
                        />
                        <span className="text-3xl font-bold tracking-tighter italic">
                            Prog<span className="text-blue-500 font-normal">Vision.</span>
                        </span>
                    </Link>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                        Building secure, scalable digital products for businesses and startups globally.
                    </p>
                    <div className="flex gap-4">
                        <a href={siteData.socials.linkedin} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href={siteData.socials.github} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Github size={18} />
                        </a>
                        <a href={siteData.socials.whatsapp} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <MessageSquare size={18} />
                        </a>
                        <a href={siteData.socials.twitter} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-blue-500 hover:text-blue-500 transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="lg:col-span-2 space-y-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Navigation</h4>
                    <ul className="grid grid-cols-2 gap-x-12 gap-y-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className="text-sm text-slate-400 hover:text-blue-500 transition-all font-medium"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Peek */}
                <div className="lg:col-span-2 space-y-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Services</h4>
                    <ul className="space-y-4">
                        <li className="text-sm text-slate-400">Web Development</li>
                        <li className="text-sm text-slate-400">App Development</li>
                        <li className="text-sm text-slate-400">iOS Development</li>
                        <li className="text-sm text-slate-400">Security Audit</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="lg:col-span-3 space-y-8">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Contact</h4>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-center">
                            <Mail size={18} className="text-blue-500" />
                            <span className="text-sm text-slate-300">{siteData.email}</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Phone size={18} className="text-blue-500" />
                            <span className="text-sm text-slate-300">{siteData.phones[0]}</span>
                        </div>
                        <div className="flex gap-4 items-center">
                            <MapPin size={18} className="text-blue-500" />
                            <span className="text-sm text-slate-300">Global Operations</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-slate-500 text-[10px] font-mono uppercase tracking-widest">
                    © {new Date().getFullYear()} PROGVISION DIGITAL. ALL RIGHTS RESERVED.
                </p>

                <div className="flex gap-8">
                    <Link href="/privacy" className="text-slate-500 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="text-slate-500 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors">Terms of Service</Link>
                    <Link href="/refund" className="text-slate-500 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-colors">Refund Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
