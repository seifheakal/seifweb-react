import { motion } from 'framer-motion'
import type { ExperienceEntry } from '@/data/experience'

export function TimelineEntry({
  entry,
  index,
}: {
  entry: ExperienceEntry
  index: number
}) {
  const isLeft = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
      className="relative md:grid md:grid-cols-2 md:gap-12"
    >
      <div className="hidden md:block" />
      <div
        className={`relative pl-6 md:pl-0 ${
          isLeft ? 'md:col-start-1 md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'
        }`}
      >
        <span
          aria-hidden
          className="absolute left-0 top-2 md:left-auto md:top-2 h-3 w-3 rounded-full bg-brand-red-500 ring-4 ring-brand-red-500/15"
          style={
            isLeft
              ? { right: -6 }
              : undefined
          }
        />
        <div className="card p-5 hover:border-brand-red-500/30 transition-colors">
          <p className="text-xs uppercase tracking-wider text-brand-red-400 font-medium">
            {entry.organization}
          </p>
          <h3 className="mt-1 text-base sm:text-lg font-semibold text-white">
            {entry.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            {entry.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
