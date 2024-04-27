import { useLoaderData } from "react-router-dom";
import ArtCards from "../Components/ArtCards";
import { useState } from "react";


const AllItems = () => {
    const loadedCards = useLoaderData()
    const [showAll, setShowAll] = useState(false);

    // console.log(loadedCards)
    const handleShow = () => {
        setShowAll(true)
    }

    return (
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3">All Carts & Arts</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Your go-to for carts and art supplies, where creativity meets convenience.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
                {showAll ?
                    loadedCards.reverse().map(singleArtData => <ArtCards key={singleArtData._id} singleArtData={singleArtData}></ArtCards>)
                    :
                    loadedCards.slice(-9).reverse().map(singleArtData => <ArtCards key={singleArtData._id} singleArtData={singleArtData}></ArtCards>)
                }

            </div>
            
            <div className="flex justify-center items-center">
            {!showAll && loadedCards.length > 9 && <button onClick={handleShow} className="btn btn-sm bg-[#333333] text-white">Show All</button>}
            </div>
        </div>
    );
};

export default AllItems;