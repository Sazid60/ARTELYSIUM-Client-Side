
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='relative mt-4'>
            <div className='absolute inset-0 flex flex-col z-10 translate-x-4 md:translate-x-16 lg:translate-x-16 translate-y-6 md:translate-y-16 lg:translate-y-16 w-[70%] h-[70%]'>
                <h1 className='font-bold text-2xl md:text-4xl lg:text-6xl text-white mb-2 md:mb-3 lg:mb-6'>Discover Your <br /> Desired<span className='text-[#E1B453]'> Arts </span></h1>
                <div className='text-white text-sm  md:text-xl lg:text-4xl font-semibold' >
                    <Typewriter
                        words={['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </div>
            </div>

            <div>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper">

                    <SwiperSlide>
                        <div className='bg-[url(/L_mountain.jpg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/O_face.jpeg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/P_Acrylic_Potrait.jpg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/W_animals.jpg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/C_architectural.jpg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/CR_superhero.jpg)] h-[140px] md:h-[300px] lg:h-[460px] w-full bg-cover bg-center bg-no-repeat'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Banner;