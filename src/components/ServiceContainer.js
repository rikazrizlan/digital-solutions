import React from 'react'
import Services from './Services';
import { withSolutionsConsumer } from '../context';

function ServiceContainer({context}) {
    const {services} = context;


    return(
        <>
            <Services services={services} />
        </>
    );
}

export default withSolutionsConsumer(ServiceContainer);