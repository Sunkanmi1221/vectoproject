import { useContext } from "react"
import EcomContext from "../context/EcomContext"
import ProductItem from "./ProductItem"

function Daily() {
  const { daily } = useContext(EcomContext)

  return (
    <div className="mx-[5%]">
      <h1 className="py-[10px] text-xl font-bold ml-5">Daily Specials</h1>
      <div className="grid md:grid-cols-2  lg:grid-cols-4 ml-5">
        {daily.map((item) => (
          <ProductItem item={item} key={item.id} />

        ))}
      </div>
    </div>
  );
}

export default Daily;