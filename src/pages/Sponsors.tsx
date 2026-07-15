import PageHero from '../components/PageHero'

const alumniSponsors = [
  "Ameen Bello '21",
  "Brian Dobesh '23",
  "Cristian Valeriano '24",
  "Grant Riddle '22",
  "Hayder Hilo '22",
  "Jacob John '19",
  "Jason Palmer '22 '23",
  "Jorge Diaz '21",
  "Justin Van Nimwegan '24",
  "Kory Lanthier '23",
  "Kyle Jungbluth '22",
  "Lauren Mooneyham '23",
  "Paul Verrett '22",
  "Tyler Glenn '22",
]

export default function Sponsors() {
  return (
    <>
      <PageHero title="Sponsors" backgroundImage="/PBEimages/ContactFinal.jpg" />

      <section className="bg-pbe-ink px-6 py-16 text-center text-white md:px-24">
        <h1 className="font-heading text-2xl">Thank you to our amazing Companies for their sponsorship!</h1>
        <div className="mx-auto my-8 w-full border-t-4 border-pbe-blue" />
        <div className="flex flex-wrap justify-center gap-6">
          <img
            src="/PBEimages/R.SParker.jpg"
            alt="R.S. Parker Construction"
            className="h-auto w-28"
          />
          <img
            src="/PBEimages/Tutor_P-modified-transformed.png"
            alt="Tutor Pal"
            className="h-auto w-28"
          />
        </div>

        <h1 className="mt-16 font-heading text-2xl">Thank you to our amazing Alumni for their sponsorship!</h1>
        <div className="mx-auto my-8 w-full border-t-4 border-pbe-blue" />
        <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-2 text-center sm:grid-cols-2">
          {alumniSponsors.map((name) => (
            <li key={name} className="text-lg">
              {name}
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <a
            href="https://sofctamu.estore.flywire.com/products?storeCatalog=23183"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-lg bg-pbe-blue px-9 py-4 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Donate Here!
          </a>
        </div>
      </section>
    </>
  )
}
