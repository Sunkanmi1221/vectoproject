import { useParams } from "react-router-dom"
import { useContext } from "react"
import EcomContext from "../../context/EcomContext"



function Detail(item) {
    const param = useParams()
    const foodid = param.id
    const { product } = useContext(EcomContext)
    const fooditem = product.find((item) => parseInt(item.id) === parseInt(foodid))

    const { addToCart } = useContext(EcomContext)


    return (
        <div className="lg:flex md:flex gap-5 px-[5%] py-[3%] justify-between">
            <div>
                <img src={fooditem?.img} alt="" className="h-[200px] lg:h-[400px] md:h-[400px] lg:w-[450px] md:w-[450px] object-cover rounded-lg border-2  shadow-lg shadow-pink-950" />
            </div>
            <div className="mt-5 lg:w-[60%] md:w-[60%]">
                <h2 className="text-2xl font-bold mb-[10px] border-b-2">{fooditem?.name}</h2>
                <p>
                    {fooditem.description}
                </p>
                <p className="py-3 text-l font-bold">Price:${fooditem?.price}</p>
                <p className="mb-[10px]">
                    Category: <span className="text-pink-950 italic font-bold">{fooditem?.category}</span>
                </p>
                <button onClick={() => addToCart({ ...item, quantity: 1 })} className="bg-slate-950 text-white rounded p-[10] h-[40px] w-[100px]">Add to cart</button>
            </div>
        </div>
    )
}

export default Detail