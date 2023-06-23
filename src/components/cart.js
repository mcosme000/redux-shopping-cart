import { useSelector, useDispatch} from "react-redux";
import { showCart } from "../store/cart-slice";
import CartItems from "./cartItems";

const Cart = () => {
  const dispatch = useDispatch();

  const quantity = useSelector(state => state.cart.totalQuantity)
  const show = useSelector(state => state.cart.showCart)

  const handleClick = () => {
    dispatch(showCart())
  }

  return (
    <div className="relative hover:cursor-pointer">
      <h3 onClick={handleClick}>Cart: {quantity} Items</h3>
      { show && <CartItems /> }
    </div>
  )
}

export default Cart;
