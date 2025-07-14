import React from "react";

import Footer from "../components/utility/footer";
import '../components/home/home.css'
import HeroSection from "../components/home/heroSection";
import HeroSection2 from "../components/home/heroSection2";
import HeroSection3 from "../components/home/heroSection3";
import HeroSection4 from "../components/home/heroSection4";
import Pricing from "../components/home/pricing";

import Layout from "../components/layout/Layout";
import Slider from "../components/utility/slider";
import Header from "../components/utility/header";
import Login from "../components/account/login";
import Account from "./account";


export default function Home()
{
    return (
        <>
            
            <Header />        
            <HeroSection />
            <HeroSection2 />
            <HeroSection3 />
            <HeroSection4 />
            <Slider />
            <Pricing />
            <Footer />
            
        </>
    );
}