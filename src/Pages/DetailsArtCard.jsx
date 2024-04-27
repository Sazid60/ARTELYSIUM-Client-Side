
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const DetailsArtCard = () => {
    const { user } = useContext(AuthContext)
    // const { id } = useParams()
    const loadedArt = useLoaderData()
    // console.log(loadedArt)
    const { _id, image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name } = loadedArt;
    return (
        <div className="flex flex-col  justify-around item gap-6 mt-4 min-h-full">

            <div className='relative h-[155px] md:h-[310px] lg:h-[350px] w-full'>
                <div className='flex justify-center items-center absolute inset-0 bg-cover bg-center bg-no-repeat '>
                    <img src={image} className=" shadow-2xl w-full h-full object-cover" alt="No Image" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white" >{subcategory_name}</h1>
                </div>
            </div>

            <div className="w-full ">
                <div>
                    <h1 className=" font-bold text-2xl md:text-2xl lg:text-3xl" >{item_name}</h1>
                </div>

                <p className="text-xs md:text-lg lg:text-lg mt-4 mb-4" >{description}</p>

                {/* Table Section */}
                <div className="overflow-x-auto" >
                    <table className=" w-full text-sm border border-solid table-auto ">
                        <tbody>
                            <tr >
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1">Category</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1">{subcategory_name} BDT</td>
                            </tr>
                            <tr >
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1">Price</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1">{price} BDT</td>
                            </tr>
                            <tr >
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1 ">Rating</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1 flex  gap-2 items-center">{rating} <FaStar className="text-amber-400" /></td>
                            </tr>
                            <tr >
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1 ">Stock Status</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1 ">{stock_status}</td>
                            </tr>
                            <tr >
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1 ">Customization</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1 ">{customization}</td>
                            </tr>
                            <tr>
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1">Processing Time</td>
                                <td className="text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1">{processing_time}</td>
                            </tr>
                            <tr>
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1">Created By</td>
                                <td className=" text-xs md:text-lg lg:text-lg border border-solid  px-2 py-1">{user_name}</td>
                            </tr>
                            <tr>
                                <td className="text-xs md:text-lg lg:text-lg text-left font-bold border border-solid px-2 py-1">Creator Email</td>
                                <td className=" text-xs md:text-lg lg:text-lg border border-solid px-2 py-1">{user_email}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="flex lg:justify-center gap-3">
                        <Link to={`/allItems`}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-28">Explore More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsArtCard;