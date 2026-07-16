import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { LinkedinIcon } from '@/components/ui/BrandIcons'
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjectCard } from '@/components/sections/FeaturedProjectCard'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { Section } from '@/components/ui/Section'
import { LinkButton } from '@/components/ui/Button'
import { featuredProjects } from '@/content/projects'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'

export function Home() {
  return (
    <>
      <Hero />

      <Section eyebrow="Featured work" title="Recent Projects">
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Experience"
        title="Where I've built things"
        action={
          <Link
            to="/experience"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)]"
          >
            Full experience <ArrowRight size={14} />
          </Link>
        }
      >
        <ExperienceTimeline roles={experience} compact />
      </Section>

      <Section className="border-t border-[var(--color-border)] pb-24 pt-20 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
          Let's talk
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[var(--color-text-secondary)]">
          Open to Software Engineering, Solutions Engineering, AI Engineering, Forward Deployed Engineering.

        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <LinkButton href={`mailto:${profile.links.email}`} variant="primary" icon={<Mail size={15} />}>
            Email me
          </LinkButton>
          <LinkButton href={profile.links.linkedin} target="_blank" rel="noreferrer" icon={<LinkedinIcon width={15} height={15} />}>
            LinkedIn
          </LinkButton>
        </div>
      </Section>
    </>
  )
}
