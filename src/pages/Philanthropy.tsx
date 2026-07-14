import PageHero from '../components/PageHero'
import InfoSection from '../components/InfoSection'

const H4H_HOME_IMAGES = [
  { src: '/PBEimages/H4HHome5.png', alt: 'PBE brothers serving at a Habitat for Humanity project' },
  { src: '/PBEimages/H4HHome1.png', alt: 'PBE members working on a Habitat for Humanity home site' },
  { src: '/PBEimages/H4HHome2.png', alt: 'PBE members at a Habitat for Humanity build' },
  { src: '/PBEimages/H4HHome3.png', alt: 'PBE members volunteering on home construction' },
  { src: '/PBEimages/H4HHome4.png', alt: 'Habitat for Humanity home construction volunteer work' },
]

export default function Philanthropy() {
  return (
    <>
      <PageHero title="Philanthropy" backgroundImage="/PBEimages/philanthropyNew.jpg" />

      <section className="bg-black px-6 py-16 text-white md:px-24">
        <div className="max-w-4xl">
          <h2 className="font-heading text-3xl text-pbe-blue">Habitat for Humanity</h2>
          <div className="mt-4 mb-2 h-1 w-16 rounded-full bg-pbe-blue" />
          <p className="text-lg leading-relaxed text-white/90">
            As PBE continues to grow each semester, it's important that we give back to the community that
            has supported us. We partner with Habitat for Humanity to strengthen Bryan–College Station — from
            hands-on home builds to community events that bring people together.
          </p>
        </div>

        <InfoSection title="Home Construction" images={H4H_HOME_IMAGES}>
          This semester, we truly put the &ldquo;engineer&rdquo; in PBE by assisting Habitat for Humanity
          with their home construction project. Our members got hands-on experience on site — leveling ground,
          building, and working alongside the Habitat team — while making a meaningful contribution to the
          community. It was a rewarding experience that combined practical learning with the spirit of service.
        </InfoSection>

        <InfoSection
          title="Cornhole Tournament"
          image="/PBEimages/CornholeTourny.jpg"
          imageAlt="Cornhole tournament"
          reverse
        >
          This past semester, we embraced the thrilling challenge of creating our own philanthropy event. With
          the incredible support of Habitat for Humanity and Blackwater Draw Brewing, we brought our vision to
          life by hosting an unforgettable Cornhole Tournament. Not only did we raise funds for a great cause,
          but we also created a vibrant, fun-filled atmosphere that brought our members and participants
          together to make a lasting impact on our community.
        </InfoSection>

        <InfoSection title="Pumpkin Patch" image="/PBEimages/pumpkin.jpg" imageAlt="Pumpkin patch event">
          Alongside the home construction, PBE partnered with Habitat for Humanity to support their annual
          Pumpkin Patch in the Bryan–College Station community. Our members dedicated their time and effort to
          setting up and maintaining the patch, ensuring it was beautifully organized and inviting — creating a
          fun and welcoming space for families to enjoy while actively giving back to the vibrant community we
          proudly call home.
        </InfoSection>
      </section>
    </>
  )
}
