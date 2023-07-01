import React from "react";
// import ScreenShots from "@/components/ScreenShots";
import ScreenShotCard from "@/components/ScreenshotCard";

export default function screenShotScreen() {
    return (
        <div>
            <div className="text-6xl my-20 ml-10">Screenshots</div>
            {/* <ScreenShots /> */}
            <ScreenShotCard userName="Tekum Desmond" userTitle="Software Developer" userPicture="./DesmondProfile.jpeg"/>
            <ScreenShotCard userName="Tambua Evaristus" userTitle="Software Developer" userPicture="./Eva.jpeg"/>
            <ScreenShotCard userName="Chu Edwin" userTitle="Software Developer" userPicture="./Edwin.jpeg"/>
            <ScreenShotCard userName="Asonganyi Rouclec" userTitle="Software Developer" userPicture="./Rouclec.jpeg"/>
            <ScreenShotCard userName="Foncham Bernard" userTitle="Graphic Designer" userPicture="./Bernard.jpeg"/>
        </div>
    )
}