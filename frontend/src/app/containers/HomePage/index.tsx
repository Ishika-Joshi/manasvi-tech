import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { TopSection } from "./topSection";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { Products } from "./products";
import { Footer } from "../../components/footer";
import { OurServices } from "./ourServices";

const PageContainer = styled.div`
${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
     `}
`;

export function HomePage(){
    return <PageContainer>
        <Navbar />
        <TopSection/>
        <Marginer direction="vertical" margin="4em" />
        <BookCard />
        <Marginer direction="vertical" margin="4em" />
        <BookingSteps />
        <Marginer direction="vertical" margin="4em" />
        <AboutUs />
        <Marginer direction="vertical" margin="8em" />
        <Products />
        <Marginer direction="vertical" margin="8em" />
        <OurServices />
        <Marginer direction="vertical" margin="8em" />
        <Footer/>
    </PageContainer>
}