import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>
          © {year} {profile.name}. Built with React + Vite.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.links.email}
            aria-label="Email"
            className="p-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
