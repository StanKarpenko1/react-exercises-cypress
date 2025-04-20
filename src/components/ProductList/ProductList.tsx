import { useEffect, useState } from "react"

const ProductList = ({category}: {category: string}) => {

    const [_, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log('fetching products in', category)
        setProducts(['Clothing', 'Household'])
    }, [category])

  return (
    <div>ProductList</div>
  )
}

export default ProductList