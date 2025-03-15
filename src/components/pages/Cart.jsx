import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems, updateQuantity, totalAmount, removeItem } = useContext(EcomContext)

    const cartTable = (
        <div>
            <table className="w-[90%] mx-auto text-sm md:text xl lg:text-xl">
                <thead>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>

                </thead>
                <tbody className="text-center">
                    {cartItems.map((item) => (
                        <tr className="border-b-2">
                            <td>
                                <button onClick={() => removeItem(item.id)}>
                                    <MdDelete className="text-xl md:text-3xl lg:text-3xl flex text-pink-950" />
                                </button>
                            </td>
                            <td className="text-sm md:text-xl  lg:text-xl">{item.name}</td>
                            <td>
                                <img src={item.img} alt="" className="h-[30px] w-[50%] md:h-[80px] md:w-[80%] lg:h-[80px] lg:w-[80%]" />
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <input type="number" value={item.quantity} className=" w-full max-w-[80px] md: max-w-[100px] outline outline-1 " onChange={(e) => updateQuantity(item.id, e.target.value)} />
                            </td>
                            <td>${item.amount}</td>


                        </tr>
                    ))}


                </tbody>
            </table>
            <div className="flex justify-between mt-[3%]">
                <div>
                    <p className="md:text-2xl lg:text-xl">Total Amount = ${totalAmount()}</p>
                </div>
                <div>
                    <Link to="/order">
                        <button className="bg-pink-950 text-white text-sm md:text-xl  p-[4px] md:p-[10px] rounded-lg">Order Now</button>
                    </Link>
                </div>
            </div>

        </div>
    );

    return (
        <div className="my-[5%] mx-[7%]">
            <h1 className="text-center font-bold text-xl md:text-3xl lg:text-3xl mb-[5%]">Your Shop Cart</h1>
            {cartItems.length > 0 ? cartTable : <p className="text-center">No Items in Cart</p>}
        </div>
    );
}

export default Cart;