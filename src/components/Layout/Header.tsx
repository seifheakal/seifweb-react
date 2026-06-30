import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-semibold tracking-tight text-white text-base sm:text-lg ring-red-focus rounded-md"
        >
          <span className="text-brand-red-500">◆</span> Seif Tamer Heakal
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'px-3 py-1.5 rounded-full text-sm transition-colors ring-red-focus',
                  isActive
                    ? 'text-white bg-white/5'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/5 ring-red-focus"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-surface/95 backdrop-blur-md">
          <nav className="container-page py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'px-3 py-2 rounded-lg text-sm transition-colors',
                    isActive
                      ? 'text-white bg-white/5'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}