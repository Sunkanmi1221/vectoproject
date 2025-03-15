import { useState } from "react"
import { HiMenu } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function Header() {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(EcomContext)

  return (
    <div className="sticky top-0 z-[20] flex items-center justify-between py-[15px] px-[30px] bg-pink-950">
      <div>
        <Link to="/">
          <h1 className="text-[24px] text-white font-bold" >VECTO</h1>
        </Link>
      </div>
      <nav className="hidden lg:flex space-x-4 text-white text-[15px]">
        <Link to="/"> Home</Link>
        <Link to="/products"> Products</Link>
        <Link to="/cart" className="relative">
          <BsCart4 className="text-xl" />
          <div className="absolute bottom-2 font-bold left-2 text-blue-950 bg-white text-center rounded-full h-4 w-4 text-[10px]">{cartItems.length}</div>
        </Link>
        <Link to="/login"> Login</Link>
        <Link to="/signUp"> Sign Up</Link>
        <Link to="/logout"> Logout</Link>
      </nav>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-[35px] h-[35px] lg:hidden"
      >
        <HiMenu className="text3xl text-white" />
      </button>
      <div
        onClick={() => setOpen(!open)}
        className={`fixed lg:hidden top-0 w-full bg-black z-[20] ${open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
      ></div>
      <div
        className={`fixed lg:hidden left-0 top-0 w-[150px] h-[100%] overflow-auto z-[30px] bg-pink-900 transition-all duration-200 ${open ? "translate-x-[0px]" : "translate-x-[-500px] "
          }`}
      >
        <nav className="flex flex-col lg:space-x- text-white text-[20px] pt-[60px] px-[20px] ">
          <Link to="/"> Home</Link>
          <Link to="/products"> Products</Link>
          <Link to="/cart" className="relative">
            <BsCart4 className="text-xl" />
            <div className="absolute bottom-2 font-bold left-2 text-blue-950 bg-white text-center rounded-full h-4 w-4 text-[10px]">5</div>
          </Link>
          <Link to="/login"> Login</Link>
          <Link to="/signUp"> Sign Up</Link>
          <Link to="/logout"> Logout</Link>

        </nav>
      </div>
      
    </div >

    

    


  )
}

export default Header