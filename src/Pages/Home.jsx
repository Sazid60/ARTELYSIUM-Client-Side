import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ArtCards from "../Components/ArtCards";
import ArtCategories from "../Components/ArtCategories";


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

        </div>
    );
};

export default Home;