import Product from "./product";

const products_data = [
  {
    id: 1,
    name: "MacBook",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 2,
    name: "Lenovo Yoga",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 3,
    name: "Dell lattitude",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 4,
    name: "HP Pavillion",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
  {
    id: 5,
    name: "Acer Aspire",
    imgURL:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 25,
  },
];

const renderProducts = products_data.map((product, index) => {
  return <Product
    key={index}
    id={product.id}
    name={product.name}
    img={product.imgURL}
    price={product.price}
  />
})

const Products = () => {
  return (
    <div className="p-8 grid gap-3.5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderProducts}
    </div>
  );
};

export default Products;
