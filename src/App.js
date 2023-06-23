import Authentication from "./components/authentication";
import Layout from "./components/layout";

import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)
  console.log(isLoggedIn);

  const cartItems = useSelector(state => state.cart.itemsList)
  console.log(cartItems)

  const cartStatus = useSelector(state => state.cart.showCart)
  console.log(`Cart's visibility: ${cartStatus}`)

  return (
    <div className="w-full h-full bg-blue-100 grid ">
      { isLoggedIn
      ? <Layout />
      : <div className="h-full grid"><Authentication /></div> }
    </div>
  );
}

export default App;
