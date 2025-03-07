import React from 'react';

import PageBase from './page_base';

const About: React.FC = () => {
    const text: JSX.Element = (
        <>
            <p>I studied aeronautical & astronautical engineering at the technical university Berlin.
            I focused my studies on scientific simulation, including computational fluid dynamics (CFD),
            flight simulation and path planning. During that time i worked as a student assistant at the following departments at TU Berlin:
            </p>  
                <ul className="flex flex-col gap-2 pl-6 pt-10 list-disc">
                    <li>Turbomachinery- & Thermoaccustics, </li>
                    <li>Flight Mechanics, Flight Control and Aeroelasticity,</li>
                    <li>Flow Instabilities and Dynamics</li>
                    <li>Digital Networking of Buildings, Energy Supply Systems and Users</li>
                </ul>
        </>
    );
    return (
        <>
            <PageBase heading={"About"} text={text} />
        </>
    );
};

export default About;