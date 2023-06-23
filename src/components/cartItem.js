
const CartItem = ({ id, name, price, quantity, totalPrice, img}) => {

  const removeHandler = () => {

  }

  const addHandler = () => {

  }


  return (
    <div className="h-[100px] flex justify-between items-center p-4 border-bottom border-gray-500 border-t-thin
    hover:bg-slate-100" id={id}>
      <main className="flex">
        <img src={img} className="w-[70px] h-[70px] object-cover mr-5" alt="product"></img>
        <div>
          <h2 className="font-bold">{name}</h2>
          <p>${price} - <span>x{quantity}</span></p>
          <article className="text-sky-900">Subtotal: ${totalPrice}</article>
        </div>
      </main>
      <div>
        <button className="font-bold py-2 px-4 bg-gray-200 rounded text-sm mr-2" onClick={removeHandler}>-</button>
        <button className="font-bold py-2 px-4 bg-gray-200 rounded text-sm" onClick={addHandler}>+</button>
      </div>
    </div>
  )
}

export default CartItem;
