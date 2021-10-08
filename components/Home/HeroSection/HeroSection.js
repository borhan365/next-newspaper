import React from 'react'
import HeroSidebar from './HeroSidebar'
import HeroLeft from './HeroLeft'
import { HeroWrapperStyled, HeroLeftStyled, HeroSidebarStyled} from '../../Styled/Home.Styled'

function HeroSection() {
  return (
    <>
      <HeroWrapperStyled>

          <HeroLeftStyled>
              <HeroLeft />
          </HeroLeftStyled>

          <HeroSidebarStyled>
              <HeroSidebar />
          </HeroSidebarStyled>

      </HeroWrapperStyled>
    </>
  )
}

export default HeroSection
