import { useState } from 'react'
import HomeHero from '../components/HomeHero'
import IntroSplash from '../components/IntroSplash'
import Pillars from '../components/Pillars'
import MemberMap from '../components/MemberMap'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  const [startVideo, setStartVideo] = useState(false)

  return (
    <>
      <IntroSplash onFadeStart={() => setStartVideo(true)} />
      <HomeHero startVideo={startVideo} />
      <Pillars />
      <MemberMap />
      <CtaBanner />
    </>
  )
}
