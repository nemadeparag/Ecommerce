import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/images/shirt.webp",
    title: "T-Shirts, Shirts, Jeans",
    price: "Under ₹499",
  },
  {
    id: 2,
    image: "/images/shoes.png",
    title: "Top Offers",
    price: "Under ₹499",
  },
  {
    id: 3,
    image: "/images/saree.png",
    title: "Bestselling Sarees",
    price: "Under ₹499",
  },
  {
    id: 4,
    image: "/images/sneakers.png",
    title: "Reebok, HRX...",
    price: "Min. 70% Off",
  },
  {
    id: 5,
    image: "/images/shirt.webp",
    title: "Trendy Handbags",
    price: "Under ₹499",
  },
  {
    id: 6,
    image: "/images/accessories.png",
    title: "Accessories Combo",
    price: "Under ₹499",
  },
  {
    id: 7,
    image: "/images/shirt.webp",
    title: "Trendy Handbags2",
    price: "Under ₹499",
  },
  {
    id: 8,
    image: "/images/shirt.webp",
    title: "Trendy Handbags3",
    price: "Under ₹499",
  },
];

// Custom Left Button
const PrevButton = ({ onClick }) => (
  <button
    className="absolute left-0 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronLeft className="text-gray-600 text-lg" />
  </button>
);

// Custom Right Button
const NextButton = ({ onClick }) => (
  <button
    className="absolute right-0 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 hover:bg-gray-200"
    onClick={onClick}
  >
    <FaChevronRight className="text-gray-600 text-lg" />
  </button>
);

function CategoryItem() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  // Handle Click on Product
  const handleItemClick = (link) => {
    console.log("Navigating to:", link);
    // window.location.href = link; // Redirect to product category
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">499 only</h2>
      <Slider {...settings}>
        {products.map((item) => (
          <div
            key={item.id}
            className="p-2"
            onClick={() => handleItemClick(item.link)}
          >
            <div className="bg-white shadow-lg rounded-lg p-3 text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[150px] object-contain mx-auto"
              />
              <p className="font-semibold mt-2">{item.title}</p>
              <p className="text-red-500 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryItem;
