import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default function ScreenShots (){
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div>
        <Slider {...settings}>
          <div >
            <img src="/file.jpg" alt="" />
            <h3>Evas Screen</h3>
          </div>
          <div >
            <img src="/file.jpg" alt="" />
            <h3>Evas Screen</h3>
          </div>  <div >
            <img src="/file.jpg" alt="" />
            <h3>Evas Screen</h3>
          </div>  <div >
            <img src="/file.jpg" alt="" />
            <h3>Evas Screen</h3>
          </div>
         
        </Slider>
      </div>
    )
  }

