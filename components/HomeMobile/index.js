import LandingSection from '@components/Home/LandingSection'
import React from 'react'
import HomeTopMobile from './HomeTopMobile'
import HorizontalMarquee from './HorizontalMarquee'
import SelectedWorks from './SelectedWorks'
import AboutSectionMobile from './AboutSectionMobile'

const index = () => {
  const marqueeText = `Swarnajits  Portfolio ${new Date().getFullYear()}`;
  
  return (
    <div className='w-full  font-montreal block lg:hidden h-screen'>
      <HomeTopMobile />
      <HorizontalMarquee {...{marqueeText}} />
      <SelectedWorks/>
      <HorizontalMarquee marqueeText={"Know more about me  Know more about me"} />
      <AboutSectionMobile />
      <HorizontalMarquee marqueeText={"Stack & Benfits  Stack & Benfits "} />
    </div>
  )
}

export default index