import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import ServicesImg from "../../../assets/images/our-services.jpg";

const ServicesContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const ServicesItem = styled.li`
${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    `};
`;

const ImageContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;


const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-800
    font-normal
    mt-4
  `};
`;

export function OurServices() {
  return (
    <ServicesContainer>
      
      <InfoContainer>
        <Title>Our Services</Title>
        <InfoText>
        Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital innovation, 
        offering comprehensive services in web development, digital marketing, app development, 
        and IT services. Our team of experts is dedicated to delivering cutting-edge solutions 
        that drive growth and efficiency for our clients. By leveraging the latest technologies and trends, 
        we ensure your business stays ahead in the competitive digital landscape. Whether you're looking to build 
        a dynamic website, enhance your online presence, develop a mobile app, or streamline your IT operations, 
        Manasvi Technologies is your partner in digital excellence.
        </InfoText>
        <ServicesItem>Web Development</ServicesItem>
        <ServicesItem> App Development</ServicesItem>
        <ServicesItem> IT Services</ServicesItem>
        <ServicesItem> Digital Marketingt</ServicesItem>
      </InfoContainer>
      <ImageContainer>
      <img src={ServicesImg} />
      </ImageContainer>
    </ServicesContainer>
  );
}