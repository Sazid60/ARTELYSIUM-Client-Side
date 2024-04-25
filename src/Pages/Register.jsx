import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

    const [success, setSuccess] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [showPass, setShowPass] = useState(false)

    const { createUser, updateUser, googleSignIn, gitHubSignIn, user, setUser } = useContext(AuthContext)
    // console.log(createUser)



    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const handleShowPassword = () => {
        setShowPass(!showPass)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const name = form.get("name")
        const photoUrl = form.get("photoUrl")
        // console.log(email, password,photoURL,name)

        // Reset Messages
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

                        // Since the profile is not updating instantly
                        setUser({ displayName: name, photoURL: photoUrl, email:email })

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
                // console.log(error.message)
            })
    }
    // Social Login
    const handleSocialLogin = (socialProvider) => {

        socialProvider()
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
        <div className="w-full lg:mb-4 flex justify-center min-h-[40vh]">
            {/* <Helmet>
                <title>Register</title>
            </Helmet> */}
            <div className="hero-content flex-col w-full justify-center">

                <div className="text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 " data-aos="zoom-in" data-aos-duration="500" data-aos-delay="320">Register now!</h1>
                </div>
                <div className="card w-full lg:w-[40%] shadow-2xl bg-white" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="400">
                    <form className="card-body w-full pb-2" onSubmit={handleRegister} data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control" >
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">PhotoURL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name="photoUrl" className="input input-bordered text-gray-700 bg-transparent border-gray-300 " required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-700 text-xs">Password</span>
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
                                errorMessage && <p className='text-red-500 text-sm mt-4'>Error :{errorMessage} </p>
                            }
                            {
                                success && <p className='text-blue-700 text-sm mt-4'>{success}</p>
                            }
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn  bg-[#E1B453] border-0 text-white">Register</button>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="text-gray-700 text-sm">Already Have Account ? <Link className="text-blue-600 font-semibold" to={"/login"}>Login</Link> </p>
                        </div>
                    </form>
                    <div className="divider text-gray-700" >Continue With</div>
                    <div className="flex justify-center gap-4 lg:gap-7 mb-6 pb-0">
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(googleSignIn)}><FaGoogle className="text-xl text-[#DB4437]" />Google</button>
                        <button className="btn btn-sm rounded-full" onClick={() => handleSocialLogin(gitHubSignIn)}><FaGithub className="text-2xl bg-black text-white rounded-full border border-white" />Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;