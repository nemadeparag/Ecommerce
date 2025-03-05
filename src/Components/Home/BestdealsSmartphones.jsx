import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const products = [
    {
        "id": 1,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        "title": "Budget Smartphone",
        "price": "₹6,999"
      },
      {
        "id": 2,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        "title": "Mid-Range Smartphone",
        "price": "₹14,999"
      },
      {
        "id": 3,
        "image": "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        "title": "Flagship Smartphone",
        "price": "₹49,999"
      },
      {
        "id": 4,
        "image": "https://images.unsplash.com/photo-1510557880182-3c5aeeffd1a3?w=600&auto=format&fit=crop&q=60",
        "title": "Gaming Smartphone",
        "price": "₹34,999"
      },
      {
        "id": 5,
        "image": "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        "title": "Camera-Centric Smartphone",
        "price": "₹29,999"
      },
      {
        "id": 6,
        "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        "title": "5G Smartphone",
        "price": "₹19,999"
      },
      {
        "id": 7,
        "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        "title": "Compact Smartphone",
        "price": "₹24,999"
      },
      {
        "id": 8,
        "image": "https://images.unsplash.com/photo-1510557880182-3c5aeeffd1a3?w=600&auto=format&fit=crop&q=60",
        "title": "Rugged Smartphone",
        "price": "₹15,499"
      }
  ];

const BestdealsSmartphones = () => {


    const PrevButton = ({ onClick }) => (
        <button
          className="absolute left-0 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 hover:bg-gray-200"
          onClick={onClick}
        >
          <FaChevronLeft className="text-gray-600 text-lg" />
        </button>
      );
      

    const NextButton = ({ onClick }) => (
        <button
          className="absolute right-0 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 hover:bg-gray-200"
          onClick={onClick}
        >
          <FaChevronRight className="text-gray-600 text-lg" />
        </button>
      );
    
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
    <div>
        <div className="relative w-full max-w-[1400px] mx-auto px-4 py-4 my-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Best Deals on Smartphones</h2>
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.id} className="p-2" onClick={() => handleItemClick(item.link)}>
            <div className="bg-white shadow-lg rounded-lg p-3 text-center">
              <img src={item.image} alt={item.title} className="w-full h-[150px] object-contain mx-auto" />
              <p className="font-semibold mt-2">{item.title}</p>
              <p className="text-red-500 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default BestdealsSmartphones