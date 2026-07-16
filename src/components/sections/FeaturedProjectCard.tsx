import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/types/content'
import { Tag } from '@/components/ui/Tag'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function FeaturedProjectCard({ project }: { project: Project }) {
  const allTech = project.techStack.flatMap((group) => group.items)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-colors duration-150 hover:border-[var(--color-accent)] sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
              {project.statusNote && (
                <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)]">
                  {project.statusNote}
                </span>
              )}
            </div>
            <p className="mt-1.5 text-[var(--color-text-secondary)]">{project.tagline}</p>
          </div>
          <ArrowRight
            size={18}
            className="mt-1 shrink-0 text-[var(--color-text-secondary)] transition-transform duration-150 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {allTech.slice(0, 8).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
