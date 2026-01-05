import Link from 'next/link'
import { servicesData } from '@/data/siteData'
import ServiceDetailContent from '@/components/ServiceDetailContent'

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

const ServiceDetailPage = async ({ params }) => {
    const { slug } = await params
    const service = servicesData.find(s => s.slug === slug)

    if (!service) return (
        <div className="pt-40 text-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-8">Service Not Found</h1>
            <Link href="/services" className="text-blue-500 hover:underline font-bold uppercase tracking-widest text-xs">Return to Services</Link>
        </div>
    )

    return <ServiceDetailContent service={service} />
}

export default ServiceDetailPage
