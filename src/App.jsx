import CartProvider from "./Components/CartContext/CartProvider";
import Home from "./Components/CartContext/Home";
import Cart from "./Components/CartContext/Cart"
import AutoLogOutApp from "./Components/AutoLogOutApp";
import TodoApp from "./Components/ToDoApp/TodoApp";
const App=()=>{
  return(
    
    <div>
      <AutoLogOutApp/>
<CartProvider>
  <Home/>
  <Cart/>
</CartProvider>
<TodoApp/>
    </div>
    
   
  )
}
export default App;