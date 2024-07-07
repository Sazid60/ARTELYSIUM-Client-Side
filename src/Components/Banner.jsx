


const Banner = () => {
    return (
        <section className="py-6">
            <hr className="border-t-2 border-gray-400 my-6 mx-auto max-w-[70%]" />
            <div className="container flex justify-center md:p-6 mx-auto flex-col-reverse lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-center p-6 text-center lg:max-w-md xl:max-w-lg lg:text-left lg:w-[70%]">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-none">
                        Discover Your <br />
                        Desired
                        <span className="dark:text-violet-600"> Arts</span>
                    </h1>
                    <p className="mt-4 sm:mt-6 mb-6 sm:mb-8 text-xs md:text-lg lg:text-lg">
                        Discover a world of creativity and inspiration with our curated collection of unique artworks.
                    </p>
                    <div className="flex justify-center lg:justify-start md:items-center">
                        <a href="#allArts"><button className="btn btn-sm md:btn-md bg-[#333333] text-white mr-2 text-xs">All Arts</button></a>
                        <a href="#categories"><button className="btn btn-sm md:btn-md bg-slate-300 text-black text-xs">Categories</button></a>
                    </div>
                </div>
                <div className="lg:w-[30%]">
                    <img src="/bannerimage.webp" className="mask-parallelogram-4" alt="" />
                </div>
            </div>
            <hr className="border-t-2 border-gray-400 mt-6 mx-auto max-w-[70%]" />
        </section>

    );
};

export default Banner;