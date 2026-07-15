import { useState } from 'react'
import { motion } from 'framer-motion'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { placements, groupByLocation, featuredCompanies } from '../data/placements'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const locations = groupByLocation(placements)

// Map company name → clearbit logo domain
const logoDomains: Record<string, string> = {
  'NASA': 'nasa.gov',
  'Tesla': 'tesla.com',
  'Boeing': 'boeing.com',
  'Samsung': 'samsung.com',
  'Lockheed Martin': 'lockheedmartin.com',
  'ExxonMobil': 'exxonmobil.com',
  'Shell': 'shell.com',
  'Microsoft': 'microsoft.com',
  'Texas Instruments': 'ti.com',
  'Dell Technologies': 'dell.com',
  'JPMorganChase': 'jpmorganchase.com',
  'Oracle': 'oracle.com',
  'Procter & Gamble': 'pg.com',
  'Figma': 'figma.com',
  'MongoDB': 'mongodb.com',
  'Baker Hughes': 'bakerhughes.com',
  'xAI': 'x.ai',
}

// Duplicate items for seamless infinite loop
const marqueeItems = [...featuredCompanies, ...featuredCompanies]

type Tooltip = {
  loc: (typeof locations)[number]
  x: number
  y: number
}

export default function MemberMap() {
  const [tip, setTip] = useState<Tooltip | null>(null)

  return (
    <section id="where-we-work" className="bg-pbe-ink-soft px-6 py-20 text-white md:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center font-heading text-3xl text-pbe-blue md:text-4xl"
        >
          Where We Work
        </motion.h2>

        {/* Logo marquee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mt-10 overflow-hidden"
        >
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-pbe-ink-soft to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-pbe-ink-soft to-transparent" />

          <div className="animate-marquee flex w-max gap-14">
            {marqueeItems.map((company, i) => {
              const domain = logoDomains[company]
              return (
                <div
                  key={`${company}-${i}`}
                  className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 opacity-85 transition hover:opacity-100"
                  title={company}
                >
                  {domain ? (
                    <img
                      src={`https://img.logo.dev/${domain}?token=pk_NwEd5yeoRcagIz1WAQVUew&retina=true`}
                      alt={company}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const fallback = target.nextElementSibling as HTMLElement | null
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span
                    className="text-center text-xs font-medium text-pbe-ink"
                    style={{ display: domain ? 'none' : 'block' }}
                  >
                    {company}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <ComposableMap projection="geoAlbersUsa" width={980} height={551} style={{ width: '100%', height: 'auto' }}>
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#11182280"
                    stroke="#ffffff20"
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
            {locations.map((loc) => (
              <Marker
                key={loc.key}
                coordinates={[loc.lng, loc.lat]}
                onMouseEnter={(e) => setTip({ loc, x: e.clientX, y: e.clientY })}
                onMouseMove={(e) => setTip((t) => (t ? { ...t, x: e.clientX, y: e.clientY } : t))}
                onMouseLeave={() => setTip(null)}
                onClick={(e) => setTip({ loc, x: e.clientX, y: e.clientY })}
                tabIndex={0}
                aria-label={`${loc.companies.length} compan${loc.companies.length === 1 ? 'y' : 'ies'} in ${loc.city}, ${loc.state}`}
                onFocus={(e) => setTip({ loc, x: e.currentTarget.getBoundingClientRect().x, y: e.currentTarget.getBoundingClientRect().y })}
                onBlur={() => setTip(null)}
              >
                <circle r={6} fill="#76cee6" stroke="#05080d" strokeWidth={1.5} style={{ cursor: 'pointer' }} />
              </Marker>
            ))}
          </ComposableMap>

          {tip && (
            <div
              role="tooltip"
              style={{ left: tip.x + 12, top: tip.y + 12 }}
              className="pointer-events-none fixed z-50 max-w-64 rounded-xl border border-white/10 bg-pbe-ink p-3 text-sm shadow-lg"
            >
              <strong className="text-pbe-blue">
                {tip.loc.city}, {tip.loc.state}
              </strong>
              <ul className="mt-1.5 list-disc pl-4 text-white/80">
                {tip.loc.companies.map((company) => (
                  <li key={company}>{company}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
