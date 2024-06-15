import React from "react";
import { Product } from "../../../typings/product";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";

interface ProductProps extends Product{

}

const ProductContainer = styled.div`
      width: 16.5em;
      min-height: 22.2em;
      max-height: 22.2em;
      overflow: auto;
      box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
      ${tw`
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-white
        rounded-md
        m-1
        sm:m-3
        md:m-6
      `};
`;

const ProductThumbnail = styled.div`
        width: 100%;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
`;

const ProductName = styled.h3`
        ${tw`
            text-base
            font-bold
            text-black
            mt-1
            mb-1
        `};
`;

const ProductDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const ProductDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;


const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const ViewButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `};
`;

export function ProductsCard (props: ProductProps){
    const {
        name,
        thumbnailSrc,
        description,
        demoLink,
      } = props;
    return <ProductContainer>
        <ProductThumbnail>
            <img src={thumbnailSrc}></img>
        </ProductThumbnail>
        <ProductName>{name}</ProductName>
        <Seperator></Seperator>
        <ProductDetailsContainer>
            <ProductDetail>
                {description}
            </ProductDetail>
        </ProductDetailsContainer>
        <ViewButton text="Demo Link" link={demoLink}/>
    </ProductContainer>
};