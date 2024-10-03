


const Banner = () => {
    return (
        <section className="flex flex-row gap-1  justify-between items-center py-3 lg:py-12 lg:px-16">
            {/* Left Text Section */}
            <div className="w-[60%] space-y-1 lg:space-y-2 xl:space-y-2 text-left">
                <h4 className="text-gray-500 text-[12px] sm:text-xs lg:text-base">Best Artist Paintings</h4>
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold ">
                    Latest Paintings <br /> Collection
                </h1>
                <p className="text-gray-600 text-[12px] sm:text-xs lg:text-base">
                    Discover The World Through Original Paintings For Sale
                </p>
                <button className="px-2 py-1 xl:px-4 xl:py-1 bg-[#CFAE7A] text-white shadow-md hover:bg-yellow-700 transition text-[12px] sm:text-xs lg:text-base">
                    SHOP NOW
                </button>
            </div>
            {/* Right Image Section */}
            <div className="w-[50%] flex justify-center">
                <div className="w-[130px] h-[170px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px]">
                    <img
                        src="/slider-2.jpg"
                        alt="Painting"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;