import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Phase = 'first' | 'second' | 'done'

type IntroSplashProps = {
  onFadeStart?: () => void
}

export default function IntroSplash({ onFadeStart }: IntroSplashProps) {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<Phase>(prefersReducedMotion ? 'done' : 'first')

  useEffect(() => {
    if (prefersReducedMotion) {
      onFadeStart?.()
      return
    }
    const toSecond = setTimeout(() => setPhase('second'), 900)
    const toDone = setTimeout(() => {
      setPhase('done')
      onFadeStart?.()
    }, 2000)
    return () => {
      clearTimeout(toSecond)
      clearTimeout(toDone)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion])

  useEffect(() => {
    if (phase === 'done') return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [phase])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          role="presentation"
          aria-hidden="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col gap-2 px-6 md:gap-4">
            {(phase === 'first' || phase === 'second') && (
              <motion.h1
                initial={{ opacity: 0, y: 24, scale: 0.92, x: -32 }}
                animate={{ opacity: 1, scale: 1, x: -32, y: phase === 'second' ? -14 : 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center gap-2 text-center font-display text-6xl tracking-wide text-white sm:gap-3 sm:text-7xl md:gap-4 md:text-8xl"
              >
                <span>Why</span>
                <img
                  src="/PBEimages/PBELogoCropped.png"
                  alt="PBE"
                  width={481}
                  height={162}
                  className="h-12 w-auto max-w-none shrink-0 sm:h-16 md:h-24"
                />
                <span>?</span>
              </motion.h1>
            )}
            {phase === 'second' && (
              <motion.h1
                initial={{ opacity: 0, y: 24, scale: 0.92, x: 64 }}
                animate={{ opacity: 1, y: 0, scale: 1, x: 64 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-center font-display text-6xl tracking-wide text-pbe-blue sm:text-7xl md:text-8xl"
              >
                Why not?
              </motion.h1>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
