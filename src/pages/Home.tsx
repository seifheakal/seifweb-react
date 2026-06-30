import { ArrowDown, Mail, Sparkles, Trophy, GraduationCap, Cloud, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import { ProfileAvatar } from '@/components/ui/ProfileAvatar'
import { TypingSubtitle } from '@/components/ui/TypingSubtitle'
import { CategoryChips } from '@/components/ui/CategoryChips'
import { education, certifications } from '@/data/education'
import { profile } from '@/data/profile'
import { skillGroups } from '@/data/skills'

const roleWords = [
  'Computer Engineering Graduate',
  'Full Stack Developer',
  'AI & Computer Vision Engineer',
  'Cloud & Platform Engineer',
  'Digital Hardware Enthusiast',
]

const highlights = [
  {
    icon: Trophy,
    title: 'Top 3 Graduation Project',
    description:
      'ATHAR ranked among the Top 3 Computer Engineering graduation projects at Cairo University.',
  },
  {
    icon: FileText,
    title: 'Research Paper in Preparation',
    description:
      'State-of-the-art vehicle re-identification research based on the ATHAR project.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Platform',
    description:
      'Designed and deployed a production-style AWS microservices platform using Kubernetes.',
  },
  {
    icon: GraduationCap,
    title: 'McKinsey.org Forward Graduate',
    description:
      'Completed McKinsey.org Forward, strengthening leadership, communication, and problem-solving skills.',
  },
]

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-hero-gradient"
        />

        <div className="container-page pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow mb-4">
                Portfolio · {profile.location}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-brand-red-400 to-brand-red-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
                .
              </h1>

              <p className="mt-5 text-lg sm:text-xl text-zinc-300 max-w-2xl">
                <span className="text-zinc-100">A </span>
                <TypingSubtitle words={roleWords} />
                <span className="ml-1">👋</span>
              </p>

              <p className="mt-5 max-w-2xl text-zinc-400 leading-relaxed">
                {profile.about}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary">
                  <Sparkles size={16} />
                  See my work
                </Link>

                <Link to="/experience" className="btn-ghost">
                  Experience
                </Link>

                <a
                  href={profile.links.email}
                  className="btn-ghost"
                  aria-label="Email Seif"
                >
                  <Mail size={16} />
                  Contact
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10"
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10"
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={profile.links.email}
                  aria-label="Email"
                  className="p-2.5 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 border border-white/10"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <ProfileAvatar
                src={profile.avatar}
                alt={profile.name}
                size={280}
              />
            </motion.div>
          </div>

          <div className="mt-12 flex items-center gap-2 text-sm text-zinc-500">
            <ArrowDown size={14} className="animate-bounce" />
            <span>Scroll to learn more</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section
        id="highlights"
        eyebrow="Highlights"
        title="Recent achievements"
        description="A few milestones that best represent my recent work and professional growth."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card p-6 flex gap-4 items-start"
              >
                <div className="rounded-xl bg-brand-red-500/10 border border-brand-red-500/20 p-3">
                  <Icon
                    size={22}
                    className="text-brand-red-400"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        eyebrow="Education"
        title="Academic background"
        description="University studies plus certifications and professional development."
      >
        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-6"
          >
            <p className="eyebrow">University</p>

            {education.map((e) => (
              <div
                key={e.id}
                className="mt-2"
              >
                <h3 className="text-lg font-semibold text-white">
                  {e.school}
                </h3>

                <p className="text-sm text-zinc-300 mt-1">
                  {e.degree}
                </p>

                {e.period && (
                  <p className="text-xs text-zinc-500 mt-2">
                    {e.period}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="card p-6"
          >
            <p className="eyebrow">
              Certifications & Professional Development
            </p>

            <ul className="mt-3 divide-y divide-white/5">
              {certifications.map((c) => (
                <li
                  key={c.id}
                  className="py-3 first:pt-0 last:pb-0 flex justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-medium text-white">
                      {c.degree}
                    </p>

                    <p className="text-xs text-zinc-500">
                      {c.school}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="Toolbox"
        title="What I work with"
        description={`A snapshot of languages, frameworks, tools, and platforms I've used across professional work, research, and personal projects. (${skillGroups.reduce(
          (n, g) => n + g.skills.length,
          0,
        )} skills across ${skillGroups.length} categories.)`}
      >
        <CategoryChips />
      </Section>
    </>
  )
}