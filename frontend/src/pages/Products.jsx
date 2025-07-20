
import { lazy, Suspense } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useInfiniteProducts from "../utils/useInfiniteProducts";


const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {
  
  const { products, hasMore, fetchproducts} = useInfiniteProducts();

  return <InfiniteScroll   
          dataLength={products.length} 
          next={fetchproducts} 
          hasMore={hasMore}
          loader={
          <div className="text-center text-yellow-400">Loading products...</div>} 
          endMessage={
            <p className="text-center text-sm text-gray-400">
              <b>Yay! You have seen it all</b>
            </p>
          }>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Suspense 
              key={product.id} 
              fallback={
              <h1 className="text-center text-2xl text-yellow-500">
                Loading...
              </h1>}>
                <ProductTemplate product={product}/>
              </Suspense>
            ))}
            
                
            
            </div>
          </InfiniteScroll>
};

export default Products;