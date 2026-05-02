import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ShimmerUI from "./ShimmerUI";
import "./cardlist.css";

const CardList = ({placeholder}) => {
 const [productData, setProductData] = useState([]);
 const [loading, setLoading] = useState(true);
// async await fetch("https://dummyjson.com/products") ---hw
 useEffect(() => {
  //mounting phase
   fetch("https://dummyjson.com/products")
   .then((res) => res.json())
   .then((data) =>{
    setProductData(data.products || []);
    setLoading(false);
   }).catch((err) => {
    console.log(err);
    setLoading(false);
   });
   return()=>{//unmounting phase, cleanup function, unmount korle taholei return execute hobe
  console.log("Component unmounted");
    setProductData([]);//reset the product data to an empty array when the component unmounts
   
  }

 }, []);//[] means that the useEffect will only run once when the component mounts

 if(loading) return <ShimmerUI count={10}/>;

  return (
    <div className="products-container">
      <div className="products-grid">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CardList;