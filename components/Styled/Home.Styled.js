import Link from 'next/link'
import { BsChevronRight } from 'react-icons/bs'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { FaImages } from 'react-icons/fa'
import styled from 'styled-components'

export const Section = styled.section`
background: black;
padding-bottom: 20px;
`
export const VideoContainer = styled.div`
  width: 1250px;
  max-width: 100%;
  margin: 0px auto;
  padding-top: 10px;
  background: #0d0c0c;
  padding: 10px;
`
export const HeroWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 10px;
`
export const HeroLeftStyled = styled.div``
export const HeroSidebarStyled = styled.div``
export const StyledHeroSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 15px;
  border-bottom: 1px solid lightgray;
  padding-bottom: ${({pb}) => pb};
  padding-top: ${({pt}) => pt};
`

export const NewsTitle = styled.h2`
  font-size: ${({size}) => size};
  line-height: ${({height}) => height};
  margin: 0px;
  padding: 0px;
  margin-bottom: 5px;
  margin: ${({margin}) => margin};
  position: relative;
  width: ${({width}) => width};
  left: ${({left}) => left};
  color: ${({color}) => color};
  font-weight: ${({weight}) => weight};
`
export const LeadNewsThumb = styled.div``
export const Image = styled.img`
  width: ${({width}) => width};
  margin: ${({margin}) => margin};
  object-fit: ${({fit}) => fit};
`
export const SubTitle = styled.p`
  margin: 0px;
  margin: ${({margin}) => margin};
  color: ${({color}) => color}; 
  font-size: ${({size}) => size};
  padding-top: ${({pt}) => pt};
  margin-top: ${({mt}) => mt};
  font-weight: ${({weight}) => weight};
`
export const SubLeadWrapper = styled.div`

`
export const StyledNewsBox = styled.div`
  border-right: 1px solid lightgray;
  padding-right: 10px;
`
export const SidebarBox = styled.div`
  border-bottom: 1px solid lightgray;
  padding-top: ${({pt}) => pt};
`
export const A = styled(Link)`

`
export const ATag = styled.a`
  text-decoration: none;
  color: black;
  color: ${({color}) => color};

  &:hover {
    color: green;
  }
`
export const StyledFlexNews = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 10px;
  border-right: 1px solid lightgray;
  min-height: 100px;
  padding-top: ${({pt}) => pt};
`

// Sports section
// ==============
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: ${({jc}) => jc};
  align-items: ${({ai}) => ai};
  grid-gap: 10px;
  grid-gap: ${({gg}) => gg};
  padding-top: ${({pt}) => pt};
  padding-bottom: ${({pb}) => pb};
  margin-bottom: ${({mb}) => mb};
  border-bottom: ${({bb}) => bb};

  
  &:nth-child(1) {
      padding-top: 0px;         
  }
  &:nth-last-child(1) {
      border-bottom: unset;
  }
  
  /* &:nth-child(1) {
      padding-top: 0px;            
  } */
`
export const Col = styled.div`
  width: 100%;
  padding: ${({padding}) => padding};
  width: ${({width}) => width};
`
export const SportsContainer = styled.div`
  background: rgba(2, 130, 151, 0.1);
  border-bottom: 3px solid #39bed2; 
  width: 100%;
  height: auto;
`
export const SportsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
`
export const SportsBanner = styled.div`
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
  }
`
export const ImageThumb = styled.div`
  width: 100%;
  height: ${({height}) => height};
  object-fit: ${({fit}) => fit};
  overflow: hidden;
  width: ${({width}) => width};
  border-radius: ${({radius}) => radius};

  & img {
    width: 100%;
    height: 100%;
  }
`
export const Div = styled.div`
  position: relative;
  margin-top: ${({mt}) => mt};
  margin-bottom: ${({mb}) => mb};
  padding: ${({padding}) => padding};
  padding-top: ${({pt}) => pt};
  padding-bottom: ${({pb}) => pb};
  width: ${({width}) => width};
  border: ${({border}) => border};
  border-top: ${({bt}) => bt};
  border-bottom: ${({bb}) => bb};

`
export const SportsItem = styled.li`
  font-size: 19px;
  font-weight: bold;
  list-style: none;
  position: relative;
  padding-bottom: 15px;
  padding-left: 30px;
  text-decoration: none;

  &:before{    
    content: " ";
    position: absolute;
    top: 6px;
    left: 0px;
    height: 20px;
    width: 20px;
    background: #39bed2;
    border-radius: 50%;
    border: 2px solid white;
  }
`

// Category Section
// ================
export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-bottom: ${({mb}) => mb};
  margin-top: ${({mt}) => mt};
`
export const CategoryTitleText = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  grid-gap: 7px;
  font-weight: bold;
  color: ${({color}) => color};
`
export const CategoryTitleTextIcon = styled(BsChevronRight)`
  color: firebrick;
  margin-top: 2px;
`

// The world section
// =================
export const FlexNewsList = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
  &:nth-child(1) {
      padding-top: 0px;         
  }
  &:nth-last-child(1) {
      border-bottom: unset;
  }
`
export const BorderBottom = styled.div`
  width: 100%; 
  height: 1px;
  background: lightgray;
  margin: ${({margin}) => margin};
`

// Opinion Section
// ================
export const TitleSpan = styled.span`
  color: white;
  background: #001246;
  line-height: 45px;
  font-weight: bold;
  box-shadow: 10px 0 0 #001246, -10px 0 0 #001246;
`
export const Underline = styled.div`
  width: 20%;
  height: 4px;
  border-radius: 2px;
  background: #34b8b5;
  margin-bottom: 10px;
`

// Video Section
// =============
export const PlayIcon = styled(BsFillPlayCircleFill)`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  color: red;
  padding: 2px;
`
export const TitleContainer = styled.div`
  width: 1250px;
  margin: 0px auto;
  padding-top: 10px;
  padding-bottom: 5px;
`
// Photo gallery
// =============
export const GalleryThumb = styled.div`
  width: 100%;
  height: ${({height}) => height};
  overflow: hidden;

  & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-in-out;

      &:hover {
          transform: scale(1.04);
          z-index: 0;
      }
  }
`
export const GalleryIcon = styled(FaImages)`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 20px;
  font-size: 40px;
  border-radius: 5px;
  background: #ffffffcf;
  padding: 5px;
  z-index: 1;
`
export const FeaturedContent = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  bottom: 0px;
  font-weight: bold;
  color: white;
  padding: 20px;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #ffffff00 , black);
`
export const GridTwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`