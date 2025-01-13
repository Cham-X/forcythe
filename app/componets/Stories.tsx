import React from 'react'
import StoryMenuBar from './StoryMenuBar'

const Stories = () => {
    return (
        <section className='py-10 section-padding'>
            <div>
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
                    Discover the <span className='text-accent'> transformative stories</span> of startups that scaled new heights with us
                </p>
            </div>
            <div className='"w-full overflow-x-scroll no-scrollbar"'>
                <StoryMenuBar />
            </div>
        </section>
    )
}

export default Stories
