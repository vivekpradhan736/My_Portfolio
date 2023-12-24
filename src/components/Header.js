import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Socials from '../components/Socials'

const Header = () => {
    const [bg, setBg] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false);
        })
    })
    return (
        <header className={`${bg ? 'bg-slate-900 h-20' : 'h-24'
            } flex items-center fixed top-0 w-full
        text-white z-10 transition-all duration-300`}>
            <div className="container mx-auto h-full flex items-center justify-between">
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {/* logo */}
                <a href="#" className='text-4xl font-headername'>
                    Vivek
                </a>
                </button>
                {/* nav */}
                <div className='hidden lg:block'>
                    <Nav />
                </div>
                {/* Socials */}
                <div className='hidden lg:block'>
                    <Socials />
                </div>
                {/* nav mobile */}
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
                </div>
        </header>
    )
}

export default Header