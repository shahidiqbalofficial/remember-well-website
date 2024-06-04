"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Happycard from "./happycard";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  <div className="slider-container w-11/12 mx-auto flex flex-col md:gap-10">
      <Slider {...settings} className="">
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>
       <div>
       <Happycard />
       </div>

        
      </Slider>
    </div>
  );
}

export default Responsive;
