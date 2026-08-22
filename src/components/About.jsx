import { FiTarget, FiHeart, FiZap, FiAward } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { about, education, achievements } from '../data/resumeData.js'

export default function About() {
  const edu = education[0]
  return (
    <section id="about" className="section">
      <SectionHeading
        eyebrow="01 · About"
        title="The person behind the code"
        description="A quick look at my background, what drives me, and how I like to work."
      />

      <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
        <Reveal delay={0.05} className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3 text-amber-signal">
              <FiTarget size={16} />
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide">Career Objective</h3>
            </div>
            <p className="text-ink/75 dark:text-paper/75 leading-relaxed">{about.objective}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3 text-amber-signal">
              <FiAward size={16} />
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide">Education</h3>
            </div>
            <p className="font-semibold">{edu.degree}</p>
            <p className="text-sm text-ink/60 dark:text-paper/60 mt-1">
              {edu.institution}, {edu.location} · {edu.duration}
            </p>
            <p className="mt-2 font-mono text-sm text-teal-signal">{edu.score}</p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="space-y-6">
          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3 text-amber-signal">
              <FiZap size={16} />
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide">Strengths</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {about.strengths.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-2 mb-3 text-amber-signal">
              <FiHeart size={16} />
              <h3 className="font-display font-semibold text-sm uppercase tracking-wide">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {about.interests.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-3 text-amber-signal">
              Technologies I Enjoy
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.favoriteTech.map((s) => (
                <span key={s} className="chip border-teal-signal/40 text-teal-signal">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-10 card p-6">
        <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-amber-signal">
          Highlights &amp; Achievements
        </h3>
        <ul className="grid sm:grid-cols-3 gap-4">
          {achievements.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm text-ink/75 dark:text-paper/75 leading-relaxed">
              <span className="font-mono text-teal-signal shrink-0">0{i + 1}</span>
              {a}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
