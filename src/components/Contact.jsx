import { useState } from 'react'
<<<<<<< HEAD
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi'
=======
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
>>>>>>> fbb7fd80c5830bc3c7adfe9e5d2a832ab5353ac6
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/resumeData.js'

<<<<<<< HEAD
// Display-only formatting kept local to this section so shared resume data stays untouched.
const contactDetails = [
  { icon: FiMail, label: 'Email', value: 'mounishr6680@gmail.com', href: `mailto:${profile.email}`, external: false },
  { icon: FiPhone, label: 'Phone', value: '+91 8015696680', href: null },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mounish05', href: profile.socials.linkedin, external: true },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/MounishRamesh', href: profile.socials.github, external: true },
  { icon: SiLeetcode, label: 'LeetCode', value: 'leetcode.com/Mounish-R', href: profile.socials.leetcode, external: true },
  { icon: FiMapPin, label: 'Location', value: 'Tamil Nadu, India', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
=======
const socialLinks = [
  {
    icon: FiMail,
    label: 'Email',
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: profile.socials.linkedin,
    external: true,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    href: profile.socials.github,
    external: true,
  },
  {
    icon: SiLeetcode,
    label: 'LeetCode',
    href: profile.socials.leetcode,
    external: true,
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name}`
    )

    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setSent(true)

>>>>>>> fbb7fd80c5830bc3c7adfe9e5d2a832ab5353ac6
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="08 · Contact"
        title="Let's build something"
        description="Open to full-stack, backend, and software developer roles. Reach out — I reply fast."
      />

<<<<<<< HEAD
      <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14">
        {/* Left: contact details */}
        <Reveal className="flex flex-col">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink/45 dark:text-paper/45 mb-5">
            Contact Details
          </h3>
          <ul className="space-y-3">
            {contactDetails.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-lg border border-paper-border dark:border-ink-border px-5 py-4 transition-all duration-200 hover:border-amber-signal/60 hover:bg-amber-signal/[0.03] group">
                  <div className="w-11 h-11 rounded-lg bg-teal-signal/10 text-teal-signal flex items-center justify-center shrink-0 transition-colors group-hover:bg-amber-signal/10 group-hover:text-amber-signal">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[10.5px] uppercase tracking-wide text-ink/45 dark:text-paper/45">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-ink dark:text-paper truncate">{value}</p>
                  </div>
                  {href && (
                    <FiArrowUpRight
                      size={15}
                      className="text-ink/25 dark:text-paper/25 shrink-0 transition-all group-hover:text-amber-signal group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </div>
              )
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      aria-label={`${label}: ${value}`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div aria-label={`${label}: ${value}`}>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Right: contact form */}
        <Reveal delay={0.1} className="card p-6 sm:p-8 h-fit">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink/45 dark:text-paper/45 mb-6">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
            <div>
              <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors resize-none"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
              {sent ? <><FiCheck size={16} /> Opening your mail app…</> : <><FiSend size={16} /> Send Message</>}
            </button>
            <p className="text-xs text-ink/45 dark:text-paper/45">
              Submitting opens your email client with this message pre-filled to {profile.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
=======
      <Reveal className="card p-8 sm:p-10 max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-label="Contact form"
        >
          <div>
            <label
              htmlFor="name"
              className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50 mb-2 block"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the opportunity or project..."
              className="w-full rounded-md border border-paper-border dark:border-ink-border bg-transparent px-4 py-2.5 text-sm outline-none focus:border-amber-signal transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full sm:w-auto justify-center"
          >
            {sent ? (
              <>
                <FiCheck size={16} />
                Opening your mail app…
              </>
            ) : (
              <>
                <FiSend size={16} />
                Send Message
              </>
            )}
          </button>

          <p className="text-xs text-ink/45 dark:text-paper/45">
            Submitting opens your email client with this message pre-filled to{' '}
            {profile.email}.
          </p>
        </form>

        <div className="flex items-center justify-center gap-4 mt-9 pt-7 border-t border-paper-border dark:border-ink-border">
          {socialLinks.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-paper-border dark:border-ink-border flex items-center justify-center hover:border-amber-signal hover:text-amber-signal hover:-translate-y-0.5 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
>>>>>>> fbb7fd80c5830bc3c7adfe9e5d2a832ab5353ac6
