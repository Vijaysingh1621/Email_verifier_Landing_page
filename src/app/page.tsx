import React from 'react'
import UserCategories from "../app/Components/UserCategories"
import FAQ from './Components/Faq'
import HeroSection from "../app/Components/HeroSection"
import HowItWorks from './Components/HowItWorks'
import Verifier from "../app/Components/Verifier";
import Features from "../app/Components/Features"
import Footer from "../app/Components/Footer"

const page = () => {
  return (
    <div className=''>
      <HeroSection/>
      <HowItWorks/>
      <Verifier/>
      <Features/>
      <UserCategories/>
      <FAQ/>
      <Footer/>
      
    </div>
  )
}

export default page
