import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import TypingRoles from './TypingRoles.jsx'
import { profile, stats } from '../data/resumeData.js'
import AnimatedCounter from './AnimatedCounter.jsx'

const socialIcons = [
  { href: profile.socials.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
  { href: profile.socials.github, icon: FiGithub, label: 'GitHub' },
  { href: profile.socials.leetcode, icon: SiLeetcode, label: 'LeetCode' },
  { href: profile.socials.email, icon: FiMail, label: 'Email' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 right-[-10%] w-[520px] h-[520px] rounded-full blur-3xl -z-10"
        style={{ background: 'radial-gradient(circle, rgba(242,169,59,0.18), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto container-px grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-5">Software Developer · Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.08]">
            {profile.name}
          </h1>
          <div className="mt-4 h-9 text-lg sm:text-xl font-mono text-teal-signal">
            <TypingRoles roles={profile.roles} />
          </div>
          <p className="mt-6 text-base sm:text-lg text-ink/70 dark:text-paper/70 leading-relaxed max-w-xl">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={profile.resumeFile} download className="btn-primary">
              <FiDownload size={16} /> Download Resume
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              <FiMail size={16} /> Contact Me
            </button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {socialIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-paper-border dark:border-ink-border flex items-center justify-center hover:border-amber-signal hover:text-amber-signal hover:-translate-y-0.5 transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-4 gap-4 max-w-lg">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-amber-signal">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="font-mono text-[11px] uppercase tracking-wide text-ink/50 dark:text-paper/50 mt-1 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-xl border border-ink-border bg-[#0D1626] shadow-2xl shadow-black/20 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111C30] border-b border-ink-border">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-[11px] text-paper/40 flex items-center gap-1.5">
                <FiCode size={12} /> mounish@dev: ~/portfolio
              </span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed text-paper/85">
              <p><span className="text-teal-signal">const</span> <span className="text-amber-signal">developer</span> = {'{'}</p>
              <p className="pl-4">name: <span className="text-teal-signal">'Mounish R'</span>,</p>
              <p className="pl-4">role: <span className="text-teal-signal">'Software Developer'</span>,</p>
              <p className="pl-4">stack: [<span className="text-teal-signal">'Java'</span>, <span className="text-teal-signal">'Spring Boot'</span>, <span className="text-teal-signal">'React'</span>],</p>
              <p className="pl-4">focus: <span className="text-teal-signal">'Scalable backend systems'</span>,</p>
              <p className="pl-4">problemsSolved: <span className="text-amber-signal">700</span>+,</p>
              <p className="pl-4">
                available: <span className="text-amber-signal">true</span>,
              </p>
              <p>{'}'}</p>
              <p className="mt-4 text-paper/40"># run ./build_something_great.sh</p>
              <p className="flex items-center gap-1">
                <span className="text-amber-signal">$</span>
                <span className="w-2 h-4 bg-amber-signal inline-block animate-blink" />
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 card px-4 py-3 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-teal-signal animate-pulse" />
            <span className="font-mono text-xs">Open to opportunities</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
