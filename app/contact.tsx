import React from 'react';
import Image from "next/image";

import PageBase from './page_base';
import githubLogo from './images/github-mark-white.png'; 
import linkedInLogo from './images/LI-In-Bug.png';

const Contact: React.FC = () => {

    const text: React.JSX.Element = (
        <>
            <p>Connect with me via social media or check out my projects on github:</p>
            <ol className="flex flex-col list-disc-none pl-5 pt-5 gap-5">
                <li>
                    <a className="flex flex-row gap-5" href="https://github.com/expeditionengineer">
                        <Image src={githubLogo} alt={"Github Logo"} width={30} height={30} />
                        <span>ExpeditionEngineer</span>
                    </a> 
                </li>
                <li>
                    <a className="flex flex-row gap-5" href="https://www.linkedin.com/in/martin-tobias-degner-b577b82b2/">
                        <Image src={linkedInLogo} alt={"LinkedIn Logo"} width={30} height={30} />
                        <span>Tobias Degner</span>
                    </a>
                </li>
            </ol>
        </> 
    )

    return (
        <>
            <PageBase heading={"Contact"} text={text} />
        </>
    );
}

export default Contact;