import React from 'react'
import ContactHero from '../components/ContactHero'

import LocationMap from '../components/LocationMap'
import Hello from '../components/Hello'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <ContactHero/>
    <Hello/>
    <ContactForm/>
    <LocationMap/>
    </>
  )
}

export default Contact