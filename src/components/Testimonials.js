import React from 'react'

// import components
import TestimonialSlider from '../components/TestimonialSlider'

const Testimonials = () => {
  return (
    <section id='testimonials' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other people says</h2>
                <p className='subtitle text-sky-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium vitae consequuntur sequi laborum, ipsam consectetur tempore. Ex, provident similique!</p>
            </div>
            <TestimonialSlider />
        </div>
    </section>
  )
}

export default Testimonials