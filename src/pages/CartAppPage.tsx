import { useState } from "react";
import Cart from "../components/Cart/Cart";
import NavBar from "../components/NavBar/NavBar"
import GoHomeButton from "../components/GoHome/GoHome";


const CartAppPage = () => {

    const [cartItems, setCartItems] = useState(['Product1', 'Product2'])
  
    return (
    <> 
        <NavBar cartItemsCount={cartItems.length}/>
        <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
        <GoHomeButton />
    </>
  )
}

export default CartAppPage