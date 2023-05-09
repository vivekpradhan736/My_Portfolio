import React from 'react'
import './About.css'

// import image
import Image from '../assets/img/My DP.jpg'

const About = () => {
    return (
        <section id='about' className='section bg-secondary '>
            <div className="container  mx-auto">
                <div className="container flex flex-col xl:flex-row gap-24">
                    <img className=' object-cover h-full  sm:w-[300px] md:w-[350px] lg:w-[400px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} alt="" />
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <div className="flex flex-col">
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Vivek Pradhan
                            </h2>
                            <p className='mb-4 text-accent'>Freelance Web Developer</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8 text-orange-50'>Building projects my clients love have always been my passion. Being in the web development industry for over 1 year and serving more than 8 happy clients worldwide. I'm always motivated to do more! <br /> <br />Hi, my name is Vivek Pradhan. I'm a Freelance Web Developer based in Haridwar, India. I am a pursuing Computer Science & Engineering from GKV Haridwar. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.</p>
                        </div>
                        <button id='vivek' className='btn btn-md bg-accent hover:bg-accent-hover transition-all'><a href="#contact">Contact me</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About