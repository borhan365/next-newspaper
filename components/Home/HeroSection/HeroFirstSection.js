import React from 'react'
import { StyledHeroSection } from '../../Styled/Home.Styled'
import LeadNewsContent from './LeadNewsContent'
import LeadNews from './LeadNewsContent'
import LeadNewsThumbnail from './LeadNewsThumbnail'
import SubLeadNews from './SubLeadNews'

function HeroFirstSection() {
  return (
    <StyledHeroSection pb="10px">
        <LeadNewsContent />
        <LeadNewsThumbnail />
        <SubLeadNews />
    </StyledHeroSection>
  )
}

export default HeroFirstSection
