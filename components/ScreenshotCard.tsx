import React from "react";
import Slider from "react-slick";
import ScreenShotImageCard from "./ScreenshotImageCard";
import SimpleSlider from "./Slider";

type props = {
  userName: string;
  userTitle: string;
  userPicture: string;
};

export default function screenShotCard({
  userName,
  userTitle,
  userPicture,
}: props) {

  return (
    <div className="screenshot-card mr-32 ml-12 my-20">
      <div className="flex items-center gap-8 text-left mb-10">
        <img src={userPicture} alt="#" className="rounded-full w-[7%] h-1/4" />
        <div>
          <h1 className="text-blue-900 my-1 uppercase text-3xl font-bold">
            {userName}
          </h1>
          <h5 className="text-blue-900 my-1 text-xl font-light">{userTitle}</h5>
        </div>
      </div>

      <div className="my-3 py-16 bg-white shadow-2xl w-full rounded-xl px-12">
        <SimpleSlider />
      </div>
    </div>
  );
}
