import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";
import { asyncLoadProducts } from "./store/actions/productActions";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="overflow-auto px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;