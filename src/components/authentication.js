import { login } from "../store/authentication-slice";
import { useDispatch } from "react-redux";

const Authentication = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login())
  }

  return (
    <div className="bg-white shadow-md rounded m-auto w-8/12 px-8 p-8 ">
      <h1 className="font-bold text-2xl">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id">Id</label>
          <input type="text" name="id" id="id"
          className="border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"
          className="border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button
          type="submit"
          className="login-btn w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 rounded-lg text-sm px-5 py-2.5">
          Login
        </button>
      </form>
    </div>
  )
}

export default Authentication;
