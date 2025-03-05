import React from 'react';

const products = [
    {
        "title": "Storages & Containers",
        "price": 99.99,
        "description": "High-quality noise-cancelling wireless headphones with a long-lasting battery.",
        "image": "https://example.com/images/headphones.jpg",
        "background": "https://plus.unsplash.com/premium_vector-1738949538232-41fecb1186b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbXBsZSUyMHN0b3JhZ2UlMjBhbmQlMjBjb250YWluZXIlMjBiYWNrZ3JvdW5kJTIwZWNvbW1lcnNlfGVufDB8fDB8fHww"
    },
    {
        "title": "Kurta, Sarees & more",
        "price": 199.99,
        "description": "Feature-packed smartwatch with heart rate monitor and GPS tracking.",
        "image": "https://example.com/images/smartwatch.jpg",
        "background": "https://plus.unsplash.com/premium_vector-1726307568355-6169bca02c7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2ltcGxlJTIwc2hvcHBpbmclMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
    },
    {
        "title": "Shoe's, Scandels & more",
        "price": 1299.99,
        "description": "Powerful gaming laptop with a 16-inch display and advanced cooling system.",
        "image": "https://example.com/images/laptop.jpg",
        "background": "https://plus.unsplash.com/premium_vector-1727288152825-7aae06f200f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZSUyMHNob3BwaW5nfGVufDB8fDB8fHww"
    }
];

const SpecialDis3Banner = () => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-4 my-4 bg-white">
      <div className="flex justify-between gap-3">
        {
          products.map((val, index) => (
            <div 
              key={index} 
              className="w-[35rem] h-[15rem] p-3 rounded-md flex justify-center items-center bg-cover bg-center"
              style={{
                backgroundImage: `url('${val.background}')`
              }}
            >
              <div className="w-[60%] backdrop-blur-[3px]">
                <h1 className="text-xl font-bold">{val.title}</h1>
                <h1 className="font-semibold">₹{val.price}</h1>
                <p className="">{val.description}</p>
              </div>
              <div className="w-[40%] border-1 h-[70%]">
                <img src={val.image} alt="Product" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default SpecialDis3Banner;
