import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import ServiceContainer from '../components/ServiceContainer';
import Team from '../components/Team';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Team />
            <ServiceContainer />
            <Footer />
        </>   
    )
}
