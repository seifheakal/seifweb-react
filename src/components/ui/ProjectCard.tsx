import { ArrowUpRight, ExternalLink, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/ui/brand-icons'
import type { Project } from '@/data/projects'

const categoryLabels: Record<Project['category'], string> = {
  ai: 'AI',
  cloud: 'Cloud',
  fullstack: 'Full Stack',
  data: 'Data Engineering',
  systems: 'Systems Programming',
  hardware: 'Hardware',
}

const statusStyles: Record<NonNullable<Project['status']>, string> = {
  Research: 'border-violet-400/30 bg-violet-400/10 text-violet-200',
  Completed: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  'In Progress': 'border-amber-400/30 bg-amber-400/10 text-amber-200',
}

export function ProjectCard({
  project,
  showFeaturedBadge = true,
}: {
  project: Project
  showFeaturedBadge?: boolean
}) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className="card group flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-[1.65rem]">
              {project.title}
            </h3>

            {showFeaturedBadge && project.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red-500/25 bg-brand-red-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-red-100">
                <Star size={12} className="fill-brand-red-300 text-brand-red-300" />
                Featured
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
              {categoryLabels[project.category]}
            </span>

            {project.status && (
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-zinc-400 sm:text-[0.96rem]">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition-colors group-hover:border-white/15 group-hover:bg-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <GithubIcon size={16} />
          GitHub
          <ArrowUpRight size={14} />
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  )
}