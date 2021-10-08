import React from 'react'
import { StyledHeroSection } from '../../Styled/Home.Styled'
import HeroSecondSectionNews from './HeroSecondSectionNews'
import Data from './Data'

function HeroSecondSection() {
  return (
    <StyledHeroSection pt="15px" pb="15px">
        {
          Data.map((news) => (
            <HeroSecondSectionNews news={news} />
          ))
        }
    </StyledHeroSection>
  )
}

export default HeroSecondSection
