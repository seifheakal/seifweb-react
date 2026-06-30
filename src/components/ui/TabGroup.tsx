import { cn } from '@/lib/cn'

export function TabGroup<T extends string>({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: T; label: string }[]
  active: T
  onChange: (id: T) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="Section tabs"
      className="inline-flex p-1 rounded-full bg-surface-raised/80 border border-white/10 shadow-card"
    >
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative px-4 sm:px-5 py-2 text-sm font-medium rounded-full transition-colors',
              isActive
                ? 'text-white'
                : 'text-zinc-400 hover:text-white',
            )}
          >
            {isActive && (
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-brand-red-500 shadow-glow-red"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
