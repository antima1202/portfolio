import { motion } from 'framer-motion'
import { FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { profile } from '@/content/profile'
import { LinkButton } from '@/components/ui/Button'
import { fadeUp, staggerChildren } from '@/lib/motion'

export function Hero() {
  return (
    <motion.div
      variants={staggerChildren()}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-3xl px-6 pb-16 pt-20 sm:pt-28"
    >
      <motion.p
        variants={fadeUp}
        className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]"
      >
        {profile.eyebrow}
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-primary)] sm:text-5xl"
      >
        {profile.headline}
      </motion.h1>

      <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)]">
        {profile.summary}
      </motion.p>

      <motion.dl variants={fadeUp} className="mt-8 space-y-1.5 text-sm">
        {profile.currentRoles.map((role) => (
          <div key={role.title} className="flex flex-wrap items-baseline gap-x-2 text-[var(--color-text-secondary)]">
            <dt className="text-[var(--color-text-primary)]">{role.title}</dt>
            <dd>
              @ {role.organization} <span className="text-xs">· since {role.since}</span>
            </dd>
          </div>
        ))}
        <div className="flex flex-wrap items-baseline gap-x-2 text-[var(--color-text-secondary)]">
          <dt className="text-[var(--color-text-primary)]">{profile.education.program}</dt>
          <dd>
            @ {profile.education.institution}{' '}
            <span className="text-xs">· {profile.education.completion}</span>
          </dd>
        </div>
      </motion.dl>

      <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
        <LinkButton href={`${import.meta.env.BASE_URL}${profile.links.resumeUrl}`} target="_blank" rel="noreferrer" variant="primary" icon={<FileText size={15} />}>
          Resume
        </LinkButton>
        <LinkButton href={profile.links.github} target="_blank" rel="noreferrer" icon={<GithubIcon width={15} height={15} />}>
          GitHub
        </LinkButton>
        <LinkButton href={profile.links.linkedin} target="_blank" rel="noreferrer" icon={<LinkedinIcon width={15} height={15} />}>
          LinkedIn
        </LinkButton>
        <LinkButton href={`mailto:${profile.links.email}`} icon={<Mail size={15} />}>
          Email
        </LinkButton>
      </motion.div>
    </motion.div>
  )
}
