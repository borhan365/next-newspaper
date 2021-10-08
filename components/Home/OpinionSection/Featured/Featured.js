import React from 'react';
import { Div, NewsTitle, SubTitle, TitleSpan, Underline } from '../../../Styled/Home.Styled';


function Featured(props) {
    return (
        <>
            <Div border="1px solid lightgray" padding="20px">
                {/* Subtitle */}
                <SubTitle size="20px" weight="bold" color="#34b8b5">
                    {props.SubTitle}
                </SubTitle>

                {/* Title */}
                <NewsTitle size="30px" margin="20px 0px" left="-25px" width="90%">
                    <TitleSpan>{props.Title}</TitleSpan>
                </NewsTitle>

                {/* Desc */}
                <SubTitle size="20px" height="27px" mt="20px">
                    {props.Desc}
                </SubTitle>

                {/* Author */}
                <Div mt="20px">
                    <Underline />
                    <NewsTitle>
                        {props.Author}
                    </NewsTitle>
                </Div>

            </Div>
        </>
    )
}

export default Featured
