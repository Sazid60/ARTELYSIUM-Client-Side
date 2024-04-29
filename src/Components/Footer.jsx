import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="bg-slate-950 text-gray-200 py-8 min-h-[80vh] mt-6">
            <Link to={"/"} className="flex justify-start text-xl md:text-2xl lg:text-4xl font-bold container mx-auto items-center mt-6 mb-12 px-6 md:px-6 lg:px-20 ">ARTElYSIUM</Link>
            <div className="flex flex-col md:flex-row lg:flex-row justify-around container mx-auto px-6">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-sm">Uttara Dhaka</p>
                    <p className="text-sm">Dhaka, Bangladesh</p>
                    <p className="text-sm">info@ArtElysium.com</p>
                    <p className="text-sm">+8801639768727</p>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Social Media</h3>
                    <ul>
                        <li><a href="/" className="hover:text-white text-sm">Facebook</a></li>
                        <li><a href="/" className="hover:text-white text-sm">Twitter</a></li>
                        <li><a href="/" className="hover:text-white text-sm">Instagram</a></li>
                        <li><a href="/" className="hover:text-white text-sm">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                    <p className="text-sm">Subscribe us for updates.</p>
                    <form className="mt-4 flex">
                        <input type="email" placeholder="Enter your email" className="w-full rounded-l-md py-2 px-3 text-sm text-gray-300 focus:outline-none border-gray-700  focus:border-gray-500" />
                        <Link to={"/allItems"}>
                            <button type="submit" className="bg-[#333333] hover:bg-slate-400 text-white font-semibold py-2 px-4 rounded-r-md">Subscribe</button>
                        </Link>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700  text-center mt-8 pt-4">
                <p>&copy; 2024 ArtElysium. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;