import { Link } from "react-router-dom";


const ArtCategories = ({ singleArtData }) => {
    const { _id, image, item_name, subcategory_name, price, rating, customization, description, processing_time, stock_status, user_email, user_name } = singleArtData;

    return (
        <Link  to={`/categorizedData/${subcategory_name}`} >
            <div className="relative shadow-xl hover:scale-105 hover:shadow-2xl">
                <img
                    src={image}
                    alt=""
                    className="w-full h-44 object-cover rounded shadow-sm bg-gray-500 dark:bg-gray-500 aspect-square filter brightness-50"
                />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl uppercase">
                    {subcategory_name}
                </span>
            </div>
        </Link>


    );
};

export default ArtCategories;