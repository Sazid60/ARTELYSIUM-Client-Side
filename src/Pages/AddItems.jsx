import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";




const AddItems = () => {
    const { user } = useContext(AuthContext)

    const handleAdd = event => {
        event.preventDefault();
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
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;

        const newCraftArts = { image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name }

        fetch('http://localhost:5000/craftArts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftArts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })


        // console.log(newCraftArts )
    }

    return (
        <>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3" >Add Art & Craft</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3" >Bring your ideas to life with our quality craft supplies, igniting your creativity and sparking endless inspiration!</p>
            <form onSubmit={handleAdd}>
                {/* Image and item name */}
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered border-black w-full" />
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
                            <select name="subcategory_name" className="select select-bordered border-black w-full appearance-none bg-transparent pr-8">
                                <option value="" disabled>Select a Subcategory</option>
                                <option value="landscape_painting">Landscape Painting</option>
                                <option value="portrait_drawing">Portrait Drawing</option>
                                <option value="watercolour_painting">Watercolour Painting</option>
                                <option value="oil_painting">Oil Painting</option>
                                <option value="charcoal_sketching">Charcoal Sketching</option>
                                <option value="cartoon_drawing">Cartoon Drawing</option>
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered border-black w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <select name="customization" className="select select-bordered border-black w-full ">
                            <option value="" disabled>Want To Customize ?</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
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
                            <textarea name="description" placeholder="Short Description" className="textarea textarea-bordered border-black w-full" rows="3"></textarea>
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
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="relative">
                            <select name="stock_status" className="select select-bordered border-black w-full appearance-none bg-transparent pr-8">
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
                            <input type="email" name="user_email" placeholder="User Email" defaultValue={user.email} className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_name" placeholder="User Name" defaultValue={user.displayName} className="input input-bordered border-black w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Item" className="btn btn-block bg-[#E1B453]" />
            </form>
        </>
    );
};

export default AddItems;