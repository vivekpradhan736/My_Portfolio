import React from 'react'

// import components
import ExperienceSlider from './ExperienceSlider'

const Experience = () => {
  return (
    <section id='experience' className='section bg-secondary snap-x'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-experience relative before:absolute before:opacity-20 before:-top-[2rem] before:-left-40 before:hidden before:lg:block'><span className='text-white'>My Tech Experience</span></h2>
                <p className='subtitle text-sky-300'>In my Programming journey, I have experience and Work on real-world projects and continuing to work on new projects for a Client . </p>
            </div>
            <ExperienceSlider />
        </div>
    </section>
  )
}

export default Experience