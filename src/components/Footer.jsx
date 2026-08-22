import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { profile } from '../data/resumeData.js'

const socials = [
  { href: profile.socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: profile.socials.github, icon: FiGithub, label: 'GitHub' },
  { href: profile.socials.leetcode, icon: SiLeetcode, label: 'LeetCode' },
  { href: profile.socials.email, icon: FiMail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-paper-border dark:border-ink-border">
      <div className="max-w-6xl mx-auto container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink/50 dark:text-paper/50 order-2 sm:order-1">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3 order-1 sm:order-2">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-paper-border dark:border-ink-border flex items-center justify-center hover:border-amber-signal hover:text-amber-signal transition-colors"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
