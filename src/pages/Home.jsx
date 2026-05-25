import React from 'react'
import HeroSection from '../components/HeroSection'
import HealthcareStandards from '../components/HealthcareStandards'
import Departments from '../components/Departments'
import ServicesGrid from '../components/ServicesGrid'
import Doctor from '../components/Doctor'
import MedicineCare from '../components/MedicineCare'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <HealthcareStandards/>
      <Departments/>
      <ServicesGrid/>
      <Doctor/>
      <MedicineCare/>
    </>
  )
}

export default Home
