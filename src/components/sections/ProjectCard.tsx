import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Project } from '@/types/content'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const isPlaceholder = project.status === 'placeholder'
  const statusBadge =
    project.status === 'placeholder'
      ? (project.statusNote ?? 'Coming soon')
      : project.status === 'in-progress'
        ? (project.statusNote ?? 'In progress')
        : null

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <Card className="p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
              {statusBadge && (
                <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)]">
                  {statusBadge}
                </span>
              )}
            </div>
            <p className="mt-1.5 text-[var(--color-text-secondary)]">{project.tagline}</p>
          </div>
          {project.date && <span className="font-mono text-xs text-[var(--color-text-secondary)]">{project.date}</span>}
        </div>

        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
          {project.description}
        </p>

        {project.techStack.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.techStack.flatMap((g) => g.items).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {!isPlaceholder && (
            <Link
              to={`/projects/${project.slug}`}
              className="text-sm font-medium text-[var(--color-accent)] hover:opacity-80"
            >
              View case study →
            </Link>
          )}
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
            >
              {link.label} <ExternalLink size={13} />
            </a>
          ))}

          {project.detail && (project.detail.challenges.length > 0 || project.detail.lessons.length > 0) && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="ml-auto inline-flex items-center gap-1 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-expanded={expanded}
            >
              Technical details
              <ChevronDown size={14} className={expanded ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </button>
          )}
        </div>

        <AnimatePresence initial={false}>
          {expanded && project.detail && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-5 grid gap-5 border-t border-[var(--color-border)] pt-5 sm:grid-cols-2">
                {project.detail.challenges.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                      Challenges
                    </p>
                    <ul className="list-inside list-disc space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                      {project.detail.challenges.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.detail.lessons.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
                      Lessons learned
                    </p>
                    <ul className="list-inside list-disc space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                      {project.detail.lessons.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
