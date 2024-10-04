import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ArtCards = ({ singleArtData }) => {
    const { _id, image, item_name, subcategory_name, price, rating, customization, processing_time, stock_status } = singleArtData;

    return (
        <>
            {/* Card */}
            <div className="bg-base-100 border-2 rounded-md p-2">
                {/* Hover effect on image */}
                <div className="hover:scale-105 transition-all duration-300 hover:p-3">
                    <figure className="w-full">
                        <img className="w-full h-full object-cover aspect-square rounded-t-md" src={image} alt="" />
                        {/* Stock Status */}
                        <h1 className="font-medium text-xs flex justify-center items-center rounded-b-sm bg-[#CFAE7A] text-white px-1">
                            {stock_status}
                        </h1>
                    </figure>
                </div>

                {/* Card Content */}
                <div className="p-2">
                    {/* Title and Category */}
                    <div>
                        <h2 className="font-bold text-lg  mb-2 font-satisfy">{item_name}</h2>
                        <h2 className="font-medium text-xs lg:text-sm mb-4"><span className="text-[#CFAE7A]">Category :</span> {subcategory_name}</h2>

                        {/* Price and Customization */}
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-sm flex items-center gap-1">
                                <span className="font-bold">Price:</span>
                                <span className="font-bold">{price} BDT</span>
                            </p>
                            <h1 className="font-medium text-xs flex justify-center items-center rounded-sm px-1 py-0.5">
                                Customization: {customization}
                            </h1>
                        </div>
                    </div>

                    {/* Processing Time and Rating */}
                    <div className="flex justify-between mb-4 mt-2 text-center">
                        <p className="font-semibold text-xs flex items-center gap-1">
                            <span className="font-bold">Processing Time:</span> {processing_time} Days
                        </p>
                        <p className="font-bold text-xs flex items-center gap-1">
                            <span>{rating}</span>
                            <FaStar className="text-amber-300" />
                        </p>
                    </div>

                    {/* View Details Button with Hover Effect */}
                    <div className="card-actions w-full">
                        <Link className="w-full" to={`/craftArts/${_id}`}>
                            <button className="btn btn-sm bg-[#CFAE7A] hover:bg-[#A16207] text-white text-xs w-full mt-2 rounded-none flex justify-between items-center group">
                                View Details
                                <span className="transition-transform duration-300 ease-in-out transform group-hover:-rotate-45">
                                    <FaArrowRight />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArtCards;
