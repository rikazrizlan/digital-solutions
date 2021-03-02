import React from 'react';

export default function Member(props) {
    return (
        <div className="member">
            <img src={props.image} alt="team" />
            <h6>{props.name}</h6>
            <p>{props.role}</p>
        </div>
    )
}
