import CartProvider from "./Components/CartContext/CartProvider";
import Home from "./Components/CartContext/Home";
import Cart from "./Components/CartContext/Cart";
import AutoLogOutApp from "./Components/AutoLogOutApp";
import TodoApp from "./Components/ToDoApp/TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";
import MultiStepForm from "./Components/MultiStepForm/MultiStepForm";

const App = () => {
  return (
    <div>
      {/* <AutoLogOutApp/> */}
      {/* <CartProvider>
        <Home/>
       <Cart/>
       </CartProvider> */}
      {/* <TodoApp/> */}
      <MultiStepForm />
    </div>
  );
};
export default App;
