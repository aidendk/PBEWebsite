import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'

const routes: Record<string, string> = {
  Member: 'https://drive.google.com/drive/folders/1PzWpZqYmwKeEOuwwfU6P5cOtFOEPmzjY?usp=drive_link',
  Officer: 'https://drive.google.com/drive/u/2/folders/0AJ9GYNCaZ4TuUk9PVA',
  Alumni: 'https://drive.google.com/drive/folders/1CrKxTmvOmpcUELJG4kbXz5Nzy8IeqwGD?usp=drive_link',
  Sweetheart: 'https://drive.google.com/drive/folders/1qqFvj55Zig71Ld2U-oJe6rH_6kfa02Ej?usp=drive_link',
}

const portalOptions = Object.keys(routes)

export default function Login() {
  const [portal, setPortal] = useState('Members')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const destination = routes[portal]
    if (destination?.trim()) {
      window.location.href = destination
      return
    }
    setMessage(`No link configured for ${portal} yet.`)
  }

  return (
    <>
      <PageHero title="Login Portal" backgroundImage="/PBEimages/zachloginOut.jpg" />

      <section className="flex min-h-[60vh] items-center justify-center bg-pbe-ink px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:max-w-lg md:p-12"
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-pbe-blue/40 bg-pbe-blue/10">
              <svg className="h-6 w-6 text-pbe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h2 className="font-heading text-2xl text-white">Member Access</h2>
            <p className="mt-1 text-sm text-white/50">Select your role to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="portal" className="text-sm font-medium text-white/70">
                I am a…
              </label>
              <div className="grid grid-cols-2 gap-2">
                {portalOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setPortal(option); setMessage('') }}
                    className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                      portal === option
                        ? 'border-pbe-blue bg-pbe-blue/15 text-pbe-blue'
                        : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-pbe-blue px-6 py-3 font-semibold text-pbe-ink transition hover:opacity-90 active:scale-95"
            >
              Continue to {portal} Portal →
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-pbe-blue/80">{message}</p>
          )}
        </motion.div>
      </section>
    </>
  )
}
