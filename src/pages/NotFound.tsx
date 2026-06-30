import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-zinc-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn-ghost mt-8 inline-flex"
      >
        <ArrowLeft size={16} />
        Back home
      </Link>
    </div>
  )
}
