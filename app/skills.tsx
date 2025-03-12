import React from 'react';

import PageBase from './page_base';

const Skills: React.FC = () => {
    
    const text: React.JSX.Element = (
        <>
            Few of my skills:
        </>
    )

    // const RightSide: React.JSX.Element = (
    //     <>
        
    //     </>
    // )
    
    return (
        <>
            <PageBase heading={"Skills"} text={text} /> 
        </>
    );
}

export default Skills;