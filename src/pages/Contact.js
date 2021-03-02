import React from 'react';
import Title from '../components/Title';
import {FaArrowLeft} from 'react-icons/fa';
import{Link} from 'react-router-dom';

export default function About() {
    return (
        <section className="contact" id="contact">
            <Link className="btn-primary" to="/"><FaArrowLeft className="fa"/>Back Home</Link>
            <Title title="Contact Us" />
            <div className="contact-center">
            <p>At Digital Solutions we envision to provide the best technology solutions to grow your business to the nect vital level. We’re determined to provide you with all the services you might need to innovate, grow and succeed. We welcome deep-thinkers, innovators and mischief-makers of all shapes and sizes to brush shoulders and inspire each other to stand tall together with the world at large. We are building a tribe of smart, sassy and fun entrepreneurs to take on the next big challenge and make Sri Lanka the hub of innovation in Asia.<br/>
            <br/>Our clients love our dedication and we’re sure you will too. If you want to try Digital Solutions, let’s do something small together!</p>
            <form data-netlify="true">
                <label>Name</label>
                <div className="field-name"> 
                    <input type="text" name="name" required />
                </div>
                <label>Email</label>
                <div className="field-email">
                    <input type="email" name="email" required /> 
                </div>
                <label>Message</label>
                <div className="field-message">
                    <textarea  name="message" required></textarea>
                </div>
                <a href="#contact" className="button">Submit</a>
            </form>
            </div>
        </section>
    )
}