import React from 'react';
import HeroImg from '../images/hero.jpg';
import Service from '../components/Service'
import dev from '../images/dev.png';
import uiux from '../images/uiux.png';


export default function Home() {
    return (
        <>
            <div className="hero">
            <img src={HeroImg} alt="hero" />
            <h2>Best and Most Flexible <br/><span>Digital Solutions</span></h2>
            </div>
            <section className="services">
                <h2>Services We Provide</h2>
            <div className="services-center">
                <Service name="Web Development" image={dev} desc="We provide the best Web Application solutions for our customers." />
                <Service name="UI/UX" image={uiux} desc="We provide the best Web Application solutions for our customers." />
                <Service name="UI/UX" image={uiux} desc="We provide the best Web Application solutions for our customers." />
            </div>
            </section>
        </>   
    )
}
