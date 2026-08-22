import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { experience } from '../data/resumeData.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        eyebrow="03 · Experience"
        title="Experience &amp; training"
        description="Internships and structured training programs where I've applied full-stack and backend engineering skills."
      />

      <div className="relative pl-8 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-paper-border dark:bg-ink-border" />
        <div className="space-y-10">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.12} className="relative">
              <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-amber-signal ring-4 ring-paper dark:ring-ink" />
              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg">{exp.role}</h3>
                    <p className="text-amber-signal font-medium flex items-center gap-2 mt-1">
                      <FiBriefcase size={14} /> {exp.company}
                    </p>
                  </div>
                  <div className="text-right font-mono text-xs text-ink/50 dark:text-paper/50 space-y-1">
                    <p className="flex items-center gap-1.5 justify-end"><FiCalendar size={12} /> {exp.duration}</p>
                    <p className="flex items-center gap-1.5 justify-end"><FiMapPin size={12} /> {exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="text-sm text-ink/75 dark:text-paper/75 leading-relaxed flex gap-2">
                      <span className="text-teal-signal mt-1.5 w-1 h-1 rounded-full bg-teal-signal shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
