import React from 'react'
import Hero from '../components/Hero/Hero'
import Windows from '../components/Windowsm/Windows'
import Partners from '../components/Partners/Partners'
import WebCourse from '../components/WebCourse/WebCourse'
import ScratchSection from '../components/ScratchSection/ScratchSection'
import Grafic from '../components/Grafic/Grafic'
const Home = () => {
  return (
  <>
  <Hero />
  <Windows />
  <WebCourse price="→1.400.000сум"   />
  <Grafic price="→1.200.000сум" />

  <ScratchSection price="→1.100.000сум" />
  <Partners />
  </>
  )
}

export default Home