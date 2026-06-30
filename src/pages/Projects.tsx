import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, Cloud, Filter } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects, type Project } from '@/data/projects'

type ProjectFilter = 'all' | Project['category']

const filters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'data', label: 'Data' },
  { id: 'systems', label: 'Systems' },
  { id: 'hardware', label: 'Hardware' },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const featuredProjects = useMemo(
    () => projects.filter((project) => project.featured),
    [],
  )

  const otherProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [],
  )

  const filteredOtherProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? otherProjects
        : otherProjects.filter((project) => project.category === activeFilter),
    [activeFilter, otherProjects],
  )

  return (
    <>
      <Section
        eyebrow="Projects"
        title="Selected work"
        description="A modern engineering portfolio that foregrounds strong product work, research, and systems thinking."
      />

      <div className="container-page pb-20">
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card relative overflow-hidden p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red-500/10 via-transparent to-white/5" />
          <div className="relative space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-500/20 bg-brand-red-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-brand-red-100">
              <Sparkles size={12} />
              Portfolio Highlight
            </div>

            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Built for scale, clarity, and real engineering impact.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                <span className="block">🏆 Top 3 Graduation Project - Faculty of Engineering, Cairo University</span>
                <span className="block">📄 Research Paper in Preparation</span>
                <span className="block">☁️ Cloud-Native AWS Microservices Platform</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Cloud size={14} />
                Cloud-native architecture
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Filter size={14} />
                Premium engineering portfolio
              </span>
            </div>
          </div>
        </motion.section>

        <section className="mt-14 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red-300/80">
                Highlights
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Featured Projects
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div className="max-w-3xl space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-red-300/80">
              Additional Work
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Other Projects
            </h2>
            <p className="text-sm leading-7 text-zinc-400 sm:text-base">
              Additional projects showcasing experience across AI, cloud computing, systems programming, hardware, databases, networking, and software engineering.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const active = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? 'border-brand-red-500/30 bg-brand-red-500/10 text-brand-red-100 shadow-[0_0_0_1px_rgba(239,68,68,0.1)]'
                      : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeFilter}
              layout
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {filteredOtherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <ProjectCard project={project} showFeaturedBadge={false} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredOtherProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-400"
            >
              No projects match this filter.
            </motion.p>
          )}
        </section>
      </div>
    </>
  )
}
