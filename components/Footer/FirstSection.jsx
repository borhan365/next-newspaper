
import React from 'react'
import { Link } from 'react-router-dom';
import { FooterLogo } from './Footer.styled';
import { ImageThumb, Image, A, ATag, NewsTitle, Div, Flex, Col } from '../../components/Styled/Home.Styled'
import { RadioButton, RadioButtonChecked, VersionItem, VersionWrapper } from '../Header/Header.styled';

const Logo = "https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg";

function FirstSection() {
    return (
        <>

            <Flex>

                {/* First column */}
                <Col width="30%">

                {/* logo */}
                <ImageThumb>
                    <A href="/" passHref>      
                        <ATag>                  
                            <Image src={Logo} alt="footer logo" />
                        </ATag>
                    </A>
                </ImageThumb>

                <VersionWrapper>
                  <VersionItem>
                      <RadioButtonChecked />বাংলা
                  </VersionItem>
                  <VersionItem>
                      <RadioButton /> ইংরেজি
                  </VersionItem>
                  <VersionItem>
                      <RadioButton /> উত্তর আমেরিকা
                  </VersionItem>
              </VersionWrapper>

                </Col>

                {/* Second column */}
                <Div>
                    <ul>
                        <li>বিশেষ সংখ্যা</li>
                        <li>গোলটেবিল</li>
                        <li>অন্য আলো</li>
                        <li>কিশোর আলো</li>
                        <li>বিজ্ঞানচিন্তা</li>
                        <li>প্রতিচিন্তা</li>
                        <li>প্রথমা</li>
                        <li>বন্ধুসভা</li>
                        <li>প্রথম আলো ট্রাস্ট</li>
                        <li>এবিসি রেডিও</li>
                        <li>মোবাইল ভ্যাস</li>
                        <li>নাগরিক সংবাদ</li>
                    </ul>
                </Div>

                {/* third column */}
                <Div>
                    <ul>
                        <li>প্রথম আলো</li>
                        <li>বিজ্ঞাপন</li>
                        <li>সার্কুলেশন</li>
                        <li>কিশোর আলো</li>
                        <li>নীতিমালা</li>
                        <li>গোপনীয়তা নীতি</li>
                        <li>যোগাযোগ</li>
                    </ul>
                </Div>

            </Flex>
        </>
    )
}

export default FirstSection
