import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductSidebar from "./ProductSidebar";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  // Fetching data from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="flex p-2">
      <div className="w-1/4">
        <ProductSidebar />
      </div>
      <div className="w-3/4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
        {products.length > 0 ? (
          <ul className="flex flex-wrap justify-around gap-3 p-2">
            {products.map((product) => (
                <div
                key={product.id}
                className="h-[23rem] w-[16rem] rounded hover:scale-102 duration-300 transition-ease-in shadow-sm hover:shadow-md bg-white"
              >
              <Link to={`/products/${product.id}`}>
                  <div className="h-[70%] flex justify-center p-2 items-center">
                    <img src={product.images[0]} alt="Product Image" className="h-full" />
                  </div>
                <div className="h-[30%] p-2 bg-white hover:-translate-y-5 transition-all duration-300  ">
                  <h2 className="font-semibold">{product.title}</h2>
                  <h2 className="font-medium">
                    ₹{product.price}{" "}
                    <span className="line-through text-gray-600 text-sm">
                      ₹{product.discountedprice}
                    </span>
                  </h2>
                  <h1 className="text-sm text-green-700 font-medium">
                    {product.availableoffers[1]?.name}
                  </h1>
                </div>
              </Link>
              </div>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
