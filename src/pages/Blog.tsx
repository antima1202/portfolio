import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { blogPosts } from '@/content/blogPosts'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

export function Blog() {
  return (
    <Section eyebrow="Blog" title="Writing">
      <p className="mb-8 max-w-xl text-[15px] text-[var(--color-text-secondary)]">
        Nothing published yet - I'm planning to write, mostly from what I'm learning
        building various AI Knowledge projects.
      </p>
      <motion.div
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-4"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            variants={fadeUp}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-medium text-[var(--color-text-primary)]">{post.title}</h3>
              <span className="rounded-full border border-[var(--color-border)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)]">
                Planned
              </span>
            </div>
            <p className="mt-2 text-[15px] text-[var(--color-text-secondary)]">{post.summary}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
