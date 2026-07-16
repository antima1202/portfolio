import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { projects } from '@/content/projects'
import { Tag } from '@/components/ui/Tag'
import { LinkButton } from '@/components/ui/Button'
import { fadeUp, staggerChildren } from '@/lib/motion'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/projects" replace />
  if (project.status === 'placeholder') return <Navigate to="/projects" replace />

  return (
    <motion.div
      variants={staggerChildren(0.08)}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-3xl px-6 py-16"
    >
      <motion.div variants={fadeUp}>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center gap-3">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
          {project.name}
        </h1>
        {project.status === 'in-progress' && (
          <span className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]">
            {project.statusNote ?? 'In progress'}
          </span>
        )}
      </motion.div>
      <motion.p variants={fadeUp} className="mt-3 text-lg text-[var(--color-text-secondary)]">
        {project.tagline}
      </motion.p>

      {project.links.length > 0 && (
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <LinkButton key={link.url} href={link.url} target="_blank" rel="noreferrer" icon={<ExternalLink size={14} />}>
              {link.label}
            </LinkButton>
          ))}
        </motion.div>
      )}

      {project.detail && (
        <motion.section variants={fadeUp} className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Problem</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {project.detail.problem}
          </p>
        </motion.section>
      )}

      {project.detail && project.detail.architecture.length > 0 && (
        <motion.section variants={fadeUp} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Architecture</h2>
          <ol className="mt-3 space-y-2.5 border-l border-[var(--color-border)] pl-5 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {project.detail.architecture.map((step, i) => (
              <li key={step} className="relative">
                <span className="absolute -left-[1.65rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-surface)] font-mono text-[10px] text-[var(--color-accent)] ring-1 ring-[var(--color-border)]">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.section>
      )}

      {project.techStack.length > 0 && (
        <motion.section variants={fadeUp} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Tech stack</h2>
          <div className="mt-4 space-y-3">
            {project.techStack.map((group) => (
              <div key={group.category} className="flex flex-wrap items-center gap-2">
                <span className="w-32 shrink-0 text-xs text-[var(--color-text-secondary)]">{group.category}</span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {project.detail && project.detail.challenges.length > 0 && (
        <motion.section variants={fadeUp} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Challenges</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {project.detail.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {project.detail && project.detail.lessons.length > 0 && (
        <motion.section variants={fadeUp} className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">Lessons learned</h2>
          <ul className="mt-3 list-inside list-disc space-y-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
            {project.detail.lessons.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </motion.section>
      )}
    </motion.div>
  )
}
