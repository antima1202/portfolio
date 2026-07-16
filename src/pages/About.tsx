import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { EducationSection } from '@/components/sections/EducationSection'
import { ActivitiesSection } from '@/components/sections/ActivitiesSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { education } from '@/content/education'
import { activities } from '@/content/activities'
import { certifications } from '@/content/certifications'
import { fadeUp, staggerChildren, viewportOnce } from '@/lib/motion'

const paragraphs = [
  `I enjoy building software that solves real business problems.`,
  `Over the past three years, I've worked across backend engineering, enterprise integrations, and AI-enabled applications. 
  I started my career as a Full Stack Developer, building CRM and loyalty platform features, backend services, and cloud automation for enterprise clients. 
  Working closely with customers and internal stakeholders gradually shifted my focus beyond writing code to 
  understanding how software fits into business processes and how good engineering decisions create better user experiences.`,
  `That interest led me into integration engineering and customer-facing software delivery. As a Forward Deployed Engineer, 
  I worked directly with customers to design and implement technical solutions, build API integrations, automate workflows, 
  and translate business requirements into production systems.`,
  `I'm drawn to problems where AI has to work inside constraints that demos don't have: governance,
  data sensitivity, and people who aren't engineers depending on the system being right. That's the
  work I'm looking for next - Forward Deployed Engineering, AI Engineering, or Solutions Engineering
  roles where I can sit close to the problem and close to the people who have it.`,
  `To deepen my understanding of AI, I'm currently pursuing an MSc in Applied Artificial Intelligence
   at the University of Warwick while working as an Applied AI Analyst. My work focuses on building practical
    software rather than research prototypes, such as, developing backend services, healthcare applications, and AI-enabled 
    tools that support real users and domain experts.`,
    `One project that reflects this approach is my Enterprise AI Knowledge Platform, a full-stack application 
    that combines Retrieval-Augmented Generation (RAG), semantic search, authentication, and enterprise access 
    controls to enable secure querying of internal documents. Building it strengthened my understanding of how AI 
    systems integrate with existing software rather than operating in isolation.`,
    `Today, I'm most interested in building scalable backend systems, designing integrations between products, 
    and applying AI where it meaningfully improves existing workflows. I enjoy working at the intersection of 
    software engineering, APIs, cloud technologies, and customer problem solving.`,
]

export function About() {
  return (
    <>
      <Section eyebrow="About" title="From full stack to applied AI" className="max-w-3xl">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6"
        >
          {paragraphs.map((p) => (
            <motion.p
              key={p.slice(0, 24)}
              variants={fadeUp}
              className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>
      </Section>

      <Section eyebrow="Education" title="Education" className="max-w-3xl pt-0">
        <EducationSection items={education} />
        {certifications.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[var(--color-text-secondary)]">
              Certifications
            </p>
            <CertificationsSection items={certifications} />
          </div>
        )}
      </Section>

      <Section eyebrow="Beyond the core roles" title="Leadership & activities" className="max-w-3xl pt-0">
        <ActivitiesSection items={activities} />
      </Section>
    </>
  )
}
