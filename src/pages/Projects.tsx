import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { projects } from '@/content/projects'
import { staggerChildren, viewportOnce } from '@/lib/motion'

export function Projects() {
  return (
    <Section eyebrow="Projects" title="What I've built">
      <motion.div
        variants={staggerChildren(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="space-y-6"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </Section>
  )
}
