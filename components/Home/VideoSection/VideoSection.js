import React from 'react'
import { CategoryTitle, CategoryTitleText, CategoryTitleTextIcon, Col, Flex, Section, TitleContainer, VideoContainer } from '../../Styled/Home.Styled'
import Data from './Date'
import FeaturedContent from './FeaturedContent'
import Featured from './FeaturedThumb'
import Items from './Items'
import ItemsData from './ItemsData'

function VideoSection() {
    return (
        <>
            <Section>
                <TitleContainer>
                                        {/* Title */}
                                        <CategoryTitle mb="5px">
                        <CategoryTitleText color="white">
                            ভিডিও নিউজ  <CategoryTitleTextIcon/>
                        </CategoryTitleText>
                    </CategoryTitle>
                </TitleContainer>
                <VideoContainer>
                        <Flex>

                            {/* Sub-Featured News */}
                            <Col width="40%">
                                {
                                    Data.map((val) => {
                                        return(
                                            <FeaturedContent 
                                                Title = {val.Title}
                                                Desc = {val.Desc}
                                                Date = {val.Date}
                                            />
                                        )
                                    })
                                }
                            </Col>

                            {/* Featured news */}
                            <Col width="60%">
                                {
                                    Data.map((val) => {
                                        return(
                                            <Featured 
                                                Thumb = {val.Thumb}
                                            />
                                        )
                                    })
                                }
                            </Col>
                        </Flex>

                        <Flex gg="15px" pt="10px">    
                            {
                                ItemsData.slice(0, 4).map((val) => {
                                    return(
                                        <Items 
                                            Thumb = {val.Thumb}
                                            Title = {val.Title}
                                            Date = {val.Date}
                                        />
                                    )
                                })
                            }
                        </Flex>
                    </VideoContainer>
            </Section>
        </>
    )
}

export default VideoSection
