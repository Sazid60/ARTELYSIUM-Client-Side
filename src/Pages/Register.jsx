import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {
    const [showPassword , setShowPassword] = useState(false)
    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const { createUser, updateUser, googleLogin, gitHubLogin, user, setUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleShowPassword = () => {
        setShowPassword(!showPassword )
    }
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        
        setSuccess("")
        setErrorMessage("")

        if (password.length < 6) {
            setErrorMessage("Password Should be at least 6 Characters")
            toast.error("Password Should be at least 6 Characters")
            return
        }
        else if (!(/[A-Z]/.test(password) && /[a-z]/.test(password))) {
            setErrorMessage("Password Should Contain 1 Uppercase and Lower Case Letter")
            toast.error("Upper & Lower Case Letter Required")
            return
        }

        createUser(email, password)
            .then((result) => {
                updateUser(name, photoUrl)
                    .then(() => {

                        setUser({ displayName: name, photoURL: photoUrl, email: email })

                        toast.success('Registration Successful.');
                        setSuccess("Successfully Registered ")
                        navigate(location?.state ? location.state : "/")
                        console.log(result.user)
                    })
                    .catch(error => {
                        setErrorMessage(error.message)
                    })
            })
            .catch(error => {
                setErrorMessage(error.message)
                toast.error(error.message);
            })
    }
    // Social Login
    const handleSocialLogin = (socialLoginProvider) => {

        socialLoginProvider()
            .then(() => {
                if (!user) {
                    toast.success('Registration Successful')
                    setSuccess("Successfully Registered ")
                    navigate(location?.state ? location.state : "/")
                }
                else {
                    toast.error('Already User Created');
                    setErrorMessage("Already User Created")
                }
            })
            .catch((error) => {
                setErrorMessage(error.message)
                toast.error(error.message)
            })
    }
    return (
        <div className="w-full min-h-[40vh] flex justify-center  lg:mb-4">

            <div className="hero-content flex-col justify-center w-full">

                <div className="text-center">
                    <h1 className=" font-bold text-xl md:text-2xl lg:text-3xl mb-2 " >Register now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] bg-white shadow-2xl" >
                    <form className="card-body w-full pb-2" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered bg-transparent border-gray-300 text-gray-700  " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xs text-gray-700 ">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className=" text-gray-700 bg-transparent border-gray-300 input input-bordered" required />
                        </div>
                        <div className="form-control" >
                            <label className="label">
                                <span className="label-text text-xs text-gray-700 ">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoUrl" className=" text-gray-700 bg-transparent border-gray-300  input input-bordered " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xs text-gray-700 ">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="input input-bordered border-gray-300 w-full text-gray-700 bg-transparent" required />
                                <div onClick={handleShowPassword} className="absolute top-[39%] left-[85%] md:left-[88%] lg:left-[89%]" >
                                    {
                                        showPassword  ? <FaRegEyeSlash /> : <FaRegEye />
                                    }
                                </div>
                            </div>
                            {
                                errorMessage && <p className='text-red-500 text-sm mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-sm mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn  bg-[#CFAE7A] hover:bg-yellow-700 rounded border-0 text-white">Register</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-gray-700 text-sm">Already Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700" >Continue With</div>
                    <div className="flex justify-center gap-4 lg:gap-7 mb-6 pb-0">
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(googleLogin)}><FaGoogle className="text-xl text-[#DB4437]" />Google</button>
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(gitHubLogin)}><FaGithub className="text-2xl text-white border bg-black  border-white rounded-full" />Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;