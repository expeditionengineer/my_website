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
import jQueryLogo from './images/jQuery-logo.svg';
import nextjsLogo from './images/nextjs-logo.svg';
import droneLogo from './images/drone-logo.svg';
import px4Logo from './images/px4-logo.svg';
import rosLogo from './images/ros-logo.png';


const Skills: React.FC = () => {
    
    const [clickedPythonLogo, setClickedPythonLogo] = useState(false);
    const [clickedJsLogo, setClickedJsLogo] = useState(false);  
    const [clickedDroneLogo, setClickedDroneLogo] = useState(false);   

    const djangoLogoRef = useRef<HTMLImageElement>(null); 
    const jsCategorySection = useRef<HTMLImageElement>(null);
    const droneCategorySection = useRef<HTMLImageElement>(null);
  
    const onClickPythonLogo = () => {
        setClickedPythonLogo(!clickedPythonLogo);
    };
    const onClickJsLogo = () => {
        setClickedJsLogo(!clickedJsLogo);
    }; 
    const onClickDroneLogo = () => {
        setClickedDroneLogo(!clickedDroneLogo);
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

    useEffect(() => {
        if (droneCategorySection.current) {
            if (clickedDroneLogo) {
                droneCategorySection.current.classList.remove("hidden");
                droneCategorySection.current.classList.add('animate-django');
            } else {
                droneCategorySection.current.classList.add("hidden"); 
                droneCategorySection.current.classList.remove('animate-django');
            }
        }
    }, [clickedDroneLogo]);

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
                <li>
                    <Image
                        src={droneLogo}
                        alt="Drone-logo"
                        width={100}
                        className="cursor-pointer transition-transform duration-300 hover:scale-110 invert"  
                        onClick={onClickDroneLogo} 
                    />
                </li>
            </ol>
        </>
    )

    const RightSide: React.JSX.Element = (
        <div className="pt-60">
            <ol className="flex flex-row gap-5">
                <li>
                   <div className="flex flex-col transitionOnHoverPython hidden gap-5" ref={djangoLogoRef} >
                        <a href="https://www.djangoproject.com/">
                            <Image src={djangoLogo} alt="Django-logo" width={150} />
                        </a> 
                        <a href="https://matplotlib.org/stable/">
                            <Image src={matplotlibLogo} alt="Matplotlib-logo" width={150} />
                        </a> 
                        <a href="https://numpy.org/">
                            <Image src={numpyLogo} alt="Numpy-logo" width={150} /> 
                        </a> 
                        <a href="https://pandas.pydata.org/">
                            <Image src={pandasLogo} alt="Pandas-logo" width={150} /> 
                        </a> 
                    </div>  
                </li>
                <li>
                    <div className="flex flex-col hidden gap-5" ref={jsCategorySection}>
                        <a href='https://react.dev/'>
                            <Image src={reactLogo} alt="React-logo" width={150} />
                        </a>
                        <a href='https://brand.jquery.org/'>
                            <Image src={jQueryLogo} alt="jQuery-logo" width={150} />
                        </a>  
                        <a href='https://nextjs.org/'>
                            <Image src={nextjsLogo} alt="nextjs-logo" width={150} />
                        </a> 
                    </div>
                </li>
                <li>
                    <div className="flex flex-col hidden gap-5" ref={droneCategorySection} >
                        <a href='https://px4.io/'>
                            <Image src={px4Logo} alt="px4-logo" width={150} />
                        </a> 
                        <a href='https://www.ros.org/'>
                            <Image src={rosLogo} alt="ros-logo" width={150} />
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