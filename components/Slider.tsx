import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScreenShotImageCard from "./ScreenshotImageCard";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <ScreenShotImageCard
        date="Monday"
        timeStamp="08:05AM"
        screenshotPicture="./Screenshot1.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="08:13AM"
        screenshotPicture="./Screenshot2.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="08:20AM"
        screenshotPicture="./Screenshot3.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="09:10AM"
        screenshotPicture="./Screenshot4.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="09:30AM"
        screenshotPicture="./Screenshot5.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="10:45AM"
        screenshotPicture="./Screenshot6.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="11:05AM"
        screenshotPicture="./Screenshot7.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="11:15AM"
        screenshotPicture="./Screenshot8.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="11:37AM"
        screenshotPicture="./Screenshot9.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="12:03PM"
        screenshotPicture="./Screenshot10.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="12:17AM"
        screenshotPicture="./Screenshot11.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="12:49PM"
        screenshotPicture="./Screenshot12.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="13:01PM"
        screenshotPicture="./Screenshot13.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="13:45PM"
        screenshotPicture="./Screenshot14.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="14:09PM"
        screenshotPicture="./Screenshot15.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="14:25PM"
        screenshotPicture="./Screenshot16.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="14:53PM"
        screenshotPicture="./Screenshot17.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="15:36PM"
        screenshotPicture="./Screenshot18.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="16:25PM"
        screenshotPicture="./Screenshot19.png"
      />
      <ScreenShotImageCard
        date="Monday"
        timeStamp="16:59PM"
        screenshotPicture="./Screenshot20.png"
      />
    </Slider>
  );
}
