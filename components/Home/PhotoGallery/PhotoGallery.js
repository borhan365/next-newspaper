import React from "react";
import {
  CategoryTitle,
  CategoryTitleText,
  CategoryTitleTextIcon,
  Col,
  Flex,
  GridTwoColumn,
} from "../../Styled/Home.Styled";
import Featured from "./Featured";
import FeaturedContent from "./FeaturedContent";
import Items from "./Items";
import ItemsContent from "./ItemsContent";

function PhotoGallery() {
  return (
    <>
      {/* Title */}
      <CategoryTitle mb="5px">
        <CategoryTitleText>
          ছবিঘর <CategoryTitleTextIcon />
        </CategoryTitleText>
      </CategoryTitle>

      <Flex>
        {/* Featured Section */}
        <Col width="50%">
          {FeaturedContent.map((val) => {
            return <Featured Title={val.Title} Thumb={val.Thumb} />;
          })}
        </Col>

        {/* Right */}
        <Col width="50%">
          <GridTwoColumn>
            {ItemsContent.map((val) => {
              return <Items Title={val.Title} Thumb={val.Thumb} />;
            })}
          </GridTwoColumn>
        </Col>
      </Flex>
    </>
  );
}

export default PhotoGallery;
