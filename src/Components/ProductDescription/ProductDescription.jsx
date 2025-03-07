import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data); // Assuming the API returns a single product object
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
  <h2 className="text-gray-700 mb-2">{product.shortdescription}</h2>
  <h2 className="text-gray-500 mb-4">{product.title}</h2>
  <h2 className="text-2xl font-bold text-green-600 mb-4">₹{product.discountedprice}</h2>
  <h2 className="line-through text-gray-500">₹{product.price}</h2>
  <div className="text-sm text-gray-600 mt-4">
   
  </div>
</div>

  );
};

export default ProductDescription;
