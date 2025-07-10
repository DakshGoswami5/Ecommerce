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
  console.log(product,users);



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
    <>
      <div className="w-full flex">
        <img className="w-1/2 h-1/2 object-cover" src={product.image} alt="" />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="mb-1 text-5xl font-thin">{product.title}</h1>
          <p className="mb-5 text-2xl text-green-400">${product.price}</p>
          <p className="mb-5">{product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    <hr></hr>
    {users && users?.isAdmin && 
      <form 
        onSubmit={handleSubmit(UpdateProductHandler)} 
        className="w-full flex flex-col justify-start items-start">
        <input 
        {...register("image")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="url"
        placeholder="Image url"
        />
        <input 
        {...register("title")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="Title"
        />
        <input 
        {...register("price")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="number"
        placeholder="0.00"
        />
        <textarea 
        {...register("description")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        placeholder="Enter Description here..."
        ></textarea>
        <input 
        {...register("category")}
        className="mb-3 outline-0 border-b p-2 text-4xl"
        type="text"
        placeholder="category"
        />
        <button className="mt-5 py-2 px-4 bg-blue-400 rounded">
          Update Product
        </button>
        <button 
        type="button" 
        onClick={DeleteHandler} 
        className="mt-5 py-2 px-4 bg-red-400 rounded"
        >
        Delete Product
        </button>
      </form>
      }
    </>
  ): (
    "Loading..."

  );
};

export default ProductDetails;