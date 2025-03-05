import React from 'react';

const products = [
  {
    id: 1, // Added IDs to parent cards for unique keys
    cardTitle: "Season's Top Pick's",
    innerCard: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        title: "Budget Smartphone",
        price: "₹6,999",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        title: "Mid-Range Smartphone",
        price: "₹14,999",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
    ],
  },
  {
    id: 2,
    cardTitle: "Summer Essentials",
    innerCard: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        title: "Budget Smartphone",
        price: "₹6,999",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        title: "Mid-Range Smartphone",
        price: "₹14,999",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
    ],
  },
  {
    id: 3,
    cardTitle: "Home Decor & Furnishing",
    innerCard: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60",
        title: "Budget Smartphone",
        price: "₹6,999",
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60",
        title: "Mid-Range Smartphone",
        price: "₹14,999",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1512499617640-c2f9992f0d8b?w=600&auto=format&fit=crop&q=60",
        title: "Flagship Smartphone",
        price: "₹49,999",
      },
    ],
  },
];

const MultiProduct3Card = () => {
  return (
    <div className='relative w-full max-w-[1400px] mx-auto px-4 py-4 my-4 flex gap-4'>
      {
        products.map((val) => (
          <div key={val.id} className='w-[30rem] bg-white rounded-md p-4'>
            <h1 className='text-xl font-semibold mb-4'>{val.cardTitle}</h1>
            <div className='flex flex-wrap justify-center items-center gap-5'>
              {
                val.innerCard.map((val2) => (
                  <div key={val2.id} className="border border-zinc-400 h-[12rem] w-[12rem] rounded-md p-2">
                    <img src={val2.image} alt="Product" className="h-[60%] w-full object-cover rounded mb-2" />
                    <h2 className="font-medium text-sm">{val2.title}</h2>
                    <p className="text-gray-500">{val2.price}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default MultiProduct3Card;
