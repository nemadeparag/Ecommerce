import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import BestdealsSmartphones from "../Home/BestdealsSmartphones";

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
          throw new Error("Failed to fetch product details");
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
      setAtBottom(
        container.scrollTop + container.clientHeight >= container.scrollHeight
      );
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
    return (
      <p className="text-center text-gray-500">Loading product details...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <div className="productDescription h-screen overflow-y-scroll scrollbar-none">
    <div className=" max-w-[95%] mt-5 flex relative  m-auto p-5 bg-white ">
      <div className="imageContainer flex w-[40%] h-[30rem]  sticky top-0">
        <div className="sideImages w-[15%] relative">
          <div
            ref={sideImagesRef}
            className="h-full overflow-hidden"
            onScroll={handleScroll}
            style={{ scrollBehavior: "smooth" }} // Smooth scrolling effect
          >
            {product.images.map((image, index) => (
              <img
                key={index}
                className="object-contain rounded-md border border-gray-400  mb-1 w-full h-[7rem] p-2"
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
        <div className="mainImage w-[85%] relative">
          <img
            className="object-contain w-full h-full p-2"
            src={product.images[0]}
            alt="Product"
          />
        </div>
      </div>

      <div className="w-[60%] flex flex-col gap-5  ">
        <div className="infoContainer ">
          <div className="firstInfo">
            <h1 className="text-xl mb-3">{product.title}</h1>
            <h1 className="font-semibold text-sm text-white border w-fit px-2 py-0.5 rounded bg-emerald-600 mb-3">
              {product.rating} ★
            </h1>
            <div className="priceInfo mb-3">
              <div>
                <h1 className="font-semibold text-emerald-700 text-sm">
                  Extra ₹{product.price - product.discountedprice} off
                </h1>
              </div>
              <div className="price flex  gap-2 items-baseline">
                <h1 className="text-2xl font-semibold">
                  ₹{product.discountedprice}
                </h1>
                <h2 className="line-through text-md text-gray-500">
                  ₹{product.price}
                </h2>
                <h2 className="font-semibold text-emerald-700">
                  {product.discount}% off
                </h2>
              </div>
            </div>
            <div className="availableOffers mb-3">
              <div>
                <h1 className="text-lg font-semibold">Available offers</h1>
                <div>
                  {product.availableoffers.map((product) => (
                    <div className="flex gap-2 items-center">
                      <img
                        width="15"
                        height="15"
                        src="https://img.icons8.com/fluency-systems-filled/96/12B886/price-tag.png"
                        alt="price-tag"
                        className="-rotate-90"
                      />
                      <h1 className="font-semibold">
                        {product.name}
                        <span className="font-normal">
                          {" "}
                          {product.description}
                        </span>
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="productDescription">
          <table className="">
            <tbody className="space-y-4">
              <tr className="">
                <td className="px-4 py-2 align-top">Colors</td>
                <td className="px-4 py-2 ">
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <div
                        key={color} // Unique key for each color
                        className="flex justify-center items-center rounded w-8 h-8 border border-zinc-300 transition-all duration-300 hover:border-transparent hover:scale-90"
                      >
                        <div
                          className="w-6 h-6 rounded transition-all duration-300 hover:w-full hover:h-full"
                          style={{ backgroundColor: color }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 align-top">Delivery</td>
                <td className="px-4 py-2 ">
                  <div className="">
                    <input
                      type="number"
                      placeholder="Enter Delivery Pincode"
                      className="font-semibold text-sm p-1 text-zinc-600 border border-gray-300 rounded"
                    />
                    <button
                      type="submit"
                      className="text-blue-500 font-semibold text-sm ml-2"
                    >
                      Check
                    </button>
                    <div className="w-[15rem] border border-blue-500 my-2"></div>
                    <p className=" text-gray-700 font-medium">
                      {product.deliverydate}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 align-top">Highlights</td>
                <td className="px-4 py-2 ">
                  <div>
                    <p className="">{product.highlights}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 align-top">Seller</td>
                <td className="px-4 py-2 ">
                  <div>
                    <p className="">{product.seller}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 align-top">Description</td>
                <td className="px-4 py-2 ">
                  <div>{product.shortdescription}</div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" mt-4">
           
            <div className="space-y-3 border border-gray-200 p-4">
            <h3 className="text-lg font-normal pb-4">Display Features</h3>
              {[
                {
                  label: "In The Box",
                  value: product.specification[0]?.inthebox,
                },
                {
                  label: "Model Number",
                  value: product.specification[0]?.modelnumber,
                },
                {
                  label: "Model Name",
                  value: product.specification[0]?.modelname,
                },
                {
                  label: "Color",
                  value: product.specification[0]?.color,
                },
                {
                  label: "Phone Type",
                  value: product.specification[0]?.phonetype,
                },
                {
                  label: "Touchscreen",
                  value: product.specification[0]?.touchscreen,
                },
                {
                  label: "Quick Charging",
                  value: product.specification[0]?.quickcharging,
                },
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2 ">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
            <h3 className="text-lg font-normal pb-4">General</h3>
              {[
                {
                  label: "Display Size",
                  value: product.specification[1]?.displaysize,
                },
                {
                  label: "Dispaly Resolution",
                  value: product.specification[1]?.displayresolution,
                },
                
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2 ">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>  

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Os & Processor Features</h3>
              {[
                {
                  label: "Operating System",
                  value: product.specification[2]?.os,
                },
                {
                  label: "Processor Brand",
                  value: product.specification[2]?.processorbrand,
                },
                {
                  label: "Processor Type",
                  value: product.specification[2]?.processorname,
                },
                {
                  label: "Processor Core",
                  value: product.specification[2]?.processorcore,
                },
                {
                  label: "Clockspeed",
                  value: product.specification[2]?.clockspeed,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Memory & Storage Features</h3>
              {[
                {
                  label: "Internal Storage",
                  value: product.specification[3]?.internalstorage,
                },
                {
                  label: "Ram",
                  value: product.specification[3]?.ram,
                },
                {
                  label: "External Storage",
                  value: product.specification[3]?.expandablestorage,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Camera Features</h3>
              {[
                {
                  label: "Primary Camera",
                  value: product.specification[4]?.primarycamera,
                },
                {
                  label: "Secondary Camera",
                  value: product.specification[4]?.secondarycamera,
                },
                {
                  label: "Flash",
                  value: product.specification[4]?.flash,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Connectivity Feactures</h3>
              {[
                {
                  label: "Network Type",
                  value: product.specification[5]?.networktype,
                },
                {
                  label: "Bluetooth",
                  value: product.specification[5]?.bluetooth,
                },
                {
                  label: "Wifi",
                  value: product.specification[5]?.wifi,
                },
                {
                  label: "Micro USB",
                  value: product.specification[5]?.microusb
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Battery & Power Features</h3>
              {[
                {
                  label: "Battery Capacity",
                  value: product.specification[6]?.batterycapacity,
                },
                {
                  label: "Battery Type",
                  value: product.specification[6]?.batterytype,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Dimensions</h3>
              {[
                {
                  label: "Height",
                  value: product.specification[7]?.height,
                },
                {
                  label: "Width",
                  value: product.specification[7]?.width,
                },
                {
                  label: "Weight",
                  value: product.specification[7]?.weight,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 border border-gray-200 p-4">
              <h3 className="text-lg font-normal pb-4">Warranty</h3>
              {[
                {
                  label: "Warranty Summary",
                  value: product.specification[8]?.warrantysummary,
                },
                {
                  label: "Domestic Warranty",
                  value: product.specification[8]?.warrantyduration,
                }
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-[1fr_3fr] gap-2">
                  <h1 className="font-normal text-gray-500">{item.label}</h1>
                  <div>{item.value || "No data available"}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
    
    <BestdealsSmartphones/>
    <BestdealsSmartphones/>

    </div>
  );
};

export default ProductDescription;
