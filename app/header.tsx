
'use client'
import React, { useState, useEffect } from 'react';


interface SkillItem {
    name: string,
    displayLength: number
}

const Header: React.FC = () => {

    const skills: Array<SkillItem> = [
        {name: "Backend", displayLength: 5},
        {name: "Frontend", displayLength: 5},
        {name: "Engineering", displayLength: 5},
    ]
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
    const [currentSkillText, setCurrentSkillText] = useState(skills[0].name[0])


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        }, skills[currentSkillIndex].displayLength * 1000);
        console.log(interval)
    }, []);

    useEffect(() => {
        let lastShownCharId = 0;
        setCurrentSkillText(skills[currentSkillIndex].name[0]);
        const textInterval = setInterval(() => {
            if (lastShownCharId < skills[currentSkillIndex].name.length - 1) {
                setCurrentSkillText((prevText) => prevText + skills[currentSkillIndex].name[lastShownCharId]);
                lastShownCharId += 1;
            } else {
                clearInterval(textInterval)
            }
        }, 400);

        // return () => clearInterval(textInterval);
    }, [currentSkillIndex]);

    return (
        <div className="flex flex-col gap-8 pt-30">
            <div className="flex flex-row gap-8">
                <span className="text-4xl font-bold text-yellow-600">Tobias</span> _ <span className="text-4xl text-white-700">{currentSkillText}</span>
            </div>
            <div className="w-100 text-xl">
                <p>Master of science of aeronautical and astronautical engineering from technical university Berlin🇩🇪. Multiple years of experience working in engineering research groups in the fields of turbomachinery acoustics, flight dynamics and flight control, fluid dynamics and building energy environment. Strong interest in software engineering and web-development.</p>
            </div>
            <div className="flex flex-row gap-10">
                <a href="#contact" className="bg-yellow-600 font-bold px-6 rounded text-2xl">Contact</a>
                <a href="#about" className="bg-white font-bold px-6 rounded text-yellow-600 text-2xl">About me</a>
            </div>
        </div>
    )
}

export default Header;