import PageHero from '../components/PageHero'

const APPLICATION_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSf5lq53F9N_qv4Ptp6URafgpu9uugoU-RyG5fptvYBINIGcqA/viewform?usp=dialog'

export default function Recruitment() {
  return (
    <>
      <PageHero title="Recruitment" backgroundImage="/PBEimages/recruitment.jpg" />

      <section className="bg-black px-6 py-16 text-center text-white">
        <h1 className="text-2xl">
          Fall 2026 Recruitment is open!
          <br />
          <br />
          Apply now using the link below!
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

          <div className="mt-10">
            <img
              src="/PBEimages/PBE_Fall2026_Flyer.png"
              alt="Fall 2026 Recruitment flyer"
              className="mx-auto mb-4 w-full max-w-2xl"
            />
            <a
              href={APPLICATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-pbe-blue px-8 py-3 text-lg font-semibold text-black transition hover:opacity-90"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
