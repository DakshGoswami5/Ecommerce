import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";


const ProductTemplate = ({product}) => {
    const dispatch = useDispatch();
    
    const users = useSelector((state) => state.userReducer.users);


    const AddtoCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] };
        const x = copyuser.cart.findIndex((c) => c.product.id == product.id);
    
        if (x == -1) {
          copyuser.cart.push({ product, quantity: 1});
        } else {
          copyuser.cart[x] = { 
            product, 
            quantity: copyuser.cart[x].quantity + 1,
          };
        }
        console.log(copyuser);
        dispatch(asyncUpdateUser(copyuser.id, copyuser));
      };

  return (
    <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl">
      <div className="overflow aspect-[4/3]">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-full object-center object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
          {product.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {product.description.slice(0, 100)}...
        </p>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-green-600 dark:text-green-400">
            ₹{product.price}
          </p>
          <button
            onClick={() => AddtoCartHandler(product)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded transition"
          >
            Add to Cart
          </button>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="block mt-4 text-center text-blue-500 dark:text-blue-400 hover:underline"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}

export default ProductTemplate