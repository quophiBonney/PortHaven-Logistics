import React from 'react'
import HomeHero from '../components/HomeHero'
import Logistics from '../components/Logistics'
import Description from '../components/Description'
import OurServices from '../components/OurServices'
import CargoCars from '../components/CargoCars'
import World from '../components/World'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <Logistics/>
    <Description/>
    <OurServices/>
    <CargoCars/>
    <World/>
    <Testimonial/>
    </>
  )
}

export default Home