import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";


const Login = () => {
    const { signInUser, googleSignIn, gitHubSignIn } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [showPass, setShowPass] = useState(false)

    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPass(!showPass)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        setSuccess("")
        setErrorMessage("")

        signInUser(email, password)
            .then(() => {
                toast.success('Login Successful');
                setSuccess("Successfully Logged In")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                setErrorMessage(error.message)
                toast.error(error.message)
            })
    }


    // Social Login
    const handleSocialLogin = (socialProvider) => {

        socialProvider()
            .then(() => {
                toast.success('Login Successful')
                setSuccess("Successfully Logged In")
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                setErrorMessage(error.message)
                toast.error(error.message)
            })

    }

    return (
        <div className="lg:mb-4 flex justify-center min-h-[40vh]">
            {/* <Helmet>
                <title>Login</title>
            </Helmet> */}
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Login now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] shadow-2xl bg-white" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                    <form className="card-body w-full pb-2" onSubmit={handleSignIn} data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-sm">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPass ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered text-gray-700 bg-transparent border-gray-300 w-full " required />
                                <div onClick={handleShowPassword} className="absolute top-[40%] left-[86%] md:left-[89%] lg:left-[90%]" >
                                    {
                                        showPass ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            {
                                errorMessage && <p className='text-red-500 text-xs mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-xs mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-2" >
                            <button className="btn bg-[#E1B453] border-0 text-white">Login</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-gray-700 text-sm">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"} state={location.state}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 lg:gap-7 mb-6 pb-0">
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(googleSignIn)}><FaGoogle className="text-xl text-[#DB4437]" />Google</button>
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(gitHubSignIn)}><FaGithub className="text-2xl bg-black text-white rounded-full border border-white" />Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;