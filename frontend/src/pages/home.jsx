import React from "react";
import Header from "../home/header";
import Footer from "../home/footer";
import '../home/home.css'
import HeroSection from "../home/heroSection";

export default function Home()
{
    return (
        <>
            <Header />
            <HeroSection />

            <Footer />
        </>
    );
}