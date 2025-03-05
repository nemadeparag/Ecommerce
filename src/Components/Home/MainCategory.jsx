import React from 'react'

const categories = [
    { name: "Kilos", image: "/images/kilos.png" },
    { name: "Mobiles", image: "/images/mobiles.png" },
    { name: "Fashion", image: "/images/fashion.png", dropdown: true },
    { name: "Electronics", image: "/images/electronics.png", dropdown: true },
    { name: "Home & Furniture", image: "/images/home-furniture.png", dropdown: true },
    { name: "Appliances", image: "/images/appliances.png" },
    { name: "Flight Bookings", image: "/images/flight.png" },
    { name: "Beauty, Toys & More", image: "/images/beauty-toys.png" },
    { name: "Two Wheelers", image: "/images/two-wheelers.png", dropdown: true },
  ];

function MainCategory() {
  return (
      <div className="bg-gray-100 w-full py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center cursor-pointer group">
            <img src={category.image} alt={category.name} className="h-16 w-16 object-contain" />
            <div className="text-sm font-medium flex items-center">
              {category.name}
              {category.dropdown && <span className="ml-1">▼</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainCategory
