import React from 'react'
import {Hero} from '../components/Hero'
import {WhoWeAre} from '../components/WhoWeAre'
import { HowitWorks } from '../components/HowitWorks'
import { WhyCollabHub } from '../components/WhyCollabHub'
import { Pricing } from '../components/PricingPlan'
import { Testimonials } from '../components/Testimonials'
import { Footer } from '../components/Footer'
export const Home = () => {
  return (
    <div className='bg-white'>
    <Hero/>
    <WhoWeAre/>
    <HowitWorks/>
    <WhyCollabHub/>
    <Pricing/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}
