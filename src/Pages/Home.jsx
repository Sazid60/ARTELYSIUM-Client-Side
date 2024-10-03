import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import ArtCards from "../Components/ArtCards";
import ArtCategories from "../Components/ArtCategories";
import HistoryBanner from "../Components/HistoryBanner";
import NewsCard from "../Components/NewsCard";


const Home = () => {
    const loadedCards = useLoaderData()

    // console.log(loadedCards)
    const nonRepeatedCategory = loadedCards.filter((art_categories, index, self) =>
        index === self.findIndex((a) => (
            a.subcategory_name === art_categories.subcategory_name
        ))
    );

    const newsData = [
        {
            id: 1,
            title: "Major Tech Innovation",
            description:
                "A groundbreaking innovation in the tech industry is set to revolutionize how we interact with devices.",
            date: "04",
            month: "OCT",
            author: "TechDaily",
            imageUrl: "/News/home_blog-05.jpg",
        },
        {
            id: 2,
            title: "Global Markets Rise",
            description:
                "Global stock markets have seen a significant surge, driven by unexpected gains in the tech sector.",
            date: "12",
            month: "SEP",
            author: "MarketWatch",
            imageUrl: "/News/home_blog-06.jpg",
        },
    ];

    return (
        <div className="">
            <Banner></Banner>
            <HistoryBanner />
            <div id="allArts" >
                <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3 underline uppercase">Popular Arts</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Dive in, explore, and let your imagination soar as you bring your ideas to life!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 mt-4">
                    {
                        loadedCards.slice(-8).reverse().map(singleArtData => <ArtCards key={singleArtData._id} singleArtData={singleArtData}></ArtCards>)
                    }
                </div>
            </div>
            <div id="categories" >
                <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3 underline uppercase"> Top Categories</h1>
                <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Choose a category and immerse in its world, treasures waiting to be discovered</p>
                <div className=" mb-6 mt-4 ">
                    <section className=" 0">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 xl:gap-3 lg:grid-cols-6 ">
                            {nonRepeatedCategory.map((singleArtData) => (
                                <ArtCategories key={singleArtData._id} singleArtData={singleArtData} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3 underline uppercase">News</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Explore the headlines that matter and stay informed with our in-depth news coverage!</p>
            <div className="grid grid-cols-1 md:grid-cols-2  max-w-5xl mx-auto mt-6">
                {newsData.map((singleNews) => (
                    <NewsCard key={singleNews._id} singleNews={singleNews} />
                ))}
            </div>
        </div>
    );
};

export default Home;