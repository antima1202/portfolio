import { Section } from '@/components/ui/Section'
import { ExperienceTimeline } from '@/components/sections/ExperienceTimeline'
import { experience } from '@/content/experience'

export function Experience() {
  return (
    <Section eyebrow="Experience" title="Where I've worked" className="max-w-3xl">
      <ExperienceTimeline roles={experience} />
    </Section>
  )
}
