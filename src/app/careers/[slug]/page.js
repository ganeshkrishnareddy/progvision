import { notFound } from 'next/navigation'
import { careersData } from '@/data/siteData'
import JobDetailContent from '@/components/careers/JobDetailContent'

export async function generateStaticParams() {
    return careersData.map((job) => ({
        slug: job.slug,
    }))
}

const JobDetailPage = async ({ params }) => {
    const { slug } = await params
    const job = careersData.find(j => j.slug === slug)

    if (!job) {
        notFound()
    }

    return <JobDetailContent job={job} />
}

export default JobDetailPage
