"use client"

import React, {useState, useEffect, useRef} from 'react';
import Image from "next/image";

import PageBase from './page_base';
import pythonLogo from './images/python-logo.svg';
import jsLogo from './images/js.jpg';
import djangoLogo from './images/django-logo.svg';
import matplotlibLogo from './images/matplotlib-logo.webp';
import numpyLogo from './images/numpy-logo.svg';
import pandasLogo from './images/pandas-logo.svg';
import reactLogo from './images/React-logo.svg';


const Skills: React.FC = () => {
    
    const [clickedPythonLogo, setClickedPythonLogo] = useState(false);
    const [clickedJsLogo, setClickedJsLogo] = useState(false);  
    const djangoLogoRef = useRef<HTMLImageElement>(null); 
    const jsCategorySection = useRef<HTMLImageElement>(null);
    
    const onClickPythonLogo = () => {
        setClickedPythonLogo(!clickedPythonLogo);
    };
    const onClickJsLogo = () => {
        setClickedJsLogo(!clickedJsLogo);
    }; 
    
    useEffect(() => {
        if (djangoLogoRef.current) {
            if (clickedPythonLogo) {
                djangoLogoRef.current.classList.remove("hidden");
                djangoLogoRef.current.classList.add('animate-django');
            } else {
                djangoLogoRef.current.classList.add("hidden"); 
                djangoLogoRef.current.classList.remove('animate-django');
            }
        }
    }, [clickedPythonLogo]);

    useEffect(() => {
        if (jsCategorySection.current) {
            if (clickedJsLogo) {
                jsCategorySection.current.classList.remove("hidden");
                jsCategorySection.current.classList.add('animate-django');
            } else {
                jsCategorySection.current.classList.add("hidden"); 
                jsCategorySection.current.classList.remove('animate-django');
            }
        }
    }, [clickedJsLogo]);

    const text: React.JSX.Element = (
        <>
            Few of my skills:
            <ol className="flex flex-col gap-5 pt-30">
                <li className="flex flex-row gap-50">
                    <Image
                        src={pythonLogo}
                        alt="Python-logo"
                        width={100}
                        className="cursor-pointer transition-transform duration-300 hover:scale-110 pythonImage"
                        onClick={onClickPythonLogo}
                    />
                     
                </li>
                <li>
                    <Image
                        src={jsLogo}
                        alt="Javascript-logo"
                        width={100}
                        className="cursor-pointer transition-transform duration-300 hover:scale-110"
                        onClick={onClickJsLogo}
                    />
                </li>
            </ol>
        </>
    )

    const RightSide: React.JSX.Element = (
        <div className="pt-60">
            <ol>
                <li>
                   <div className="flex flex-col transitionOnHoverPython hidden gap-5" ref={djangoLogoRef} >
                        <a href="https://www.djangoproject.com/">
                            <Image src={djangoLogo} alt="Django-logo" width={100} />
                        </a> 
                        <a href="https://matplotlib.org/stable/">
                            <Image src={matplotlibLogo} alt="Matplotlib-logo" width={100} />
                        </a> 
                        <a href="https://numpy.org/">
                            <Image src={numpyLogo} alt="Numpy-logo" width={100} /> 
                        </a> 
                        <a href="https://pandas.pydata.org/">
                            <Image src={pandasLogo} alt="Pandas-logo" width={100} /> 
                        </a> 
                    </div>  
                </li>
                <li>
                    <div className="hidden" ref={jsCategorySection}>
                        <a href='https://react.dev/'>
                            <Image src={reactLogo} alt="React-logo" width={100} />
                        </a>
                    </div>
                </li>
            </ol> 
        </div>
    )
    
    return (
        <>
            <PageBase heading={"Skills"} text={text} rightSide={RightSide} /> 
        </>
    );
}

export default Skills;