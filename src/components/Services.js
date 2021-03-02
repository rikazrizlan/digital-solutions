import React from 'react';
import Service from './Service';
import Title from './Title';

export default function Services({services}) {
    return (
        <section id="services" className="services">
            <Title title="Services We Provide" />
            <div className="services-center">
                {
                    services.map(item => {
                        return (
                            <Service key={item.id} service={item} />
                        )
                    })
                }
            </div>
        </section> 
    )
}
