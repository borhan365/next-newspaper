import React from 'react'
import TopHeaderSection from './TopHeaderSection/TopHeaderSection'
import { HeaderStyled } from './Header.styled'
import MenuHeaderSection from './MenuHeaderSection/MenuHeaderSection'

function Header() {
  return (
    <HeaderStyled>
      <TopHeaderSection />
      <MenuHeaderSection />
    </HeaderStyled>
  )
}

export default Header
