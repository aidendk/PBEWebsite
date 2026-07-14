import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { to: '/about', label: 'About Us' },
  { to: '/members', label: 'Members' },
  { to: '/philanthropy', label: 'Philanthropy' },
]

const navItemsAfterLogo = [
  { to: '/recruitment', label: 'Recruitment' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/login', label: 'Login Portal' },
]

const allNavItems = [...navItems, ...navItemsAfterLogo]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-center px-6 text-white transition-colors duration-300 md:px-10 ${
          scrolled || open ? 'bg-pbe-ink/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-gradient-to-b from-black/50 to-transparent'
        }`}
      >
        {/* Mobile logo */}
        <Link to="/" onClick={close} className="absolute left-6 top-1/2 -translate-y-1/2 shrink-0 md:hidden">
          <img src="/PBEimages/PBELogoCropped.png" alt="PBE Logo" width={481} height={162} className="h-11 w-auto max-w-none" />
        </Link>

        {/* Hamburger — only shown on mobile */}
        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          className="absolute right-6 flex h-7 w-7 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(true)}
        >
          <span className="h-0.5 w-7 bg-current" />
          <span className="h-0.5 w-7 bg-current" />
          <span className="h-0.5 w-7 bg-current" />
        </button>

        {/* Desktop nav */}
        <div className="hidden h-full overflow-visible md:flex md:items-center md:gap-7">
          <ul className="flex h-full items-center gap-8 text-base font-medium tracking-wide">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-pbe-blue">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="relative flex h-full w-52 items-center justify-center">
              <Link to="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src="/PBEimages/PBELogoCropped.png" alt="PBE Logo" width={481} height={162} className="h-11 w-auto max-w-none" />
              </Link>
            </li>
            {navItemsAfterLogo.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-pbe-blue">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Portaled outside <nav> so backdrop-filter on nav doesn't clip the fixed overlay */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* Dim backdrop */}
              <motion.div
                className="fixed inset-0 z-[60] bg-black/50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={close}
              />

              {/* Sidebar */}
              <motion.div
                className="fixed inset-y-0 right-0 z-[70] flex w-52 flex-col bg-pbe-ink/90 backdrop-blur-md text-white shadow-2xl md:hidden"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                {/* Close button */}
                <button
                  type="button"
                  aria-label="Close navigation"
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-xl text-white/70 hover:text-white"
                  onClick={close}
                >
                  &times;
                </button>

                {/* Logo */}
                <div className="px-5 pt-5 pb-4 border-b border-white/10">
                  <Link to="/" onClick={close}>
                    <img src="/PBEimages/PBELogoCropped.png" alt="PBE Logo" width={481} height={162} className="h-8 w-auto max-w-none" />
                  </Link>
                </div>

                {/* Links */}
                <ul className="flex flex-col gap-1 px-3 pt-4">
                  {allNavItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={close}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide transition hover:bg-white/10 hover:text-pbe-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
