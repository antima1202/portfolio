import { motion } from 'framer-motion'
import type { Certification } from '@/types/content'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

export function CertificationsSection({ items }: { items: Certification[] }) {
  return (
    <motion.ul
      variants={staggerChildren(0.06)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-2"
    >
      {items.map((item) => (
        <motion.li
          key={item.name}
          variants={fadeUp}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 text-sm"
        >
          <span className="text-[var(--color-text-primary)]">
            {item.name} <span className="text-[var(--color-text-secondary)]">· {item.issuer}</span>
          </span>
          <span className="font-mono text-xs text-[var(--color-text-secondary)]">{item.date}</span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
