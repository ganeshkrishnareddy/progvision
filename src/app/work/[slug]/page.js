import Link from 'next/link'
import { workEngagements } from '@/data/siteData'
import WorkDetailContent from '@/components/WorkDetailContent'

export function generateStaticParams() {
    return workEngagements.map((work) => ({
        slug: work.slug,
    }))
}

const WorkDetailPage = async ({ params }) => {
    const { slug } = await params
    const work = workEngagements.find(w => w.slug === slug)

    if (!work) return (
        <div className="pt-40 text-center min-h-screen bg-black text-white">
            <h1 className="text-4xl font-bold mb-8">Engagement Not Found</h1>
            <Link href="/work" className="text-blue-500 hover:underline font-bold uppercase tracking-widest text-xs">Return to Our Work</Link>
        </div>
    )

    return <WorkDetailContent work={work} />
}

export default WorkDetailPage
