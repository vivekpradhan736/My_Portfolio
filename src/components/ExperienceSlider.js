import React from 'react'

// import experience data
import { experience } from '../data'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';

const ExperienceSlider = () => {
    // const { authorImg, authorText, authorName, authorPosition } = item;


    return (
        <>
            {/* <Swiper pagination={{
                clickable: true,
            }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={{ Autoplay, Pagination }}
                className='mySwiper'
            > */}
                <div className='snap-x flex snap-mandatory w-full overflow-x-scroll'>
                    {experience.map((item, index) => 
                        (<div className='snap-start w-screen flex flex-col items-center '>
                            {/* <SwiperSlide key={index}> */}
                                <div className='flex  w-screen gap-12 lg:gap-32 max-sm:mb-6 '>
                                    <div className='w-48 h-48 lg:w-[250px] lg:h-[328px]'>
                                        <img className='rounded-2xl' src={item.experienceImg} alt="" />
                                    </div>
                                    <div className="flex flex-col lg:max-w-3xl max-w-xs">
                                        <h2 className='font-body mb-2 text-3xl font-bold underline '>{item.experienceText}</h2>
                                        <h4 className='font-body mb-4 text-1.5xl text-accent '>{item.experienceTime}</h4>
                                        <div>
                                            <p className='text-lg text-gray-300'>{item.experienceTitle}</p>
                                            {/* <p>{item.authorPosition}</p> */}
                                        </div>
                                    </div>
                                    
                                </div>
                            {/* </SwiperSlide> */}
                        </div>)


                    )}
                </div>
            {/* </Swiper> */}
        </>
    )
}

export default ExperienceSlider