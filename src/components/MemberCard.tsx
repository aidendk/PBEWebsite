import { motion } from 'framer-motion'
import type { Member } from '../data/members'

type MemberCardProps = {
  member: Member
  priority?: boolean
}

export default function MemberCard({ member, priority = false }: MemberCardProps) {
  return (
    <motion.div
      className="w-[200px] text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img
          src={member.image}
          alt={member.name}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className="w-full rounded-md object-cover"
        />
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="absolute bottom-2 left-2 h-7 w-7"
          >
            <img src="/PBEimages/mail.png" alt="Mail" loading="lazy" decoding="async" />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener"
            className="absolute bottom-2 right-2 h-7 w-7"
          >
            <img src="/PBEimages/linkedin.png" alt="LinkedIn" loading="lazy" decoding="async" />
          </a>
        )}
      </div>
      <div className="px-2 py-2 text-white">
        <h3 className="mt-2 mb-1 text-lg">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
      </div>
    </motion.div>
  )
}
