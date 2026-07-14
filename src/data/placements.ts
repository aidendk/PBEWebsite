// Member placements. One entry per company/location; member name is optional
// since we don't track a roster mapping yet. Where a specific office city was
// given, that city is used; otherwise the company's HQ city is used (best
// available research — verify/adjust as needed).
export type Placement = {
  member?: string
  company: string
  city: string
  state: string
  lat: number
  lng: number
}

export const placements: Placement[] = [
  { company: 'Frito-Lay', city: 'Plano', state: 'TX', lat: 33.02, lng: -96.698 },
  { company: 'Samsung', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Consolidated Pipe and Supply Co. Inc', city: 'Birmingham', state: 'AL', lat: 33.52, lng: -86.802 },
  { company: 'Hoffman Construction Company', city: 'Portland', state: 'OR', lat: 45.515, lng: -122.679 },
  { company: 'PepsiCo', city: 'Purchase', state: 'NY', lat: 41.038, lng: -73.706 },
  { company: 'xAI', city: 'San Francisco', state: 'CA', lat: 37.775, lng: -122.419 },
  { company: 'Tesla', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Siemens Healthineers', city: 'Malvern', state: 'PA', lat: 40.036, lng: -75.515 },
  { company: 'Dell Technologies', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Kiewit', city: 'Omaha', state: 'NE', lat: 41.257, lng: -95.995 },
  { company: 'Marathon Petroleum Corporation', city: 'Findlay', state: 'OH', lat: 41.044, lng: -83.649 },
  { company: 'Kinder Morgan Inc.', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Loenbro', city: 'Black Eagle', state: 'MT', lat: 47.514, lng: -111.288 },
  { company: 'Pinnacle Structural Engineers', city: 'Frisco', state: 'TX', lat: 33.15, lng: -96.824 },
  { company: 'Weatherford', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Wabtec Corporation', city: 'Pittsburgh', state: 'PA', lat: 40.44, lng: -79.996 },
  { company: 'SET Environmental Inc', city: 'Romeoville', state: 'IL', lat: 41.642, lng: -88.09 },
  { company: 'WSP in the U.S.', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'Bryan Texas Utilities', city: 'Bryan', state: 'TX', lat: 30.674, lng: -96.37 },
  { company: 'Bell Flight', city: 'Fort Worth', state: 'TX', lat: 32.755, lng: -97.33 },
  { company: 'Textron Aviation', city: 'Wichita', state: 'KS', lat: 37.688, lng: -97.336 },
  { company: 'Textron Systems', city: 'Hunt Valley', state: 'MD', lat: 39.5, lng: -76.644 },
  { company: 'Matador Resources Company', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'Covestro', city: 'Pittsburgh', state: 'PA', lat: 40.44, lng: -79.996 },
  { company: 'Carollo Engineers', city: 'Walnut Creek', state: 'CA', lat: 37.901, lng: -122.065 },
  { company: 'Tenaris Bay City', city: 'Bay City', state: 'TX', lat: 28.98, lng: -95.967 },
  { company: 'LJA', city: 'Katy', state: 'TX', lat: 29.786, lng: -95.824 },
  { company: 'Targa Resources', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Abbott', city: 'Plano', state: 'TX', lat: 33.02, lng: -96.698 },
  { company: 'FlightSafety International', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'L3Harris Technologies', city: 'Melbourne', state: 'FL', lat: 28.083, lng: -80.608 },
  { company: 'Texas Department of Transportation', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Webber', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'G&C Optimization', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Southwestern PTS', city: 'Fort Worth', state: 'TX', lat: 32.755, lng: -97.33 },
  { company: 'OneSubsea', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Baker Hughes', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Dover Precision Components', city: 'The Woodlands', state: 'TX', lat: 30.158, lng: -95.489 },
  { company: 'Tally Energy Services', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'AbbVie', city: 'Chicago', state: 'IL', lat: 41.878, lng: -87.63 },
  { company: 'Nouryon', city: 'Chicago', state: 'IL', lat: 41.878, lng: -87.63 },
  { company: 'Epic', city: 'Verona', state: 'WI', lat: 42.998, lng: -89.534 },
  { company: 'Siemens', city: 'Washington', state: 'DC', lat: 38.907, lng: -77.037 },
  { company: 'Ingersoll Rand', city: 'Davidson', state: 'NC', lat: 35.498, lng: -80.825 },
  { company: 'Lockheed Martin', city: 'Fort Worth', state: 'TX', lat: 32.755, lng: -97.33 },
  { company: 'Raytheon', city: 'Tucson', state: 'AZ', lat: 32.222, lng: -110.926 },
  { company: 'Pariveda', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'The J.M. Smucker Co.', city: 'Orrville', state: 'OH', lat: 40.845, lng: -81.764 },
  { company: 'Intuitive Machines', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Los Alamos National Laboratory', city: 'Los Alamos', state: 'NM', lat: 35.888, lng: -106.301 },
  { company: 'ERCOT', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Leeward Renewable Energy', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'Texas Instruments', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'Deloitte Digital', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'Hyland', city: 'Westlake', state: 'OH', lat: 41.452, lng: -81.918 },
  { company: 'Green Energy RX LLC', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Westwood Professional Services', city: 'Eden Prairie', state: 'MN', lat: 44.855, lng: -93.47 },
  { company: 'Procter & Gamble', city: 'Cape Girardeau', state: 'MO', lat: 37.306, lng: -89.518 },
  { company: 'Holcim', city: 'Addison', state: 'TX', lat: 32.961, lng: -96.829 },
  { company: 'Tracey Technologies', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Shell', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Capitol Aggregates Inc', city: 'San Antonio', state: 'TX', lat: 29.424, lng: -98.494 },
  { company: 'MongoDB', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'Evolv Technologies', city: 'Waltham', state: 'MA', lat: 42.376, lng: -71.236 },
  { company: 'Burns & McDonnell', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Boston Consulting Group', city: 'Boston', state: 'MA', lat: 42.36, lng: -71.058 },
  { company: 'Dow', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'BMW Manufacturing Co. LLC', city: 'Spartanburg', state: 'SC', lat: 34.949, lng: -81.932 },
  { company: 'Microsoft', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Transocean', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Wolverine Oilfield Technologies', city: 'Odessa', state: 'TX', lat: 31.846, lng: -102.368 },
  { company: 'Huntsman Corporation', city: 'The Woodlands', state: 'TX', lat: 30.158, lng: -95.489 },
  { company: 'Wild Well', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Diamondback Energy', city: 'Midland', state: 'TX', lat: 31.997, lng: -102.078 },
  { company: 'Endeavor Energy Resources', city: 'Midland', state: 'TX', lat: 31.997, lng: -102.078 },
  { company: 'ProFrac Services', city: 'Odessa', state: 'TX', lat: 31.846, lng: -102.368 },
  { company: 'Chevron Phillips Chemical Company', city: 'The Woodlands', state: 'TX', lat: 30.158, lng: -95.489 },
  { company: 'NRG Energy', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Kimley-Horn', city: 'Phoenix', state: 'AZ', lat: 33.448, lng: -112.074 },
  { company: 'Schneider Electric', city: 'Andover', state: 'MA', lat: 42.658, lng: -71.137 },
  { company: 'LJB Inc.', city: 'Miamisburg', state: 'OH', lat: 39.644, lng: -84.286 },
  { company: 'CED', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'NASA', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Bye Aerospace', city: 'Denver', state: 'CO', lat: 39.739, lng: -104.99 },
  { company: 'Horizon Matrix LLC', city: 'Nashville', state: 'TN', lat: 36.162, lng: -86.781 },
  { company: 'TSMC', city: 'Phoenix', state: 'AZ', lat: 33.448, lng: -112.074 },
  { company: 'Sabre Corporation', city: 'Southlake', state: 'TX', lat: 32.941, lng: -97.134 },
  { company: 'Prime Controls', city: 'Lewisville', state: 'TX', lat: 33.046, lng: -96.994 },
  { company: 'Accenture', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Leidos', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Davey Resource Group', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'TNP', city: 'Fort Worth', state: 'TX', lat: 32.755, lng: -97.33 },
  { company: 'Moore Control Systems', city: 'Katy', state: 'TX', lat: 29.786, lng: -95.824 },
  { company: 'Labatt Food Service', city: 'San Antonio', state: 'TX', lat: 29.424, lng: -98.494 },
  { company: 'T-Mobile', city: 'Frisco', state: 'TX', lat: 33.15, lng: -96.824 },
  { company: 'Superior Industries Inc', city: 'Norcross', state: 'GA', lat: 33.94, lng: -84.213 },
  { company: 'American Honda Motor Company', city: 'Atlanta', state: 'GA', lat: 33.749, lng: -84.388 },
  { company: 'Kimley-Horn', city: 'San Antonio', state: 'TX', lat: 29.424, lng: -98.494 },
  { company: 'Cirrus Logic', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'HMT LLC', city: 'Tomball', state: 'TX', lat: 30.097, lng: -95.616 },
  { company: 'SolarWinds', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'GHX Industrial', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'KSA', city: 'Longview', state: 'TX', lat: 32.5, lng: -94.74 },
  { company: 'JPMorganChase', city: 'Plano', state: 'TX', lat: 33.02, lng: -96.698 },
  { company: 'Citi', city: 'Irving', state: 'TX', lat: 32.814, lng: -96.949 },
  { company: 'Figma', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'Paycom', city: 'Oklahoma City', state: 'OK', lat: 35.467, lng: -97.516 },
  { company: 'Kimberly-Clark', city: 'Paris', state: 'TX', lat: 33.66, lng: -95.555 },
  { company: 'Johnson Controls', city: 'Milwaukee', state: 'WI', lat: 43.039, lng: -87.906 },
  { company: 'Foxconn', city: 'Mount Pleasant', state: 'WI', lat: 42.717, lng: -87.884 },
  { company: 'Smith & Associates', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Hydraquip Inc', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'KPMG US', city: 'Atlanta', state: 'GA', lat: 33.749, lng: -84.388 },
  { company: 'KPMG US', city: 'Chicago', state: 'IL', lat: 41.878, lng: -87.63 },
  { company: 'Emerson', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'National Instruments', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Atlas Energy Solutions', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'Valero', city: 'Memphis', state: 'TN', lat: 35.149, lng: -90.049 },
  { company: 'Valero', city: 'San Antonio', state: 'TX', lat: 29.424, lng: -98.494 },
  { company: 'Flint Hills Resources', city: 'Corpus Christi', state: 'TX', lat: 27.8, lng: -97.396 },
  { company: 'Arcadis', city: 'Highlands Ranch', state: 'CO', lat: 39.553, lng: -104.97 },
  { company: 'Boeing', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Calpine', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Sulzer', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'PCS Software', city: 'Coppell', state: 'TX', lat: 32.955, lng: -97.015 },
  { company: 'Tom Green & Company Engineers', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'ExxonMobil', city: 'Spring', state: 'TX', lat: 30.08, lng: -95.417 },
  { company: 'Oil and Gas Solutions', city: 'Carlsbad', state: 'NM', lat: 32.42, lng: -104.229 },
  { company: 'Peterbilt', city: 'Denton', state: 'TX', lat: 33.215, lng: -97.133 },
  { company: 'Bain & Company', city: 'Dallas', state: 'TX', lat: 32.777, lng: -96.797 },
  { company: 'Oracle NetSuite', city: 'Austin', state: 'TX', lat: 30.267, lng: -97.743 },
  { company: 'IDS Engineering Group', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'BakerRisk', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Collins Aerospace', city: 'Charlotte', state: 'NC', lat: 35.227, lng: -80.843 },
  { company: 'EY', city: 'New York', state: 'NY', lat: 40.713, lng: -74.006 },
  { company: 'SLB', city: 'Bartlesville', state: 'OK', lat: 36.747, lng: -95.978 },
  { company: 'Mitsui & Co Energy Marketing and Services', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Capco', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Mercer', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
  { company: 'Ryan', city: 'Houston', state: 'TX', lat: 29.76, lng: -95.37 },
]

// Companies to call out above the map as a quick "where our brothers are" highlight.
export const featuredCompanies: string[] = [
  'NASA',
  'Tesla',
  'Boeing',
  'Samsung',
  'Lockheed Martin',
  'ExxonMobil',
  'Shell',
  'Microsoft',
  'Texas Instruments',
  'Dell Technologies',
  'JPMorganChase',
  'Oracle',
  'Procter & Gamble',
  'MongoDB',
  'Baker Hughes',
  'xAI',
  'and more...'
]

export type GroupedLocation = {
  key: string
  city: string
  state: string
  lat: number
  lng: number
  companies: string[]
}

export function groupByLocation(rows: Placement[]): GroupedLocation[] {
  const map = new Map<string, { city: string; state: string; lat: number; lng: number; companies: Set<string> }>()

  for (const r of rows) {
    const key = `${r.city}, ${r.state}`
    if (!map.has(key)) {
      map.set(key, { city: r.city, state: r.state, lat: r.lat, lng: r.lng, companies: new Set() })
    }
    map.get(key)!.companies.add(r.company)
  }

  return [...map.entries()].map(([key, loc]) => ({
    key,
    city: loc.city,
    state: loc.state,
    lat: loc.lat,
    lng: loc.lng,
    companies: [...loc.companies].sort(),
  }))
}
