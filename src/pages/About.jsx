import React from 'react'
import TestimonialSliderKanpur from '../Components/Testimonials'
import Faq from "../Components/Faq"
import StatsSection from '../Components/StatsSection'
// import OurTeam from "../Components/OurTeam"
import PremiumMarquee from '../Components/PremiumMarquee'
import HowWeWork from '../Components/HowWeWork'
import SecondAbout from '../Components/SecondAbout'
import AboutHero from '../Components/AboutHero'
import VisionMission from '../Components/VissionMission'

const About = () => {
  return (
   <>
   <PremiumMarquee/>
   <AboutHero/>
   <SecondAbout/>
   <TestimonialSliderKanpur/>
   <HowWeWork/>
   <VisionMission/>
   <StatsSection/>
   {/* <OurTeam/> */}
   <PremiumMarquee/>
   <Faq/>
   </>
  )
}

export default About