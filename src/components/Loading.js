import cube from '../images/cube.png';
import {Spring} from 'react-spring/renderprops';
import React from 'react'
import {FaArrowRight} from 'react-icons/fa';

export default function Loading({handleClick}) {
    return (
        <div className="loading">
            <img className="App-logo"  src={cube} alt="rubik's cube" />
            <Spring
                from = {{opacity: 0}}
                to = {{opacity: 1}}
                config = {{delay: 1000, duration:1000}}
            >
                {props => (
                    <button style={props} className="btn" onClick={handleClick}><FaArrowRight/></button>
                )}
                
            </Spring>
        </div>
    )
}
