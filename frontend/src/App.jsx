import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch } from "react-redux";


const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
  })

  return (
    <div className="px-[10%] text-white font-thin w-screen h-screen bg-gray-800">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;