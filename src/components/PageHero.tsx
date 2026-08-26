import { useId, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

type PageHeroProps = {
  title: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundSize?: string
  mobileBackgroundPosition?: string
  mobileBackgroundSize?: string
  className?: string
}

export default function PageHero({
  title,
  backgroundImage,
  backgroundPosition = 'center',
  backgroundSize = 'cover',
  mobileBackgroundPosition,
  mobileBackgroundSize,
  className = '',
}: PageHeroProps): ReactNode {
  const mobileOverrideId = useId().replace(/:/g, '')

  return (
    <header
      className={`relative flex min-h-[50vh] items-center justify-center ${mobileOverrideId} ${
        backgroundImage ? '' : 'bg-pbe-blue-tint'
      } ${className}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundPosition, backgroundSize, backgroundRepeat: 'no-repeat' } : undefined}
    >
      {backgroundImage && (mobileBackgroundPosition || mobileBackgroundSize) && (
        <style>{`
          @media (max-width: 767px) {
            .${mobileOverrideId} {
              ${mobileBackgroundPosition ? `background-position: ${mobileBackgroundPosition} !important;` : ''}
              ${mobileBackgroundSize ? `background-size: ${mobileBackgroundSize} !important;` : ''}
            }
          }
        `}</style>
      )}
      {backgroundImage && <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />}
      <Navbar />
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`relative px-6 pt-24 pb-10 text-center font-heading text-4xl md:text-5xl ${
          backgroundImage ? 'text-white' : ''
        }`}
      >
        {title}
      </motion.h1>
    </header>
  )
}
