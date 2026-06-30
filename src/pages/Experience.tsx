import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { TabGroup } from '@/components/ui/TabGroup'
import { TimelineEntry } from '@/components/ui/TimelineEntry'
import {
  formalExperience,
  extrasExperience,
  type ExperienceEntry,
} from '@/data/experience'

type Tab = 'formal' | 'extras'

const tabs: { id: Tab; label: string }[] = [
  { id: 'formal', label: 'Formal' },
  { id: 'extras', label: 'Extras' },
]

export function Experience() {
  const [tab, setTab] = useState<Tab>('formal')
  const list: ExperienceEntry[] = tab === 'formal' ? formalExperience : extrasExperience

  return (
    <>
      <Section
        eyebrow="Experience"
        title="Where I've worked & learned"
        description="Internships, formal roles, and extracurricular activities that shaped how I build."
      >
        <div className="flex justify-center sm:justify-start">
          <TabGroup tabs={tabs} active={tab} onChange={setTab} />
        </div>
      </Section>

      <div className="container-page pb-24">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute left-[10px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-red-500/40 via-white/10 to-transparent"
          />
          <div className="space-y-10 sm:space-y-12">
            {list.map((entry, i) => (
              <TimelineEntry key={entry.id} entry={entry} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  )
}
