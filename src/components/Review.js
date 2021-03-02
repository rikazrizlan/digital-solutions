import React from 'react';
import Title from './Title';
import { Spring } from 'react-spring/renderprops';

export default function Review(props) {
    return (
        <section className="reviews">
            <Title title="Latest Review" />
            <Spring
                from = {{opacity: 0}}
                to = {{opacity: 1}}
                config = {{delay: 500, duration:1000}}
            >
                {crops => (
                    <div style={crops} className="review-card">
                        <img src={props.image} alt="client" />
                        <p>{props.title}<br/>
                        <span>{props.review}</span></p>
                    </div>
                )}
            </Spring>
            
        </section>    
    )
}
