import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  children?: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('py-16 sm:py-20', className)}>
      <div className="container-page">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10 sm:mb-12"
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && (
              <p className="mt-3 max-w-2xl text-zinc-400">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
