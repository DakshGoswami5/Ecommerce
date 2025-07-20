import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncDeleteProduct, asyncUpdateProduct } from "../../store/actions/productActions";

const ProductDetails = () => {

  const { id } = useParams();
  const { 
    productReducer: { products },
    userReducer: { users }, 
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);


    const { register , reset, handleSubmit } = useForm({
      defaultValues: {
        image: product?.image,
        title: product?.title,
        price: product?.price,
        category: product?.category,
        description: product?.description,
      }
    });
    const navigate =  useNavigate();
    const dispatch = useDispatch();

    const UpdateProductHandler = (product) => {
        dispatch(asyncUpdateProduct(id,product));

    };

    const DeleteHandler = () => {
      dispatch(asyncDeleteProduct(id));
      navigate("/products");
    }


  return product ? (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1e1e1e] p-6">
    <div className="w-full flex flex-col lg:flex-row gap-8 p-6">
      <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg">
        <img className="w-full h-[300px] object-cover rounded-md"
        src={product.image} 
        alt={product.title} />
        <div className="mt-5">
          <h1 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-white">{product.title}</h1>
          <p className="text-xl font-medium text-green-500 mb-3">${product.price}</p>
          <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Add to cart
          </button>
        </div>
      </div>
    {users && users?.isAdmin && 
      <form 
        onSubmit={handleSubmit(UpdateProductHandler)} 
        className="lg:w-1/2 w-full bg-gray-100 dark:bg-gray-900 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">Admin Panel</h2>
        <input 
        {...register("image")}
        className="w-full p-2 rounded border outline-none"
        type="url"
        placeholder="Image url"
        />
        <input 
        {...register("title")}
        className="w-full p-2 rounded border outline-none"
        type="text"
        placeholder="Title"
        />
        <input 
        {...register("price")}
        className="w-full p-2 rounded border outline-none"
        type="number"
        placeholder="0.00"
        />
        <textarea 
        {...register("description")}
        className="w-full p-2 rounded border outline-none"
        placeholder="Enter Description here..."
        ></textarea>
        <input 
        {...register("category")}
        className="w-full p-2 rounded border outline-none"
        type="text"
        placeholder="category"
        />
        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Update Product
          </button>
          <button 
          type="button" 
          onClick={DeleteHandler} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
          Delete Product
          </button>
        </div>
      </form>
      }
    </div>
    </div>
  ): (
    <div className="p-6 text-center text-gray-700 dark:text-white">"Loading..."</div>

  );
};

export default ProductDetails;