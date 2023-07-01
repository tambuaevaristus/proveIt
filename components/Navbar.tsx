import React, { useState } from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import DisplayComponent from "./DisplayComponent";
import Button from "./Button";
export default function Navbar({ setIsNavOpen }: any) {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Not started = 0
  // started = 1
  // stopped = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10)as any);
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();

  return (
    <div>

      <header className="z-10 py-4 w-full bg-[#E5EFFC] fixed top-0 shadow-md">
        <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <div className="main-section">
     <div className="clock-holder">
         
     </div>
    </div>
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            <ImMenu size={20} />
          </button>
          {/* <h1 className="font-bold">ProveIt</h1> */}
          <div className=" flex-1 lg:ml-[70px]">
            <button className="text-white bg-[#1843C8] p-3 ml-20 rounded-md flex gap-3"><> <div className="stopwatch flex">
               <DisplayComponent time={time}/>
               <Button status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div></><BsClockHistory className="my-auto " /></button>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            <li className="relative">
              <button className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple">
                <BiBell />
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full"
                ></span>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

