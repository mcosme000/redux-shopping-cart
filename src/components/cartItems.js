import CartItem from "./cartItem";
import { useSelector } from "react-redux";

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.itemsList)
  
  const renderCartItems = cartItems.map((item) => {
    return <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
      img={item.img}
    />
  })

  return (
    <div className="bg-white rounded drop-shadow-custom absolute w-[400px] right-0 top-7">
    <h2 className="font-bold text-md px-4 py-2">Your Cart</h2>
    <div>
      {cartItems.length >= 1
        ? renderCartItems
        : <p>Your cart is empty</p>}
    </div>
  </div>
  )
}

export default CartItems;
