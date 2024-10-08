import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useRefetch from "../RefetchHook/useRefetch";
import { Triangle } from "react-loader-spinner";


const UpdateArtItem = () => {
    const loadedArt = useLoaderData()
    const { id } = useParams()
    const { art, refetch, loading } = useRefetch(id)

    console.log(art)
    // console.log(id)

    const { _id, image, item_name, price, rating, description, processing_time, user_email, user_name } = art;

    const [subcategoryName, setSubcategoryName] = useState(loadedArt.subcategory_name);
    const [customizationValue, setCustomizationValue] = useState(loadedArt.customization);
    const [stockStatus, setStockStatus] = useState(loadedArt.stock_status);

    console.log(subcategoryName, customizationValue, stockStatus)

    const handleUpdate = event => {

        event.preventDefault()
        if (loading) {
            return
        }
        const form = event.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;

        const updatedCraftArts = { image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name }
        console.log(updatedCraftArts)

        // Update 
        fetch(`https://art-elysium-server-b9-a10.vercel.app/craftArts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCraftArts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });

                }
            })
    }


    // console.log(loadedArt)

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <Triangle
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }


    return (
        <div className="container mx-auto">
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold md:mt-4 mb-1 md:mb-2 lg:mb-4 mt-2 underline uppercase" >Update Art & Craft</h1>
            <p className="text-center text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mb-3" >Bring your ideas to life with our quality craft supplies!</p>
            <div className='relative h-[150px] md:h-[300px] lg:h-[400px] w-full '>
                <div className='absolute inset-0 bg-cover bg-center bg-no-repeat flex justify-center items-center'>
                    <img src={image} alt="Banner Image" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-white text-center font-satisfy" >{item_name}</h1>
                </div>
            </div>
            <h1 className="mt-2 font-bold text-lg">Want To Update?</h1>
            <form onSubmit={handleUpdate} >
                {/* Image and item name */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" defaultValue={image} className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" defaultValue={item_name} placeholder="Item Name" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                </div>
                {/* Subcategory, price, rating, and customization */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/4 relative">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <div className="relative">
                            <select name="subcategory_name" defaultValue={subcategoryName} onChange={(e) => setSubcategoryName(e.target.value)} className="select  border-black w-full pr-8">
                                <option value="" disabled >Select a Subcategory</option>
                                <option value="Landscape-Painting" >Landscape Painting</option>
                                <option value="Portrait-Drawing">Portrait Drawing</option>
                                <option value="Watercolour-Painting">Watercolour Painting</option>
                                <option value="Oil-Painting" >Oil Painting</option>
                                <option value="Charcoal-Sketching">Charcoal Sketching</option>
                                <option value="Cartoon-Drawing">Cartoon Drawing</option>
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered border-black w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <select name="customization" defaultValue={customizationValue} onChange={(e) => setCustomizationValue(e.target.value)} className="select select-bordered border-black w-full ">
                            <option value="" disabled>Want To Customize ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                </div>
                {/* Short Description */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" defaultValue={description} placeholder="Short Description" className="textarea textarea-bordered border-black w-full" rows="3"></textarea>
                        </label>
                    </div>
                </div>
                {/* Processing time and stock status */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" defaultValue={processing_time} placeholder="Processing Time" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="relative">
                            <select name="stock_status" defaultValue={stockStatus} onChange={(e) => setStockStatus(e.target.value)} className="select select-bordered border-black w-full appearance-none bg-transparent pr-8">
                                <option value="" disabled >Select Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>
                </div>
                {/* User email and name */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="user_email" defaultValue={user_email} placeholder="User Email" className="input input-bordered border-black w-full" disabled />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_name" defaultValue={user_name} placeholder="User Name" className="input input-bordered border-black w-full" disabled />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Item" className="btn btn-block bg-[#CFAE7A] rounded-none hover:bg-yellow-700 text-white uppercase" />
            </form>
        </div>
    );
};

export default UpdateArtItem;