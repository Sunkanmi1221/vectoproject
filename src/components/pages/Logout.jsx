import { Link } from "react-router-dom";

function Logout() {


    return (
        <div className="my-[5%] mx-[5%] md:mx-[30%] lg:mx-[30%] text-center">
            
            <h1 className="md:text-2xl lg:text-3xl font-bold mb-[20px]">You've been logged out</h1>
            <p className="text-gray-600 mb-[30px]">
                Thank you for using our service. We hope to see you again soon!
            </p>

           
            <div className="flex flex-col gap-4">
                <Link
                    to="/login"
                    className="bg-pink-950 p-[10px] text-white rounded-lg text-center"
                >
                    Log In Again
                </Link>
                <Link
                    to="/"
                    className="bg-gray-300 p-[10px] text-gray-800 rounded-lg text-center"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
}

export default Logout;