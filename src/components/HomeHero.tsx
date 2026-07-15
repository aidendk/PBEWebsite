import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './Navbar'

const HERO_VIDEO_SRC = 'https://pub-64c711b6a1544969ac30fd57f24d01a8.r2.dev/pbesitevid.mp4'
const HERO_POSTER = '/PBEimages/pbeZachSmaller-min.jpg'

type HomeHeroProps = {
  startVideo?: boolean
}

export default function HomeHero({ startVideo = true }: HomeHeroProps) {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (prefersReducedMotion || !startVideo) return
    videoRef.current?.play().catch(() => {})
  }, [prefersReducedMotion, startVideo])

  return (
    <section className="relative isolate flex min-h-[100vh] items-center overflow-hidden bg-pbe-ink text-white">
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER}
          loop
          muted
          playsInline
          aria-hidden="true"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_POSTER})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-pbe-ink" aria-hidden="true" />

      <Navbar />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans text-sm font-semibold tracking-[0.3em] text-pbe-blue uppercase"
        >
          Texas A&amp;M University
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="mt-4 font-heading text-5xl leading-tight sm:text-6xl md:text-7xl"
        >
          Professional Brotherhood
          <br className="hidden sm:block" /> of Engineers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl"
        >
          A Brotherhood of Engineers built on academics, professionalism, and service &mdash; built for engineers who want more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/recruitment"
            className="rounded-full bg-pbe-blue px-8 py-3 text-base font-semibold text-pbe-ink shadow-lg shadow-pbe-blue/20 transition hover:scale-105 hover:shadow-pbe-blue/30"
          >
            Join PBE
          </Link>
          <Link
            to="/about"
            className="rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#highlights"
        aria-label="Scroll to learn more about PBE"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  )
}
