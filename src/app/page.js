'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Terminal, Globe, Shield, Smartphone, Monitor } from 'lucide-react'
import Link from 'next/link'
import DigitalCore from '@/components/hero/DigitalCore'
import Partners from '@/components/sections/Partners'
import FeaturedWork from '@/components/sections/FeaturedWork'
import { servicesData, productsData } from '@/data/siteData'

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden min-h-[80vh] md:min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-8">
            <Terminal size={12} /> Digital Product Engineering
          </div>
          <h1 className="text-4xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter leading-[0.9] text-balance">
            Software That <span className="text-blue-500 italic">Grows</span> With Your Ambition.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-10 md:mb-12 leading-relaxed">
            Transforming complex technical challenges into seamless digital experiences. At ProgVision, we engineer production-ready products that prioritize security, extreme scale, and human-centric design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs">
                Discuss a Project
              </button>
            </Link>
            <Link href="/services">
              <button className="px-10 py-4 border border-white/10 hover:bg-white/5 text-white font-bold rounded-full transition-all uppercase tracking-widest text-xs">
                View Services
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[350px] lg:h-[700px] pointer-events-none"
        >
          <DigitalCore />
        </motion.div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all"
  >
    <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
    <p className="text-slate-400 text-sm mb-8 leading-relaxed">
      {service.description}
    </p>
    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-[10px] group-hover:gap-3 transition-all">
      Learn More <ArrowRight size={14} />
    </Link>
  </motion.div>
)

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />

      <Partners />

      <FeaturedWork />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter italic">Our <span className="text-blue-500">Products.</span></h2>
            <p className="text-slate-400 max-w-xl">
              Workflow automation and AI tools built by ProgVision - plus the custom automation we develop for your business.
            </p>
          </div>
          <Link href="/products" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b-2 border-blue-600 pb-1">
            All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map(p => (
            <Link
              key={p.slug}
              href={p.url}
              {...(p.url.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold tracking-tight">{p.name}</h3>
                <ArrowUpRight size={18} className="text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-3">{p.tagline}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter italic">Our <span className="text-blue-500">Expertise.</span></h2>
            <p className="text-xl text-slate-400">
              Focused technical delivery across web, mobile, and security domains.
            </p>
          </div>
          <Link href="/services" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b-2 border-blue-600 pb-1">
            All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto p-12 lg:p-24 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 blur-[120px] opacity-20 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter italic">Ready to build <span className="text-blue-500 font-normal underline decoration-white/10">Reliable Engineering?</span></h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
              From startups in Asia to enterprises in the USA, we deliver secure, scalable digital products that work in the real world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <button className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/20 uppercase tracking-widest text-xs flex items-center gap-2">
                  Start a Consultation <ArrowRight size={14} />
                </button>
              </Link>
              <Link href="/work">
                <button className="px-12 py-5 border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all uppercase tracking-widest text-xs">
                  Review Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
