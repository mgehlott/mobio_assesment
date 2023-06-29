
import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";

const URL = "https://fakestoreapi.com/products";
const Products = () => {
  const [data, setData] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ btnTitle, setBtnTitle ] = useState("Asc");
  const [btnPrice, setBtnPrice] = useState("Asc");
  console.log(data);

   const sortByTitle = () => {
    console.log("click");
    if (btnTitle === "Asc") {
      setData((preReviews) => {
        const sorted = preReviews.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        return sorted;
      });
      setBtnTitle("Des");
    } else if (btnTitle === "Des") {
      setData((preReviews) => {
        const sorted = preReviews.sort((a, b) => {
          if (a.title > b.title) {
            return -1;
          }
          if (a.title < b.title) {
            return 1;
          }
          return 0;
        });
        return sorted;
      });
      setBtnTitle("Asc");
    }
  };

  const sortByPrice = () => {
    console.log("click");
    if (btnPrice === "Asc") {
      setData((preData) => {
        const sorted = preData.sort((a, b) => {
         return a.price - b.price
        });
        return sorted;
      });
      setBtnPrice("Des");
    } else if (btnPrice === "Des") {
      setData((preData) => {
        const sorted = preData.sort((a, b) => {
          return b.price - a.price;
        });
        return sorted;
      });
      setBtnPrice("Asc");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL);
        // console.log(response);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading === true ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-3">
          <div className="ml-5 mb-5 text-2xl">
            Sort By
            <span
              onClick={sortByTitle}
              className="ml-5 cursor-pointer bg-red-700 text-white px-4 py-1 rounded-md"
            >
              {`Sort by Name in ${btnTitle}`}
            </span>
            <span
              onClick={sortByPrice}
              className="ml-5 cursor-pointer bg-red-700 text-white px-4 py-1 rounded-md"
            >
             {`Sort by Price in ${btnPrice}`}
            </span>
          </div>
          <div className="grid xs:grid-cols-2 sm:grid-cols-2  md:grid-cols-4">
            {data.map((item) => {
              return <ProductItem key={item.id} product={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
