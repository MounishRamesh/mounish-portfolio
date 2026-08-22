import { FiMapPin, FiCalendar, FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { education } from '../data/resumeData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading
        eyebrow="05 · Education"
        title="Academic background"
        description="The formal foundation behind the engineering — degree, institution, and standing."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-paper-border dark:bg-ink-border" />
        <div className="space-y-10">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 0.1} className="relative">
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-teal-signal ring-4 ring-paper dark:ring-ink" />
              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg leading-snug">{edu.degree}</h3>
                    <p className="text-amber-signal font-medium mt-1">{edu.institution}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-ink/50 dark:text-paper/50 space-y-1 shrink-0">
                    <p className="flex items-center gap-1.5 justify-end"><FiCalendar size={12} /> {edu.duration}</p>
                    <p className="flex items-center gap-1.5 justify-end"><FiMapPin size={12} /> {edu.location}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 mt-2 font-mono text-sm font-semibold text-teal-signal border border-teal-signal/30 rounded-md px-3 py-1.5">
                  <FiAward size={14} /> {edu.score}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
