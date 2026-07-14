import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-pbe-ink px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <img src="/PBEimages/PBELogoCropped.png" alt="PBE Logo" width={481} height={162} className="h-10 w-auto max-w-none" />
          <p className="max-w-xs text-sm text-white/60">
            Professional Brotherhood of Engineers <br /> Texas A&amp;M University
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <h3 className="font-heading text-lg text-pbe-blue">Follow Us</h3>
          <ul className="flex gap-4">
            <li>
              <a href="https://www.instagram.com/pbetamu" target="_blank" rel="noopener" aria-label="PBE on Instagram">
                <img src="/PBEimages/insta.png" alt="" className="h-8 w-8 opacity-80 transition hover:opacity-100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/pbe-tamu/"
                target="_blank"
                rel="noopener"
                aria-label="PBE on LinkedIn"
              >
                <img src="/PBEimages/linkedin.png" alt="" className="h-8 w-8 opacity-80 transition hover:opacity-100" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-start">
          <h3 className="font-heading text-lg text-pbe-blue">Want to reach out?</h3>
          <Link to="/contact" className="text-sm text-white/70 transition hover:text-pbe-blue">
            Contact Us
          </Link>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-white/40">&copy; {year} PBE. All rights reserved.</p>
    </footer>
  )
}
