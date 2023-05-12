import React from 'react'

// import experience data
import { experience } from '../data'

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import '../swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const ExperienceSlider = () => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <div className='snap-x flex snap-mandatory w-full overflow-x-scroll'>
                    {experience.map((item, index) =>
                        <SwiperSlide key={index}>
                            <div className='container flex flex-col xl:flex-row gap-8'>
                                <img className='flex object-cover h-full items-center w-56 sm:w-[230px] md:w-[250px] lg:w-[250px] mx-auto sm:mx-auto md:mx-auto lg:mx-0 rounded-2xl' src={item.experienceImg} alt="" />
                                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                    <div className="flex flex-col">
                                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block '>{item.experienceText}</h2>
                                        <h4 className='mb-4 text-accent'>{item.experienceTime}</h4>
                                        <hr className='mb-8 opacity-5' />
                                        <p className='mb-8 text-orange-50'>{item.experienceTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </>
    )
}

export default ExperienceSlider