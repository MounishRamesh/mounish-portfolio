import { FiAward, FiExternalLink, FiStar } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { certifications, badges } from '../data/resumeData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading
        eyebrow="06 · Certifications"
        title="Certifications & badges"
        description="Courses completed and milestones earned through consistent, self-directed learning."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08} className="card p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-signal/10 text-amber-signal flex items-center justify-center shrink-0">
              <FiAward size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-sm leading-snug">{c.name}</h3>
              <p className="font-mono text-xs text-ink/50 dark:text-paper/50 mt-1">{c.platform}</p>
              {c.url && (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-teal-signal hover:underline"
                >
                  View credential <FiExternalLink size={11} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="card p-6">
        <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-amber-signal flex items-center gap-2">
          <FiStar size={16} /> Milestone Badges
        </h3>
        <div className="flex flex-wrap gap-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 chip py-2 px-3 border-teal-signal/30 text-teal-signal"
            >
              <FiAward size={14} />
              <span>{b.label}</span>
              <span className="text-ink/40 dark:text-paper/40">· {b.platform}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
