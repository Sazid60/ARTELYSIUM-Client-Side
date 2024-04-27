
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";


const ArtCards = ({ singleArtData }) => {
    const { _id, image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name } = singleArtData;
    // console.log(singleArtData)
    return (
        <>
            {/* Card */}
            <div className="bg-base-100 shadow-md p-2 hover:scale-105 hover:shadow-2xl   " >
                <figure className="w-full "><img className="object-cover h-32 md:h-32 lg:h-48 w-full" src={image} alt="" />
                <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm bg-[#1a1919] text-white px-1 py-0.5}`}>
                            {stock_status}
                        </h1>
                </figure>
                <div className="p-2">
                    <div>
                        <h2 className="font-bold text-lg  mb-2 text-[#333333]">{item_name}</h2>
                        <h2 className="font-medium text-xs lg:text-sm mb-4">Category : {subcategory_name}</h2>

                        <div className="flex items-center justify-between mb-4">
                            <p className=" text-sm text-[#333333] flex items-center gap-1 "><span className="text-black font-bold">Price : </span> <span className="font-bold">{price} BDT</span> </p>
                            <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm px-1 py-0.5}`}>
                                Customization : {customization}
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4 mt-2 text-center">
                        <p className="font-semibold text-xs flex items-center gap-1 "><span className="text-black font-bold">Processing Time :</span>{processing_time} Days</p>
                        <p className="font-bold text-xs  flex items-center gap-1 "><span className="text-black">{rating}</span><FaStar className="text-amber-300" /></p>
                    </div>
                    <div className="flex gap-2 mb-2 mt-2 text-center">

                    </div>
                    <div className="card-actions w-full">
                        <Link className="w-full" to={`/craftArts/${_id}`}>
                            <button className="btn btn-sm bg-[#333333] text-white text-xs w-full mt-2 rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtCards;