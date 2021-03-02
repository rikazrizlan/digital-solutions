import React from 'react';
import Member from './Member';
import Title from './Title';

import webdev from '../images/webdev.jpg';
import mobiledev from '../images/mobiledev.jpg';
import designer from '../images/designer.jpg';
import businessanalyst from '../images/businessanalyst.jpg';
import qualityassurance from "../images/qualityassurance.jpg";
import productdelivery from "../images/productdelivery.jpg";

export default function Team() {
    return (
        <section id="team" className="team">
            <Title title="Meet our Team" />
            <div className="team-center">
                <Member image={webdev} name="John Doe" role="CEO" />
                <Member image={designer} name="Jessica" role="Product Designer" />
                <Member image={mobiledev} name="Rookie" role="Senior Developer" />
                <Member image={businessanalyst} name="Mari Candella" role="Co-Founder & Buiness Analyst" />
                <Member image={qualityassurance} name="Tareq" role="Quality Assurance" />
                <Member image={productdelivery} name="Osman" role="Product Delivery" />
            </div>
        </section>
    )
}
