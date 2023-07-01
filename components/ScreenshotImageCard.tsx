import React from "react";

type props = {
  date: string;
  timeStamp: string;
  screenshotPicture: string;
};

export default function screenShotImageCard ({ date, timeStamp, screenshotPicture }: props) {
    return (
        <div className="image-card mx-3">
            <img src={screenshotPicture} alt="#" className="rounded-xl w-full h-[150px] pb-5" />
            <h2 className="font-semibold text-base">{date}</h2>
            <h5>{timeStamp}</h5>
        </div>
    )
}