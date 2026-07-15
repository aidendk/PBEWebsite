import PageHero from '../components/PageHero'
import MemberCard from '../components/MemberCard'
import { executive, officers } from '../data/members'

const officersSorted = [...officers].sort((a, b) => a.role.localeCompare(b.role))

export default function Members() {
  return (
    <>
      <PageHero title="Members" backgroundImage="/PBEimages/OfficersPhoto.jpeg" backgroundPosition="center 35%" backgroundSize="105%" />

      <section className="bg-black px-6 py-16">
        <h1 className="mb-10 text-center font-heading text-3xl text-pbe-blue">Executive Team</h1>
        <div className="mb-16 flex flex-wrap justify-center gap-12">
          {executive.map((member, i) => (
            <MemberCard key={member.name} member={member} priority={i < 4} />
          ))}
        </div>

        <h1 className="mb-10 text-center font-heading text-3xl text-pbe-blue">Officer Team</h1>
        <div className="flex flex-wrap justify-center gap-12">
          {officersSorted.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </>
  )
}
