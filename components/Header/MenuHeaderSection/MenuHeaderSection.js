import React from "react";
import { A, ATag } from "../../Styled/Home.Styled";
import {
  MenuHeaderContainer,
  MenuHeaderSectionStyled,
  MenuLink,
  MenuWrapper,
} from "../Header.styled";

function MenuHeaderSection() {
  return (
    <MenuHeaderSectionStyled>
      <MenuHeaderContainer>
        <MenuWrapper>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> প্রচ্ছদ </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> সর্বশেষ </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> বিশেষ সংবাদ </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> জাতীয় </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> রাজনীতি </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> বিনোদন </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> অর্থনীতি </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> বাংলাদেশ </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> বিশেষ সংবাদ </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> জাতীয় </ATag>
              </A>
            </MenuLink>
            <MenuLink>
              <A href="/category" passHref>
                  <ATag> রাজনীতি </ATag>
              </A>
            </MenuLink>
        </MenuWrapper>
      </MenuHeaderContainer>
    </MenuHeaderSectionStyled>
  );
}

export default MenuHeaderSection;
