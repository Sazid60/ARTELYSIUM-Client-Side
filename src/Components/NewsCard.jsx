const NewsCard = ({ singleNews }) => {
    return (
        <div className="h-80 md:h-96">
            <div className="max-w-lg mx-4 relative">
                {/* Image Section */}
                <div className="relative border p-4">
                    <img className="w-full h-52 sm:h-60 md:h-72 object-cover" src={singleNews.imageUrl} alt="Post" />
                    <div className="absolute top-0 left-0 bg-[#CEAE7A] text-white p-2 w-14 text-center">
                        <span className="block font-bold text-lg">{singleNews.date}</span>
                        <span className="block text-sm">{singleNews.month}</span>
                    </div>
                </div>

                {/* Text Section */}
                <div className="px-2 xl:px-6 py-4 bg-white w-[80%] border top-[70%] md:top-[75%] lg:top-[85%] left-[10%] absolute shadow-md z-10">
                    <p className="text-sm text-gray-500">By {singleNews.author}</p>
                    <div className="font-bold text-sm mb-2">{singleNews.title}</div>
                    <p className="text-gray-700 text-xs">{singleNews.description}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
