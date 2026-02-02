import productsItems from './ProductItems';
import CartContext from './CartContext';
import { useContext } from 'react';
const Home=()=>{
const {addToCart,cartItem}=useContext(CartContext)
    return(
        <div>
             
            {productsItems.map((item)=>(
                <div key={item.id}>               
                <p>{item.name} - {item.price}</p>
                <button onClick={()=>addToCart(item)}>add</button>
                <p>
  Cart: {cartItem.map(c => c.name).join(", ")}
</p>

              </div>
            ))}
        </div>
    )
}
export default Home;