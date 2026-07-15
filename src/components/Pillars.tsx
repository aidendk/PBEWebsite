import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Academics',
    description: 'Study rooms, review sessions, and mentorship that help every brother thrive in the classroom.',
  },
  {
    title: 'Professionalism',
    description: 'Bi-weekly speaker sessions with industry leaders and hands-on networking opportunities.',
  },
  {
    title: 'Service',
    description: 'Partnering with Habitat for Humanity and our community on builds, cleanups, and outreach.',
  },
  {
    title: 'Brotherhood',
    description: 'Mixers, cookouts, and sporting events that build friendships beyond graduation.',
  },
]

export default function Pillars() {
  return (
    <section id="highlights" className="bg-pbe-ink px-6 py-20 text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center font-heading text-3xl text-pbe-blue md:text-4xl"
        >
          What We Stand For
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-pbe-blue/50 hover:bg-white/10"
            >
              <h3 className="font-heading text-xl text-pbe-blue">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
