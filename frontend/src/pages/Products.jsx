import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Products = () => {

  const products = useSelector((state) => state.productReducer.products);

  const renderproduct = products.map(product => {
    return (
      <div 
        className="w-[30%] mr-3 mb-3 border shadow" 
        key={product.id}
      >
        <img 
          className="w-full h-[30vh] object-cover" 
          src={product.image} 
          alt=""
        />
        <h1>{product.title}</h1>
        <small>{product.description.slice(0, 100)}..</small>
        <div className="p-3 mt-3 flex justify-between items-center">
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
        <Link className="block w-1/2 m-auto" to={`/product/${product.id}`}>More Info</Link>
      </div>
    );
  });

  return products.length > 0 ? 
    <div 
      className="overflow-auto flex flex-wrap">
      {renderproduct}
    </div> : "Loading...";
};

export default Products;