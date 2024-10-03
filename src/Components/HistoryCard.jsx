const HistoryCard = ({ title, description, image,date }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center px-5 lg:px-6 lg:max-w-5xl mx-auto mb-2 lg:mb-10">
            {/* Image Section */}
            <div className="lg:w-1/2 w-full">
                <img 
                    src={image} 
                    alt={title} 
                    className="object-cover w-full h-auto" 
                />
            </div>
            {/* Content Section */}
            <div className="lg:w-1/2 w-full lg:pl-8 mt-3 xl:mt-6 lg:mt-0 space-y-2 mb-6">
            <h1 className="italic underline text-sm">{date}</h1>
                <h3 className="text-lg lg:text-xl xl:text-3xl font-bold">{title}</h3>
                <p className="text-gray-600  text-[12px] sm:text-xs lg:text-base">
                    {description}
                </p>
                
            </div>
        </div>
    );
};

export default HistoryCard;
