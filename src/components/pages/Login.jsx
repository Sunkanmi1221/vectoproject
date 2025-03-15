import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="my-[5%] mx-[15%] md:mx-[30%] lg:mx-[30%] ">
            <h1 className="text-center mb-[10px] md:text-3xl lg:text-3xl font-bold">Welcome back</h1>
            <form action="" className="">
                <div className="mb-3">
                    <input type="email" className="outline outline-1 w-full p-[10px]" placeholder="Email Address" />
                </div>
                <div className="mb-3">
                    <input type="password" className="outline outline-1 w-full p-[10px]" placeholder=" Password" />
                </div>
                <div className="mb-5">
                    <button>Forgot password?</button>
                </div>
                <div>
                    <button className="bg-pink-950 p-[10px] w-full text-white rounded-lg">Continue</button>
                </div>

            </form>
       
            <div className="flex gap-1 justify-center items-center my-[10px] text-sm md:text-base md:gap-2">
                <h1>Don't have an account?</h1>
                <Link to="/signUp" className="text-pink-800 hover:text-pink-900 font-semibold hover:underline">
                    Sign Up
                </Link>
            </div>
        </div>


    )
}

export default Login