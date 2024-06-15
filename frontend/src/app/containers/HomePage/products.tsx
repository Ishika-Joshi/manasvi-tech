import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import { Product } from "../../../typings/product";
import { ProductsCard } from "../../components/product";


const ProductsContainer = styled.div`
    ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        mb-10

    `};
`;


const Title = styled.h2`
${tw`
  text-3xl
  lg:text-5xl
  text-black
  font-extrabold
`};
`;
const ProductContainer = styled.div`
${tw`
  w-full
  flex
  flex-wrap
  justify-center
  mt-7
  md:mt-10
`};
`;



export function Products(){
    const product1: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png",
        name: "E-COMMERCE",
        description: "Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and consumers alike in the digital marketplace.",
        demoLink: "https://manasvimart.in/"
    }
    const product2: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/hotel.a814f46366181d78816d.png",
        name: "HOTEL MANAGEMENT SYSTEM",
        description: "Run your hotel freely now, manage multiple branches with one website, human recourse management system , online as well as offline room & food booking system , get analytical reports",
        demoLink: "#"
    }
    const product3: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/clinic.1c340a09b09f367966f7.png",
        name: "CLINIC MANAGEMENT SYSTEM",
        description: "Amazing product for all our doctors, manage your clinic like never before,Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.",
        demoLink: "https://cliniccare.online/"
    }
    const product4: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/restaurnet.fbf24ed567004a2dfbf8.png",
        name: "RESTAURANT MANAGEMENT SYSTEM",
        description: "Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.",
        demoLink: "#"
    }
    const product5: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/tiffin%20logo.a40195ba6f20435a0c69.png",
        name: "TIFFIN MANAGEMENT SYSTEM",
        description: "Now get full control on incoming and outgoing of your Tiffin’s , get all information about pending payments etc. get all subscribers list with address and mode of distribution at one place.",
        demoLink: "https://mcstiffin.in/"
    }
    const product6: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/saloon.f42aa85a686aa68ecb05.png",
        name: "SALON MANAGEMENT SYSTEM",
        description: "Book appointment online, gives your customer out of the box experience, also add products which customer can buy online, create tax invoice with ease, get all your customer data at one place.",
        demoLink: "https://www.mcssaloon.in/"
    }
    const product7: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/pharmecy.6d9fd1f05da31b6cefe4.png",
        name: "PHARMACY MANAGEMENT SYSTEM",
        description: "Now running pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management, create easy tax invoice.",
        demoLink: "#"
    }
    const product8: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/hospital.2aa73a2a7fa2f4be03a9.png",
        name: "HOSPITAL MANAGEMENT SYSTEM",
        description: "Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.",
        demoLink: "https://www.hospicare.online/"
    }
    const product9: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/hrm.3d904a2fa69d95da607d.png",
        name: "HRM & CRM",
        description: "HRM software streamlines employee management, from recruitment to development, enhancing productivity and ensuring efficient HR operations for your business.",
        demoLink: "https://www.leadsrecord.online/"
    }
    const product10: Product = {
        thumbnailSrc: "https://manasviportfolio.online/static/media/Travels.8da6dad732f115ef84b8.png",
        name: "TRAVEL MANAGEMENT SYSTEM",
        description: "Travel Management System optimizes travel operations, simplifying itinerary management, scheduling, billing, and resource allocation for efficient, organized, and traveler-centric services.",
        demoLink: "https://www.manasvitravels.online/"
    }
    return <ProductsContainer>
        <Title>Explore our Products</Title>
        <ProductContainer>
            <ProductsCard {...product1}/>
            <ProductsCard {...product2}/>
            <ProductsCard {...product3}/>
            <ProductsCard {...product4}/>
            <ProductsCard {...product5}/>
            <ProductsCard {...product6}/>
            <ProductsCard {...product7}/>
            <ProductsCard {...product8}/>
            <ProductsCard {...product9}/>
            <ProductsCard {...product10}/>
        </ProductContainer>
    </ProductsContainer>

}