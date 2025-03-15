
function SignUp() {
    return (
        <div className="my-[5%] mx-[20%] md:mx-[30%] lg:mx-[30%]">
            <h1 className="text-center mb-[10px] text-2xl font-bold">Sign Up Here</h1>
            <form action="" className="">
                <div className="mb-3" >
                    <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="First Name" />
                </div>
                <div className="mb-3">
                    <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="Last Name" />
                </div>
                <div className="mb-3">
                    <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="Phone" />
                </div>
                <div className="mb-3">
                    <input type="email" className="outline outline-1 w-full p-[10px]" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="outline outline-1 w-full p-[10px]" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <input type="password" className="outline outline-1 w-full p-[10px]" placeholder="Confirm Password" />
                </div>
                <div>
                    <button className="bg-pink-950 p-[10px] text-white rounded-lg">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp