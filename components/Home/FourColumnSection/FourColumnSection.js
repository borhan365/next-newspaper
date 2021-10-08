import React from 'react'
import { BorderBottom, Col, Flex } from '../../Styled/Home.Styled'
import FirstColumn from './FirstColumn/FirstColumn'
import FourthColumn from './FourthColumn/FourthColumn'
import SecondColumn from './SecondColumn/SecondColumn'
import ThirdColumn from './ThirdColumn/ThirdColumn'

function FourColumnSection() {
    return (
        <>

                <Flex>

                    {/* First Columns */}
                    <Col>
                        <FirstColumn />
                    </Col>

                    {/* Second Columns */}
                    <Col>
                        <SecondColumn />
                    </Col>

                    {/* Third Columns */}
                    <Col>
                        <ThirdColumn />
                    </Col>

                    {/* Fourth Columns */}
                    <Col>
                        <FourthColumn />
                    </Col>

                    
                </Flex>
                <BorderBottom margin="10px 0px" />
                </>
    )
}

export default FourColumnSection
