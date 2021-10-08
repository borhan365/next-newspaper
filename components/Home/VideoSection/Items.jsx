import React from "react";
import {
  A,
  ATag,
  Div,
  Image,
  ImageThumb,
  NewsTitle,
  PlayIcon,
  SubTitle,
} from "../../Styled/Home.Styled";

function Items(props) {
  return (
    <>
      <Div>
        <PlayIcon />
        <ImageThumb width="100%" height="190px">
          <Image src={props.Thumb} alt={props.Title} />
        </ImageThumb>
        <Div mt="10px">
          <NewsTitle size="20px">
            <A href="/single" passHref>
              <ATag color="white">{props.Title}</ATag>
            </A>
          </NewsTitle>
          <SubTitle size="18px">
            <A href="/single" passHref>
              <ATag color="gray">{props.Date}</ATag>
            </A>
          </SubTitle>
        </Div>
      </Div>
    </>
  );
}

export default Items;
