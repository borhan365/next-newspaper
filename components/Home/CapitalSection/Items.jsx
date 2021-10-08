import React from 'react'
import { A, ATag, Div, Flex, Image,ImageThumb, NewsTitle, SubTitle } from '../../Styled/Home.Styled';

function Items(props) {
    return (
        <>
        <Flex>
            <div>
                <ImageThumb height="180px" fit="cover">
                <A href="/single" passHref>
                    <ATag>
                    <Image src={props.Thumb} alt={props.Title}/>
                    </ATag>
                    </A>
                </ImageThumb>

                <Div mt="10px">
                    <A href="/single" passHref>
                        <ATag>
                        <NewsTitle size="23px">
                            {props.Title}
                        </NewsTitle>

                        <SubTitle size="17px" color="gray">
                            {props.Desc}
                        </SubTitle>
                        </ATag>
                    </A>
                    
                    <SubTitle size="17px" color="gray">
                        {props.Date}
                    </SubTitle>
                    
                </Div>
            </div>
        </Flex>
        </>
    )
}

export default Items
