import PageHero from '../components/PageHero'
import InfoSection from '../components/InfoSection'

export default function About() {
  return (
    <>
      <PageHero title="About Us" backgroundImage="/PBEimages/groupPhotoNMTSmaller-min.jpg" />

      <section className="bg-black px-6 py-16 text-white md:px-24">
        <h1 className="mb-6 font-heading text-3xl text-pbe-blue">Mission Statement</h1>
        <p className="text-lg leading-relaxed">
          The purpose of PBE is to create a brotherhood of engineers to thrive socially, academically, and
          professionally. PBE develops engineers for the future by focusing on professionalism through
          networking, social events and academics to become better leaders.
        </p>

        <div className="mx-auto mt-12 w-full border-t border-white/10" />
        <h2 className="mt-8 text-center font-heading text-5xl text-pbe-blue pt-4">Semester Activities</h2>

        <InfoSection title="Guest Speakers" image="/PBEimages/carSpeaker.jpg" imageAlt="Guest speaker session" noDivider>
          PBE recognizes the importance of connecting with current industry leaders to inspire and guide our
          diverse group of engineers. Our members have the unique opportunity to engage with these leaders
          through bi-weekly speaker sessions covering a wide range of industries. Past speakers have included
          professionals from esteemed organizations such as Google, General Motors, and innovative tech
          startups like Datalogz.
        </InfoSection>

        <InfoSection
          title="Service"
          image="/PBEimages/indownloader.app_picture_0093131001715713830.jpg"
          imageAlt="Service event"
          reverse
        >
          At PBE, we are committed to making a positive impact both within and beyond our community. Our
          service initiatives include a variety of activities designed to foster teamwork, leadership, and a
          sense of selfless service among our members. Past service projects include: The Big Event, Park
          Cleanups, and Food Shelters.
        </InfoSection>

        <InfoSection title="Brotherhood" image="/PBEimages/brotherhood.JPG" imageAlt="Brotherhood event">
          PBE fosters strong connections among our members, creating a supportive and enduring brotherhood. As
          engineering students, we understand the unique challenges of our field and are committed to
          supporting each other through cookout events, and a variety of
          member activities that provide a relaxed and enjoyable environment. Fostering a community where
          lifelong professional connections and friendships are formed, helping us navigate our academic
          journey and beyond.
        </InfoSection>

        <InfoSection title="Social" image="/PBEimages/Social.jpg" imageAlt="Social event" reverse>
          At PBE, we're all about creating a place where we can let loose and have a good time together. From
          karaoke nights to mixers, our calendar is packed with amazing events that bring us closer. We're not
          just about hanging with our brothers—we're also about connecting with other women organizations and
          sororities, making our circle even bigger and more diverse. These events aren't just about having
          fun; they're about forging friendships that stick around, making our college journey even more
          memorable.
        </InfoSection>
      </section>
    </>
  )
}
