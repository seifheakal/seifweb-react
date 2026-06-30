import { useEffect, useState } from 'react'

export function TypingSubtitle({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index] ?? ''
    const done = !deleting && text === current
    const fullyDeleted = deleting && text === ''

    if (done) {
      const t = setTimeout(() => setDeleting(true), 1400)
      return () => clearTimeout(t)
    }
    if (fullyDeleted) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const speed = deleting ? 35 : 65
    const t = setTimeout(() => {
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return (
    <span className="inline-flex items-center">
      <span>{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-5 w-[2px] bg-brand-red-500 animate-blink"
      />
    </span>
  )
}
