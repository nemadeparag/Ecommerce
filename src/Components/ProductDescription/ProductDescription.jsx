import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [atTop, setAtTop] = useState(true); // State to track if we're at the top
  const [atBottom, setAtBottom] = useState(false); // State to track if we're at the bottom
  const sideImagesRef = useRef(null); // Ref for the sideImages container

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

  const handleScroll = () => {
    const container = sideImagesRef.current;
    if (container) {
      setAtTop(container.scrollTop === 0);
      setAtBottom(container.scrollTop + container.clientHeight >= container.scrollHeight);
    }
  };

  const scrollUp = () => {
    if (sideImagesRef.current) {
      sideImagesRef.current.scrollTop -= 100; // Adjust the scroll amount as needed
      handleScroll(); // Check the scroll position after scrolling
    }
  };

  const scrollDown = () => {
    if (sideImagesRef.current) {
      sideImagesRef.current.scrollTop += 100; // Adjust the scroll amount as needed
      handleScroll(); // Check the scroll position after scrolling
    }
  };

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
    <div className="h-screen max-w-[95%] flex mt-10 m-auto p-5 bg-white">
      <div className="imageContainer flex w-[40%] h-[30rem] ">
        <div className="sideImages w-[20%]  relative">
          <div
            ref={sideImagesRef}
            className="h-full overflow-hidden"
            onScroll={handleScroll}
            style={{ scrollBehavior: 'smooth' }} // Smooth scrolling effect
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                className="object-contain w-full h-[7rem] p-2"
                src={image}
                alt="Product"
              />
            ))}
          </div>
          {/* Scroll buttons */}
          {!atTop && ( // Hide the "Up" button if we're at the top
            <button
              className="absolute top-0 w-full bg-gray-200 p-2 rounded"
              onClick={scrollUp}
            >
              ↑
            </button>
          )}
          {!atBottom && ( // Hide the "Down" button if we're at the bottom
            <button
              className="absolute bottom-0 w-full bg-gray-200 p-2 rounded"
              onClick={scrollDown}
            >
              ↓
            </button>
          )}
        </div>
        <div className="mainImage w-[80%] relative">
          <img
            className="object-contain w-full h-full p-2"
            src={product.images[0]}
            alt="Product"
          />
        </div>
      </div>
      <div className="infoContainer w-[60%]">
        <div className='firstInfo'>
          <h1 className="text-xl mb-3">{product.title}</h1>
          <h1 className="font-semibold text-sm text-white border w-fit px-2 py-0.5 rounded bg-emerald-600 mb-3">{product.rating} ★</h1>
            <div className='price flex gap-2 items-baseline'>
              <h1 className='text-2xl font-semibold'>₹{product.price}</h1>
              <h2 className='line-through text-md text-gray-500'>₹{product.discountedprice}</h2>
              <h2 className='font-semibold text-emerald-700'>{product.discount}% off</h2>
            </div>
          <div className='availableOffers '>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
