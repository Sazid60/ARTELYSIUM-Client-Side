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

        fetch('https://art-elysium-server-b9-a10.vercel.app/craftArts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftArts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            form.reset()

        // console.log(newCraftArts )
    }

    return (
        <>
            <h1 className="text-center text-2xl md:text-2xl lg:text-3xl  font-bold mt-3" >Add Art & Craft</h1>
            <p className="text-center  text-xs md:text-lg lg:text-lg max-w-2xl mx-auto mt-2 mb-3" >Bring your ideas to life with our quality craft supplies!</p>
            <form onSubmit={handleAdd}>
                
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered border-black w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered border-black w-full" required />
                        </label>
                    </div>
                </div>
               
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/4 relative">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <div className="relative">
                            <select name="subcategory_name" defaultValue={""} className="select select-bordered border-black w-full appearance-none bg-transparent pr-8" required>
                                <option value="" disabled>Select a Subcategory</option>
                                <option value="Landscape-Painting">Landscape Painting</option>
                                <option value="Portrait-Drawing">Portrait Drawing</option>
                                <option value="Watercolour-Painting">Watercolour Painting</option>
                                <option value="Oil-Painting">Oil Painting</option>
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
                            <input type="text" name="price" placeholder="Price" className="input input-bordered border-black w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered border-black w-full" required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/4 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <select name="customization" defaultValue={""} className="select select-bordered border-black w-full " required>
                            <option value="" disabled>Want To Customize ?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>


                </div>
                
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Short Description" className="textarea textarea-bordered border-black w-full" rows="3" required></textarea>
                        </label>
                    </div>
                </div>
                
                <div className="md:flex mb-2 md:mb-4 lg:mb-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered border-black w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-2 lg:ml-4 relative">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <div className="relative">
                            <select name="stock_status" defaultValue={""} className="select select-bordered border-black w-full appearance-none bg-transparent pr-8" required>
                                <option value="" disabled >Select Stock Status</option>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>
                </div>
                
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
                <input type="submit" value="Add Item" className="btn btn-block bg-[#333333] text-white" />
            </form>
        </>
    );
};

export default AddItems;