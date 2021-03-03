import React from 'react';
import {FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <section className="footer">
            <h4 className="footer-text">Developed with love, <a href="rikazrizlan.netlify.app">Rikaz</a> 2021.<br/><span>Image Source, pngtree.com.</span></h4>
            <ul className="sci">
                <li><a href="https://github.com/rikazrizlan"><FaGithub /></a></li>
                <li><a href="https://twitter.com/itsjustrikaz"><FaTwitter /></a></li>
                <li><a href="https://www.linkedin.com/in/rikaz-rizlan-778401195/"><FaLinkedinIn /></a></li>
            </ul>
        </section>
    )
}
