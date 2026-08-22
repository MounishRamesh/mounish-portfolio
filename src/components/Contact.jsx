import { useState } from 'react'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data/resumeData.js'

const socialLinks = [
  { icon: FiMail, label: 'Email', href: `mailto:${profile.email}`, external: false },
  { icon: FiLinkedin, label: 'LinkedIn', href: profile.socials.linkedin, external: true },
  { icon: FiGithub, label: 'GitHub', href: profile.socials.github, external: true },
  { icon: SiLeetcode, label: 'LeetCode', href: profile.socials.leetcode, external: true },
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
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="08 · Contact"
        title="Let's build something"
        description="Open to full-stack, backend, and software developer roles. Reach out — I reply fast."
      />

      <Reveal className="card p-8 sm:p-10 max-w-2xl mx-auto">
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
