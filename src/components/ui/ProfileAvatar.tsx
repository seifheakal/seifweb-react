export function ProfileAvatar({
  src,
  alt,
  size = 200,
}: {
  src: string
  alt: string
  size?: number
}) {
  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full bg-brand-red-500/20 blur-2xl"
        aria-hidden
      />
      <div className="relative h-full w-full rounded-full p-[3px] bg-gradient-to-br from-brand-red-500 via-brand-red-700 to-brand-red-500">
        <div className="h-full w-full rounded-full overflow-hidden bg-surface">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
