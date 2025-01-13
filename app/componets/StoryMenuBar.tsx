"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const stories = [
    {
        logo: "assets/images/starks logo.svg",
        logoname: "starks",
        name: "Starks Associate",
        story: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
        position: 'John, Management',
        image: "assets/images/starks.svg",
    },
    {
        logo: "assets/images/executivepros logo.svg",
        name: "ExecutivePros",
        story: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
        position: 'Testimony, Co-founder',
        image: "assets/images/starks.svg",
    },
    {
        logo: "assets/images/stacai logo.svg",
        name: "Stac AI",
        story: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
        position: 'Edwin, Former CTO',
        image: "assets/images/starks.svg",
    },
    {
        logo: "assets/images/iwaria logo.svg",
        name: "Iwaria",
        story: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        position: 'Iwaria, Founder',
        image: "assets/images/starks.svg",
    },
    {
        logo: "assets/images/beaupreneur logo.svg",
        name: "Beaupreneur",
        story: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
        position: 'Christiana, Founder',
        image: "assets/images/starks.svg",
    },
]

const StoryMenuBar = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Track the active story index
    const transitionTime = 5000; // 5 seconds for auto transition

    // Handle auto-transition between stories
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
        }, transitionTime);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    // Handle logo click
    const handleLogoClick = (index: number) => {
        setActiveIndex(index);
    };
    return (
        <>
            <div className='w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]'>
                {stories.map((story, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleLogoClick(index)}
                            className={`w-full p-[1.1rem] cursor-pointer false transition-all duration-300  ${activeIndex === index ? 'bg-[#06438C]' : ''
                                }`}>
                            <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                                <Image
                                    src={story.logo}
                                    alt="story logo"
                                    width={20}
                                    height={20}
                                    className='object contain'
                                />
                                {story.logoname}
                            </div>
                        </div>)
                }
                )}
            </div>

            <article
                key={activeIndex}
                className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#06438C] lg:relative">
                <div className="sm:basis-[58%] pr-3">
                    <p className='text-base font-bold mb-3'>{stories[activeIndex].name}</p>
                    <p className="text-base leading-7 mb-3">{stories[activeIndex].story}</p>
                    <p className="text-[15px] font-semibold mb-4">{stories[activeIndex].position}</p>
                </div>
                <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                    <div className='bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl'>
                        <Image
                            src={stories[activeIndex].image}
                            alt={stories[activeIndex].name}
                            layout='fill'
                            loading='lazy'
                            className='rounded-xl relative object-top position: absolute; height: 100%; width: 100%; inset: 0px; object-fit: cover'
                        />
                    </div>
                </div>
            </article>
        </>
    )
}

export default StoryMenuBar
