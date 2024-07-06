import { useLoaderData } from "react-router-dom";
import AllArtTable from "../Components/AllArtTable";


const AllItems = () => {
    const loadedCards = useLoaderData()

    return (
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3">All Carts & Arts</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Explore all the Arts & Crafts Added By Sellers & See Details. </p>
            <div className=" mb-6 mt-4 ">
                <AllArtTable loadedCards={loadedCards}></AllArtTable>
            </div>
        </div>
    );
};

export default AllItems;