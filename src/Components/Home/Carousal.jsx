import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselData = [
  { id: 1, image: "/images/banner1.webp" },
  { id: 2, image: "/images/banner2.png" },
  { id: 3, image: "/images/banner3.png" },
  { id: 4, image: "/images/banner4.png" },
];

const Carousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      <Slider {...settings}>
        {carouselData.map((slide) => (
          <div key={slide.id} className="w-full">
            <img src={slide.image} alt="Banner" className="w-full h-[300px] object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default Carousal;
