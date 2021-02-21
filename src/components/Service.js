import React from 'react';

export default function Service(props) {
    return (
        <div className="card">
            <img src={props.image} alt="service" />
            <h5>{props.name}</h5>
            <p>{props.desc}</p>
            <button>Learn More</button>
        </div>
    )
}
