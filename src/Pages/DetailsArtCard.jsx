
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const DetailsArtCard = () => {
    // const { id } = useParams()
    const loadedArt = useLoaderData()
    console.log(loadedArt)
    const {image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name } = loadedArt ;
    return (
        <div className="flex flex-col md:flex-row lg:flex-row justify-around gap-6 mt-4 min-h-full">
            {/* <Helmet>
            <title className="text-lg md:text-xl lg:text-xl">estate_title</title>
        </Helmet> */}
            <div className='relative h-[150px] md:h-[300px] lg:h-[400px] w-full md:w-1/2 lg:w-1/2'>
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat flex justify-center items-center'>
                    <img src={image} alt="Banner Image" className="w-full h-full object-cover shadow-2xl" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white" >{subcategory_name}</h1>
                </div>
            </div>

            <div className="w-full ">
                <div>
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold" >{item_name}</h1>
                </div>

                <p className="mt-4 mb-4 text-xs md:text-lg lg:text-lg " >{description}</p>

                <div className="overflow-x-auto" >
                    <table className="table-auto w-full text-sm border border-solid ">
                        <tbody>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg ">Price</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">{price} BDT</td>
                            </tr>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg ">Rating</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg flex  gap-2 items-center">{rating } <FaStar className="text-amber-400" /></td>
                            </tr>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg ">Stock Status</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg ">{stock_status}</td>
                            </tr>
                            <tr >
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg ">Customization</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg ">{customization}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border border-solid text-xs md:text-lg lg:text-lg">Processing Time</td>
                                <td className="px-2 py-1 border border-solid0 text-xs md:text-lg lg:text-lg">{processing_time}</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-1 text-left font-bold border text-xs md:text-lg lg:text-lg">Created By</td>
                                <td className="px-2 py-1 border border-solid text-xs md:text-lg lg:text-lg">{user_name}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex lg:justify-center gap-3">
                        <Link to={"/"}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-28">Update</button></Link>
                        <button className="btn btn-sm bg-[#da3131] mt-4 mb-6 text-white w-28">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsArtCard;