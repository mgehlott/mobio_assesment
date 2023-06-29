
import useFetch from "../../hooks/useFetch";
import ProductItem from "./ProductItem";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  console.log(data);
  
  

  return (
    <>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
          <div className="grid xs:grid-cols-2 sm:grid-cols-2  md:grid-cols-4">
          {data.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      )}
    </>
  );
};

export default Products;
