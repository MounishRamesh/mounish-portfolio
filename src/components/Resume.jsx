import { FiDownload, FiFileText, FiEye } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/resumeData.js'

export default function Resume() {
  return (
    <section id="resume" className="section">
      <SectionHeading
        eyebrow="07 · Resume"
        title="Get the full picture"
        description="Every detail on this site, plus formatting made for recruiters — in one PDF."
      />

      <Reveal className="card p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-xl bg-amber-signal/10 text-amber-signal flex items-center justify-center shrink-0">
          <FiFileText size={28} />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display font-semibold text-xl">{profile.name} — Resume.pdf</h3>
          <p className="mt-2 text-ink/70 dark:text-paper/70 leading-relaxed max-w-xl">
            Download a copy of my resume for a complete summary of my experience, projects, education,
            and certifications — ready to share with your team.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href={profile.resumeFile} download className="btn-primary">
            <FiDownload size={16} /> Download Resume
          </a>
          <a href={profile.resumeFile} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <FiEye size={16} /> View
          </a>
        </div>
      </Reveal>
    </section>
  )
}
