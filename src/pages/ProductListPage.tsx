import {  useState } from "react"
import GoHomeButton from "../components/GoHome/GoHome"
import ProductList from "../components/ProductList/ProductList"

const ProductListPage = () => {
    const [category, setCategory] = useState('')
   
  return (
    <div>
        <p>Product List Page</p>

        <select 
            className="form-select w-100 my-2" 
            onChange={(e) => setCategory(e.target.value)}>
            
            <option value=""></option>
            <option value="Clothing">Clothing</option>
            <option value="Household">Household</option>
        </select>
        
        <ProductList category={category} />
        <GoHomeButton />
    </div>
  )
}

export default ProductListPage