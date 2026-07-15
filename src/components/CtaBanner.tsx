import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pbe-ink via-pbe-ink-soft to-black px-6 py-20 text-center text-white md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <h2 className="font-heading text-3xl md:text-4xl">Ready to join?</h2>
        <p className="mt-4 text-lg text-white/80">
          Recruitment opens every semester &mdash; come meet us and see what we're about.
        </p>
        <Link
          to="/recruitment"
          className="mt-8 inline-block rounded-full bg-pbe-blue px-8 py-3 text-base font-semibold text-pbe-ink shadow-lg shadow-pbe-blue/20 transition hover:scale-105"
        >
          Get Involved
        </Link>
      </motion.div>
    </section>
  )
}
