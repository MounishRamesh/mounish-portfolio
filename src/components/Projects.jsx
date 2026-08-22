import { FiGithub, FiExternalLink, FiCheckCircle, FiUser } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data/resumeData.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="04 · Projects"
        title="Things I've built"
        description="A selection of backend, full-stack, and machine learning projects — from idea to shipped repository."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.1} className="card p-6 flex flex-col h-full group">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-display font-semibold text-lg leading-snug">{p.name}</h3>
              <span className="shrink-0 mt-1 font-mono text-[10px] uppercase tracking-wide text-teal-signal border border-teal-signal/30 rounded px-2 py-0.5">
                {p.role}
              </span>
            </div>

            <p className="text-sm text-ink/70 dark:text-paper/70 leading-relaxed mb-4">{p.description}</p>

            <ul className="space-y-1.5 mb-5">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex gap-2 text-xs text-ink/65 dark:text-paper/65 leading-relaxed">
                  <FiCheckCircle className="text-amber-signal mt-0.5 shrink-0" size={13} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-5 mt-auto">
              {p.tech.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-paper-border dark:border-ink-border">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium hover:text-amber-signal transition-colors"
                >
                  <FiGithub size={14} /> Code
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium hover:text-amber-signal transition-colors"
                >
                  <FiExternalLink size={14} /> Live Demo
                </a>
              )}
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs text-ink/40 dark:text-paper/40">
                <FiUser size={12} /> {p.role}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
