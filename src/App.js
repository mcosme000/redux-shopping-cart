import Authentication from "./components/authentication";
import Layout from "./components/layout";

import { useSelector } from "react-redux";

function App() {

  const isLoggedIn = useSelector(state => state.authentication.isLoggedIn)
  console.log(isLoggedIn);

  return (
    <div className="w-full h-screen bg-blue-100 flex">
      { isLoggedIn ? <Layout /> : <Authentication /> }
    </div>
  );
}

export default App;
