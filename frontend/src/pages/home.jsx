import React from "react";
import Header from "../home/header";
import Footer from "../home/footer";
import '../home/home.css'
import HeroSection from "../home/heroSection";
import HeroSection2 from "../home/heroSection2";
import HeroSection3 from "../home/heroSection3";
import HeroSection4 from "../home/heroSection4";
import Pricing from "../home/pricing";

import Layout from "../layout/Layout";
import Slider from "../utility/slider";


export default function Home()
{
    return (
        <>
   
            <Header />
            <HeroSection />
            <HeroSection2 />
            <HeroSection3 />
            <HeroSection4 />
            <Pricing />
            <Footer />
            
        </>
    );
}