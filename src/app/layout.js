import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProgVision | Strategic Engineering & Security Consultancy',
  description: 'Engineering secure, scalable systems for global organizations. Specialist consultancy in high-stakes software architecture, cybersecurity, and financial intelligence.',
  openGraph: {
    title: 'ProgVision | Strategic Engineering Consultancy',
    description: 'Specialist engineering for mission-critical systems.',
    url: 'https://pganeshkrishnareddy.netlify.app',
    siteName: 'ProgVision',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProgVision | Strategic Engineering Consultancy',
    description: 'Engineering secure, scalable systems for global organizations.',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.className}`}>
      <body className="bg-black text-white min-h-screen relative selection:bg-blue-500/30">
        {/* Global Grid Background - Extremely Subtle */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none progvision-grid" />

        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

