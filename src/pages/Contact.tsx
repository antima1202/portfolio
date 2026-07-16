import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { profile } from '@/content/profile'
import { fadeUp, staggerChildren } from '@/lib/motion'

export function Contact() {
  const links = [
    { label: 'Email', value: profile.links.email, href: `mailto:${profile.links.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'linkedin.com/in/antima-modak', href: profile.links.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', value: 'github.com/antima1202', href: profile.links.github, icon: GithubIcon },
  ]

  return (
    <Section eyebrow="Contact" title="Get in touch" className="max-w-2xl">
      <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-[15px] text-[var(--color-text-secondary)]">
        Open to Software Engineering, Solutions Engineering, AI Engineering, Forward Deployed Engineering.
         The fastest way to reach me is email.
      </motion.p>

      <motion.div
        variants={staggerChildren(0.08)}
        initial="hidden"
        animate="visible"
        className="mt-8 divide-y divide-[var(--color-border)] rounded-lg border border-[var(--color-border)]"
      >
        {links.map(({ label, value, href, icon: Icon }) => (
          <motion.a
            key={label}
            variants={fadeUp}
            href={href}
            target={label !== 'Email' ? '_blank' : undefined}
            rel={label !== 'Email' ? 'noreferrer' : undefined}
            className="flex items-center justify-between gap-4 px-5 py-4 text-sm transition-colors hover:bg-[var(--color-surface-hover)]"
          >
            <span className="flex items-center gap-3 text-[var(--color-text-primary)]">
              <Icon size={16} className="text-[var(--color-text-secondary)]" />
              {label}
            </span>
            <span className="text-[var(--color-text-secondary)]">{value}</span>
          </motion.a>
        ))}
      </motion.div>
    </Section>
  )
}
