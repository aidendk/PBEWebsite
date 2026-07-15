import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSdCcAADdMxZZWWhKw4HU7PcwMHNlHnKEsOCXu7XrxcL7MaziA/formResponse'

export default function Recruitment() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' })

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (Object.values(formData).some((value) => value.trim() === '')) {
      e.preventDefault()
      alert('All fields must be filled out')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      <PageHero title="Recruitment" backgroundImage="/PBEimages/recruitment.jpg" />

      <section className="bg-black px-6 py-16 text-center text-white">
        <h1 className="text-2xl">
          Recruitment for Spring 2026 has concluded!
          <br />
          <br />
          Fill out the form below for Fall 2026 updates!
        </h1>

        <div className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-2 text-2xl">Recruitment Video</h2>
          <div className="mx-auto my-5 w-full border-t-4 border-pbe-blue" />
          <div className="relative h-0 overflow-hidden bg-black pb-[56.25%]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/pcwvhLIUrio?si=6lmv4YZV03SxkGGZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <h2 className="mt-10 mb-2 text-2xl">Recruitment Update Form</h2>
          <div className="mx-auto my-5 w-full border-t-4 border-pbe-blue" />

          {submitted ? (
            <p className="text-lg">Thanks! We'll keep you posted on Spring 2026 recruitment.</p>
          ) : (
            <div>
              <img
                src="/PBEimages/Spring 24 Flyer Final.png"
                alt="Recruitment flyer"
                className="mx-auto mb-8 max-w-sm"
              />
              <iframe name="hiddenConfirm" title="hidden form target" style={{ display: 'none' }} />
              <form
                className="mx-auto flex max-w-sm flex-col items-center gap-4"
                action={GOOGLE_FORM_ACTION}
                method="post"
                target="hiddenConfirm"
                onSubmit={handleSubmit}
              >
                <div className="flex w-full flex-col gap-2 text-left">
                  <label htmlFor="entry.1328555469" className="font-bold text-pbe-blue after:ml-1 after:text-red-500 after:content-['*']">
                    First Name
                  </label>
                  <input
                    id="entry.1328555469"
                    type="text"
                    name="entry.1328555469"
                    placeholder="First"
                    value={formData.firstName}
                    onChange={handleChange('firstName')}
                    className="rounded border-2 border-white bg-transparent px-3 py-2 text-white"
                  />
                </div>
                <div className="flex w-full flex-col gap-2 text-left">
                  <label htmlFor="entry.1502007998" className="font-bold text-pbe-blue after:ml-1 after:text-red-500 after:content-['*']">
                    Last Name
                  </label>
                  <input
                    id="entry.1502007998"
                    type="text"
                    name="entry.1502007998"
                    placeholder="Last"
                    value={formData.lastName}
                    onChange={handleChange('lastName')}
                    className="rounded border-2 border-white bg-transparent px-3 py-2 text-white"
                  />
                </div>
                <div className="flex w-full flex-col gap-2 text-left">
                  <label htmlFor="entry.1590393024" className="font-bold text-pbe-blue after:ml-1 after:text-red-500 after:content-['*']">
                    Email
                  </label>
                  <input
                    id="entry.1590393024"
                    type="text"
                    name="entry.1590393024"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="rounded border-2 border-white bg-transparent px-3 py-2 text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-xl border border-white bg-black px-6 py-2 text-white transition hover:bg-pbe-blue hover:text-black"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
