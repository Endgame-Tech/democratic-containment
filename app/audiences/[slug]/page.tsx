import { audienceContent } from './content'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [
    { slug: 'endsars' },
    { slug: 'voters' },
    { slug: 'reformers' },
    { slug: 'donors' },
    { slug: 'civilsociety' },
    { slug: 'diaspora' },
    { slug: 'youth' },
    { slug: 'journalists' },
    { slug: 'academics' },
    { slug: 'political-class' },
    { slug: 'business-leaders' },
    { slug: 'religious-leaders' },
    { slug: 'students-educators' },
  ]
}

export default async function AudiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const audience = audienceContent[slug];
  if (!audience) notFound();

  return (
    <div className="page-content audience-page">
      {audience.content}
    </div>
  )
}
