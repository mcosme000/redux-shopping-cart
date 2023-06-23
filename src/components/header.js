import Cart from "./cart";

const Header = () => {
  return (
    <nav className="p-4 bg-white w-full mb-5 flex justify-between">
      <h1 className="font-bold text-xl">Tech store</h1>
      <Cart />
    </nav>
  )
}

export default Header;
