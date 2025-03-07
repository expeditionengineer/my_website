import React from 'react';

import PageBase from './page_base';

const Projects: React.FC = () => {
    
    const text: JSX.Element = (
        <>
            My past and on-going projects:
        </>
    )
    
    return (
        <>
            <PageBase heading={"Projects"} text={text} />
        </>
    )
}

export default Projects;