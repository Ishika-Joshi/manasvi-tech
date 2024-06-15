import React from "react";
import ManasviLogo from "../../../assets/images/manasvi_logo.png"
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
  }


const LogoContainer = styled.div`
${tw`
    flex
    items-center
    `};
`;
const LogoText = styled.div`
${tw`
    text-xl
    md:text-2xl
    font-bold
    text-purple-500
    m-1
    `};
`;

const Image = styled.div`
width: auto;
${tw`
    h-6
    md:h-9
    `};
img{
width: auto;
height: 100%;
}
`;

export function Logo(props: ILogoProps){
    const { color, bgColor } = props;

    return (
      <LogoContainer>
        <Image>
          <img src={bgColor === "dark" ? ManasviLogo : ManasviLogo} />
        </Image>
        <LogoText>Manasvi Technologies</LogoText>
      </LogoContainer>
    );
  }