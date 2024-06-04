"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarasol() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://remember-well.com/cdn/shop/files/main-img_scan-profile_EN.png?v=1712369699&width=800"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0809/1251/5395/files/steps_en.png?v=1712219856"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0809/1251/5395/files/usps_en.png?v=1712219869"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://remember-well.com/cdn/shop/files/Packaging_qr.jpg?v=1712370355&width=800"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default HeroCarasol;
