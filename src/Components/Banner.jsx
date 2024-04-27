
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className='relative mt-4'>
            <div className='w-[70%] h-[70%] absolute inset-0 flex flex-col z-10 translate-x-4 md:translate-x-16 lg:translate-x-16 translate-y-6 md:translate-y-16 lg:translate-y-16 '>
                <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-2 md:mb-3 lg:mb-6'>Discover Your <br /> Desired<span className='text-[#333333]'> Arts </span></h1>
                <div className='text-sm  md:text-xl lg:text-4xl text-white  font-semibold' >
                    <Typewriter
                        words={['Landscape Painting', 'Portrait Drawing', 'Watercolour Painting', 'Oil Painting', 'Charcoal Sketching', 'Cartoon Drawing']}
                        loop={Infinity}
                        cursor
                        cursorStyle='_'
                        typeSpeed={50}
                        deleteSpeed={20}
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
                        <div className='bg-[url(/L_mountain.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/O_face.jpeg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/P_Acrylic_Potrait.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/W_animals.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/C_architectural.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[url(/CR_superhero.jpg)] bg-cover bg-center bg-no-repeat h-[140px] md:h-[300px] lg:h-[420px] w-full'>
                            <div className='absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60'></div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Banner;