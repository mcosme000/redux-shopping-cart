
const CartItem = ({ name, quantity, total, price, id }) => {

  const removeHandler = () => {

  }

  const addHandler = () => {

  }

  return (
    <div className="cartItem" id={id}>
      <h2>{name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  )
}

export default CartItem;
