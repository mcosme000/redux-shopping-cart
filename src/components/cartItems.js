import CartItem from "./cartItem";
import { useSelector } from "react-redux";

const CartItems = () => {

  const cartItems = useSelector(state => state.cart.itemsList)
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.totalPrice
  })

  const renderCartItems = cartItems.map((item) => {
    return <CartItem
      key={item.id}
      id={item.id}
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
        ? <div>
            {renderCartItems}
            <p className="font-bold px-4 py-2 text-right">Total price: {totalPrice}</p>
          </div>
        : <p className="px-4 py-2">Your cart is empty</p>}
    </div>
  </div>
  )
}

export default CartItems;
