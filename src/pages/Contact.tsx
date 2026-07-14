import { useState, type FormEvent } from 'react'
import PageHero from '../components/PageHero'

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSc-2B3gZ5GyZjCL8CBLEfbWHRMWK4srOjRAgpzEBfDfjC8QiQ/formResponse'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    description: '',
  })

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <PageHero title="Contact" backgroundImage="/PBEimages/Contact.jpg" />

      <section className="bg-black px-6 py-16 text-center text-white">
        {submitted ? (
          <h2 className="text-xl">Thank you for submitting the form, we will send you an email shortly!</h2>
        ) : (
          <>
            <h2 className="mb-12 text-xl">Howdy, please fill out the form below and we will contact you shortly!</h2>
            <iframe
              name="hiddenConfirm"
              title="hidden form target"
              style={{ display: 'none' }}
            />
            <form
              className="mx-auto flex max-w-2xl flex-wrap gap-8"
              action={GOOGLE_FORM_ACTION}
              method="post"
              target="hiddenConfirm"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-1 basis-[calc(50%-1rem)] flex-col gap-2 text-left">
                <label htmlFor="entry.1180153643" className="font-bold after:ml-1 after:text-red-500 after:content-['*']">
                  First Name
                </label>
                <input
                  id="entry.1180153643"
                  type="text"
                  name="entry.1180153643"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  className="rounded border-2 border-gray-300 bg-black px-3 py-2 text-white"
                />
              </div>
              <div className="flex flex-1 basis-[calc(50%-1rem)] flex-col gap-2 text-left">
                <label htmlFor="entry.1975216193" className="font-bold after:ml-1 after:text-red-500 after:content-['*']">
                  Last Name
                </label>
                <input
                  id="entry.1975216193"
                  type="text"
                  name="entry.1975216193"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  className="rounded border-2 border-gray-300 bg-black px-3 py-2 text-white"
                />
              </div>
              <div className="flex flex-1 basis-[calc(50%-1rem)] flex-col gap-2 text-left">
                <label htmlFor="entry.1251590548" className="font-bold after:ml-1 after:text-red-500 after:content-['*']">
                  Email
                </label>
                <input
                  id="entry.1251590548"
                  type="text"
                  name="entry.1251590548"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                  className="rounded border-2 border-gray-300 bg-black px-3 py-2 text-white"
                />
              </div>
              <div className="flex flex-1 basis-[calc(50%-1rem)] flex-col gap-2 text-left">
                <label htmlFor="entry.1342795259" className="font-bold after:ml-1 after:text-red-500 after:content-['*']">
                  Subject
                </label>
                <input
                  id="entry.1342795259"
                  type="text"
                  name="entry.1342795259"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange('subject')}
                  className="rounded border-2 border-gray-300 bg-black px-3 py-2 text-white"
                />
              </div>
              <div className="flex flex-1 basis-full flex-col gap-2 text-left">
                <label htmlFor="entry.1450922164" className="font-bold after:ml-1 after:text-red-500 after:content-['*']">
                  Description
                </label>
                <textarea
                  id="entry.1450922164"
                  name="entry.1450922164"
                  placeholder="Please list all details"
                  value={formData.description}
                  onChange={handleChange('description')}
                  className="min-h-36 rounded border-2 border-gray-300 bg-black px-3 py-2 text-white"
                />
              </div>
              <button
                type="submit"
                className="mx-auto rounded-xl border border-white bg-black px-6 py-2 text-white transition hover:bg-pbe-blue hover:text-black"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </section>
    </>
  )
}
