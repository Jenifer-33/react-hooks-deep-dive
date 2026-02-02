import { useContext } from "react";
import CartContext from "./CartContext";
const Cart=()=>{
    const {cartItem,removeItems}=useContext(CartContext)
    return(
        <div>
            {cartItem.map((item)=>(
                <div key={item.id}>
                    <p>{item.name} - {item.price}</p>
                    <button onClick={()=>removeItems(item.id)}>remove</button>
                </div>
            ))}
        </div>
    )
}
export default Cart;