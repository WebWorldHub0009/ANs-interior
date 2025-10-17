import React from 'react'
import Hero from '../Components/HeroSection'
import OurStory from '../Components/OurStory'
import WhatWeDo from "../Components/WhatWeDo"
import WhyChooseUs from '../Components/WhyChooseUs'
import ServicesSection from '../Components/PremiumHero'
import PremiumMarquee from '../Components/PremiumMarquee'
import HowWeWork from '../Components/HowWeWork'
import StatsSection from '../Components/StatsSection'

const Home = () => {
  return (
   <>
   <Hero/>
   <OurStory/>
   <WhatWeDo/>
   <PremiumMarquee/>
   <WhyChooseUs/>
   <ServicesSection/>
   <PremiumMarquee/>
   <StatsSection/>
   <HowWeWork/>
   </>
  )
}

export default Home