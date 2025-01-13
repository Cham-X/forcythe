import React from 'react'
import Button from './Button'
import Image from 'next/image'

const motionImages = [
    { image: "assets/images/activity.svg" },
    { image: "assets/images/africaFund.svg" },
    { image: "assets/images/exec-pro.svg" },
    { image: "assets/images/phone.svg" },
    { image: "assets/images/stac.svg" },
    { image: "assets/images/starks.svg" },
]

const Hero = () => {
    return (
        <>
            <section
                className='md:min-h-screen bg-[url("/assets/images/header-background.svg")] bg-no-repeat bg-top'>
                <div className='section-padding'>
                    <div className='w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]'>
                        <div className='max-w-[56rem] min-h-[180px] font-semibold'>
                            <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">We build <span className="text-accent">products</span> that shape a better future</h1>
                            <p className="text-darkgray text-base md:text-lg mb-8 leading-7">
                                We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.
                            </p>
                            <Button>Book a call</Button>
                        </div>
                    </div>
                </div>
                <div className='py-10'>
                    <div className='min-h-[60px]'>
                        <p className='text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center'>Success in <span className='text-accent'>Motion</span> – Our clients’ journey</p>
                    </div>
                    <div
                        className='flex flex-col items-stretch w-full '
                        style={{
                            background: "linear-gradient(0deg, rgba(3, 5, 22, 0)20%, rgb(3, 5, 22)80%)"
                        }}
                    >
                        <div className='flex animate-scroll-reverse  overflow-hidden'>
                            {motionImages.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='relative w-auto'>
                                        {/* <div className='bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-100'> */}
                                        <Image
                                            src={image.image}
                                            width={10}
                                            height={10}
                                            alt="motion images"
                                            loading='lazy'
                                        />
                                    </div>
                                    // </div>
                                )
                            })}
                        </div>

                        <div className='flex animate-scroll  overflow-hidden'>
                            {motionImages.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='relative w-auto '>
                                        {/* <div className='bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-100'> */}
                                        <Image
                                            src={image.image}
                                            width={10}
                                            height={10}
                                            alt="motion images"
                                        />
                                    </div>
                                    // </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
