import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay
import HistoryCard from './HistoryCard';

const HistoryBanner = () => {
    // Example data for the timeline history
    const historyData = [
        {
            id: 1,
            title: 'First Major Exhibition',
            date: '1994-05-12',  // Format: YYYY-MM-DD
            description: 'In 1994, we hosted our first major exhibition, showcasing a diverse collection of artworks. Aliquam in ex non tortor mollis iaculis nec vitae urna. Phasellus sit amet ligula eget tellus vulputate consequat a et elit. Quisque leo erat, maximus dictum lacus et, convallis dapibus urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img1.jpg',
        },
        {
            id: 2,
            title: 'International Debut',
            date: '2000-09-15',
            description: 'In 2000, we made our international debut at a prestigious art fair in Paris. Phasellus in euismod metus, ut facilisis nisi. Praesent sed malesuada lacus, et consequat tortor. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img2.jpg',
        },
        {
            id: 3,
            title: 'Launch of the Landmark',
            date: '2008-04-22',
            description: 'In 2008, we launched our landmark collection, which received critical acclaim. Donec nec scelerisque eros, ac pellentesque urna. Nullam facilisis convallis lacus. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img3.jpg',
        },
        {
            id: 4,
            title: 'Award Winning Year',
            date: '2014-11-10',
            description: '2014 marked a significant milestone as we received several awards for our contributions to the art community. Donec nec scelerisque eros, ac pellentesque urna. Nullam facilisis convallis lacus. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img4.jpg',
        },
        {
            id: 5,
            title: 'Expansion to New Locations',
            date: '2016-08-25',
            description: 'In 2016, we expanded our reach by opening new galleries in major cities around the world. Phasellus in euismod metus, ut facilisis nisi. Praesent sed malesuada lacus, et consequat tortor. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img5.jpg',
        },
        {
            id: 6,
            title: 'Digital Transformation',
            date: '2020-03-18',
            description: 'By 2020, we embraced digital transformation, enhancing our online presence and virtual exhibitions. Donec nec scelerisque eros, ac pellentesque urna. Nullam facilisis convallis lacus. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img6.jpg',
        },
        {
            id: 7,
            title: 'Celebrating 25 Years of Art',
            date: '2023-12-01',
            description: 'In 2023, we celebrated 25 years of showcasing incredible art, reflecting on our journey and achievements. Donec nec scelerisque eros, ac pellentesque urna. Nullam facilisis convallis lacus. Aliquam in ex non tortor mollis iaculis nec vitae urna. Curabitur iaculis ex a justo venenatis gravida. Mauris fringilla dolor eu elementum vehicula Nulla a dui tristique.',
            image: '/Timeline/timeline-img7.jpg',
        },
    ];

    return (
        <div className="bg-[#F5F5F5] py-5 xl:py-10">
            <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold underline uppercase  mb-1 md:mb-2 lg:mb-4">Our Artista History</h2>
            {/* <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold leading-tight underline uppercase">Our Artista History</h2> */}

            <p className="text-center text-xs md:text-lg lg:text-lg mb-3">
                Journey through the rich tapestry of our artistic evolution!
            </p>
            <Swiper
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3500,  // Delay between slides in milliseconds
                    disableOnInteraction: false,  // Allow interaction after autoplay
                }}
                modules={[Pagination, Autoplay]}  // Include Autoplay in modules
                className="mySwiper"
            >
                {historyData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <HistoryCard
                            title={item.title}
                            description={item.description}
                            date={item.date}
                            image={item.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HistoryBanner;
