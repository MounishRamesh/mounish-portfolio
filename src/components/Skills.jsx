import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { skills } from '../data/resumeData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="02 · Skills"
        title="Toolkit &amp; technical range"
        description="Categorized directly from my resume — languages, frameworks, tools, and the soft skills that keep projects on track."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, gi) => (
          <Reveal key={group.category} delay={(gi % 3) * 0.08} className="card p-6">
            <h3 className="font-display font-semibold text-sm mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-signal" />
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-ink/80 dark:text-paper/80">{item.name}</span>
                    <span className="font-mono text-xs text-ink/40 dark:text-paper/40">{item.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-paper-border dark:bg-ink-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-amber-signal to-teal-signal"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
