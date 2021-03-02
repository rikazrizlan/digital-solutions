import React from 'react';
import {Link} from 'react-router-dom';

export default function Service({service}) {
    const {name, desc, slug, images} = service;

    return (
        <div className="card">
            <img src={images[0]} alt="service" />
            <h5>{name}</h5>
            <p>{desc}</p>
            <Link className="button" to={`/services/${slug}`}>Learn More</Link>
        </div>
    )
}
