import React, { useState } from "react";
import { BiHelpCircle, BiHome, BiLogOut, BiUser } from "react-icons/bi";

import { BsCreditCard2Front } from "react-icons/bs";
import Navbar from "./Navbar";
import Link from "next/link";
import userSlice from "@/slice/userSlice";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";

export default function Sidebar({ isNavOpen }: any) {
  const userInfo = useSelector((state: RootState) => state.user);
  console.log(userInfo);
  return (
    <div>
      <div className={isNavOpen ? "block lg:block" : "lg:block hidden"}>
        <div className="fixed left-0 top-0 z-30 p-5 h-screen overflow-y-auto bg-[#E5EFFC] md:block">
          <div className="pb-4 text-gray-500 ">
            <div>
              <img src="/prove it logo.png" className="w-40" alt="" />
            </div>
            <ul className="mt-10">
              <li className="relative px-6 py-3">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-[#1843c8] rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold text-[#1843C8] transition-colors duration-150 hover:text-[#1843C8] "
                  href="/"
                >
                  <BiHome size={20} />

                  <span className="ml-4 text-[15px]">Dashboard</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="/screens"
                >
                  <FaCamera size={20} />
                  <span className="ml-4 text-[15px]">Screenshots</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="chart"
                >
                  <Link
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                    href="/members"
                  >
                    <BsCreditCard2Front size={20} />
                    <span className="ml-4 text-[15px]">Members</span>
                  </Link>
                </a>
              </li>
              <li className="relative px-6 py-3">
                
                <Link
                 className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                 href="/teams"
               >
                 <BsCreditCard2Front size={20} />
                 <span className="ml-4">Teams</span>
               </Link>
              
             </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="chart"
                >
                  <Link
                    className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                    href="/members"
                  >
                    <BsCreditCard2Front size={20} />
                    <span className="ml-4 text-[15px]">Teams</span>
                  </Link>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="/projects"
                >
                  <BsCreditCard2Front size={20} />
                  <span className="ml-4 text-[15px]">Projects</span>
                </Link>
              </li>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="/profile"
                >
                  <BiHelpCircle size={20} />
                  <span className="ml-4 text-[15px]">Profile</span>
                </a>
              </li>{" "}
              <li className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-[#1843C8]"
                  href="signin"
                >
                  <BiLogOut size={20} />
                  <span className="ml-4 text-[15px]">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
