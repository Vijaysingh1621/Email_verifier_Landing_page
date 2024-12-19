import React from 'react'
import UserCategories from "../app/Components/UserCategories"
import FAQ from './Components/Faq'
import HeroSection from "../app/Components/HeroSection"

const page = () => {
  return (
    <div>
      <HeroSection/>
      <UserCategories/>
      <FAQ/>
    </div>
  )
}

export default page
