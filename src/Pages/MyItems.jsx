import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaAngleDown, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";


const MyItems = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [loadedData, setLoadedData] = useState([])
    const [showAll, setShowAll] = useState(false);
    const [sortByCustomization, setSortByCustomization] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/myItems/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadedData(data)
            })
    }, [user])

    // Delete
    const handleDelete = (id) => {
        console.log("Please delete", id)

        // delete specific from server
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/craftArts/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Item has been deleted.',
                                    'success'
                                )
                                const remaining = loadedData.filter(item => item._id !== id);
                                setLoadedData(remaining);
                            }
                        })

                }
            })
    }

    const filteredData = loadedData.filter(item => {
        if (sortByCustomization === null) return true;
        return item.customization.toLowerCase() === sortByCustomization.toLowerCase();
    });


    // const displayedData = showAll ? filteredData : filteredData.slice(0, 9);
    return (
        <>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-3">My Carts & Arts</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto" >Easily update your listings with new images, descriptions, prices, and more. Keep your collection fresh and engaging with just a few clicks.</p>

            <div className="dropdown dropdown-hover mt-3 lg:px-28 ">
                <div tabIndex={0} role="button" className="btn btn-sm m-1 bg-[#333333] text-white rounded-none">SORT BY CUSTOMIZATION<span><FaAngleDown /></span></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => setSortByCustomization(null)}><a>All</a></li>
                    <li onClick={() => setSortByCustomization("yes")}><a>Yes</a></li>
                    <li onClick={() => setSortByCustomization("no")}><a>No</a></li>
                </ul>
            </div>
            {
                (loadedData.length < 1 || filteredData.length < 1) && <p className="lg:px-28 text-center font-bold text-xl">No Data Available</p>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-4 lg:px-28">
                {
                    filteredData.map(singleArtData => <div key={singleArtData._id} className="bg-base-100 shadow-md p-2 hover:scale-105 hover:shadow-2xl" >
                        <figure className="w-full ">
                            <img className="object-cover h-32 md:h-32 lg:h-48 w-full" src={singleArtData.image} alt="" />
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
                                <Link className="w-1/2" to={`/craftArtsUpdate/${singleArtData._id}`}> <button className="btn btn-sm bg-[#FFECB3] mt-4 mb-6 text-black w-full">Update</button></Link>
                                {/* delete */}
                                <button className="btn btn-sm bg-[#da3131] mt-4 mb-6 text-white w-1/2" onClick={() => handleDelete(singleArtData._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ).reverse()
                }
            </div>
            {/* {!showAll && (filteredData.length > 9 || loadedData > 9) && (
                <div className="flex justify-center">
                    <button className="btn btn-sm bg-[#333333] text-white" onClick={() => setShowAll(true)}>Show All</button>
                </div>
            )} */}
        </>
    );
};

export default MyItems;