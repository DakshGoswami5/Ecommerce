import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register , reset, handleSubmit } = useForm();
    const navigate =  useNavigate();
    const dispatch = useDispatch();

    const CreateProductHandler = (product) => {
        product.id = nanoid(); 
        console.log(product);
        dispatch(asyncCreateProduct(product));
        navigate("/products");
    };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <form 
      onSubmit={handleSubmit(CreateProductHandler)} 
      className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center">
        Create New Product
      </h2>
        <input 
        {...register("image")}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="url"
        placeholder="Image url"
        />
        <input 
        {...register("title")}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Title"
        />
        <input 
        {...register("price")}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="number"
        placeholder="0.00"
        />
        <textarea 
        {...register("description")}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter Description here..."
        ></textarea>
        <input 
        {...register("category")}
        className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="category"
        />
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300">
          Create product
        </button>    
      </form>
    </div>
  );
}

export default CreateProduct