const Product = (props) => {
  const { id, name, img, price} = props
  return (
    <div id={id} className="mb-3">
      <img className="w-full h-[150px] object-cover" src={img} alt="product"></img>
      <div className="p-3 bg-white">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>{price}$</p>
        <button className="mt-3 p-2 bg-purple-300 rounded w-full text-sm hover:bg-purple-400">Add to cart</button>
      </div>
    </div>
  )
}

export default Product;
