import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const IncreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };
        
          copyuser.cart[index] = { 
            ...copyuser.cart[index], 
            quantity: copyuser.cart[index].quantity + 1,
          };
          console.log(copyuser);
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const DecreaseQuantityHandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

      if(users.cart[index].quantity > 1){
        copyuser.cart[index] = { 
          ...copyuser.cart[index], 
          quantity: copyuser.cart[index].quantity - 1,
        };
    } else {
      copyuser.cart.splice(index,1);
    }
          
          console.log(copyuser);
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
  };

  const cartItem = users.cart.map ((c, index) => (
    <li className="bg-[#eeeeee] flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6 p-4 rounded-2xl shadow-md transition hover:shadow-xl" key={c.product.id}>
      <div className="flex items-center gap-4">
      <img 
        className="w-24 h-24 rounded-xl object-cover" 
        src={c.product.image} 
        alt={c.product.title}>
      </img>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{c.product.title}</h2>
          <p className="text-gray-500">{c.product.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-end md:self-auto">
        <button 
        onClick={() =>DecreaseQuantityHandler(index, c)} 
        className="bg-gray-300 hover:bg-gray-400 text-xl px-3 py-1 rounded">
          -
        </button>
        <span className="text-lg font-semibold text-gray-800 bg-gray-200 px-4 py-1 rounded"> 
          {c.quantity}
          </span>
        <button 
        onClick={() =>IncreaseQuantityHandler(index, c)} 
        className="bg-gray-300 hover:bg-gray-400 text-xl px-3 py-1 rounded">
          +
        </button>
      </div>
    </li>
));

  return (
    <div className="min-h-screen p-4 max-w-3xl mx-auto bg-transparent">
      <h1 className="text-3xl font-bold mb-6 text-gray-600">Your Cart</h1>
      {users.cart.length > 0 ? (
        <ul>{cartItem}</ul>
      ) : (
        <p className="text-3xl text-gray-100 text-center mt-10">Your Cart is Empty 🛒</p>
      )}
    </div>
  );
};

export default Cart;