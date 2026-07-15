import { useCallback, useState } from 'react'

export type CarouselImage = {
  src: string
  alt: string
}

type ImageCarouselProps = {
  images: CarouselImage[]
  className?: string
}

export default function ImageCarousel({ images, className = '' }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const goTo = useCallback(
    (next: number) => setIndex((next + total) % total),
    [total]
  )

  if (total === 0) return null

  return (
    <div
      className={`relative h-[300px] w-full overflow-hidden rounded-lg border border-white/10 bg-pbe-ink-soft md:h-[380px] md:w-[540px] md:flex-shrink-0 lg:h-[420px] lg:w-[600px] ${className}`}
    >
      {/* All images stay in the DOM so they're preloaded — no black flash on switch */}
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${i === index ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-pbe-blue hover:text-pbe-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next image"
            className="absolute top-1/2 right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition hover:bg-pbe-blue hover:text-pbe-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {images.map((image, dotIndex) => (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(dotIndex)}
                aria-label={`Go to image ${dotIndex + 1}`}
                aria-current={dotIndex === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index ? 'w-6 bg-pbe-blue' : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
