import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
// import { asyncLoadProducts } from "./store/actions/productActions";


const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  //const { products } = useSelector((state) => state.productReducer);
  
  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  // useEffect(() => {
  //   products.length == 0 && dispatch(asyncLoadProducts());
  // }, [products]);

  return (
    <div className="px-[10%] font-thin bg-gradient-to-br from-[#d0d0d0] to-[#4b4b4b]
">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App;