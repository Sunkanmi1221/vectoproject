import { useContext } from "react"
import EcomContext from "../context/EcomContext"
import ProductItem from "./ProductItem"

function Picked() {
  const { picked } = useContext(EcomContext)

  return (
    <div className="mx-[5%]">
      <h1 className="py-[10px] text-xl font-bold ml-5">Picked for you</h1>
      <div className="grid md:grid-cols-2  lg:grid-cols-4 ml-5">
        {picked.map((item) => (
          <ProductItem item={item} key={item.id} />

        ))}
      </div>
    </div>
  );
}

export default Picked;