import React from 'react'
import { A, ATag, NewsTitle, StyledNewsBox, SubTitle } from '../../Styled/Home.Styled'

function HeroSecondSectionNews({news}) {
  return (
    <>
      <A href="/single" passHref>
        <ATag>
        <StyledNewsBox>
        <NewsTitle size="21px">{news.title}</NewsTitle>
        <SubTitle>{news.subTitle}</SubTitle>
        <SubTitle>{news.time}</SubTitle>
      </StyledNewsBox>
        </ATag>
      </A>
    </>
  )
}

export default HeroSecondSectionNews
