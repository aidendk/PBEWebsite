import { motion } from 'framer-motion'
import ImageCarousel, { type CarouselImage } from './ImageCarousel'

type InfoSectionProps = {
  title: string
  image?: string
  imageAlt?: string
  images?: CarouselImage[]
  children: React.ReactNode
  reverse?: boolean
  noDivider?: boolean
}

export default function InfoSection({
  title,
  image,
  imageAlt = '',
  images,
  children,
  reverse = false,
  noDivider = false,
}: InfoSectionProps) {
  const media =
    images && images.length > 0 ? (
      <ImageCarousel images={images} />
    ) : image ? (
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        className="h-72 w-full rounded-lg border border-white/10 object-cover md:h-[350px] md:w-[500px] md:flex-shrink-0"
      />
    ) : null

  return (
    <motion.section
      className={`pt-16 ${noDivider ? 'mt-0' : 'mt-16 border-t border-white/10'} first:mt-0 first:border-t-0 first:pt-0`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="mb-4 text-left font-heading text-3xl text-pbe-blue">{title}</h2>
      <div className={`flex flex-col gap-6 md:items-start md:gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        {media}
        <p className="text-lg leading-relaxed text-white/90">{children}</p>
      </div>
    </motion.section>
  )
}
