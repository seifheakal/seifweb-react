import { motion } from 'framer-motion'
import { skillGroups } from '@/data/skills'

export function CategoryChips() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {skillGroups.map((group, gi) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: gi * 0.05 }}
          className="card p-5"
        >
          <p className="eyebrow mb-3">{group.category}</p>
          <div className="flex flex-wrap gap-1.5">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs text-zinc-200 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
