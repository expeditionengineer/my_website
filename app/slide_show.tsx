'use client'
import React, { useState } from 'react';
import Image from "next/image";

import rrtImage from './images/rrtShorterPathForComparisonAStar.png';

const slides = [
    {
        id: 1,
        image: rrtImage,
        caption: 'Calculation of smooth quadrocopter trajectories under consideration of the current wind conditions.'
    },

];

const SlideShow: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log(currentSlide);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex gap-5 flex-row mt-30 p-20 border border-grey-500 rounded">
            <button className="hover:scale-110 cursor-pointer" onClick={prevSlide}>{"<"}</button>
            <div className="flex flex-col gap-5">
                <Image src={slides[currentSlide].image} alt="Hi" />
                <p>{slides[currentSlide].caption}</p>
            </div> 
            <button className="hover:scale-110 cursor-pointer" onClick={nextSlide}>{">"}</button>
        </div>        
    );
};

export default SlideShow;