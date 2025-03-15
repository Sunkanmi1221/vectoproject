import { Link } from "react-router-dom"
import { useContext } from "react";
import EcomContext from "../context/EcomContext";


function ProductItem({ item }) {
  const { addToCart } = useContext(EcomContext)

  return (
    <div className="mb-5 border-2 border-black w-max rounded-lg shadow-lg shadow-pink-950 my-5">
      <Link to={`/detail/${item.id}`}>
        <img
          src={item.img}
          alt={`Image of ${item.name}`}
          className="h-[200px] w-[250px] rounded-lg object-cover"
        />

      </Link>
      <div className="text-center mb-5 md:my-5 lg:my-5">
        <p className="lg:text-xl md:text-xl ">{item.name}</p>
        <p className="lg:py-3 md:py-3 md:text-xl lg:text-xl">${item.price}</p>
        <button
          onClick={() => addToCart({ ...item, quantity: 1 })} className="bg-slate-950  text-white rounded lg:p-[10px] md:p-[10px] h-[40px] w-[100px]">Add to cart</button>
         
      </div>
    </div>

  )
}

export default ProductItem