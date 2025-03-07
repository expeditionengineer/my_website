'use client'
import React, { useState } from 'react';
import Image from "next/image";

import rrtImage from './images/rrtShorterPathForComparisonAStar.png';

const slides = [
    {
        id: 1,
        image: rrtImage,
        caption: 'Slide 1'
    },
];

const SlideShow: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="flex gap-5 flex-row mt-30 p-10 border border-grey-500 rounded">
            <button onClick={prevSlide}>{"<"} Prev</button>
            <Image src={slides[0].image} alt="Hi" />
            <button onClick={nextSlide}>Next {">"}</button>
        </div>        
    );
};

export default SlideShow;