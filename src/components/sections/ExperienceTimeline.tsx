import { motion } from 'framer-motion'
import type { Role } from '@/types/content'
import { Tag } from '@/components/ui/Tag'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

interface ExperienceTimelineProps {
  roles: Role[]
  compact?: boolean
}

export function ExperienceTimeline({ roles, compact = false }: ExperienceTimelineProps) {
  return (
    <motion.ol
      variants={staggerChildren()}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative space-y-10 border-l border-[var(--color-border)] pl-8"
    >
      {roles.map((role) => (
        <motion.li key={`${role.title}-${role.organization}`} variants={fadeUp} className="relative">
          <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />

          <p className="font-mono text-xs text-[var(--color-text-secondary)]">
            {role.startDate} - {role.endDate}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-[var(--color-text-primary)]">{role.title}</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {role.organization}
            {role.location ? ` · ${role.location}` : ''}
          </p>

          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {role.summary}
          </p>

          {!compact && (
            <>
              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                  {role.sectionLabels?.built ?? 'What I built'}
                </p>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[var(--color-text-secondary)]">
                  {role.built.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                  {role.sectionLabels?.problemsSolved ?? 'Problems solved'}
                </p>
                <ul className="list-inside list-disc space-y-1 text-[15px] text-[var(--color-text-secondary)]">
                  {role.problemsSolved.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {role.impact.length > 0 && (
                <div className="mt-4">
                  <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                    Impact
                  </p>
                  <ul className="list-inside list-disc space-y-1 text-[15px] text-[var(--color-text-secondary)]">
                    {role.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {role.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
