import { useSelector, useDispatch} from "react-redux";
import { showCart } from "../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.totalQuantity)

  const show = useSelector(state => state.cart.showCart)

  const handleClick = () => {
    dispatch(showCart())
  }

  return (
    <div onClick={handleClick}>
      <h3>Cart: {quantity} Items</h3>
      { show && <div>
        <p>Cart content</p>
      </div> }
    </div>
  )
}

export default Cart;
