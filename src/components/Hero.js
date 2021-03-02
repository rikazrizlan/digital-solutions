import React from 'react'
import HeroImg from '../images/hero.jpg';
import {Spring} from 'react-spring/renderprops';

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroImg} alt="hero" />
            <Spring
                from = {{opacity: 0}}
                to = {{opacity: 1}}
                config = {{delay: 300, duration:1000}}
            >
                {props => (
                     <h2 style={props}>Best and Most Flexible <br/><span>Digital Solutions</span></h2>
                )}
            </Spring>
        </div>
    )
}
