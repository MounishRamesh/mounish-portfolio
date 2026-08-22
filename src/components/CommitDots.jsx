// Signature decorative motif referencing a GitHub-style contribution graph —
// used as a section divider to tie the whole site back to Mounish's version-control-driven workflow.
export default function CommitDots({ count = 24, className = '' }) {
  const seed = [1, 3, 2, 4, 1, 0, 2, 3, 4, 2, 1, 3, 0, 2, 4, 3, 1, 2, 0, 3, 4, 1, 2, 3]
  const levels = ['bg-paper-border dark:bg-ink-border', 'bg-amber-signal/30', 'bg-amber-signal/60', 'bg-amber-signal/85', 'bg-teal-signal']
  return (
    <div className={`commit-dots ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-[2px] ${levels[seed[i % seed.length]]}`}
        />
      ))}
    </div>
  )
}
