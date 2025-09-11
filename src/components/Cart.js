
//How do I read my cartItems using useselector
import { useSelector } from "react-redux"
import ItemListCategory from "./ItemListCategory"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"
const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-5 p-5 background-gray-50 shadow-lg">
            <h1 className="text-2xl bold">Cart</h1>
            <div className="w-6/12 mx-auto">
            <button className="p-2 m-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h1 className="text-2xl bold">Cart is Empty</h1>}
                <ItemListCategory  key={cartItems?.length} items={cartItems}/>
            </div>
        </div>
    )

}

export default Cart