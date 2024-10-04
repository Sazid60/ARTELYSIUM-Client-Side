import { Link } from "react-router-dom";

const ArtCategories = ({ singleArtData }) => {
    const { _id, image, item_name, subcategory_name } = singleArtData;

    return (
        <div >
            <div className="relative flex flex-col justify-center transition-opacity duration-700 group">
                <img
                    src={image}
                    alt={item_name} // Update alt for accessibility
                    className="w-full h-full object-cover aspect-square border-2 rounded-md"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center xl:px-8 py-4 backdrop-blur-sm bg-gray-800/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-md">
                    <h2 className="mt-4 text-sm md:text-sm xl:text-xl font-semibold text-white capitalize font-satisfy">{subcategory_name}</h2>
                    <Link to={`/categorizedData/${subcategory_name}`}>
                        <p className="mt-2 text-xs md:text-base xl:text-lg tracking-wider font-medium text-[#CFAE7A] uppercase border px-2 border-[#CFAE7A]">View All </p>
                    </Link>
                </div>
            </div>
            <h1 className="text-center text-xs lg:text-xl font-medium font-satisfy">{subcategory_name}</h1>
        </div>
    );
};

export default ArtCategories;
