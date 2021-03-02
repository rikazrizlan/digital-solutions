import React from 'react';
import ourSpace from '../images/about.jpg';
import Title from './Title';

export default function About() {
    return (
        <section className="about" id="about">
            <Title title="About Us" />
            <div className="about-center">
                <img className="fit-bg" src={ourSpace} alt="Our Space" />
                <p>At Digital Solutions we envision to provide the best technology solutions to grow your business to the nect vital level. We’re determined to provide you with all the services you might need to innovate, grow and succeed. We welcome deep-thinkers, innovators and mischief-makers of all shapes and sizes to brush shoulders and inspire each other to stand tall together with the world at large. We are building a tribe of smart, sassy and fun entrepreneurs to take on the next big challenge and make Sri Lanka the hub of innovation in Asia.<br/>
                    <br/>Our clients love our dedication and we’re sure you will too. If you want to try Digital Solutions, let’s do something small together!</p>
            </div>
        </section>
    )
}
