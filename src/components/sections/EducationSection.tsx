import { motion } from 'framer-motion'
import type { Education } from '@/types/content'
import { Tag } from '@/components/ui/Tag'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

export function EducationSection({ items }: { items: Education[] }) {
  return (
    <motion.div
      variants={staggerChildren(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="divide-y divide-[var(--color-border)] rounded-lg border border-[var(--color-border)]"
    >
      {items.map((item) => (
        <motion.div key={item.program} variants={fadeUp} className="px-5 py-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <div>
              <p className="text-[15px] font-medium text-[var(--color-text-primary)]">{item.program}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {item.institution}
                {item.grade ? ` · ${item.grade}` : ''}
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-secondary)]">{item.dateRange}</span>
          </div>

          {item.note && (
            <p className="mt-2 text-sm text-[var(--color-accent)]">{item.note}</p>
          )}

          {item.modules && item.modules.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.modules.map((m) => (
                <Tag key={m}>{m}</Tag>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
