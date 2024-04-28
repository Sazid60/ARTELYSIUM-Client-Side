import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ArtCards from "../Components/ArtCards";
import ArtCategories from "../Components/ArtCategories";
import { FaStar } from "react-icons/fa";


const Home = () => {
    const loadedCards = useLoaderData()
    // console.log(loadedCards)
    const nonRepeatedCategory = loadedCards.filter((art_categories, index, self) =>
        index === self.findIndex((a) => (
            a.subcategory_name === art_categories.subcategory_name
        ))
    );
    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3"> Arts & Crafts</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Dive in, explore, and let your imagination soar as you bring your ideas to life!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
                    {
                        loadedCards.slice(-6).reverse().map(singleArtData => <ArtCards key={singleArtData._id} singleArtData={singleArtData}></ArtCards>)
                    }
                </div>
            </div>
            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3"> Art & Craft Categories</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Choose a category and immerse in its world, treasures waiting to be discovered</p>
                <div className=" mb-6 mt-4 lg:px-28">
                    <section className=" 0">
                        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto lg:grid-cols-3">
                            {nonRepeatedCategory.map((singleArtData) => (
                                <ArtCategories key={singleArtData._id} singleArtData={singleArtData} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>


            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3">Events & Programs</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Discover The Successful Events and Programs Organized By Us</p>
                <div className=" mb-8 mt-6 lg:px-28">
                    <div className="flex flex-col  md:flex-row lg:flex-row justify-center p-4  items-center gap-5 md:gap-5 lg:gap-10 ">
                        <div className="shadow-2xl">
                            <img src="/Exehibition-1.jpg" className="h-52 w-64  shadow-xl" alt="" />
                        </div>
                        <div className="">
                            <p className="text-xs md:text-sm lg:text-lg mb-2 lg:mb-4 text-[#4169E1] font-bold">12 March 2024</p>
                            <h1 className="text-sm md:text-lg lg:text-xl font-semibold mb-3">Peasant Scenes And Landscapes</h1>
                            <p className="text-xs md:text-sm  lg:text-lg italic">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</p>
                        </div>
                    </div> <hr className="my-4 lg:mx-56 border " />

                    <div className="flex flex-col-reverse  md:flex-row lg:flex-row justify-center p-4  items-center gap-5 md:gap-5 lg:gap-10 ">

                    <div className="">
                            <p className="text-xs md:text-sm lg:text-lg mb-2 lg:mb-4 text-[#4169E1] font-bold">26 August 2023</p>
                            <h1 className="text-sm md:text-lg lg:text-xl font-semibold mb-3">Rojo Y Negro - Latin American Art</h1>
                            <p className="text-xs md:text-sm  lg:text-lg italic">The exhibition is made possible by the John & Jane Doe & MJ Foundation.</p>
                        </div>
                        <div className="shadow-2xl">
                            <img src="/Exehibition-2.jpg" className="h-52 w-64  shadow-xl" alt="" />
                        </div>
                    </div> <hr className="my-4 lg:mx-56 border " />

                    <div className="flex flex-col  md:flex-row lg:flex-row justify-center p-4  items-center gap-5 md:gap-5 lg:gap-10 ">
                        <div className="shadow-2xl">
                            <img src="/Exehibition-3.jpg" className="h-52 w-64 shadow-xl" alt="" />
                        </div>
                        <div className="">
                            <p className="text-xs md:text-sm lg:text-lg mb-2 lg:mb-4 text-[#4169E1] font-bold">12 June 2023</p>
                            <h1 className="text-sm md:text-lg lg:text-xl font-semibold mb-3">Naive Painting Of The 19th Century</h1>
                            <p className="text-xs md:text-sm  lg:text-lg italic">The exhibition is made possible by the Sic Mondus Creatos Est Corporation.</p>
                        </div>
                    </div><hr className="my-4 lg:mx-56 border " />
                </div>
            </div> 

            <div>
                <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3">What Clients says About Us</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Discover why our clients rave about our service and products in their own words.</p>
                <div className=" mb-6 mt-4 lg:px-28">
                    <section className=" 0">

                        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mx-auto lg:grid-cols-2">
                            {/* card */}
                            <div className="container flex flex-col w-full  p-2 lg:p-6 mx-auto divide-y rounded-md divide-gray-700 border shadow-xl">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="/reviewer-1.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm lg:text-lg">Shahnawaz Sazid</h4>
                                            <span className="text-xs ">2 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <FaStar></FaStar>
                                        <span className="text-sm md:text-lg lg:text-xl font-bold">5.0</span>
                                    </div>
                                </div>
                                <div className="p-2 lg:p-4 space-y-2 text-xs ">
                                    <p className="">The charcoal artwork I received expectations, capturing intricate details and evoking emotions beautifully.</p>
                                </div>
                            </div>
                            {/* card */}
                            <div className="container flex flex-col w-full max-w-lg p-2 lg:p-6 mx-auto divide-y rounded-md divide-gray-700 border shadow-xl">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="/reviewer-2.jpg" alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold  text-sm lg:text-lg">Martha Kabir</h4>
                                            <span className="text-xs ">5 days ago</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 text-yellow-500">
                                        <FaStar></FaStar>
                                        <span className="text-sm md:text-lg lg:text-xl font-bold">4.5</span>
                                    </div>
                                </div>
                                <div className="p-2 lg:p-4 space-y-2 text-xs">
                                    <p className="">Oil painting colors are details are incredibly lifelike. It's the perfect addition to my collection.</p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default Home;