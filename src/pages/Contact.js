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
            <p>At Digital Solutions we envision to provide the best technology solutions. let’s do something small together!</p>
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