import { useEffect, useState } from 'react'

export default function TypingRoles({ roles, typingSpeed = 65, pause = 1400 }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        )
      }, deleting ? typingSpeed / 2 : typingSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex, roles, typingSpeed, pause])

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="w-[2px] h-[1em] bg-amber-signal ml-1 animate-blink" />
    </span>
  )
}
