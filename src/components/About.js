import React from 'react'

// import image
import Image from '../assets/img/My DP.jpg'

const About = () => {
    return (
        <section id='about' className='section bg-secondary'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-24">
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Vivek Pradhan
                            </h2>
                            <p className='mb-4 text-accent'>Freelance Web Developer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat tempora corrupti odio nemo eos possimus aperiam voluptas cum adipisci. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, laboriosam!</p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'><a href="#contact">Contact me</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About