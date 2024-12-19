import React from 'react'
import UserCategories from "../app/Components/UserCategories"
import FAQ from './Components/Faq'
import HeroSection from "../app/Components/HeroSection"
import HowItWorks from './Components/HowItWorks'
import Verifier from "../app/Components/Verifier";

const page = () => {
  return (
    <div className=''>
      <HeroSection/>
      <HowItWorks/>
      <Verifier/>
      <UserCategories/>
      <FAQ/>
      
    </div>
  )
}

export default page
