import React, { useState } from "react"
import { BiBell, BiSearch } from "react-icons/bi"
import { BsClockHistory } from "react-icons/bs"
import { ImMenu } from "react-icons/im"

export default function Navbar({ setIsNavOpen }: any) {
  const [seconds, setSeconds] = useState(0)

  const startTimer = () => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000)

    return interval
  }

  const stopTimer = (interval: any) => {
    clearInterval(interval)
  }

  return (
    <div>
      <header className="z-10 py-4 w-full bg-[#E5EFFC] fixed top-0 shadow-md">
        <div className="container flex items-center justify-between h-full px-6 mx-auto">
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
            onClick={() => setIsNavOpen((prev: boolean) => !prev)}
          >
            <ImMenu size={20} />
          </button>
          <div className="ml-[300px]">
            <p>Seconds: {seconds}</p>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
          </div>
          <h1 className="font-bold">ProveIt</h1>
          <div className=" flex-1 lg:ml-[70px]">
            <button className="text-white bg-[#1843C8] p-3 ml-20 rounded-md flex gap-2">
              <>Start Timer </>
              <BsClockHistory className="my-auto " />
            </button>
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
  )
}
