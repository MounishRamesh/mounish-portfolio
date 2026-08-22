import Reveal from './Reveal.jsx'
import CommitDots from './CommitDots.jsx'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="flex items-center gap-4 mb-4">
        <span className="eyebrow">{eyebrow}</span>
        <CommitDots count={14} />
      </div>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-ink/70 dark:text-paper/70 leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
