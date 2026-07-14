import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
