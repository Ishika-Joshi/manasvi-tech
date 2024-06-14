import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";


const AboutUsContainer = styled.div`
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
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      
      <InfoContainer>
        <Title>Get To Know Us</Title>
        <InfoText>
        Manasvi Technologies (OPC) Pvt. Ltd. is an IT Company situated at Bhopal,Madhya Pradesh (India).
         Our professionals design element that complements the content, an interactive, user- friendly interface 
         with integrated application features controlled with a technical foundation at the backend, to give the visitor 
         a sense of a personal touch. Great website designing is actually about creating a website that aligns with an overarching strategy.
         Well-designed websites offer much more than just esthetics. They attract visitors and help people understand your product, company, 
         and brand. We have always been open to newest technologies, and have worked on future technologies at a time when people were 
         sceptical about it. We are learners and hence, we never cease to educate ourselves on anything new and different that comes up in this industry. 
        And this eagerness to stay ahead of the game is what has set us apart.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}