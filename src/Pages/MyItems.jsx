import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const MyItems = () => {
    const { user } = useContext(AuthContext)
    console.log(user)


    const [loadedData, setLoadedData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myItems/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadedData(data)
            })
    }, [user])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
            {
                loadedData.slice(-6).reverse().map(singleArtData => <div key={singleArtData._id} className="bg-base-100 shadow-md p-2 hover:scale-105 hover:shadow-2xl" >
                    <figure className="w-full ">
                        <img className="object-cover h-32 md:h-32 lg:h-36 w-full" src={singleArtData.image} alt="" />
                        <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm bg-[#1a1919] text-white px-1 py-0.5}`}>
                            {singleArtData.stock_status}
                        </h1>
                    </figure>
                    <div className="p-2">
                        <div>
                            <h2 className="font-bold text-sm lg:text-lg  mb-2 text-[#333333]">{singleArtData.item_name} </h2>
                            <h2 className="font-medium text-xs lg:text-sm mb-4">Category : {singleArtData.subcategory_name}</h2>

                            <div className="flex items-center justify-between mb-4">
                                <p className=" text-xs lg:text-sm text-[#333333] flex items-center gap-1 "><span className="text-black font-bold">Price : </span> <span className="font-bold"> {singleArtData.price} BDT</span> </p>
                                <h1 className={`font-medium text-xs flex justify-center items-center rounded-sm px-1 py-0.5}`}>
                                    Customization : {singleArtData.customization}
                                </h1>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4 mt-2 text-center">
                            <p className="font-semibold text-xs flex items-center gap-1 "><span className="text-black font-bold">Processing Time :</span> {singleArtData.processing_time} Days</p>
                            <p className="font-bold text-xs  flex items-center gap-1 "><span className="text-black">{singleArtData.rating}</span><FaStar className="text-amber-300" /></p>
                        </div>
                        <div className="flex gap-2 mb-2 mt-2 text-center">

                        </div>
                        <div className="flex lg:justify-center gap-3">
                            {/* <Link to={`/craftArtsUpdate/${_id}`}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-28">Update</button></Link> */}
                            <Link to={`/craftArtsUpdate/${singleArtData._id}`}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-28">Update</button></Link>
                            <button className="btn btn-sm bg-[#da3131] mt-4 mb-6 text-white w-24">Delete</button>
                        </div>
                    </div>
                </div>
                )
            }

        </div>

    );
};

export default MyItems;