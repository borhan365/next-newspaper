import React from 'react'
import Featured from './Featured'
import Items from './Items'
import FeatureContent  from './FeatureContent'
import ItemContent from './ItemContent'
import { BorderBottom, CategoryTitle, CategoryTitleText, CategoryTitleTextIcon, Col, Div, Flex, Underline } from '../../Styled/Home.Styled'

function Entertainment() {
    return (
        <>
            <Div>

            {/* Title */}
            <CategoryTitle mb="5px">
                <CategoryTitleText>
                    বিনোদন <CategoryTitleTextIcon/>
                </CategoryTitleText>
            </CategoryTitle>

            <Flex>

                {/* Sub-Featured News */}
                <Col>
                    {
                        ItemContent.map((val) => {
                            return(
                                <Items 
                                    Title = {val.Title}
                                    Thumb = {val.Thumb}
                                    Desc = {val.Desc}
                                    Date = {val.Date}
                                />
                            )
                        })
                    }
                </Col>

                {/* Featured news */}
                <Col>
                    {
                        FeatureContent.map((val) => {
                            return(
                                <Featured 
                                    Title = {val.Title}
                                    Thumb = {val.Thumb}
                                    Desc = {val.Desc}
                                    Date = {val.Date}
                                />
                            )
                        })
                    }
                </Col>

                {/* Sub-Featured News */}
                <Col>
                    {
                        ItemContent.map((val) => {
                            return(
                                <Items 
                                    Title = {val.Title}
                                    Thumb = {val.Thumb}
                                    Desc = {val.Desc}
                                    Date = {val.Date}
                                />
                            )
                        })
                    }
                </Col>
            </Flex>
            </Div>
            <BorderBottom/>
        </>
    )
}

export default Entertainment
