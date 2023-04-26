import React from 'react'

// import services data
import { services } from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
        <div className="container mx-auto">
            {/* section title */}
            <div className='flex flex-col items-center text-center'>
                <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>What I do for clients</h2>
                <p className='subtitle text-sky-300'>We were provided excellent clients service. All responses were prompt and professional.</p>
            </div>
            {/* item grid */}
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {services.map((service, index)=> {
                    const { img, image, name, description } = service;
                    return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                        {/* icon */}
                        <div>
                            <img src={image} alt="" className='rounded-md' />
                        </div>
                        <h4 className='text-xl text-orange-400 font-medium mb-2 p-3'>{name}</h4>
                        <p className='text-orange-50'>{description}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services