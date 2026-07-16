import { motion } from 'framer-motion'
import type { Activity } from '@/types/content'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

export function ActivitiesSection({ items }: { items: Activity[] }) {
  return (
    <motion.div
      variants={staggerChildren(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="divide-y divide-[var(--color-border)] rounded-lg border border-[var(--color-border)]"
    >
      {items.map((item) => (
        <motion.div key={item.title + item.dateRange} variants={fadeUp} className="px-5 py-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <p className="text-[15px] font-medium text-[var(--color-text-primary)]">{item.title}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.organization}</p>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-secondary)]">{item.dateRange}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
