import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { logInUser, googleLogin, gitHubLogin } = useContext(AuthContext)
    const location = useLocation()

    const navigate = useNavigate()

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setSuccess("")
        setErrorMessage("")

        logInUser(email, password)
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

    // Social 
    const handleSocialLogin = (socialLoginProvider) => {

        socialLoginProvider()
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
        <div className="flex w-full justify-center min-h-[40vh] lg:mb-4">

            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl " >Login now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] bg-white shadow-2xl">
                    <form className="card-body w-full pb-2" onSubmit={handleSignIn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm text-gray-700 ">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered bg-transparent border-gray-300 text-gray-700" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm text-gray-700 ">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered border-gray-300 text-gray-700 bg-transparent  w-full " required />
                                <div onClick={handleShowPassword} className="absolute top-[39%] left-[85%] md:left-[88%] lg:left-[89%]" >
                                    {
                                        showPassword ? <FaRegEyeSlash /> : <FaRegEye />
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
                            <button className="btn text-white bg-[#CFAE7A] rounded-none hover:bg-yellow-700 border-0 ">Login</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-sm text-gray-700 ">Do Not Have Account ? <Link className="text-blue-600 font-semibold" to={"/register"} state={location.state}>Register</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700">Continue With</div>
                    <div className="flex justify-center gap-4 lg:gap-7 mb-6 pb-0">
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(googleLogin)}><FaGoogle className="text-xl text-[#DB4437]" />Google</button>
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(gitHubLogin)}><FaGithub className="text-2xl bg-black text-white rounded-full border border-white" />Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;