import { FaStar } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CategorizedData = () => {

    const categorizedData = useLoaderData()
    console.log(categorizedData)


    const {id} = useParams()
    console.log(id)

    return (
        <>        
        <div>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3 uppercase underline">{id}</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Explore the Categorized Arts & Choose Your Specific Desire</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
                {
                    categorizedData.map(singleArtData =>
                        <>
                            <div key={singleArtData._id} className="bg-base-100 shadow-md p-2 hover:scale-105 hover:shadow-2xl" >
                                <figure className="w-full "><img className="object-cover h-32 md:h-32 lg:h-36 w-full" src={singleArtData.image} alt="" />
                                    <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm bg-[#1a1919] text-white px-1 py-0.5}`}>
                                        {singleArtData.stock_status}
                                    </h1>
                                </figure>
                                <div className="p-2">
                                    <div>
                                        <h2 className="font-bold text-lg  mb-2 ">{singleArtData.item_name}</h2>
                                        <h2 className="font-medium text-xs lg:text-sm mb-4">Category : {singleArtData.subcategory_name}</h2>

                                        <div className="flex items-center justify-between mb-4">
                                            <p className=" text-sm  flex items-center gap-1 "><span className=" font-bold">Price : </span> <span className="font-bold">{singleArtData.price} BDT</span> </p>
                                            <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm px-1 py-0.5}`}>
                                                Customization : {singleArtData.customization}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mb-4 mt-2 text-center">
                                        <p className="font-semibold text-xs flex items-center gap-1 "><span className=" font-bold">Processing Time :</span>{singleArtData.processing_time} Days</p>
                                        <p className="font-bold text-xs  flex items-center gap-1 "><span className="">{singleArtData.rating}</span><FaStar className="text-amber-300" /></p>
                                    </div>
                                    <div className="flex gap-2 mb-2 mt-2 text-center">

                                    </div>
                                    <div className="card-actions w-full">
                                        <Link className="w-full" to={`/craftArts/${singleArtData._id}`}>
                                            <button className="btn btn-sm bg-[#333333] text-white text-xs w-full mt-2 rounded-md">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>

        </>
    );
};

export default CategorizedData;