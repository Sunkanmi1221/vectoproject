import { useContext } from "react"
import EcomContext from "../../context/EcomContext"
import ProductItem from "../ProductItem"




function Products() {
  const { product } = useContext(EcomContext)

  return (
    <div className="mx-[5%]">
      <h1 className="py-[10px] text-xl font-bold ml-5">All Products</h1>
      <div className="grid md:grid-cols-2  lg:grid-cols-4 ml-5">
        {product.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>

  )
}

export default Products