import React, { useEffect, useState } from "react";
import axios from "axios";

// Reusable Collapsible Section Component
const CollapsibleSection = ({ title, items, isOpen, toggleOpen, itemKey }) => (
  <div className="border-b border-gray-300 pb-2">
    <div
      onClick={toggleOpen}
      className="cursor-pointer text-lg font-medium flex justify-between items-center"
    >
      <span>{title}</span>
      <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && (
      <div className="mt-2">
        {items.map((item, index) => (
          <div key={`${item[itemKey]}-${index}`} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`${item[itemKey]}`}
              value={item[itemKey]}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor={`${item[itemKey]}`} className="ml-2 text-gray-700">
              {item[itemKey]}
            </label>
          </div>
        ))}
      </div>
    )}
  </div>
);

const ProductSidebar = () => {
  const [products, setProducts] = useState([]);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [isdelivery, setIsdelivery] = useState(false);

  // Fetch products from the API
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

  return (
    <div className="w-full bg-white border-r border-gray-300 p-4">
      <h1 className="font-bold text-xl mb-4">Filters</h1>

      {/* Brand Section */}
      <CollapsibleSection
        title="Brand"
        items={products}
        isOpen={isBrandOpen}
        toggleOpen={() => setIsBrandOpen(!isBrandOpen)}
        itemKey="brand"
      />

      {/* Rating Section */}
      <CollapsibleSection
        title="Rating"
        items={products}
        isOpen={isRatingOpen}
        toggleOpen={() => setIsRatingOpen(!isRatingOpen)}
        itemKey="rating"
      />
      {/* Rating Section */}
      <CollapsibleSection
        title="delivery"
        items={products}
        isOpen={isdelivery}
        toggleOpen={() => setIsdelivery(!isdelivery)}
        itemKey="delivery"
      />
    </div>
  );
};

export default ProductSidebar;
